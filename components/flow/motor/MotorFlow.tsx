"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { OutcomeView } from "@/components/flow/OutcomeView";
import { Body } from "@/components/ui/Body";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  deriveMotorOutcome,
  MOTOR_OUTCOME_ICONS,
  MOTOR_OUTCOMES,
  type MotorAnswers,
  type MotorDrivable,
  type MotorDriver,
  type MotorInjury,
} from "@/lib/flows/motor";
import { ROUTES } from "@/lib/routes";

type Step = "driver" | "injury" | "drivable" | "outcome";

export function MotorFlow() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("driver");
  const [answers, setAnswers] = useState<MotorAnswers>({});

  const outcomeKey = useMemo(
    () => (step === "outcome" ? deriveMotorOutcome(answers) : null),
    [step, answers],
  );

  const setDriver = (driver: MotorDriver) => {
    setAnswers((prev) => ({ ...prev, driver }));
    setStep("injury");
  };
  const setInjury = (injury: MotorInjury) => {
    const next = { ...answers, injury };
    setAnswers(next);
    if (injury === "serious") {
      setStep("outcome");
    } else {
      setStep("drivable");
    }
  };
  const setDrivable = (drivable: MotorDrivable) => {
    setAnswers((prev) => ({ ...prev, drivable }));
    setStep("outcome");
  };

  if (step === "outcome" && outcomeKey) {
    return (
      <OutcomeView
        line="motor"
        outcomeKey={outcomeKey}
        outcome={MOTOR_OUTCOMES[outcomeKey]}
        icon={MOTOR_OUTCOME_ICONS[outcomeKey]}
        answers={answers}
        onReset={() => router.push(ROUTES.home)}
        resetLabel="Back to home"
      />
    );
  }

  if (step === "driver") {
    return (
      <Screen
        label="Motor / fleet report"
        heading="Who was driving?"
        body="Your cover varies depending on whether it was a worker, a labour-only subcontractor, or someone outside the business."
      >
        <Button variant="secondary" onClick={() => setDriver("employee")}>
          One of our employees
        </Button>
        <Button variant="secondary" onClick={() => setDriver("subcontractor")}>
          A labour-only subcontractor working for us
        </Button>
        <Button variant="secondary" onClick={() => setDriver("other")}>
          Someone else (hire driver, another business, unknown)
        </Button>
      </Screen>
    );
  }

  if (step === "injury") {
    return (
      <Screen
        label="Motor / fleet report"
        heading="Was anyone hurt?"
        body="Pick the most serious that applies. Serious means hospital treatment, loss of consciousness, or anything beyond minor bruising."
      >
        <Button variant="danger" onClick={() => setInjury("serious")}>
          Yes &mdash; serious injury or taken to hospital
        </Button>
        <Button variant="secondary" onClick={() => setInjury("minor")}>
          Minor &mdash; whiplash, cuts, bruises, first aid at the scene
        </Button>
        <Button variant="secondary" onClick={() => setInjury("none")}>
          Nobody was hurt
        </Button>
      </Screen>
    );
  }

  return (
    <Screen
      label="Motor / fleet report"
      heading="Is the vehicle drivable?"
      body="This determines whether we need to arrange recovery and a temporary replacement."
    >
      <Button variant="secondary" onClick={() => setDrivable("yes")}>
        Yes &mdash; drivable and roadworthy
      </Button>
      <Button variant="secondary" onClick={() => setDrivable("no")}>
        No &mdash; needs recovery
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
