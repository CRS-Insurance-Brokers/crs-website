"use client";

import { ArrowLeft, History, Phone } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { fetchLog } from "@/app/actions";
import { HANDLER } from "@/lib/decision-tree";
import { ROUTES } from "@/lib/routes";
import { HandlerPanel } from "./panels/HandlerPanel";
import { LogPanel, type LogEntry } from "./panels/LogPanel";

type TopBarProps = {
  /**
   * Override for flows that have their own internal back semantics (e.g.
   * the RIDDOR orchestrator hides Back on welcome and outcome steps).
   * Default: Back is shown everywhere except the home dashboard.
   */
  readonly hideBack?: boolean;
};

export function TopBar({ hideBack }: TopBarProps = {}) {
  const router = useRouter();
  const pathname = usePathname();
  const [showLog, setShowLog] = useState(false);
  const [showHandler, setShowHandler] = useState(false);
  const [logEntries, setLogEntries] = useState<readonly LogEntry[]>([]);
  const [logLoading, setLogLoading] = useState(false);

  const openLog = useCallback(() => {
    setShowLog(true);
    setLogLoading(true);
    void fetchLog()
      .then(setLogEntries)
      .finally(() => setLogLoading(false));
  }, []);

  const showBack = hideBack !== undefined ? !hideBack : pathname !== ROUTES.home;

  return (
    <>
      <div className="sticky top-0 z-10 border-b border-line bg-bg">
        <div className="max-w-[560px] mx-auto px-5 py-[14px] flex justify-between items-center">
          <div className="flex items-center gap-[10px] min-w-0">
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
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src="/crs-logo.svg"
                alt="CRS Insurance Brokers"
                width={130}
                height={30}
                className="block h-[30px] w-auto"
              />
            )}
          </div>
          <div className="flex gap-1">
            <button
              type="button"
              onClick={openLog}
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
        loading={logLoading}
      />
    </>
  );
}
