import "server-only";
import { Resend } from "resend";
import { HANDLER } from "./decision-tree";
import type { FlowLine, FlowSeverity } from "./flows/shared";
import { LINE_LABEL } from "./flows/shared";

export type SubmissionAttachment = {
  filename: string;
  mimeType: string;
  dataBase64: string;
  size: number;
};

export type SubmissionEmailInput = {
  sessionId: string;
  reportId: string | null;
  line: FlowLine;
  outcomeKey: string;
  outcomeVerdict: string;
  severity: FlowSeverity;
  answers: unknown;
  attachments: readonly SubmissionAttachment[];
  submittedAt: Date;
};

export type SubmissionEmailResult =
  | { ok: true; id: string }
  | { ok: false; reason: "no-config" | "send-failed"; detail?: string };

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function toneFor(severity: FlowSeverity): string {
  return severity === "danger"
    ? "#8B1F1F"
    : severity === "amber"
      ? "#B8691C"
      : "#2D5016";
}

function listAnswers(answers: unknown): string[] {
  if (typeof answers !== "object" || answers === null) return [];
  const lines: string[] = [];
  for (const [key, value] of Object.entries(answers as Record<string, unknown>)) {
    if (value === null || value === undefined) continue;
    if (Array.isArray(value)) {
      if (value.length === 0) continue;
      lines.push(`${friendlyKey(key)}: ${value.join(", ")}`);
    } else if (typeof value === "object") {
      lines.push(`${friendlyKey(key)}: ${JSON.stringify(value)}`);
    } else {
      lines.push(`${friendlyKey(key)}: ${String(value)}`);
    }
  }
  return lines;
}

function friendlyKey(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/[-_]+/g, " ")
    .replace(/^./, (c) => c.toUpperCase());
}

function renderText(input: SubmissionEmailInput): string {
  const parts: string[] = [];
  parts.push(`Outcome: ${input.outcomeVerdict}`);
  parts.push(`Line: ${LINE_LABEL[input.line]}`);
  parts.push(`Severity: ${input.severity}`);
  parts.push("");
  parts.push("What the user told us:");
  const answerLines = listAnswers(input.answers);
  if (answerLines.length === 0) {
    parts.push("(no structured answers captured)");
  } else {
    parts.push(...answerLines.map((line) => `  - ${line}`));
  }
  if (input.attachments.length > 0) {
    parts.push("");
    parts.push(
      `Photos attached: ${input.attachments.length} (${input.attachments
        .map((a) => `${a.filename} · ${Math.round(a.size / 1024)}KB`)
        .join("; ")})`,
    );
  }
  parts.push("");
  parts.push("Reference:");
  parts.push(`  Session: ${input.sessionId}`);
  parts.push(`  Report:  ${input.reportId ?? "(not persisted)"}`);
  parts.push(`  Time:    ${input.submittedAt.toISOString()}`);
  parts.push("");
  parts.push("—");
  parts.push(`CRS RIDDOR Helper · concept build · PMBRTN × CRS · v0.2`);
  parts.push(
    `This is a discussion piece. The real handler is ${HANDLER.name}, ${HANDLER.phone}.`,
  );
  return parts.join("\n");
}

function renderHtml(input: SubmissionEmailInput): string {
  const tone = toneFor(input.severity);
  const answerLines = listAnswers(input.answers)
    .map(
      (line) =>
        `<li style="margin: 0 0 6px; font-family: -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 14px; color: #1A1F1A;">${escapeHtml(line)}</li>`,
    )
    .join("");
  const attachRow =
    input.attachments.length > 0
      ? `<div style="font-size:12px;color:#6A6D66;margin-top:12px;"><strong>${input.attachments.length} photo${input.attachments.length === 1 ? "" : "s"}</strong> attached to this email.</div>`
      : "";
  return `<!doctype html>
<html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:24px;background:#F3EEE1;font-family:-apple-system,'Segoe UI',Helvetica,Arial,sans-serif;color:#1A1F1A;">
<div style="max-width:560px;margin:0 auto;background:#FFFFFF;border:1px solid #E4DDC8;padding:24px;">
  <div style="font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#6A6D66;margin-bottom:8px;">${escapeHtml(LINE_LABEL[input.line])} · concept demo</div>
  <h1 style="font-family:Georgia,serif;font-weight:400;font-size:24px;color:${tone};margin:0 0 14px;letter-spacing:-0.01em;">${escapeHtml(input.outcomeVerdict)}</h1>
  <div style="font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#6A6D66;margin-bottom:8px;">What the user told us</div>
  <ul style="margin:0 0 12px 18px;padding:0;">${answerLines || '<li style="color:#6A6D66;font-size:13px;">(no structured answers)</li>'}</ul>
  ${attachRow}
  <div style="border-top:1px solid #E4DDC8;margin-top:18px;padding-top:14px;font-size:12px;color:#6A6D66;">
    <div>Session: ${escapeHtml(input.sessionId)}</div>
    <div>Report: ${escapeHtml(input.reportId ?? "(not persisted)")}</div>
    <div>Time: ${escapeHtml(input.submittedAt.toISOString())}</div>
  </div>
</div>
<div style="max-width:560px;margin:12px auto 0;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#6A6D66;text-align:center;">Concept build · PMBRTN × CRS · v0.2</div>
</body></html>`;
}

/** Total bytes across attachments, approximated from base64 length. */
function attachmentsSize(
  attachments: readonly SubmissionAttachment[],
): number {
  return attachments.reduce((sum, a) => sum + (a.size || a.dataBase64.length * 0.75), 0);
}

const MAX_TOTAL_ATTACHMENT_BYTES = 25 * 1024 * 1024;

export async function sendSubmissionEmail(
  input: SubmissionEmailInput,
): Promise<SubmissionEmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.MAIL_FROM;
  const to = process.env.HANDLER_EMAIL;
  if (!apiKey || !from || !to) {
    return { ok: false, reason: "no-config" };
  }

  const subject = `[Concept demo] ${LINE_LABEL[input.line]} — ${input.outcomeVerdict}`;
  const totalAttach = attachmentsSize(input.attachments);
  const includeAttachments =
    input.attachments.length > 0 && totalAttach < MAX_TOTAL_ATTACHMENT_BYTES;

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      text: renderText(input),
      html: renderHtml(input),
      attachments: includeAttachments
        ? input.attachments.map((a) => ({
            filename: a.filename,
            content: a.dataBase64,
          }))
        : undefined,
    });
    if (error || !data) {
      return {
        ok: false,
        reason: "send-failed",
        detail: error?.message ?? "unknown Resend error",
      };
    }
    return { ok: true, id: data.id };
  } catch (err) {
    return {
      ok: false,
      reason: "send-failed",
      detail: err instanceof Error ? err.message : String(err),
    };
  }
}
