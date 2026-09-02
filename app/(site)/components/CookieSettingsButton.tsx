"use client";

/*
 * Footer control that reopens the cookie banner so a visitor can change the
 * choice they made earlier.
 *
 * PECR / ICO: withdrawing consent has to be as easy as giving it, and the ICO
 * treats "clear your browser cookies" as not good enough. This is the way back
 * out. It dispatches an event rather than owning any state — ConsentBanner is
 * already mounted on every page and does the rest.
 */

export const OPEN_COOKIE_SETTINGS = "crs:open-cookie-settings";

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS))}
      className="font-semibold hover:text-m-bone transition-colors duration-300 tracking-[0.01em]"
    >
      Cookie settings
    </button>
  );
}
