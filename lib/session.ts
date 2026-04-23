import { createHash, createHmac, randomUUID, timingSafeEqual } from "node:crypto";
import { cookies, headers } from "next/headers";

const COOKIE_NAME = "crs_session";
const MAX_AGE_SECONDS = 60 * 60 * 24 * 90; // 90 days

/**
 * Secret used to sign the session cookie. Required in production. In
 * development we fall back to a deterministic-but-loud placeholder so the
 * app still works without a .env.local; the warning reminds us to set it.
 */
function getSecret(): string {
  const secret = process.env.SESSION_SECRET;
  if (secret && secret.length >= 32) return secret;
  if (process.env.NODE_ENV === "production") {
    throw new Error(
      "SESSION_SECRET must be set to a 32+ character value in production.",
    );
  }
  console.warn(
    "[session] SESSION_SECRET is missing or too short; using a development placeholder. Set a real value in .env.local.",
  );
  return "dev-placeholder-secret-do-not-use-in-prod";
}

function sign(payload: string): string {
  return createHmac("sha256", getSecret())
    .update(payload)
    .digest("base64url");
}

function isValidUuid(v: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(v);
}

function verify(signed: string): string | null {
  const firstDot = signed.indexOf(".");
  if (firstDot < 0) return null;
  const payload = signed.slice(0, firstDot);
  const mac = signed.slice(firstDot + 1);
  if (!isValidUuid(payload)) return null;
  const expected = sign(payload);
  const a = Buffer.from(mac);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return null;
  return timingSafeEqual(a, b) ? payload : null;
}

/**
 * Return the current session UUID, creating and writing the cookie if it's
 * missing or tampered. Server-action / route-handler only — requires the
 * async `cookies()` API introduced in Next 15 and made mandatory in Next 16.
 */
export async function getOrCreateSessionId(): Promise<string> {
  const store = await cookies();
  const existing = store.get(COOKIE_NAME)?.value;
  if (existing) {
    const verified = verify(existing);
    if (verified) return verified;
  }
  const id = randomUUID();
  const signed = `${id}.${sign(id)}`;
  store.set({
    name: COOKIE_NAME,
    value: signed,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: MAX_AGE_SECONDS,
  });
  return id;
}

/**
 * SHA-256 hash of (IP + secret) — never store raw IPs.
 * Returns null if we can't read the client IP (local dev, certain proxies).
 */
export async function getIpHash(): Promise<string | null> {
  const hdrs = await headers();
  const forwarded = hdrs.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() ?? hdrs.get("x-real-ip");
  if (!ip) return null;
  return createHash("sha256").update(`${ip}:${getSecret()}`).digest("hex");
}

export async function getUserAgent(): Promise<string | null> {
  const hdrs = await headers();
  return hdrs.get("user-agent");
}
