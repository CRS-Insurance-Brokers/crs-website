"use server";

import { after } from "next/server";
import type { LogEntry } from "@/components/panels/LogPanel";
import type { Answers, OutcomeKey } from "@/lib/decision-tree";
import { OUTCOMES } from "@/lib/decision-tree";
import { sendSubmissionEmail } from "@/lib/email";
import { submitReportInputSchema, type SubmitReportInput } from "@/lib/schemas";
import {
  getIpHash,
  getOrCreateSessionId,
  getUserAgent,
} from "@/lib/session";
import { getSupabaseAdmin } from "@/lib/supabase/server";

export type SubmitResult =
  | { ok: true; id: string | null; persisted: boolean }
  | { ok: false; error: string };

function scheduleEmail(
  sessionId: string,
  reportId: string | null,
  outcomeKey: OutcomeKey,
  answers: Answers,
  submittedAt: Date,
): void {
  after(async () => {
    const result = await sendSubmissionEmail({
      sessionId,
      reportId,
      outcomeKey,
      answers,
      submittedAt,
    });
    if (!result.ok) {
      // `no-config` is expected before Resend keys land; `send-failed` is
      // the one we actually want to see in logs.
      if (result.reason === "send-failed") {
        console.warn("[submitReport] email send failed", result.detail);
      }
    }
  });
}

/**
 * Record a completed incident report and flag it as sent to the CRS
 * handler. Email is scheduled via after() so it doesn't extend the
 * response time — and because the brief is explicit that neither
 * persistence nor email failures may block the user, the return value is
 * always ok with flags describing what actually landed.
 */
export async function submitReport(
  input: SubmitReportInput,
): Promise<SubmitResult> {
  const parsed = submitReportInputSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "Invalid report payload" };
  }

  const sessionId = await getOrCreateSessionId();
  const outcome = OUTCOMES[parsed.data.outcomeKey];
  const supabase = getSupabaseAdmin();
  const submittedAt = new Date();

  if (!supabase) {
    console.info(
      "[submitReport] no database configured; accepting submission in no-op mode",
      { sessionId, outcomeKey: parsed.data.outcomeKey },
    );
    scheduleEmail(
      sessionId,
      null,
      parsed.data.outcomeKey,
      parsed.data.answers as Answers,
      submittedAt,
    );
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
      outcome_key: parsed.data.outcomeKey,
      outcome_verdict: outcome.verdict,
      severity: outcome.severity,
      answers: parsed.data.answers,
      dangerous_checks: parsed.data.answers.dangerousChecks ?? [],
      disease_checks: parsed.data.answers.diseaseChecks ?? [],
      submitted_to_handler: true,
      handler_notified_at: submittedAt.toISOString(),
      user_agent: userAgent,
      ip_hash: ipHash,
    })
    .select("id")
    .single();

  if (error || !data) {
    console.error("[submitReport] insert failed", error);
    scheduleEmail(
      sessionId,
      null,
      parsed.data.outcomeKey,
      parsed.data.answers as Answers,
      submittedAt,
    );
    return { ok: true, id: null, persisted: false };
  }

  scheduleEmail(
    sessionId,
    data.id as string,
    parsed.data.outcomeKey,
    parsed.data.answers as Answers,
    submittedAt,
  );
  return { ok: true, id: data.id as string, persisted: true };
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
    .select("id, created_at, outcome_verdict, severity, submitted_to_handler")
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
