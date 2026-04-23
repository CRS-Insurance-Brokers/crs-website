"use client";

import { Activity, Info, Users, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { useDraft } from "@/lib/use-draft";

export function IncidentType() {
  const router = useRouter();
  const { updateAnswers, setOutcomeKey } = useDraft();

  const pickInjury = () => {
    updateAnswers({ incidentType: "injury" });
    router.push("/?step=injury-who");
  };
  const pickDangerous = () => {
    updateAnswers({ incidentType: "dangerous", dangerousChecks: [] });
    router.push("/?step=dangerous-check");
  };
  const pickDisease = () => {
    updateAnswers({ incidentType: "disease", diseaseChecks: [] });
    router.push("/?step=disease-check");
  };
  const pickUnsure = () => {
    updateAnswers({ incidentType: "unsure" });
    setOutcomeKey("call-handler");
    router.push("/?step=outcome");
  };

  return (
    <div>
      <Heading>What kind of incident was it?</Heading>
      <div className="h-6" />
      <div className="flex flex-col gap-[10px]">
        <Button variant="secondary" leadingIcon={Users} onClick={pickInjury}>
          Someone has been injured
        </Button>
        <Button variant="secondary" leadingIcon={Zap} onClick={pickDangerous}>
          A dangerous occurrence (near miss)
        </Button>
        <Button variant="secondary" leadingIcon={Activity} onClick={pickDisease}>
          A work-related illness has been diagnosed
        </Button>
        <Button variant="secondary" leadingIcon={Info} onClick={pickUnsure}>
          I&rsquo;m not sure &mdash; let me speak to Sarah
        </Button>
      </div>
    </div>
  );
}
