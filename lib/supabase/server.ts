import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Admin client using the service-role key. Bypasses RLS — only use from
 * server actions or route handlers, never from a client component.
 *
 * Returns null if required env vars are missing so callers can degrade
 * gracefully (persistence failures must not block the user per the brief).
 */
let cached: SupabaseClient | null | undefined;

export function getSupabaseAdmin(): SupabaseClient | null {
  if (cached !== undefined) return cached;
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    cached = null;
    if (process.env.NODE_ENV !== "test") {
      console.warn(
        "[supabase] SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY not set. Persistence is disabled; submissions and log reads will succeed but not hit the database.",
      );
    }
    return null;
  }
  cached = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return cached;
}
