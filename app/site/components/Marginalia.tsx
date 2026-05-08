"use client";

import { useEffect, useState } from "react";

/**
 * Right-edge marginalia gutter — minimal.
 * Two anchors only: serial № at top, live time pulse at bottom.
 * The editorial signature without the chrome density.
 */
export function Marginalia() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const update = () => {
      const d = new Date();
      const hh = d.getHours().toString().padStart(2, "0");
      const mm = d.getMinutes().toString().padStart(2, "0");
      setTime(`${hh}:${mm}`);
    };
    update();
    const id = window.setInterval(update, 30000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <aside
      aria-hidden
      className="hidden lg:flex fixed right-0 top-[68px] bottom-0 z-[60] w-[40px] flex-col items-center justify-between py-10 pointer-events-none"
    >
      <span className="font-mono text-[9px] uppercase tracking-[0.32em] text-m-bone/30 tnum [writing-mode:vertical-rl] rotate-180">
        № 0001 · Edition I
      </span>

      <span className="flex flex-col items-center gap-2.5 [writing-mode:vertical-rl] rotate-180">
        <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-m-bone/40 tnum">
          {time || "—"} GMT
        </span>
        <span className="w-1 h-1 rounded-full bg-m-coral pulse-dot [writing-mode:horizontal-tb]" />
      </span>
    </aside>
  );
}
