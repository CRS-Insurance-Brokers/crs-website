"use client";

import { useRouter } from "next/navigation";
import { Body } from "@/components/ui/Body";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { Heading } from "@/components/ui/Heading";
import { DANGEROUS_ITEMS, deriveOutcome } from "@/lib/decision-tree";
import { useDraft } from "@/lib/use-draft";

export function DangerousCheck() {
  const router = useRouter();
  const { draft, updateAnswers, setOutcomeKey } = useDraft();
  const checks = draft.answers.dangerousChecks ?? [];

  const toggle = (index: number, next: boolean) => {
    const set = new Set(checks);
    if (next) set.add(index);
    else set.delete(index);
    updateAnswers({ dangerousChecks: [...set].sort((a, b) => a - b) });
  };

  const onContinue = () => {
    const nextAnswers = {
      ...draft.answers,
      incidentType: "dangerous" as const,
      dangerousChecks: draft.answers.dangerousChecks ?? [],
    };
    setOutcomeKey(deriveOutcome(nextAnswers));
    router.push("/?step=outcome");
  };

  return (
    <div>
      <Heading>Did any of these happen?</Heading>
      <Body muted>
        Tick all that apply. These are the RIDDOR-listed dangerous occurrences
        most relevant to construction and demolition.
      </Body>
      <div className="h-3" />
      <fieldset className="border-0 p-0 m-0">
        <legend className="sr-only">Dangerous occurrences</legend>
        {DANGEROUS_ITEMS.map((item, index) => (
          <Checkbox
            key={index}
            checked={checks.includes(index)}
            onCheckedChange={(next) => toggle(index, next)}
            name="dangerous"
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
