import type { NextConfig } from "next";
import path from "node:path";

const securityHeaders = [
  // Two-year HSTS with preload eligibility — Netlify always serves HTTPS.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // The site has no legitimate framing use case; blocks clickjacking overlays.
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // The site uses none of these APIs; deny so embedded third parties can't either.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
];

const nextConfig: NextConfig = {
  // Pin the workspace root so Turbopack ignores any stray package-lock.json
  // sitting above the project — was triggering "Can't resolve tailwindcss"
  // failures on the Netlify build before this was set.
  turbopack: {
    root: path.resolve(__dirname),
  },

  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },

  // Bare URL hits the marketing site. All redirects permanent — /site is the
  // canonical homepage URL and Google should treat the move as final.
  async redirects() {
    return [
      { source: "/",        destination: "/site",          permanent: true },
      { source: "/privacy", destination: "/site/privacy",  permanent: true },
      { source: "/terms",   destination: "/site/terms",    permanent: true },
      { source: "/cookies", destination: "/site/cookies",  permanent: true },
    ];
  },
};

export default nextConfig;
