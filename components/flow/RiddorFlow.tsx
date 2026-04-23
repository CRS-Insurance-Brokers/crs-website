"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { FooterMark } from "@/components/FooterMark";
import { TopBar } from "@/components/TopBar";
import { STEP_TITLES, isStepId, type StepId } from "@/lib/steps";
import { useDraft } from "@/lib/use-draft";
import { DangerousCheck } from "./DangerousCheck";
import { DiseaseCheck } from "./DiseaseCheck";
import { IncidentType } from "./IncidentType";
import { InjuryPublicSeverity } from "./InjuryPublicSeverity";
import { InjuryWho } from "./InjuryWho";
import { InjuryWorkerSeverity } from "./InjuryWorkerSeverity";
import { Outcome } from "./Outcome";
import { Welcome } from "./Welcome";

/**
 * Reads ?step= from the URL, renders the matching screen, and coordinates
 * the TopBar panels. The draft store is read here only to gate the outcome
 * screen; individual screens read/write it themselves.
 */
export function RiddorFlow() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { draft } = useDraft();

  const rawStep = searchParams.get("step");
  const step: StepId = isStepId(rawStep) ? rawStep : "welcome";

  // Page title updates for SRs and history.
  useEffect(() => {
    document.title = STEP_TITLES[step];
  }, [step]);

  // Guard: outcome screen requires an outcomeKey; otherwise rewind.
  useEffect(() => {
    if (step === "outcome" && draft.outcomeKey === null) {
      router.replace("/");
    }
  }, [step, draft.outcomeKey, router]);

  return (
    <>
      <TopBar currentStep={step} logEntries={[]} />
      <main className="mx-auto max-w-[560px] px-5 pt-8 pb-[100px]">
        <div aria-live="polite" aria-atomic="false" key={step}>
          {renderStep(step, draft.outcomeKey)}
        </div>
      </main>
      <FooterMark />
    </>
  );
}

function renderStep(step: StepId, outcomeKey: ReturnType<typeof useDraft>["draft"]["outcomeKey"]) {
  switch (step) {
    case "welcome":
      return <Welcome />;
    case "incident-type":
      return <IncidentType />;
    case "injury-who":
      return <InjuryWho />;
    case "injury-worker-severity":
      return <InjuryWorkerSeverity />;
    case "injury-public-severity":
      return <InjuryPublicSeverity />;
    case "dangerous-check":
      return <DangerousCheck />;
    case "disease-check":
      return <DiseaseCheck />;
    case "outcome":
      if (outcomeKey === null) return null;
      return <Outcome outcomeKey={outcomeKey} />;
  }
}
