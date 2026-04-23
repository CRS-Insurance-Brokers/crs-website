"use client";

import { useRouter } from "next/navigation";
import { Body } from "@/components/ui/Body";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { deriveOutcome, type WorkerSeverity } from "@/lib/decision-tree";
import { stepHref } from "@/lib/steps";
import { useDraft } from "@/lib/use-draft";

export function InjuryWorkerSeverity() {
  const router = useRouter();
  const { draft, updateAnswers, setOutcomeKey } = useDraft();

  const pick = (workerSeverity: WorkerSeverity) => {
    updateAnswers({ workerSeverity });
    const nextAnswers = {
      ...draft.answers,
      incidentType: "injury" as const,
      who: "worker" as const,
      workerSeverity,
    };
    setOutcomeKey(deriveOutcome(nextAnswers));
    router.push(stepHref("outcome"));
  };

  return (
    <div>
      <Heading>How serious is the injury?</Heading>
      <Body muted>Pick the most serious that applies.</Body>
      <div className="h-4" />
      <div className="flex flex-col gap-[10px]">
        <Button variant="danger" onClick={() => pick("fatal")}>
          Fatal
        </Button>
        <Button variant="secondary" onClick={() => pick("specified")}>
          A &ldquo;specified injury&rdquo; &mdash; fracture (excluding fingers,
          thumbs, toes), amputation, permanent loss of sight, crush injury to
          head or torso, serious burn (&gt;10% of body or damaging eyes /
          respiratory system / vital organs), scalping, loss of consciousness
          from head injury or asphyxia, or work in enclosed space leading to
          hypothermia, heat-induced illness, resuscitation, or 24+ hours in
          hospital
        </Button>
        <Button variant="secondary" onClick={() => pick("over-7-day")}>
          Not in the list above, but they&rsquo;ve been unable to do their
          normal work for more than seven consecutive days (not counting the
          day of the accident)
        </Button>
        <Button variant="secondary" onClick={() => pick("3-to-7-day")}>
          They were off / on light duties for between three and seven days
        </Button>
        <Button variant="secondary" onClick={() => pick("minor")}>
          Minor &mdash; first aid only, back to normal duties same day or next
          day
        </Button>
      </div>
    </div>
  );
}
