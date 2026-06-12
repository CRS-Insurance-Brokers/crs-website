"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "./icons";

interface SubLink {
  label: string;
  href: string;
}

interface NavLink {
  label: string;
  href: string;
  dropdown?: SubLink[];
}

const links: NavLink[] = [
  {
    label: "Specialisms",
    href: "/site/specialisms",
    dropdown: [
      { label: "Overview",                  href: "/site/specialisms" },
      { label: "High Risk",                 href: "/site/specialisms/high-risk" },
      { label: "Construction",              href: "/site/specialisms/construction" },
      { label: "Engineering",               href: "/site/specialisms/engineering" },
      { label: "Manufacturing & Wholesale", href: "/site/specialisms/manufacturing-wholesale" },
    ],
  },
  {
    label: "Claims",
    href: "/site/claims/what-to-do-on-site",
    dropdown: [
      { label: "What to do first", href: "/site/claims/what-to-do-on-site" },
      { label: "Report a claim",   href: "/site#contact" },
    ],
  },
  {
    label: "About",
    href: "/site/about",
    dropdown: [
      { label: "About CRS",                  href: "/site/about" },
      { label: "Management Team",            href: "/site/about/team" },
      { label: "How we are paid",            href: "/site/about/how-we-are-paid" },
      { label: "Memberships & Associations", href: "/site/about/memberships" },
      { label: "Lighthouse Charity",          href: "/site/about/charity" },
      { label: "Rewards",                    href: "/site/rewards" },
    ],
  },
  {
    label: "Beyond the Basics",
    href: "/site/resources",
  },
  { label: "News",    href: "/site/news" },
  { label: "Contact", href: "/site#contact" },
];

export function Nav() {
  const [open, setOpen]                   = useState(false);
  const [openDropdown, setOpenDropdown]   = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const burgerRef  = useRef<HTMLButtonElement>(null);
  const menuRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Escape closes mobile menu and desktop dropdowns; opening the mobile menu
  // moves focus into it, closing returns focus to the burger.
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      setOpenDropdown(null);
      if (open) {
        setOpen(false);
        burgerRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (open) menuRef.current?.querySelector("a")?.focus();
  }, [open]);

  function handleEnter(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  }

  function handleLeave() {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 200);
  }

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-[100] bg-m-ink/90 backdrop-blur-[18px]"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="flex items-stretch justify-between px-4 md:px-8 lg:px-12 h-[88px]">

          {/* Logo */}
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
              className="h-12 w-auto"
              width={156}
              height={36}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center flex-1 px-2 lg:px-4">
            {links.map((l) => (
              <div
                key={l.href}
                className="relative h-full flex items-center"
                onMouseEnter={() => l.dropdown && handleEnter(l.label)}
                onMouseLeave={() => l.dropdown && handleLeave()}
                onFocus={() => l.dropdown && handleEnter(l.label)}
                onBlur={(e) => {
                  if (l.dropdown && !e.currentTarget.contains(e.relatedTarget)) {
                    handleLeave();
                  }
                }}
              >
                <a
                  href={l.href}
                  onMouseEnter={() => l.dropdown && handleEnter(l.label)}
                  aria-expanded={l.dropdown ? openDropdown === l.label : undefined}
                  aria-haspopup={l.dropdown ? "menu" : undefined}
                  className="relative flex items-center gap-1.5 px-4 lg:px-5 py-2 text-[12px] font-medium uppercase tracking-[0.16em] text-m-bone/65 hover:text-white transition-colors duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]"
                >
                  {l.label}

                  {/* Chevron for items with dropdowns */}
                  {l.dropdown && (
                    <svg
                      width="7" height="5" viewBox="0 0 7 5"
                      fill="none" aria-hidden
                      className="opacity-35 transition-transform duration-200"
                      style={{ transform: openDropdown === l.label ? "rotate(180deg)" : "rotate(0deg)" }}
                    >
                      <path d="M1 1l2.5 3L6 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}

                  {/* Coral underline rule */}
                  <span
                    aria-hidden
                    className="absolute left-4 right-4 lg:left-5 lg:right-5 -bottom-px h-px bg-m-coral"
                    style={{
                      clipPath: openDropdown === l.label ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
                      transition: "clip-path 280ms cubic-bezier(0.23, 1, 0.32, 1)",
                    }}
                  />
                </a>

                {/* Dropdown panel */}
                {l.dropdown && (
                  <div
                    className="absolute top-full left-0 z-50 py-1 min-w-[210px]"
                    style={{
                      background: "rgba(8,8,24,0.97)",
                      border: "1px solid rgba(255,255,255,0.09)",
                      backdropFilter: "blur(16px)",
                      opacity: openDropdown === l.label ? 1 : 0,
                      transform: openDropdown === l.label ? "translateY(0)" : "translateY(-6px)",
                      pointerEvents: openDropdown === l.label ? "auto" : "none",
                      // visibility keeps closed panels out of the tab order and
                      // accessibility tree; the delay preserves the fade-out.
                      visibility: openDropdown === l.label ? "visible" : "hidden",
                      transition: `opacity 180ms cubic-bezier(0.23,1,0.32,1), transform 180ms cubic-bezier(0.23,1,0.32,1), visibility 0s linear ${openDropdown === l.label ? "0ms" : "180ms"}`,
                    }}
                    onMouseEnter={() => handleEnter(l.label)}
                    onMouseLeave={handleLeave}
                  >
                    {l.dropdown.map((sub, i) => (
                      <a
                        key={sub.href}
                        href={sub.href}
                        className="block px-5 py-2.5 text-[11px] font-mono uppercase tracking-[0.2em] text-m-bone/55 hover:text-white hover:bg-white/[0.05] transition-colors duration-150"
                        style={{
                          borderBottom: i < l.dropdown!.length - 1
                            ? "1px solid rgba(255,255,255,0.05)"
                            : "none",
                        }}
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Report a claim CTA */}
          <a
            href="tel:01455244630"
            className="hidden md:flex group items-center gap-3 pl-5 lg:pl-6 pr-2 text-[12px] font-medium uppercase tracking-[0.16em] text-white"
            style={{ borderLeft: "1px solid rgba(255,255,255,0.08)" }}
          >
            <span>Report a claim</span>
            <span className="flex items-center justify-center w-9 h-9 bg-m-coral text-m-ink transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-[3px] group-hover:-translate-y-[2px] group-active:scale-[0.97]">
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.4} />
            </span>
          </a>

          {/* Mobile hamburger */}
          <button
            ref={burgerRef}
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden relative flex items-center justify-center w-12"
            style={{ borderLeft: "1px solid rgba(255,255,255,0.08)" }}
          >
            <span
              className="absolute w-4 h-px bg-white transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
              style={{ transform: open ? "rotate(45deg)" : "translateY(-3px)" }}
            />
            <span
              className="absolute w-4 h-px bg-white transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
              style={{ transform: open ? "rotate(-45deg)" : "translateY(3px)" }}
            />
          </button>
        </div>
      </header>

      {/* Mobile expanded menu — visibility:hidden keeps the closed menu out of
          the tab order and screen-reader tree; the transition delay lets the
          fade-out finish before it disappears. */}
      <div
        ref={menuRef}
        className={`fixed inset-0 z-[90] md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{
          visibility: open ? "visible" : "hidden",
          transition: `opacity 300ms cubic-bezier(0.23,1,0.32,1), visibility 0s linear ${open ? "0ms" : "300ms"}`,
        }}
      >
        <div className="absolute inset-0 bg-m-ink" onClick={() => setOpen(false)} />
        <div className="relative h-full flex flex-col justify-between pt-[120px] pb-10 px-6 overflow-y-auto">
          <nav className="flex flex-col">
            {links.map((l, i) => (
              <div key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-white transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
                  style={{
                    transitionDelay: open ? `${80 + i * 50}ms` : "0ms",
                    transform: open ? "translateY(0)" : "translateY(1.5rem)",
                    opacity: open ? 1 : 0,
                    borderBottom: l.dropdown ? "none" : "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span className="font-display text-[44px] leading-[1] tracking-[-0.01em]">
                    {l.label}
                  </span>
                </a>
                {/* Mobile sub-links */}
                {l.dropdown && (
                  <div
                    className="flex flex-wrap gap-x-5 gap-y-1 pb-4"
                    style={{
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                      opacity: open ? 1 : 0,
                      transition: `opacity 500ms cubic-bezier(0.23,1,0.32,1) ${80 + i * 50 + 40}ms`,
                    }}
                  >
                    {l.dropdown.map((sub) => (
                      <a
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setOpen(false)}
                        className="text-[11px] font-mono uppercase tracking-[0.18em] text-m-bone/40 hover:text-m-coral transition-colors duration-200"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
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
              <a href="tel:01455244630" className="font-display text-[34px] leading-none text-m-coral tnum">
                01455 244630
              </a>
            </div>
            <a
              href="tel:01455244630"
              onClick={() => setOpen(false)}
              className="group flex items-center gap-2 px-3 py-2 bg-m-coral text-m-ink"
            >
              <span className="text-[11.5px] font-medium uppercase tracking-[0.16em]">Report a claim</span>
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.4} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
