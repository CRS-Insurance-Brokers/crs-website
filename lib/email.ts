import "server-only";
import { Resend } from "resend";
import type { Answers, Outcome, OutcomeKey } from "./decision-tree";
import {
  DANGEROUS_ITEMS,
  DISEASE_ITEMS,
  HANDLER,
  OUTCOMES,
} from "./decision-tree";

export type SubmissionEmailInput = {
  sessionId: string;
  reportId: string | null;
  outcomeKey: OutcomeKey;
  answers: Answers;
  submittedAt: Date;
};

export type SubmissionEmailResult =
  | { ok: true; id: string }
  | { ok: false; reason: "no-config" | "send-failed"; detail?: string };

const INCIDENT_TYPE_LABELS: Record<Answers["incidentType"], string> = {
  injury: "A workplace injury",
  dangerous: "A dangerous occurrence (near miss)",
  disease: "A suspected work-related illness",
  unsure: "Not sure — requested a callback",
};

const WHO_LABELS: Record<NonNullable<Answers["who"]>, string> = {
  worker: "A worker (employee, subcontractor, or self-employed under our control)",
  public: "A member of the public",
};

const WORKER_SEVERITY_LABELS: Record<
  NonNullable<Answers["workerSeverity"]>,
  string
> = {
  fatal: "Fatal",
  specified:
    "A \u201cspecified injury\u201d (fracture, amputation, permanent loss of sight, crush to head/torso, serious burn, scalping, loss of consciousness, enclosed-space incident, 24+ hours in hospital)",
  "over-7-day":
    "Unable to do normal work for more than seven consecutive days",
  "3-to-7-day": "Off / light duties for three to seven days",
  minor: "First aid only, back to normal duties same day or next",
};

const PUBLIC_SEVERITY_LABELS: Record<
  NonNullable<Answers["publicSeverity"]>,
  string
> = {
  fatal: "Fatal",
  hospital: "Taken directly from the scene to hospital for treatment",
  "no-hospital": "No hospital treatment needed",
};

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function listAnswers(answers: Answers): string[] {
  const lines: string[] = [];
  lines.push(`Incident type: ${INCIDENT_TYPE_LABELS[answers.incidentType]}`);
  if (answers.who) {
    lines.push(`Injured person: ${WHO_LABELS[answers.who]}`);
  }
  if (answers.workerSeverity) {
    lines.push(`Severity: ${WORKER_SEVERITY_LABELS[answers.workerSeverity]}`);
  }
  if (answers.publicSeverity) {
    lines.push(`Outcome: ${PUBLIC_SEVERITY_LABELS[answers.publicSeverity]}`);
  }
  if (answers.dangerousChecks?.length) {
    const names = answers.dangerousChecks
      .map((i) => DANGEROUS_ITEMS[i])
      .filter((v): v is string => Boolean(v));
    lines.push(`Dangerous occurrences ticked:\n  - ${names.join("\n  - ")}`);
  }
  if (answers.diseaseChecks?.length) {
    const names = answers.diseaseChecks
      .map((i) => DISEASE_ITEMS[i])
      .filter((v): v is string => Boolean(v));
    lines.push(`Diseases diagnosed:\n  - ${names.join("\n  - ")}`);
  }
  return lines;
}

function renderText(
  input: SubmissionEmailInput,
  outcome: Outcome,
): string {
  const parts: string[] = [];
  parts.push(`Outcome: ${outcome.verdict}`);
  parts.push(`Severity: ${outcome.severity}`);
  parts.push(`Deadline: ${outcome.deadline}`);
  parts.push("");
  parts.push("Summary:");
  parts.push(outcome.summary);
  parts.push("");
  parts.push("What the user told us:");
  parts.push(...listAnswers(input.answers));
  parts.push("");
  parts.push("Action checklist:");
  outcome.actions.forEach((action, index) => {
    parts.push(`${index + 1}. ${action.label}`);
    parts.push(`   ${action.detail}`);
  });
  parts.push("");
  parts.push("Reference:");
  parts.push(`  Session: ${input.sessionId}`);
  parts.push(`  Report:  ${input.reportId ?? "(not persisted)"}`);
  parts.push(`  Time:    ${input.submittedAt.toISOString()}`);
  parts.push("");
  parts.push("—");
  parts.push(`CRS RIDDOR Helper · concept build · PMBRTN × CRS · v0.1`);
  parts.push(`This is a discussion piece. The real handler is ${HANDLER.name}, ${HANDLER.phone}.`);
  return parts.join("\n");
}

function renderHtml(
  input: SubmissionEmailInput,
  outcome: Outcome,
): string {
  const tone = outcome.severity === "danger"
    ? "#8B1F1F"
    : outcome.severity === "amber"
      ? "#B8691C"
      : "#2D5016";
  const actions = outcome.actions
    .map(
      (action, index) => `<li style="margin: 0 0 10px; font-family: -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 14px; color: #1A1F1A;"><strong>${escapeHtml(
        String(index + 1),
      )}. ${escapeHtml(action.label)}</strong><br><span style="color:#6A6D66;">${escapeHtml(
        action.detail,
      )}</span></li>`,
    )
    .join("");

  const answerLines = listAnswers(input.answers)
    .map(
      (line) =>
        `<li style="margin: 0 0 6px; font-family: -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 14px; color: #1A1F1A; white-space: pre-wrap;">${escapeHtml(
          line,
        )}</li>`,
    )
    .join("");

  return `<!doctype html>
<html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:24px;background:#F3EEE1;font-family:-apple-system,'Segoe UI',Helvetica,Arial,sans-serif;color:#1A1F1A;">
<div style="max-width:560px;margin:0 auto;background:#FFFFFF;border:1px solid #E4DDC8;padding:24px;">
  <div style="font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#6A6D66;margin-bottom:8px;">RIDDOR submission · concept demo</div>
  <h1 style="font-family:Georgia,serif;font-weight:400;font-size:24px;color:${tone};margin:0 0 8px;letter-spacing:-0.01em;">${escapeHtml(outcome.verdict)}</h1>
  <div style="color:#6A6D66;font-size:13px;margin-bottom:18px;">Deadline: ${escapeHtml(outcome.deadline)}</div>
  <p style="font-size:15px;line-height:1.55;color:#1A1F1A;margin:0 0 20px;">${escapeHtml(outcome.summary)}</p>
  <div style="font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#6A6D66;margin-bottom:8px;">What the user told us</div>
  <ul style="margin:0 0 20px 18px;padding:0;">${answerLines}</ul>
  <div style="font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#6A6D66;margin-bottom:8px;">Action checklist</div>
  <ol style="margin:0 0 20px 18px;padding:0;">${actions}</ol>
  <div style="border-top:1px solid #E4DDC8;padding-top:14px;font-size:12px;color:#6A6D66;">
    <div>Session: ${escapeHtml(input.sessionId)}</div>
    <div>Report: ${escapeHtml(input.reportId ?? "(not persisted)")}</div>
    <div>Time: ${escapeHtml(input.submittedAt.toISOString())}</div>
  </div>
</div>
<div style="max-width:560px;margin:12px auto 0;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#6A6D66;text-align:center;">Concept build · PMBRTN × CRS · v0.1</div>
</body></html>`;
}

/**
 * Send the submission summary to the CRS handler address. Never throws —
 * returns a structured result so callers can log but continue. Missing
 * config is a normal (dev/preview) state, not an error.
 */
export async function sendSubmissionEmail(
  input: SubmissionEmailInput,
): Promise<SubmissionEmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.MAIL_FROM;
  const to = process.env.HANDLER_EMAIL;

  if (!apiKey || !from || !to) {
    return { ok: false, reason: "no-config" };
  }

  const outcome = OUTCOMES[input.outcomeKey];
  const subject = `[Concept demo] RIDDOR submission — ${outcome.verdict}`;

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      text: renderText(input, outcome),
      html: renderHtml(input, outcome),
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
