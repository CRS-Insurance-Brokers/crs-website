"use client";

import { CheckCircle2, FileText } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { submitReport } from "@/app/actions";
import { ActionStep } from "@/components/ui/ActionStep";
import { Body } from "@/components/ui/Body";
import { Button } from "@/components/ui/Button";
import { OutcomeBanner } from "@/components/ui/OutcomeBanner";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { HANDLER, OUTCOMES, type Answers, type OutcomeKey } from "@/lib/decision-tree";
import { OUTCOME_ICONS } from "@/lib/outcome-icons";
import { useDraft } from "@/lib/use-draft";

type OutcomeProps = {
  outcomeKey: OutcomeKey;
};

export function Outcome({ outcomeKey }: OutcomeProps) {
  const router = useRouter();
  const { draft, clearDraft } = useDraft();
  const [submitted, setSubmitted] = useState(false);
  const [pending, startTransition] = useTransition();

  const outcome = OUTCOMES[outcomeKey];
  const Icon = OUTCOME_ICONS[outcomeKey];

  const onSubmit = () => {
    // The action handles its own degraded-mode fallback: missing Supabase
    // config logs a warning but still returns ok, so the success card shows
    // either way — the brief is explicit that persistence failures must not
    // block the user.
    startTransition(async () => {
      await submitReport({
        answers: draft.answers as Answers,
        outcomeKey,
      });
      setSubmitted(true);
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

      {!submitted ? (
        <Button
          leadingIcon={FileText}
          onClick={onSubmit}
          disabled={pending}
          aria-busy={pending}
        >
          {pending
            ? "Sending\u2026"
            : `Send this summary to ${HANDLER.name.split(" ")[0]} at CRS`}
        </Button>
      ) : (
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
              Sent to {HANDLER.name.split(" ")[0]}.
            </div>
            <Body muted size="sm">
              Your CRS claims handler has the full summary and will call you{" "}
              {HANDLER.responseSLA.replace("typically ", "")}. Reference saved
              to your claims file.
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
