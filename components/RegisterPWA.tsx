"use client";

import { useEffect } from "react";
import { submitReport } from "@/app/actions";
import { drainQueue } from "@/lib/offline-queue";

/**
 * Registers the service worker and sets up a background retry for
 * queued offline submissions. Mounted once in the root layout.
 */
export function RegisterPWA() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("serviceWorker" in navigator)) return;
    if (process.env.NODE_ENV !== "production") return;

    const onLoad = () => {
      navigator.serviceWorker
        .register("/sw.js", { scope: "/" })
        .catch((err) => {
          console.warn("[pwa] service worker registration failed", err);
        });
    };
    window.addEventListener("load", onLoad);

    const flush = () => {
      void drainQueue(async (payload) => {
        const result = await submitReport(payload);
        if (!result.ok) throw new Error(result.error);
      });
    };
    // Attempt a flush on mount (if items lingered from a previous session)
    // and whenever we come back online.
    flush();
    window.addEventListener("online", flush);

    return () => {
      window.removeEventListener("load", onLoad);
      window.removeEventListener("online", flush);
    };
  }, []);

  return null;
}
