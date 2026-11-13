"use client";

import { useEffect, useRef, useState } from "react";

/*
 * Temporary pop-up for the Microsoft 365 outage, 13 Nov 2026.
 * To remove: delete this file and the <OutageNotice /> line in ../layout.tsx.
 *
 * It opens as soon as the page loads. Closing it is remembered in
 * sessionStorage, so it stays closed for the rest of the visit (menu links
 * do full page loads) and shows again on the next visit.
 */
const KEY = "crs-outage-notice-closed";

export function OutageNotice() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let closed = false;
    try {
      closed = sessionStorage.getItem(KEY) === "1";
    } catch {}
    if (!closed) setOpen(true);
  }, []);

  const close = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {}
  };

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center bg-black/60 p-4"
      onClick={close}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="outage-title"
        className="relative w-full max-w-[680px] bg-white px-6 py-8 md:px-12 md:py-12 text-[#262262] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute top-3 right-3 h-10 w-10 text-[28px] leading-none text-[#262262]/70 hover:text-[#262262]"
        >
          &times;
        </button>
        <h2
          id="outage-title"
          className="text-[28px] md:text-[40px] font-bold leading-tight pr-8"
        >
          Email delays
        </h2>
        <p className="mt-5 text-[18px] md:text-[22px] leading-relaxed">
          Microsoft&rsquo;s email service is having problems, so emails to us
          may be delayed. If it&rsquo;s urgent, please call us on{" "}
          <a href="tel:01455244630" className="font-semibold underline whitespace-nowrap">
            01455 244630
          </a>
          .
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href="tel:01455244630"
            className="inline-flex items-center justify-center bg-[#262262] px-7 py-4 text-[17px] font-semibold text-white hover:bg-[#1b1849]"
          >
            Call 01455 244630
          </a>
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            className="inline-flex items-center justify-center border border-[#262262] px-7 py-4 text-[17px] font-semibold text-[#262262] hover:bg-[#262262]/5"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
