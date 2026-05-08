# CRS Insurance Brokers — Website

The new public-facing website for **CRS Insurance Brokers** (a trading name
of CIB Group UK Ltd, FCA FRN 960073). Specialist commercial insurance broker
for demolition, construction, contractors and engineers, and manufacturing
trades. Lutterworth, UK.

- **Live preview**: [crs-riddor.netlify.app](https://crs-riddor.netlify.app)
  (gated — basic auth, see Netlify env vars)
- **Repo**: [github.com/jpembo83-source/crs-riddor](https://github.com/jpembo83-source/crs-riddor)
- **Deploy**: Netlify, auto-deploy on push to `main`
- **Stack**: Next.js 16 (App Router) + Tailwind CSS v4 + TypeScript

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000  →  redirects to /site
```

Useful scripts:

```bash
npm run build       # production build
npm run typecheck   # tsc --noEmit
npm run lint        # eslint
```

## Routes

| Path | What |
| --- | --- |
| `/` | 307 redirects to `/site` |
| `/site` | Marketing homepage (editorial broadsheet design) |
| `/site/specialisms/high-risk` | High Risk specialism page |
| `/robots.txt` | Auto-generated; explicit AI crawler directives |
| `/sitemap.xml` | Auto-generated |
| `/llms.txt` | Static AI-finder index |

## Project structure

```
app/
├── globals.css            Tailwind entry + design tokens (m-* namespace)
├── layout.tsx             Bare root (html/body); per-segment metadata lives below
├── robots.ts              robots.txt — Next 16 metadata convention
├── sitemap.ts             sitemap.xml — Next 16 metadata convention
└── site/                  Marketing site (everything is here)
    ├── layout.tsx         Loads Instrument Serif + Poppins + Geist Mono;
    │                      adds [data-marketing] wrapper for scoped styles;
    │                      embeds Organization JSON-LD on every page
    ├── marketing.css      Body styles + animations scoped to [data-marketing]
    ├── page.tsx           Homepage (composes 11 sections)
    ├── components/        16 components: Nav, Hero, SpecialismsBento,
    │                      WhyCRS, Claims, Team, Insights, LinkedInFeed,
    │                      Testimonial, FooterCTA, Footer, plus primitives
    │                      (Reveal, Counter, HoldToCall, Marginalia, icons)
    ├── data/
    │   ├── content.ts     All placeholder copy with @status flags
    │   └── linkedin-posts.ts   LinkedIn feed source (placeholder)
    └── specialisms/
        ├── _components/FAQ.tsx        Accordion (client component)
        └── high-risk/page.tsx         High Risk specialism (8 sections)

proxy.ts                   HTTP Basic Auth gate for the pre-launch preview
public/
├── crs-logo-light.svg     Indigo wordmark (use on light surfaces)
├── crs-logo-dark.svg      White wordmark (use on dark surfaces)
├── llms.txt               Manual AI-finder index
└── manifest.json          PWA manifest
```

## Design system

The marketing site uses an **editorial broadsheet** design language:

- **Palette**: `#262262` indigo (primary) + `#E56C70` coral (action) + `#F7F7F7`
  off-white. All tokens are namespaced `--color-m-*` in `app/globals.css` and
  generate Tailwind utilities (`bg-m-ink`, `text-m-coral`, etc.).
- **Type**: Instrument Serif (display, italic emphasis) + Poppins (body, sans)
  + Geist Mono (eyebrows, tabular figures).
- **Motion**: custom cubic-bezier easings (Emil Kowalski's stronger curves);
  IntersectionObserver-driven reveals (no Framer Motion); spring parallax on
  the hero photo.
- **Hard-edged cards**: no border-radius on cards; hairline borders;
  corner-crosshair markers on featured images; coral 1-px wipe at the bottom
  edge on hover.
- **Print-survey aesthetic**: plate captions (`Plate 02 — Specialisms`),
  drop caps, footnoted asides, marginalia gutter on the right edge.

## Content

All placeholder copy lives in **`app/site/data/content.ts`** with a `@status`
flag per block:

- `verified` — copied verbatim from crs-ins.co.uk, no change needed
- `from-brief` — Jason's CRS rebuild brief; treated as authoritative direction
- `placeholder` — invented for the design north-star; **MUST be replaced
  before launch**

Once a block has real CRS-supplied content, change `status: "placeholder"` to
`"verified"` so future maintainers can see at a glance what's done.

## Pre-launch checklist

| Status | Item |
| --- | --- |
| ⚠️ | Replace `team`, `testimonial`, `clientRoster`, `insights`, `heroStats`, `whyPillars` proof stats — all flagged `placeholder` in `content.ts` |
| ⚠️ | Build remaining specialism pages (Construction, Contractors & Engineers, Manufacturing & Wholesale) — clone `app/site/specialisms/high-risk/page.tsx` |
| ⚠️ | Build About / Team page with named staff + qualifications |
| ⚠️ | Build "How we are paid" transparency page |
| ⚠️ | Build /contact page with two-step qualifying form |
| ⚠️ | Wire LinkedIn feed to a real source (`app/site/data/linkedin-posts.ts` documents the migration paths) |
| ⚠️ | Replace Unsplash placeholder photos with real CRS photography |
| ⚠️ | Create Wikidata entry for CRS Insurance Brokers / CIB Group UK Ltd |
| ✅ | Schema.org JSON-LD (Organization + InsuranceAgency + LocalBusiness + FAQPage) |
| ✅ | robots.txt with explicit AI bot directives |
| ✅ | sitemap.xml + llms.txt |
| ✅ | OpenGraph + Twitter card metadata |
| ✅ | Title tags with geographic qualifiers |
| ✅ | Single H1 per page, semantic heading hierarchy |
| ✅ | Brand-aligned palette, Poppins typography, real CRS logo |

When you remove the basic-auth gate for public launch:

1. Delete `proxy.ts`
2. In Netlify dashboard → Site settings → Environment variables, unset
   `PREVIEW_AUTH_USER` and `PREVIEW_AUTH_PASS`
3. Redeploy

## Environment variables

See `.env.example`. The only vars that affect the deployed site:

| Var | Purpose |
| --- | --- |
| `PREVIEW_AUTH_USER` | Basic auth username for the pre-launch gate |
| `PREVIEW_AUTH_PASS` | Basic auth password (leave empty in local dev to bypass the gate) |

Set both in the Netlify dashboard, not in `.env.local`.

## Deploy

GitHub → Netlify auto-deploy is configured (push to `main` triggers a
production build). For manual deploys from a laptop:

```bash
netlify deploy --build           # draft URL, doesn't touch production
netlify deploy --build --prod    # promotes to crs-riddor.netlify.app
```

## Note for collaborators

This repo previously hosted a separate **RIDDOR Helper** FNOL prototype
alongside the website. That code was moved out in commit `<see git log>` —
recover any of it via:

```bash
git log --diff-filter=D -- '<path>'   # find the deleting commit
git show <commit>:<path>              # read the file at that commit
git checkout <commit> -- '<path>'     # restore it to the working tree
```

The original FNOL implementation (Welcome / Outcome / DangerousCheck /
DiseaseCheck / Severity steps) lives in commits up to and including
`c2a8788` (`docs: final README + TODO + cleanup`).
