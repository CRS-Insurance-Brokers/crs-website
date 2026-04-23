"use client";

import { Check } from "lucide-react";
import { Body } from "@/components/ui/Body";
import { Heading } from "@/components/ui/Heading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BottomSheet } from "./BottomSheet";

export type LogEntry = {
  readonly id: string;
  readonly timestamp: string;
  readonly outcome: string;
  readonly severity: "danger" | "amber" | "success";
  readonly submittedToHandler: boolean;
};

type LogPanelProps = {
  open: boolean;
  onClose: () => void;
  entries: readonly LogEntry[];
};

/**
 * Audit log of completed incident reports. Entries are fetched by the
 * orchestrator; this component just renders. At the Supabase milestone the
 * entries prop is populated from a server action filtered by session_id.
 */
export function LogPanel({ open, onClose, entries }: LogPanelProps) {
  return (
    <BottomSheet open={open} onClose={onClose} label="Your incident history">
      <div className="mb-[18px] pr-12">
        <SectionLabel>Audit log &middot; Fair Value evidence</SectionLabel>
        <div className="h-1" />
        <Heading size="md" as="h2">
          Your incident history
        </Heading>
      </div>

      {entries.length === 0 ? (
        <Body muted size="sm">
          No incidents recorded yet. Every completed flow is saved here with
          timestamp and outcome &mdash; usable as Consumer Duty / Fair Value
          evidence.
        </Body>
      ) : (
        <ul className="list-none p-0 m-0">
          {entries.map((entry) => (
            <li
              key={entry.id}
              className="bg-surface border border-line rounded-soft p-[14px] mb-2"
            >
              <div className="font-sans text-[12.5px] text-ink-muted mb-1">
                {new Date(entry.timestamp).toLocaleString("en-GB", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              </div>
              <div className="font-sans text-[14.5px] font-medium text-ink mb-1 tracking-[-0.005em]">
                {entry.outcome}
              </div>
              {entry.submittedToHandler ? (
                <div className="inline-flex items-center gap-[6px] font-sans text-[12px] text-success">
                  <Check size={12} strokeWidth={2} aria-hidden />
                  Sent to CRS handler
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </BottomSheet>
  );
}
