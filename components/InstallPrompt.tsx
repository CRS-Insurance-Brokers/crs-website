"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

const VISIT_KEY = "crs-riddor-visits";
const DISMISSED_KEY = "crs-riddor-install-dismissed";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

function isMobile(): boolean {
  if (typeof navigator === "undefined") return false;
  return /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
}

/**
 * Soft install prompt, shown only after a second visit on mobile and only
 * if the browser has fired beforeinstallprompt (Chrome / Edge on Android).
 * iOS requires manual Add-to-Home-Screen; we don't nag for that.
 */
export function InstallPrompt() {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(
    null,
  );
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!isMobile()) return;

    try {
      const visits = Number(
        window.localStorage.getItem(VISIT_KEY) ?? "0",
      );
      window.localStorage.setItem(VISIT_KEY, String(visits + 1));
      if (visits < 1) return;
      if (window.localStorage.getItem(DISMISSED_KEY) === "1") return;
    } catch {
      /* localStorage disabled — skip gracefully */
      return;
    }

    const onPrompt = (event: Event) => {
      event.preventDefault();
      setDeferred(event as BeforeInstallPromptEvent);
      setVisible(true);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);
    return () => window.removeEventListener("beforeinstallprompt", onPrompt);
  }, []);

  const onInstall = async () => {
    if (!deferred) return;
    await deferred.prompt();
    await deferred.userChoice;
    setDeferred(null);
    setVisible(false);
  };

  const onDismiss = () => {
    try {
      window.localStorage.setItem(DISMISSED_KEY, "1");
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Install CRS RIDDOR Helper"
      className="fixed left-4 right-4 bottom-20 z-40 bg-surface border border-primary rounded-soft p-4 shadow-[0_-2px_10px_rgba(26,31,26,0.08)]"
    >
      <button
        type="button"
        onClick={onDismiss}
        aria-label="Dismiss"
        className="absolute top-2 right-2 bg-transparent border-0 cursor-pointer text-ink-muted hover:text-ink min-w-[40px] min-h-[40px] flex items-center justify-center"
      >
        <X size={16} aria-hidden />
      </button>
      <div className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted mb-1">
        Install
      </div>
      <div
        className="text-[16px] text-ink mb-1"
        style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
      >
        Keep this to hand on site.
      </div>
      <p className="font-sans text-[13.5px] text-ink-muted leading-[1.45] mb-3 mr-4">
        Add to your home screen to open it in one tap, and use it offline
        when the signal drops.
      </p>
      <button
        type="button"
        onClick={onInstall}
        className="w-full bg-primary text-primary-ink border border-primary rounded-sharp px-[14px] py-[10px] font-sans text-[14px] font-medium cursor-pointer min-h-[44px]"
      >
        Install
      </button>
    </div>
  );
}
