"use client";

import { CheckCircle2, Clock4, FileText, type LucideIcon } from "lucide-react";
import { useState, useTransition } from "react";
import { ActionStep } from "@/components/ui/ActionStep";
import { Body } from "@/components/ui/Body";
import { Button } from "@/components/ui/Button";
import { OutcomeBanner } from "@/components/ui/OutcomeBanner";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { HANDLER } from "@/lib/decision-tree";
import type { FlowOutcome } from "@/lib/flows/shared";

type OutcomeViewProps = {
  readonly outcome: FlowOutcome;
  readonly icon: LucideIcon;
  /** Called when the user taps "Send to Sarah". Must not throw. */
  readonly onSubmit: () => Promise<"sent" | "queued">;
  /** Called when the user taps "Start another" — usually navigate home. */
  readonly onReset: () => void;
  readonly resetLabel?: string;
};

/**
 * Generic outcome screen shared by every FNOL flow. Handles the three
 * terminal states — idle, sent, queued-offline — without caring what kind
 * of report triggered it.
 */
export function OutcomeView({
  outcome,
  icon,
  onSubmit,
  onReset,
  resetLabel = "Start another incident report",
}: OutcomeViewProps) {
  const [state, setState] = useState<"idle" | "sent" | "queued">("idle");
  const [pending, startTransition] = useTransition();

  const firstName = HANDLER.name.split(" ")[0] ?? HANDLER.name;

  const submit = () => {
    startTransition(async () => {
      try {
        const result = await onSubmit();
        setState(result);
      } catch {
        setState("sent");
      }
    });
  };

  return (
    <div>
      <OutcomeBanner
        severity={outcome.severity}
        icon={icon}
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
          onClick={submit}
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
              {HANDLER.name} has the full summary and will call you{" "}
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
        {resetLabel}
      </Button>
    </div>
  );
}
