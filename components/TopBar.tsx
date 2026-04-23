"use client";

import { ArrowLeft, History, Phone } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HANDLER } from "@/lib/decision-tree";
import { HIDE_BACK_ON, type StepId } from "@/lib/steps";
import { HandlerPanel } from "./panels/HandlerPanel";
import { LogPanel, type LogEntry } from "./panels/LogPanel";

type TopBarProps = {
  currentStep: StepId;
  logEntries: readonly LogEntry[];
};

export function TopBar({ currentStep, logEntries }: TopBarProps) {
  const router = useRouter();
  const [showLog, setShowLog] = useState(false);
  const [showHandler, setShowHandler] = useState(false);

  const showBack = !HIDE_BACK_ON.has(currentStep);

  return (
    <>
      <div className="sticky top-0 z-10 border-b border-line bg-bg">
        <div className="max-w-[560px] mx-auto px-5 py-[14px] flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            {showBack ? (
              <button
                type="button"
                onClick={() => router.back()}
                className="bg-transparent border-0 p-1 cursor-pointer flex items-center gap-[6px] text-ink font-sans text-[14px] min-h-[44px] min-w-[44px] -ml-1"
                aria-label="Back to previous step"
              >
                <ArrowLeft size={16} strokeWidth={1.5} aria-hidden />
                Back
              </button>
            ) : (
              <div className="font-display text-[17px] text-ink tracking-[-0.01em]">
                CRS{" "}
                <span className="font-sans text-[13px] text-ink-muted ml-1 tracking-normal">
                  Insurance
                </span>
              </div>
            )}
          </div>
          <div className="flex gap-1">
            <button
              type="button"
              onClick={() => setShowLog(true)}
              aria-label="Open incident history"
              className="bg-transparent border-0 cursor-pointer text-ink-muted hover:text-ink min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <History size={18} strokeWidth={1.5} aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => setShowHandler(true)}
              aria-label={`Call ${HANDLER.name} at CRS`}
              className="bg-primary text-primary-ink border-0 px-3 py-2 rounded-sharp cursor-pointer flex items-center gap-[6px] font-sans text-[13px] font-medium min-h-[44px]"
            >
              <Phone size={14} strokeWidth={1.8} aria-hidden />
              Call Sarah
            </button>
          </div>
        </div>
      </div>
      <HandlerPanel open={showHandler} onClose={() => setShowHandler(false)} />
      <LogPanel
        open={showLog}
        onClose={() => setShowLog(false)}
        entries={logEntries}
      />
    </>
  );
}
