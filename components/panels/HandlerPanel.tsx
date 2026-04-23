"use client";

import { Phone } from "lucide-react";
import { Body } from "@/components/ui/Body";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { HANDLER } from "@/lib/decision-tree";
import { BottomSheet } from "./BottomSheet";

type HandlerPanelProps = {
  open: boolean;
  onClose: () => void;
};

export function HandlerPanel({ open, onClose }: HandlerPanelProps) {
  const dialPhone = HANDLER.phone.replace(/\s/g, "");

  return (
    <BottomSheet open={open} onClose={onClose} label="Your CRS team">
      <div className="mb-[18px] pr-12">
        <SectionLabel>Your CRS team</SectionLabel>
        <div className="h-1" />
        <Heading size="md" as="h2">
          We&rsquo;re one tap away.
        </Heading>
      </div>

      <div className="bg-surface border border-line rounded-soft p-[18px] mb-[10px]">
        <div className="flex gap-[14px] items-center mb-[14px]">
          <div
            aria-hidden
            className="w-[52px] h-[52px] rounded-full bg-primary text-primary-ink flex items-center justify-center font-display text-[19px] tracking-[0.02em]"
          >
            {HANDLER.initials}
          </div>
          <div>
            <div className="font-display text-[19px] text-ink tracking-[-0.01em]">
              {HANDLER.name}
            </div>
            <div className="font-sans text-[13.5px] text-ink-muted">
              {HANDLER.role} &middot; CRS Insurance
            </div>
          </div>
        </div>
        <a
          href={`tel:${dialPhone}`}
          className="no-underline block"
          aria-label={`Call ${HANDLER.name} on ${HANDLER.phone}`}
        >
          <Button leadingIcon={Phone} showTrailingArrow={false} tabIndex={-1}>
            Call {HANDLER.phone}
          </Button>
        </a>
        <div className="h-2" />
        <Body muted size="sm">
          Direct line Mon&ndash;Fri 08:30&ndash;17:30. Out-of-hours motor /
          fleet incidents on the same number, option 4.
        </Body>
      </div>

      <Body muted size="sm">
        Every conversation is logged to your file &mdash; part of Fair Value
        evidence and available for your records at any time.
      </Body>
    </BottomSheet>
  );
}
