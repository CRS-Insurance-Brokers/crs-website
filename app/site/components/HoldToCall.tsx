"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Press and hold to dial — Emil's hold-to-delete pattern, applied to a phone CTA.
 * Asymmetric timing: 1.5s linear hold (deliberate), 200ms ease-out release (snappy).
 *
 * Mobile fallback: tap to dial directly.
 */
export function HoldToCall({
  number = "01455244630",
  display = "01455 244630",
  className = "",
}: {
  number?: string;
  display?: string;
  className?: string;
}) {
  const [progress, setProgress] = useState(0);
  const [holding, setHolding] = useState(false);
  const [done, setDone] = useState(false);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const isCoarse = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      isCoarse.current = window.matchMedia("(pointer: coarse)").matches;
    }
  }, []);

  const tick = () => {
    if (startRef.current == null) return;
    const elapsed = performance.now() - startRef.current;
    const p = Math.min(elapsed / 1500, 1);
    setProgress(p);
    if (p >= 1) {
      setDone(true);
      window.location.href = `tel:${number}`;
      release();
      return;
    }
    rafRef.current = requestAnimationFrame(tick);
  };

  const press = () => {
    if (isCoarse.current) {
      // Coarse pointer — tap directly to dial, skip hold
      window.location.href = `tel:${number}`;
      return;
    }
    setHolding(true);
    setDone(false);
    startRef.current = performance.now();
    rafRef.current = requestAnimationFrame(tick);
  };

  const release = () => {
    setHolding(false);
    startRef.current = null;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    // Snap back
    setProgress(0);
  };

  return (
    <button
      onPointerDown={press}
      onPointerUp={release}
      onPointerLeave={release}
      onPointerCancel={release}
      className={`group relative isolate overflow-hidden inline-flex items-center justify-between gap-4 select-none ${className}`}
      style={{
        background: "transparent",
        border: "1px solid rgba(255,255,255,0.12)",
        transition: "transform 160ms cubic-bezier(0.23, 1, 0.32, 1), border-color 200ms ease",
        transform: holding ? "scale(0.99)" : "scale(1)",
      }}
      aria-label={`Press and hold to call ${display}`}
    >
      {/* Coral fill that wipes left → right via clip-path */}
      <span
        aria-hidden
        className="absolute inset-0 z-0 bg-m-coral"
        style={{
          clipPath: `inset(0 ${(1 - progress) * 100}% 0 0)`,
          transition: holding
            ? "clip-path 1.5s linear"
            : "clip-path 200ms cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      />

      <span className="relative z-10 flex items-center gap-3 px-5 py-4 mix-blend-difference text-white">
        {/* Phone glyph */}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11.5 9.7v1.4a1 1 0 0 1-1.1 1 9.6 9.6 0 0 1-4.2-1.5 9.4 9.4 0 0 1-2.9-2.9A9.6 9.6 0 0 1 1.8 3.5a1 1 0 0 1 1-1.1h1.4a1 1 0 0 1 1 .9c.06.5.18 1 .35 1.4a1 1 0 0 1-.23 1.05L4.7 6.4a7.7 7.7 0 0 0 2.9 2.9l.6-.6a1 1 0 0 1 1.05-.23c.45.17.9.29 1.4.34a1 1 0 0 1 .9 1z" />
        </svg>
        <span className="text-[10px] font-mono uppercase tracking-[0.24em] tnum">
          {done ? "Dialling…" : holding ? "Keep holding" : "Hold to call"}
        </span>
      </span>

      <span className="relative z-10 px-5 py-4 mix-blend-difference text-white font-display text-[22px] leading-none tnum">
        {display}
      </span>
    </button>
  );
}
