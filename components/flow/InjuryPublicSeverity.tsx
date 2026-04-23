"use client";

import { useRouter } from "next/navigation";
import { Body } from "@/components/ui/Body";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { deriveOutcome, type PublicSeverity } from "@/lib/decision-tree";
import { stepHref } from "@/lib/steps";
import { useDraft } from "@/lib/use-draft";

export function InjuryPublicSeverity() {
  const router = useRouter();
  const { draft, updateAnswers, setOutcomeKey } = useDraft();

  const pick = (publicSeverity: PublicSeverity) => {
    updateAnswers({ publicSeverity });
    const nextAnswers = {
      ...draft.answers,
      incidentType: "injury" as const,
      who: "public" as const,
      publicSeverity,
    };
    setOutcomeKey(deriveOutcome(nextAnswers));
    router.push(stepHref("outcome"));
  };

  return (
    <div>
      <Heading>Was the injured person taken to hospital?</Heading>
      <Body muted>
        For members of the public, the test is whether they went from the
        scene to hospital for treatment of an injury arising from the work
        activity.
      </Body>
      <div className="h-4" />
      <div className="flex flex-col gap-[10px]">
        <Button variant="danger" onClick={() => pick("fatal")}>
          Fatal
        </Button>
        <Button variant="secondary" onClick={() => pick("hospital")}>
          Yes &mdash; taken directly to hospital for treatment
        </Button>
        <Button variant="secondary" onClick={() => pick("no-hospital")}>
          No hospital treatment needed
        </Button>
      </div>
    </div>
  );
}
