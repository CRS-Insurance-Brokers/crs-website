"use server";

import { after } from "next/server";
import type { LogEntry } from "@/components/panels/LogPanel";
import { OUTCOMES } from "@/lib/decision-tree";
import { sendSubmissionEmail } from "@/lib/email";
import {
  submitIncidentInputSchema,
  submitReportInputSchema,
  type SubmitIncidentInput,
  type SubmitReportInput,
} from "@/lib/schemas";
import {
  getIpHash,
  getOrCreateSessionId,
  getUserAgent,
} from "@/lib/session";
import { getSupabaseAdmin } from "@/lib/supabase/server";

export type SubmitResult =
  | { ok: true; id: string | null; persisted: boolean }
  | { ok: false; error: string };

/**
 * Generic incident submission — used by every FNOL line (RIDDOR, motor,
 * property, public liability). Each line provides its own outcome key,
 * verdict, severity and answers; the table stores them uniformly so the
 * audit log and log panel work across all of them.
 *
 * Persistence and email failures are logged but never surfaced; the
 * brief's never-block-the-user rule applies to both paths.
 */
export async function submitIncident(
  input: SubmitIncidentInput,
): Promise<SubmitResult> {
  const parsed = submitIncidentInputSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "Invalid submission payload" };
  }

  const sessionId = await getOrCreateSessionId();
  const supabase = getSupabaseAdmin();
  const submittedAt = new Date();
  const { line, outcomeKey, outcomeVerdict, severity, answers, attachments } =
    parsed.data;

  const scheduleEmail = (reportId: string | null) => {
    after(async () => {
      const result = await sendSubmissionEmail({
        sessionId,
        reportId,
        line,
        outcomeKey,
        outcomeVerdict,
        severity,
        answers,
        attachments: attachments ?? [],
        submittedAt,
      });
      if (!result.ok && result.reason === "send-failed") {
        console.warn("[submitIncident] email send failed", result.detail);
      }
    });
  };

  if (!supabase) {
    console.info(
      "[submitIncident] no database configured; accepting in no-op mode",
      { sessionId, line, outcomeKey },
    );
    scheduleEmail(null);
    return { ok: true, id: null, persisted: false };
  }

  const [userAgent, ipHash] = await Promise.all([
    getUserAgent(),
    getIpHash(),
  ]);

  const { data, error } = await supabase
    .from("incident_reports")
    .insert({
      session_id: sessionId,
      line,
      outcome_key: outcomeKey,
      outcome_verdict: outcomeVerdict,
      severity,
      answers: answers ?? {},
      dangerous_checks:
        line === "riddor" && isRecord(answers) && Array.isArray(answers.dangerousChecks)
          ? answers.dangerousChecks
          : [],
      disease_checks:
        line === "riddor" && isRecord(answers) && Array.isArray(answers.diseaseChecks)
          ? answers.diseaseChecks
          : [],
      submitted_to_handler: true,
      handler_notified_at: submittedAt.toISOString(),
      attachment_count: attachments?.length ?? 0,
      user_agent: userAgent,
      ip_hash: ipHash,
    })
    .select("id")
    .single();

  if (error || !data) {
    console.error("[submitIncident] insert failed", error);
    scheduleEmail(null);
    return { ok: true, id: null, persisted: false };
  }

  scheduleEmail(data.id as string);
  return { ok: true, id: data.id as string, persisted: true };
}

/**
 * Back-compat wrapper for RIDDOR callers (Outcome.tsx and the offline
 * queue replay). Shapes a RIDDOR answers object into the generic
 * submission body.
 */
export async function submitReport(
  input: SubmitReportInput,
): Promise<SubmitResult> {
  const parsed = submitReportInputSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "Invalid report payload" };
  }
  const outcome = OUTCOMES[parsed.data.outcomeKey];
  return submitIncident({
    line: "riddor",
    outcomeKey: parsed.data.outcomeKey,
    outcomeVerdict: outcome.verdict,
    severity: outcome.severity,
    answers: parsed.data.answers,
  });
}

/**
 * Return the most recent 25 reports for the current session, newest first.
 * Without Supabase configured this returns an empty list rather than
 * throwing — the log panel's empty state handles that gracefully.
 */
export async function fetchLog(): Promise<LogEntry[]> {
  const sessionId = await getOrCreateSessionId();
  const supabase = getSupabaseAdmin();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("incident_reports")
    .select(
      "id, created_at, outcome_verdict, severity, submitted_to_handler, line",
    )
    .eq("session_id", sessionId)
    .order("created_at", { ascending: false })
    .limit(25);

  if (error || !data) {
    console.error("[fetchLog] select failed", error);
    return [];
  }

  return data.map((row) => ({
    id: row.id as string,
    timestamp: row.created_at as string,
    outcome: row.outcome_verdict as string,
    severity: row.severity as LogEntry["severity"],
    submittedToHandler: Boolean(row.submitted_to_handler),
  }));
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
