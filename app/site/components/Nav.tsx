"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "./icons";

const links = [
  { label: "Specialisms", href: "#specialisms" },
  { label: "Claims", href: "#claims" },
  { label: "About", href: "#team" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

/**
 * Editorial masthead — single row.
 *  Three slots: logo · primary nav · primary CTA.
 *  Hard top, hairline rule, no rounded pill, no glass.
 *  Date appears on scrolled state only (subtle, not chrome).
 */
export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-[100] bg-m-ink/90 backdrop-blur-[18px]"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="flex items-stretch justify-between px-4 md:px-8 lg:px-12 h-[68px]">
          <Link
            href="/"
            aria-label="CRS Insurance Brokers — home"
            className="flex items-center pr-6 lg:pr-8 hover:opacity-90 transition-opacity duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]"
            style={{ borderRight: "1px solid rgba(255,255,255,0.08)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/crs-logo-dark.svg"
              alt="CRS Insurance Brokers"
              className="h-7 w-auto"
              width={156}
              height={36}
            />
          </Link>

          <nav className="hidden md:flex items-center flex-1 px-2 lg:px-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative px-4 lg:px-5 py-2 text-[12px] font-medium uppercase tracking-[0.16em] text-m-bone/65 hover:text-white transition-colors duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]"
              >
                {l.label}
                <span
                  aria-hidden
                  className="absolute left-4 right-4 lg:left-5 lg:right-5 -bottom-px h-px bg-m-coral"
                  style={{
                    clipPath: "inset(0 100% 0 0)",
                    transition: "clip-path 280ms cubic-bezier(0.23, 1, 0.32, 1)",
                  }}
                  data-rule
                />
                <style jsx>{`
                  a:hover [data-rule] {
                    clip-path: inset(0 0 0 0);
                  }
                `}</style>
              </a>
            ))}
          </nav>

          <a
            href="#claims"
            className="hidden md:flex group items-center gap-3 pl-5 lg:pl-6 pr-2 text-[12px] font-medium uppercase tracking-[0.16em] text-white"
            style={{ borderLeft: "1px solid rgba(255,255,255,0.08)" }}
          >
            <span>Report an incident</span>
            <span
              className="flex items-center justify-center w-9 h-9 bg-m-coral text-m-ink transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-[3px] group-hover:-translate-y-[2px] group-active:scale-[0.97]"
            >
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.4} />
            </span>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden relative flex items-center justify-center w-12"
            style={{ borderLeft: "1px solid rgba(255,255,255,0.08)" }}
          >
            <span
              className="absolute w-4 h-px bg-white transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
              style={{
                transform: open ? "rotate(45deg) translateY(0)" : "translateY(-3px)",
              }}
            />
            <span
              className="absolute w-4 h-px bg-white transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
              style={{
                transform: open ? "rotate(-45deg) translateY(0)" : "translateY(3px)",
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile expanded modal */}
      <div
        className={`fixed inset-0 z-[90] md:hidden transition-opacity duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-m-ink" onClick={() => setOpen(false)} />
        <div className="relative h-full flex flex-col justify-between pt-[120px] pb-10 px-6">
          <nav className="flex flex-col">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-4 text-white transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
                style={{
                  transitionDelay: open ? `${80 + i * 50}ms` : "0ms",
                  transform: open ? "translateY(0)" : "translateY(1.5rem)",
                  opacity: open ? 1 : 0,
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span className="font-display text-[44px] leading-[1] tracking-[-0.01em]">
                  {l.label}
                </span>
              </a>
            ))}
          </nav>

          <div
            className="flex items-end justify-between transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
            style={{
              transitionDelay: open ? "440ms" : "0ms",
              transform: open ? "translateY(0)" : "translateY(1rem)",
              opacity: open ? 1 : 0,
            }}
          >
            <div>
              <p className="text-[9.5px] font-mono uppercase tracking-[0.28em] text-m-bone/45 mb-2">
                Speak to a person
              </p>
              <a
                href="tel:01455244630"
                className="font-display text-[34px] leading-none text-m-coral tnum"
              >
                01455 244630
              </a>
            </div>
            <a
              href="#claims"
              onClick={() => setOpen(false)}
              className="group flex items-center gap-2 px-3 py-2 bg-m-coral text-m-ink"
            >
              <span className="text-[11.5px] font-medium uppercase tracking-[0.16em]">
                Report
              </span>
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.4} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
