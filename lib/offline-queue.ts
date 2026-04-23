"use client";

/**
 * IndexedDB-backed queue for submissions taken offline.
 *
 * The brief is explicit: "Submissions attempted while offline are queued
 * in IndexedDB and retried when online; user sees 'queued, will send when
 * you're back online' instead of an error."
 *
 * Client-only — server actions don't see this. The queue is drained by a
 * client-side listener on the `online` event.
 */

import { openDB, type DBSchema, type IDBPDatabase } from "idb";
import type { SubmitReportInput } from "./schemas";

const DB_NAME = "crs-riddor-queue";
const STORE = "pending" as const;
const DB_VERSION = 1;

interface QueueSchema extends DBSchema {
  pending: {
    key: string;
    value: QueuedSubmission;
  };
}

export type QueuedSubmission = {
  id: string;
  payload: SubmitReportInput;
  queuedAt: string;
};

async function getDb(): Promise<IDBPDatabase<QueueSchema>> {
  return openDB<QueueSchema>(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE)) {
        db.createObjectStore(STORE, { keyPath: "id" });
      }
    },
  });
}

export async function enqueueSubmission(
  payload: SubmitReportInput,
): Promise<QueuedSubmission> {
  const entry: QueuedSubmission = {
    id:
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `q-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    payload,
    queuedAt: new Date().toISOString(),
  };
  const db = await getDb();
  await db.put(STORE, entry);
  return entry;
}

export async function listPending(): Promise<QueuedSubmission[]> {
  const db = await getDb();
  return db.getAll(STORE);
}

export async function removeFromQueue(id: string): Promise<void> {
  const db = await getDb();
  await db.delete(STORE, id);
}

/**
 * Attempt to flush the queue. Stops on the first failure and leaves the
 * remaining items in place for the next `online` event.
 */
export async function drainQueue(
  send: (payload: SubmitReportInput) => Promise<unknown>,
): Promise<{ sent: number; remaining: number }> {
  const pending = await listPending();
  let sent = 0;
  for (const entry of pending) {
    try {
      await send(entry.payload);
      await removeFromQueue(entry.id);
      sent += 1;
    } catch {
      break;
    }
  }
  const remaining = (await listPending()).length;
  return { sent, remaining };
}
