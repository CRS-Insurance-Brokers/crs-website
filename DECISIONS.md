# Decisions log

Locked 2026-04-23 during plan approval. Future conversations should treat these as settled unless the user reopens them.

## Q1 — Supabase access pattern
**Decision:** Service-role key in server actions; RLS as defence-in-depth.

All database reads and writes go through Next.js server actions using a Supabase client initialised with the `SUPABASE_SERVICE_ROLE_KEY`. RLS policies in the brief are kept but would block anon-key access — they are belt-and-braces, not the primary control. Anon key is never used in v0.1.

## Q2 — "Specified injury" button
**Decision:** Single tap target, restructured internally. Copy preserved verbatim. Semantic structure: a visually small heading ("A specified injury") followed by the enumerated description inside the same `<button>`, so screen readers announce the heading first.

## Q3 — Resend sender domain
**Decision:** Deferred. Email milestone will block on `MAIL_FROM` domain and preview-inbox address. `.env.example` ships with placeholder; production deploy cannot go ahead without a verified Resend domain.

## Q4 — PWA library
**Decision:** Serwist. Maintained fork of next-pwa, compatible with Next 15 / React 19 / App Router.

## Q5 — Git + GitHub
**Decision:** `git init` locally; no GitHub remote created without explicit approval. Vercel hookup also deferred.

## Q6 — PWA icons
**Decision:** Generate 192, 512, and maskable PNGs from the CRS typographic wordmark (Fraunces) on `#F3EEE1`. No external logo asset needed.

## Q7 — Kitchen-sink route
**Decision:** Ship at `/kitchen-sink`, gated by `NEXT_PUBLIC_SHOW_KITCHEN_SINK=1`. Off in prod, on in preview deploys.

## Q8 — Analytics
**Decision:** Omitted from v0.1. Not in scope, not plumbed. If added later, via Plausible behind an env flag.

## Tailwind v4 note
Tailwind v4 uses CSS-first config (`@theme` in `globals.css`) rather than `tailwind.config.ts`. The brief mentions `tailwind.config.ts` but the stated intent — "CSS-variable-based design tokens" — maps cleanly to v4's `@theme`. Going with v4's native pattern; no `tailwind.config.ts` will exist. CSS custom properties in `:root` remain authoritative.
