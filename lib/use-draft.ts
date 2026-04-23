"use client";

/**
 * Client-side draft store for the in-progress RIDDOR flow.
 *
 * Backed by sessionStorage so refresh mid-flow doesn't lose progress, but
 * scoped to the tab. Submitted reports go to Supabase via a server action at
 * the next milestone — this hook stays purely client-side.
 *
 * Uses useSyncExternalStore with a module-level pub/sub so multiple
 * components stay in step (e.g. TopBar reading step + flow screen writing
 * answers).
 */

import { useCallback, useSyncExternalStore } from "react";
import type { Answers, OutcomeKey } from "./decision-tree";

const STORAGE_KEY = "crs-riddor-draft-v1";

export type DraftAnswers = Partial<Answers>;

export type Draft = {
  answers: DraftAnswers;
  outcomeKey: OutcomeKey | null;
};

const EMPTY: Draft = { answers: {}, outcomeKey: null };

// ---- Module-level store -------------------------------------------------

const listeners = new Set<() => void>();
let cache: Draft | null = null;

function readFromStorage(): Draft {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as Draft;
    if (parsed && typeof parsed === "object" && "answers" in parsed) {
      return parsed;
    }
  } catch {
    /* ignore corrupt payload */
  }
  return EMPTY;
}

function subscribe(onChange: () => void): () => void {
  listeners.add(onChange);
  return () => {
    listeners.delete(onChange);
  };
}

function getSnapshot(): Draft {
  if (cache === null) cache = readFromStorage();
  return cache;
}

function getServerSnapshot(): Draft {
  return EMPTY;
}

function write(next: Draft): void {
  cache = next;
  if (typeof window !== "undefined") {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* quota or disabled — in-memory value still updates */
    }
  }
  for (const onChange of listeners) onChange();
}

// ---- Hook ---------------------------------------------------------------

export function useDraft() {
  const draft = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const setDraft = useCallback(
    (updater: Draft | ((prev: Draft) => Draft)) => {
      const next =
        typeof updater === "function"
          ? (updater as (prev: Draft) => Draft)(getSnapshot())
          : updater;
      write(next);
    },
    [],
  );

  const updateAnswers = useCallback((partial: DraftAnswers) => {
    const prev = getSnapshot();
    write({ ...prev, answers: { ...prev.answers, ...partial } });
  }, []);

  const setOutcomeKey = useCallback((outcomeKey: OutcomeKey | null) => {
    const prev = getSnapshot();
    write({ ...prev, outcomeKey });
  }, []);

  const clearDraft = useCallback(() => {
    if (typeof window !== "undefined") {
      try {
        window.sessionStorage.removeItem(STORAGE_KEY);
      } catch {
        /* ignore */
      }
    }
    write(EMPTY);
  }, []);

  return { draft, setDraft, updateAnswers, setOutcomeKey, clearDraft };
}
