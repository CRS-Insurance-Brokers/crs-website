import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * HTTP Basic Auth gate for the entire site.
 *
 * Set PREVIEW_AUTH_USER and PREVIEW_AUTH_PASS in the Netlify dashboard
 * (Site settings → Environment variables). When PREVIEW_AUTH_PASS is empty,
 * the gate is disabled — useful for local development without auth noise.
 *
 * Excluded from the gate:
 *   - /_next/static, /_next/image (build assets)
 *   - /favicon.ico, manifest.json, icons (PWA chrome)
 *   - /api/health (uptime checks; add other endpoints to bypass list as needed)
 *
 * Once you're ready to remove the gate (real public launch), delete this file
 * — Next 16 will compile without it.
 */

const PUBLIC_PATHS = [
  "/_next/static",
  "/_next/image",
  "/favicon.ico",
  "/manifest.json",
  "/icons/",
  "/api/health",
];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static + system paths
  if (PUBLIC_PATHS.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  const expectedUser = process.env.PREVIEW_AUTH_USER || "crs-preview";
  const expectedPass = process.env.PREVIEW_AUTH_PASS;

  // No password configured (e.g. local dev) → let it through
  if (!expectedPass) {
    return NextResponse.next();
  }

  const authHeader = request.headers.get("authorization");
  if (authHeader?.startsWith("Basic ")) {
    const encoded = authHeader.slice(6);
    // Edge-runtime-safe base64 decode
    const decoded = atob(encoded);
    const sepIdx = decoded.indexOf(":");
    const user = decoded.slice(0, sepIdx);
    const pass = decoded.slice(sepIdx + 1);
    if (user === expectedUser && pass === expectedPass) {
      return NextResponse.next();
    }
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="CRS Preview", charset="UTF-8"',
    },
  });
}

export const config = {
  // Match everything except internal Next paths and explicit allowlist above.
  // Note: this matcher is the FIRST filter; the in-function PUBLIC_PATHS check
  // is a second-line allow-list for clarity.
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
