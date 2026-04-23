"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { OutcomeView } from "@/components/flow/OutcomeView";
import { Body } from "@/components/ui/Body";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  derivePlOutcome,
  PL_OUTCOME_ICONS,
  PL_OUTCOMES,
  type PLAnswers,
  type PLClaimant,
} from "@/lib/flows/public-liability";
import { ROUTES } from "@/lib/routes";

type Step = "claimant" | "injury" | "admission" | "outcome";

export function PublicLiabilityFlow() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("claimant");
  const [answers, setAnswers] = useState<PLAnswers>({});

  const outcomeKey = useMemo(
    () => (step === "outcome" ? derivePlOutcome(answers) : null),
    [step, answers],
  );

  const setClaimant = (claimant: PLClaimant) => {
    const next = { ...answers, claimant };
    setAnswers(next);
    if (claimant === "solicitor-letter") {
      // Fast-path: solicitor letter is the dominant signal.
      setStep("outcome");
    } else {
      setStep("injury");
    }
  };
  const setInjury = (injuryAlleged: boolean) => {
    setAnswers((prev) => ({ ...prev, injuryAlleged }));
    setStep("admission");
  };
  const setAdmission = (askedToAdmit: boolean) => {
    setAnswers((prev) => ({ ...prev, askedToAdmit }));
    setStep("outcome");
  };

  if (step === "outcome" && outcomeKey) {
    return (
      <OutcomeView
        line="public-liability"
        outcomeKey={outcomeKey}
        outcome={PL_OUTCOMES[outcomeKey]}
        icon={PL_OUTCOME_ICONS[outcomeKey]}
        answers={answers}
        onReset={() => router.push(ROUTES.home)}
        resetLabel="Back to home"
      />
    );
  }

  if (step === "claimant") {
    return (
      <Screen
        label="Public liability / third party"
        heading="Who&rsquo;s making the complaint?"
        body="If it's a formal solicitor's letter, we handle it differently — so it's worth naming that up front."
      >
        <Button
          variant="secondary"
          onClick={() => setClaimant("member-of-public")}
        >
          A member of the public
        </Button>
        <Button
          variant="secondary"
          onClick={() => setClaimant("another-business")}
        >
          Another business (client, neighbour, principal contractor)
        </Button>
        <Button variant="secondary" onClick={() => setClaimant("unknown")}>
          We don&rsquo;t know yet &mdash; someone&rsquo;s alleged something
        </Button>
        <Button
          variant="danger"
          onClick={() => setClaimant("solicitor-letter")}
        >
          A solicitor&rsquo;s letter has arrived
        </Button>
      </Screen>
    );
  }

  if (step === "injury") {
    return (
      <Screen
        label="Public liability / third party"
        heading="Is an injury being alleged?"
        body="Anything from a trip or fall through to long-term health — any injury allegation is treated as urgent."
      >
        <Button variant="danger" onClick={() => setInjury(true)}>
          Yes &mdash; they say someone&rsquo;s been hurt
        </Button>
        <Button variant="secondary" onClick={() => setInjury(false)}>
          No &mdash; property damage or other loss, no injury
        </Button>
      </Screen>
    );
  }

  return (
    <Screen
      label="Public liability / third party"
      heading="Are they asking you to admit fault?"
      body="Any pressure from the third party (or their representative) to accept liability is a red flag we should handle together."
    >
      <Button variant="danger" onClick={() => setAdmission(true)}>
        Yes &mdash; they want me to accept it&rsquo;s our fault
      </Button>
      <Button variant="secondary" onClick={() => setAdmission(false)}>
        No &mdash; they&rsquo;re just reporting what happened
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
