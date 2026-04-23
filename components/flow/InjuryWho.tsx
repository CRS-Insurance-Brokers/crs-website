"use client";

import { useRouter } from "next/navigation";
import { Body } from "@/components/ui/Body";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { stepHref } from "@/lib/steps";
import { useDraft } from "@/lib/use-draft";

export function InjuryWho() {
  const router = useRouter();
  const { updateAnswers } = useDraft();

  const pick = (who: "worker" | "public") => {
    updateAnswers({ who });
    router.push(
      who === "worker"
        ? stepHref("injury-worker-severity")
        : stepHref("injury-public-severity"),
    );
  };

  return (
    <div>
      <Heading>Who was injured?</Heading>
      <Body muted>This changes the reporting rules.</Body>
      <div className="h-4" />
      <div className="flex flex-col gap-[10px]">
        <Button variant="secondary" onClick={() => pick("worker")}>
          A worker &mdash; employee, subcontractor, or self-employed person
          working under our control
        </Button>
        <Button variant="secondary" onClick={() => pick("public")}>
          A member of the public, or someone not at work
        </Button>
      </div>
    </div>
  );
}
