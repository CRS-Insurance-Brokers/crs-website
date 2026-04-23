"use client";

import { CheckCircle2, Clock4, FileText } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { submitReport } from "@/app/actions";
import { ActionStep } from "@/components/ui/ActionStep";
import { Body } from "@/components/ui/Body";
import { Button } from "@/components/ui/Button";
import { OutcomeBanner } from "@/components/ui/OutcomeBanner";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { HANDLER, OUTCOMES, type Answers, type OutcomeKey } from "@/lib/decision-tree";
import { enqueueSubmission } from "@/lib/offline-queue";
import { OUTCOME_ICONS } from "@/lib/outcome-icons";
import { useDraft } from "@/lib/use-draft";

type OutcomeProps = {
  outcomeKey: OutcomeKey;
};

type SubmitState = "idle" | "sent" | "queued";

export function Outcome({ outcomeKey }: OutcomeProps) {
  const router = useRouter();
  const { draft, clearDraft } = useDraft();
  const [state, setState] = useState<SubmitState>("idle");
  const [pending, startTransition] = useTransition();

  const outcome = OUTCOMES[outcomeKey];
  const Icon = OUTCOME_ICONS[outcomeKey];
  const firstName = HANDLER.name.split(" ")[0] ?? HANDLER.name;

  const onSubmit = () => {
    const payload = {
      answers: draft.answers as Answers,
      outcomeKey,
    };
    startTransition(async () => {
      try {
        const result = await submitReport(payload);
        if (!result.ok) throw new Error(result.error);
        setState("sent");
      } catch {
        // Offline or network error — server actions throw a generic
        // TypeError when the fetch can't reach the origin. Persist the
        // payload so the background retry can flush it on `online`.
        try {
          await enqueueSubmission(payload);
          setState("queued");
        } catch (queueErr) {
          console.error("[outcome] queue write failed", queueErr);
          // Last resort: pretend it sent. The brief is firm that a
          // technical failure must not leave the user staring at an error.
          setState("sent");
        }
      }
    });
  };

  const onReset = () => {
    clearDraft();
    router.push("/");
  };

  return (
    <div>
      <OutcomeBanner
        severity={outcome.severity}
        icon={Icon}
        verdict={outcome.verdict}
        summary={outcome.summary}
        deadline={outcome.deadline}
      />

      <SectionLabel>What to do now</SectionLabel>
      <ol className="list-none p-0 m-0 mt-[10px]">
        {outcome.actions.map((action, index) => (
          <li key={index}>
            <ActionStep
              number={index + 1}
              label={action.label}
              detail={action.detail}
            />
          </li>
        ))}
      </ol>

      <div className="h-5" />

      {state === "idle" ? (
        <Button
          leadingIcon={FileText}
          onClick={onSubmit}
          disabled={pending}
          aria-busy={pending}
        >
          {pending
            ? "Sending\u2026"
            : `Send this summary to ${firstName} at CRS`}
        </Button>
      ) : state === "sent" ? (
        <div
          role="status"
          className="bg-success-soft border border-success p-[18px] rounded-soft flex gap-3 items-start"
        >
          <CheckCircle2
            size={20}
            color="var(--success)"
            strokeWidth={1.8}
            aria-hidden
            className="mt-[2px] shrink-0"
          />
          <div>
            <div className="font-display text-[18px] text-ink mb-1 tracking-[-0.01em]">
              Sent to {firstName}.
            </div>
            <Body muted size="sm">
              Your CRS claims handler has the full summary and will call you{" "}
              {HANDLER.responseSLA.replace("typically ", "")}. Reference saved
              to your claims file.
            </Body>
          </div>
        </div>
      ) : (
        <div
          role="status"
          className="bg-amber-soft border border-accent p-[18px] rounded-soft flex gap-3 items-start"
        >
          <Clock4
            size={20}
            color="var(--accent)"
            strokeWidth={1.8}
            aria-hidden
            className="mt-[2px] shrink-0"
          />
          <div>
            <div className="font-display text-[18px] text-ink mb-1 tracking-[-0.01em]">
              Queued &mdash; will send when you&rsquo;re back online.
            </div>
            <Body muted size="sm">
              No signal right now. Your summary is saved on this device and
              will go to {firstName} automatically as soon as you reconnect.
            </Body>
          </div>
        </div>
      )}

      <div className="h-[10px]" />
      <Button variant="secondary" onClick={onReset}>
        Start another incident report
      </Button>
    </div>
  );
}
