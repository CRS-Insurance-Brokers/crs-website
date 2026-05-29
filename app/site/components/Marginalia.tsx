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

  return null;
}
