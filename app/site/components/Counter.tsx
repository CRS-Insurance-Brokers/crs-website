"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Numerical counter that animates from 0 to value when scrolled into view.
 * Uses tabular figures so digits don't shift width during the animation.
 */
export function Counter({
  value,
  prefix = "",
  suffix = "",
  duration = 1400,
  decimals = 0,
  className = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setDisplay(value);
      return;
    }
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setDisplay(value);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          io.unobserve(el);
          const start = performance.now();
          const tick = () => {
            const elapsed = performance.now() - start;
            const p = Math.min(elapsed / duration, 1);
            // ease-out cubic for natural settle
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(value * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  const formatted =
    decimals === 0
      ? Math.round(display).toLocaleString("en-GB")
      : display.toFixed(decimals);

  return (
    <span ref={ref} className={`tnum ${className}`}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
