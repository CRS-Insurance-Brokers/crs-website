"use client";

import { useState } from "react";

export type FAQItem = {
  q: string;
  a: string;
};

export function FAQList({ items }: { items: FAQItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <ul className="flex flex-col">
      {items.map((item, i) => {
        const open = openIdx === i;
        return (
          <li
            key={item.q}
            style={{
              borderTop: i === 0 ? "1px solid rgba(255,255,255,0.10)" : undefined,
              borderBottom: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            <button
              type="button"
              onClick={() => setOpenIdx(open ? null : i)}
              aria-expanded={open}
              className="group w-full text-left py-6 md:py-7 flex items-start justify-between gap-6 transition-colors duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              <span className="flex items-baseline gap-5 md:gap-7 min-w-0">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-m-bone/40 tnum shrink-0 mt-1.5">
                  Q.{String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[22px] md:text-[26px] leading-[1.2] tracking-[-0.01em] text-white">
                  {item.q}
                </span>
              </span>
              <span
                className="shrink-0 mt-2 w-8 h-8 flex items-center justify-center transition-transform duration-300"
                style={{
                  border: "1px solid rgba(255,255,255,0.10)",
                  transform: open ? "rotate(45deg)" : "rotate(0deg)",
                  transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
                  background: open ? "var(--color-m-coral)" : "transparent",
                  color: open ? "var(--color-m-ink)" : "currentColor",
                }}
                aria-hidden
              >
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                >
                  <path d="M6 1.5V10.5" />
                  <path d="M1.5 6H10.5" />
                </svg>
              </span>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-500"
              style={{
                gridTemplateRows: open ? "1fr" : "0fr",
                transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
              }}
            >
              <div className="overflow-hidden">
                <div className="pb-7 pl-[60px] md:pl-[112px] pr-12 max-w-3xl">
                  <p className="text-[14.5px] md:text-[15px] leading-[1.7] text-m-bone/65">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
