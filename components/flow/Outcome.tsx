"use client";

import { CheckCircle2, Clock4, FileText } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { submitIncident } from "@/app/actions";
import { ActionStep } from "@/components/ui/ActionStep";
import { Body } from "@/components/ui/Body";
import { Button } from "@/components/ui/Button";
import { OutcomeBanner } from "@/components/ui/OutcomeBanner";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  HANDLER,
  OUTCOMES,
  type Answers,
  type OutcomeKey,
} from "@/lib/decision-tree";
import { enqueueSubmission } from "@/lib/offline-queue";
import { OUTCOME_ICONS } from "@/lib/outcome-icons";
import { useDraft } from "@/lib/use-draft";
import { PhotoPicker, type PickedPhoto } from "./PhotoPicker";

type OutcomeProps = {
  outcomeKey: OutcomeKey;
};

type SubmitState = "idle" | "sent" | "queued";

export function Outcome({ outcomeKey }: OutcomeProps) {
  const router = useRouter();
  const { draft, clearDraft } = useDraft();
  const [state, setState] = useState<SubmitState>("idle");
  const [pending, startTransition] = useTransition();
  const [photos, setPhotos] = useState<readonly PickedPhoto[]>([]);

  const outcome = OUTCOMES[outcomeKey];
  const Icon = OUTCOME_ICONS[outcomeKey];
  const firstName = HANDLER.name.split(" ")[0] ?? HANDLER.name;

  const onSubmit = () => {
    const answers = draft.answers as Answers;
    startTransition(async () => {
      try {
        const result = await submitIncident({
          line: "riddor",
          outcomeKey,
          outcomeVerdict: outcome.verdict,
          severity: outcome.severity,
          answers,
          attachments: photos.map(
            ({ filename, mimeType, dataBase64, size }) => ({
              filename,
              mimeType,
              dataBase64,
              size,
            }),
          ),
        });
        if (!result.ok) throw new Error(result.error);
        setState("sent");
      } catch {
        // Offline or network error — enqueue the RIDDOR-shaped payload for
        // the service-worker-driven drain. Photos aren't queued in v0.2;
        // if the user is offline, photos stay on-device and they can
        // re-send later. The brief's never-block-the-user rule wins.
        try {
          await enqueueSubmission({ answers, outcomeKey });
          setState("queued");
        } catch (queueErr) {
          console.error("[outcome] queue write failed", queueErr);
          setState("sent");
        }
      }
    });
  };

  const onReset = () => {
    clearDraft();
    router.push("/report/riddor");
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
            onClick={onSubmit}
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
              , and will call you{" "}
              {HANDLER.responseSLA.replace("typically ", "")}. Reference saved
              to your claims file.
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
        Start another incident report
      </Button>
    </div>
  );
}
