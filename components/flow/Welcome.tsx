"use client";

import { HardHat } from "lucide-react";
import { useRouter } from "next/navigation";
import { Body } from "@/components/ui/Body";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { stepHref } from "@/lib/steps";

export function Welcome() {
  const router = useRouter();
  return (
    <div>
      <div className="mb-7">
        <SectionLabel>Report an incident</SectionLabel>
        <Heading size="xl">
          Let&rsquo;s work out what needs to happen next.
        </Heading>
      </div>
      <Body muted>
        This tool walks you through whether an incident on your site needs
        reporting to the HSE under RIDDOR. It takes about sixty seconds, and
        whatever the answer, Sarah on your CRS team is one tap away.
      </Body>
      <Body muted>
        It&rsquo;s guidance, not legal advice. For anything you&rsquo;re
        unsure about, call your handler &mdash; we&rsquo;d rather you checked.
      </Body>
      <div className="mt-5">
        <Button
          leadingIcon={HardHat}
          onClick={() => router.push(stepHref("incident-type"))}
        >
          Start &mdash; tell me what happened
        </Button>
      </div>
    </div>
  );
}
