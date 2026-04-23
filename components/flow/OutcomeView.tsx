"use client";

import { CheckCircle2, Clock4, FileText, type LucideIcon } from "lucide-react";
import { useState, useTransition } from "react";
import { submitIncident } from "@/app/actions";
import { ActionStep } from "@/components/ui/ActionStep";
import { Body } from "@/components/ui/Body";
import { Button } from "@/components/ui/Button";
import { OutcomeBanner } from "@/components/ui/OutcomeBanner";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { HANDLER } from "@/lib/decision-tree";
import type { FlowLine, FlowOutcome } from "@/lib/flows/shared";
import { PhotoPicker, type PickedPhoto } from "./PhotoPicker";

type OutcomeViewProps = {
  readonly line: FlowLine;
  readonly outcomeKey: string;
  readonly outcome: FlowOutcome;
  readonly icon: LucideIcon;
  readonly answers: unknown;
  readonly onReset: () => void;
  readonly resetLabel?: string;
};

export function OutcomeView({
  line,
  outcomeKey,
  outcome,
  icon,
  answers,
  onReset,
  resetLabel = "Start another report",
}: OutcomeViewProps) {
  const [state, setState] = useState<"idle" | "sent" | "queued">("idle");
  const [pending, startTransition] = useTransition();
  const [photos, setPhotos] = useState<readonly PickedPhoto[]>([]);

  const firstName = HANDLER.name.split(" ")[0] ?? HANDLER.name;

  const submit = () => {
    startTransition(async () => {
      try {
        const result = await submitIncident({
          line,
          outcomeKey,
          outcomeVerdict: outcome.verdict,
          severity: outcome.severity,
          answers,
          attachments: photos.map(({ filename, mimeType, dataBase64, size }) => ({
            filename,
            mimeType,
            dataBase64,
            size,
          })),
        });
        if (!result.ok) throw new Error(result.error);
        setState("sent");
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

      {state === "idle" ? (
        <>
          <div className="mt-6 bg-surface border border-line rounded-soft p-4">
            <PhotoPicker photos={photos} onChange={setPhotos} />
            <Body muted size="sm" className="mt-2 mb-0">
              Photos go with your summary to {firstName}. On site the camera
              opens directly — you can also pick from your library.
            </Body>
          </div>

          <div className="h-5" />
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
        </>
      ) : state === "sent" ? (
        <div
          role="status"
          className="mt-5 bg-success-soft border border-success p-[18px] rounded-soft flex gap-3 items-start"
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
              {HANDLER.name} has the full summary
              {photos.length > 0
                ? ` and ${photos.length} photo${photos.length === 1 ? "" : "s"}`
                : ""}
              , and will call you {HANDLER.responseSLA.replace("typically ", "")}.
              Reference saved to your claims file.
            </Body>
          </div>
        </div>
      ) : (
        <div
          role="status"
          className="mt-5 bg-amber-soft border border-accent p-[18px] rounded-soft flex gap-3 items-start"
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
