"use client";

import { useEffect, useState } from "react";
import { OPEN_COOKIE_SETTINGS } from "./CookieSettingsButton";

/*
 * Cookie consent banner + Google Analytics loader.
 *
 * PECR-conservative: gtag.js is not loaded at all until the visitor accepts
 * analytics cookies. Consent is stored in a first-party cookie (12 months) —
 * storing the consent choice itself is strictly necessary and exempt.
 * The cookie policy at /cookies describes exactly this behaviour;
 * keep the two in sync if either changes.
 *
 * The GA4 Measurement ID is baked in (it is public by nature — visible in
 * page source on any GA site). NEXT_PUBLIC_GA_ID overrides it if a separate
 * property is ever needed, e.g. on preview deploys.
 */

const CONSENT_COOKIE = "crs_cookie_consent";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-6BWHLCMP75";

function readConsent(): string | null {
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${CONSENT_COOKIE}=([^;]*)`)
  );
  return match?.[1] ?? null;
}

function writeConsent(value: "granted" | "denied") {
  document.cookie = `${CONSENT_COOKIE}=${value}; max-age=31536000; path=/; SameSite=Lax; Secure`;
}

/* Withdrawing consent has to remove what was already set, not just record the
 * change. GA4 writes _ga and _ga_<measurement-id>. */
function clearAnalyticsCookies() {
  const host = window.location.hostname;
  const scopes = [host, `.${host}`, `.${host.split(".").slice(-2).join(".")}`];
  for (const pair of document.cookie.split("; ")) {
    const name = pair.split("=")[0]?.trim();
    if (!name || !name.startsWith("_ga")) continue;
    document.cookie = `${name}=; max-age=0; path=/`;
    for (const scope of scopes) {
      document.cookie = `${name}=; max-age=0; path=/; domain=${scope}`;
    }
  }
}

function loadAnalytics() {
  if (!GA_ID || document.getElementById("ga-gtag")) return;
  const s = document.createElement("script");
  s.id = "ga-gtag";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);

  type WindowWithDataLayer = Window & { dataLayer?: unknown[] };
  const w = window as WindowWithDataLayer;
  w.dataLayer = w.dataLayer || [];
  function gtag(...args: unknown[]) {
    w.dataLayer!.push(args);
  }
  gtag("js", new Date());
  gtag("config", GA_ID);
}

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = readConsent();
    if (consent === "granted") {
      loadAnalytics();
    } else if (consent === null) {
      setVisible(true);
    }
    // "Cookie settings" in the footer reopens this so a choice can be changed.
    const open = () => setVisible(true);
    window.addEventListener(OPEN_COOKIE_SETTINGS, open);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS, open);
  }, []);

  if (!visible) return null;

  const choose = (value: "granted" | "denied") => {
    const wasGranted = readConsent() === "granted";
    writeConsent(value);
    setVisible(false);
    if (value === "granted") {
      loadAnalytics();
      return;
    }
    if (wasGranted) {
      // gtag.js is already in the document and cannot be unloaded. Drop its
      // cookies and reload so the withdrawal takes effect instead of only
      // being recorded.
      clearAnalyticsCookies();
      window.location.reload();
    }
  };

  return (
    <section
      aria-label="Cookie consent"
      className="fixed bottom-0 inset-x-0 z-[150] bg-m-ink-2/97 backdrop-blur-[12px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 py-5 md:py-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
        <p className="flex-1 text-[13px] leading-[1.6] text-m-bone/70">
          We use cookies to understand how the site is used. Strictly necessary
          cookies are always on; analytics cookies run only if you accept.{" "}
          <a
            href="/cookies"
            className="text-white underline underline-offset-2 hover:text-m-coral transition-colors duration-200"
          >
            Cookie policy
          </a>
        </p>
        <div className="flex items-stretch gap-3 shrink-0">
          {/* Identical treatment on both, coral included. The ICO expects
              refusing to be no harder, and no less prominent, than accepting. */}
          <button
            type="button"
            onClick={() => choose("denied")}
            className="px-5 py-3 text-[12px] font-semibold tracking-[0.02em] text-white hover:bg-m-coral hover:text-m-ink hover:border-m-coral transition-colors duration-200"
            style={{ border: "1px solid rgba(255,255,255,0.45)" }}
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="px-5 py-3 text-[12px] font-semibold tracking-[0.02em] text-white hover:bg-m-coral hover:text-m-ink hover:border-m-coral transition-colors duration-200"
            style={{ border: "1px solid rgba(255,255,255,0.45)" }}
          >
            Accept
          </button>
        </div>
      </div>
    </section>
  );
}
