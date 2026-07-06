import type { NextConfig } from "next";
import path from "node:path";

// Directive order: default-src first, then specific overrides, then meta-directives.
// 'unsafe-inline' in script-src is required for Next.js App Router hydration scripts
// and the inline JSON-LD schema blocks.
// 'unsafe-eval' is only needed in dev mode — React uses eval() for callstack
// reconstruction in development. Production never uses it.
const isDev = process.env.NODE_ENV === "development";
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://www.google-analytics.com",
  "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com",
  "font-src 'self'",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const securityHeaders = [
  // Two-year HSTS with preload eligibility — Netlify always serves HTTPS.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Belt-and-braces clickjacking block: X-Frame-Options for old browsers,
  // frame-ancestors in the CSP for modern ones.
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Content-Security-Policy", value: csp },
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

  // Backward-compatibility redirects. Permanent (308) so link equity transfers
  // and Google treats them as canonical moves.
  async redirects() {
    return [
      // /site prefix from before the route-group refactor.
      { source: "/site",        destination: "/",                  permanent: true },
      { source: "/site/:path*", destination: "/:path*",            permanent: true },
      { source: "/resources",   destination: "/beyond-the-basics", permanent: true },

      // Old WordPress URLs Google still crawls after the migration. Each points
      // to its closest equivalent so the "Not found (404)" report clears and any
      // ranking the old pages held carries over. (wp-*.php system files are left
      // to 404 on purpose — they were never real content.)
      { source: "/products",                destination: "/specialisms",                         permanent: true },
      { source: "/manufacturing-wholesale", destination: "/specialisms/manufacturing-wholesale", permanent: true },
      { source: "/about-us",                destination: "/about",                               permanent: true },
      { source: "/get-a-quote",             destination: "/#contact",                            permanent: true },
      { source: "/referral-form",           destination: "/rewards",                             permanent: true },

      // Old dated WordPress blog permalinks (/YYYY/MM/DD/slug) → news.
      { source: "/:y(\\d{4})/:m(\\d{2})/:d(\\d{2})/:slug*", destination: "/news", permanent: true },

      // Retired PDF documents → closest live page.
      { source: "/wp-content/uploads/2022/04/General-Data-Protection-Policy-April-2022.pdf", destination: "/privacy", permanent: true },
      { source: "/wp-content/uploads/2023/09/Website-Consumer-Duty-Statement-11.9.23.pdf",   destination: "/terms",   permanent: true },

      // No on-site search any more — retire the old WordPress search routes.
      { source: "/search/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
