"use client";

import { useRouter } from "next/navigation";
import { Body } from "@/components/ui/Body";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { Heading } from "@/components/ui/Heading";
import { DISEASE_ITEMS, deriveOutcome } from "@/lib/decision-tree";
import { useDraft } from "@/lib/use-draft";

export function DiseaseCheck() {
  const router = useRouter();
  const { draft, updateAnswers, setOutcomeKey } = useDraft();
  const checks = draft.answers.diseaseChecks ?? [];

  const toggle = (index: number, next: boolean) => {
    const set = new Set(checks);
    if (next) set.add(index);
    else set.delete(index);
    updateAnswers({ diseaseChecks: [...set].sort((a, b) => a - b) });
  };

  const onContinue = () => {
    const nextAnswers = {
      ...draft.answers,
      incidentType: "disease" as const,
      diseaseChecks: draft.answers.diseaseChecks ?? [],
    };
    setOutcomeKey(deriveOutcome(nextAnswers));
    router.push("/?step=outcome");
  };

  return (
    <div>
      <Heading>Has a doctor diagnosed any of these?</Heading>
      <Body muted>
        A RIDDOR disease report requires a written diagnosis from a doctor,
        linking the condition to the worker&rsquo;s occupational exposure.
      </Body>
      <div className="h-3" />
      <fieldset className="border-0 p-0 m-0">
        <legend className="sr-only">Occupational diseases</legend>
        {DISEASE_ITEMS.map((item, index) => (
          <Checkbox
            key={index}
            checked={checks.includes(index)}
            onCheckedChange={(next) => toggle(index, next)}
            name="disease"
            value={String(index)}
          >
            {item}
          </Checkbox>
        ))}
      </fieldset>
      <div className="h-[14px]" />
      <Button onClick={onContinue}>Continue</Button>
    </div>
  );
}
