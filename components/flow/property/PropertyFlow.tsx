"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { OutcomeView } from "@/components/flow/OutcomeView";
import { Body } from "@/components/ui/Body";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  derivePropertyOutcome,
  PROPERTY_OUTCOME_ICONS,
  PROPERTY_OUTCOMES,
  type PropertyAnswers,
  type PropertyCause,
  type PropertySecure,
} from "@/lib/flows/property";
import { ROUTES } from "@/lib/routes";

type Step = "cause" | "secure" | "outcome";

export function PropertyFlow() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("cause");
  const [answers, setAnswers] = useState<PropertyAnswers>({});

  const outcomeKey = useMemo(
    () => (step === "outcome" ? derivePropertyOutcome(answers) : null),
    [step, answers],
  );

  const setCause = (cause: PropertyCause) => {
    setAnswers((prev) => ({ ...prev, cause }));
    setStep("secure");
  };
  const setSecure = (secure: PropertySecure) => {
    setAnswers((prev) => ({ ...prev, secure }));
    setStep("outcome");
  };

  if (step === "outcome" && outcomeKey) {
    return (
      <OutcomeView
        line="property"
        outcomeKey={outcomeKey}
        outcome={PROPERTY_OUTCOMES[outcomeKey]}
        icon={PROPERTY_OUTCOME_ICONS[outcomeKey]}
        answers={answers}
        onReset={() => router.push(ROUTES.home)}
        resetLabel="Back to home"
      />
    );
  }

  if (step === "cause") {
    return (
      <Screen
        label="Property / site damage"
        heading="What kind of damage?"
        body="Pick the closest cause. If more than one applies, pick the most significant; you can add detail when you speak to Sarah."
      >
        <Button variant="danger" onClick={() => setCause("fire")}>
          Fire
        </Button>
        <Button variant="secondary" onClick={() => setCause("flood")}>
          Flood / escape of water
        </Button>
        <Button variant="secondary" onClick={() => setCause("storm")}>
          Storm / wind damage
        </Button>
        <Button variant="secondary" onClick={() => setCause("theft")}>
          Theft
        </Button>
        <Button variant="secondary" onClick={() => setCause("vandalism")}>
          Vandalism
        </Button>
        <Button variant="secondary" onClick={() => setCause("accidental")}>
          Accidental damage
        </Button>
        <Button variant="secondary" onClick={() => setCause("other")}>
          Something else
        </Button>
      </Screen>
    );
  }

  return (
    <Screen
      label="Property / site damage"
      heading="Is the site secure now?"
      body="A secure site means no ongoing risk to people, property or adjacent structures. This determines whether we treat it as an emergency."
    >
      <Button variant="secondary" onClick={() => setSecure("yes")}>
        Yes &mdash; scene stable, no ongoing risk
      </Button>
      <Button variant="secondary" onClick={() => setSecure("partial")}>
        Partly &mdash; contained but not fully resolved
      </Button>
      <Button variant="danger" onClick={() => setSecure("no")}>
        No &mdash; still active or unsafe
      </Button>
    </Screen>
  );
}

function Screen({
  label,
  heading,
  body,
  children,
}: {
  label: string;
  heading: string;
  body: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <SectionLabel>{label}</SectionLabel>
      <Heading>{heading}</Heading>
      <Body muted>{body}</Body>
      <div className="h-4" />
      <div className="flex flex-col gap-[10px]">{children}</div>
    </div>
  );
}
