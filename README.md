# CRS RIDDOR Helper

Concept build — PMBRTN &times; CRS Insurance Brokers. A client-pocket app
for a commercial broker serving high-hazard construction trades: report
an incident across any line (RIDDOR, Motor, Property, Public Liability),
see policies and claims at a glance, message Sarah, pull a certificate
of insurance on demand. Ships as a Next.js 16 PWA with a Capacitor iOS
wrapper for TestFlight.

- **Web**: [crs-riddor.netlify.app](https://crs-riddor.netlify.app)
- **Source**: [github.com/jpembo83-source/crs-riddor](https://github.com/jpembo83-source/crs-riddor)
- **iOS**: TestFlight (bundle `com.crsriddor.app`, ASC app id 6763401002)

See [PLAN.md](./PLAN.md) for the original migration plan from the
`RiddorHelper.jsx` artifact, [DECISIONS.md](./DECISIONS.md) for the
locked-in calls that shaped the v0.1 wedge, and [TODO.md](./TODO.md) for
known gaps worth addressing in v0.3.

## Quick start

```bash
npm install
npm run dev           # http://localhost:3000
```

Everything renders with mocked data by default. To demo the component
library, set `NEXT_PUBLIC_SHOW_KITCHEN_SINK=1` and visit
[/kitchen-sink](http://localhost:3000/kitchen-sink).

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Turbopack dev server on :3000 |
| `npm run build` | Production build |
| `npm run start` | Run the production build |
| `npm run lint` | ESLint (flat config) |
| `npm run typecheck` | `tsc --noEmit` under strict + `noUncheckedIndexedAccess` |
| `npm run test` | Vitest — 26 unit tests (decision-tree truth table + structural checks) |
| `npm run test:e2e` | Playwright — happy-path from dashboard through outcome submit |

## Tech stack

- **Next.js 16** App Router, React 19.2, TypeScript strict, Turbopack
  for both dev and prod builds
- **Tailwind v4** with CSS-variable design tokens in `app/globals.css`
- **Fonts**: Fraunces (display) + IBM Plex Sans (body) via
  `next/font/google`, self-hosted
- **Persistence**: Supabase (Postgres) accessed via server actions with
  service-role auth; anonymous per-tab session via signed HTTP-only
  cookie
- **Email**: Resend, scheduled through `next/server`'s `after()` so the
  submit action returns before the mail goes out
- **PWA**: hand-rolled service worker (Capacitor 7 / Next 16 /
  Turbopack rule out Serwist's webpack plugin), `idb` for the offline
  submission queue
- **Native wrapper**: Capacitor 7 iOS, `com.crsriddor.app`, Swift
  Package Manager (no CocoaPods)

## Environment variables

Copy [.env.example](./.env.example) to `.env.local` and fill as needed.
All persistence and email is optional in v0.2 — missing config degrades
gracefully per the brief's never-block-the-user rule.

| Variable | When to set | Notes |
| --- | --- | --- |
| `SESSION_SECRET` | Always in prod | 32+ char random. `node -e "console.log(require('node:crypto').randomBytes(32).toString('base64url'))"` |
| `SUPABASE_URL` | For persistence | Project URL from Supabase Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY` | For persistence | Service role key (bypasses RLS; server-only) |
| `RESEND_API_KEY` | For email | Resend dashboard → API Keys |
| `MAIL_FROM` | For email | Verified sender in Resend |
| `HANDLER_EMAIL` | For email | Recipient (preview inbox in dev, claims address in prod) |
| `NEXT_PUBLIC_SHOW_KITCHEN_SINK` | Preview only | Set to `1` to expose `/kitchen-sink` |

## Supabase schema

After setting `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`, apply the
migrations:

```bash
# via Supabase CLI
supabase db push

# or paste each .sql file into the SQL editor at
# https://supabase.com/dashboard/project/<ref>/sql/new
```

Files in order: [`0001_incident_reports.sql`](./supabase/migrations/0001_incident_reports.sql),
[`0002_incident_line_and_attachments.sql`](./supabase/migrations/0002_incident_line_and_attachments.sql).
RLS policies are present as defence-in-depth; the service role bypasses
them during normal operation.

## Deploy — web (Netlify)

The repo is wired to a Netlify site (`crs-riddor` under team `jpembo83`)
via `netlify.toml` and `@netlify/plugin-nextjs`.

```bash
# First-time setup — creates the project + links this directory
netlify sites:create --account-slug jpembo83 --name crs-riddor
netlify link --id <project-id>

# Ongoing deploys
git push origin main                 # Netlify auto-builds from GitHub
# or for ad-hoc manual deploys:
netlify deploy --build --prod
```

Set all production env vars via the Netlify dashboard
(`https://app.netlify.com/projects/crs-riddor/configuration/env`) or
the CLI (`netlify env:set KEY value --context production`).

### Azure Static Web Apps fallback

The brief requires the app to also build cleanly on Azure SWA.
`@netlify/plugin-nextjs` is Netlify-specific, but stock `next build`
works on SWA. See [TODO.md](./TODO.md) for the end-to-end verification
that's still pending.

## Deploy — iOS (TestFlight)

Prerequisites: Apple Developer Program membership, Xcode 26+, signed
into your Apple ID in Xcode, and an App Store Connect API key at
`~/.appstoreconnect/private_keys/AuthKey_<keyid>.p8`.

One-time setup for this repo:

1. The bundle ID `com.crsriddor.app` is registered in the Apple
   Developer portal under Team `V5F47Y6MGH`.
2. The App Store Connect app record exists (app id 6763401002).
3. An internal TestFlight group called "PMBRTN + CRS" is configured
   with automatic distribution enabled.

Every new build:

```bash
# 1. Bump the iOS project version
#    edit ios/App/App.xcodeproj/project.pbxproj
#    change CURRENT_PROJECT_VERSION = N → N+1

cd ios/App

# 2. Archive
xcodebuild archive \
  -project App.xcodeproj -scheme App -configuration Release \
  -destination "generic/platform=iOS" \
  -archivePath build/CRSRiddor.xcarchive \
  -allowProvisioningUpdates

# 3. Export
xcodebuild -exportArchive \
  -archivePath build/CRSRiddor.xcarchive \
  -exportPath build/export \
  -exportOptionsPlist ExportOptions.plist \
  -allowProvisioningUpdates

# 4. Upload
xcrun altool --upload-app \
  -f build/export/App.ipa -t ios \
  --apiKey <YOUR_KEY_ID> \
  --apiIssuer <YOUR_ISSUER_ID>
```

Processing takes 5–15 minutes. Auto-distribution delivers the invite to
every tester in the internal group. First-time builds require answering
the export-compliance question in ASC — subsequent builds inherit the
`ITSAppUsesNonExemptEncryption = false` flag from `Info.plist`.

### Capacitor shell note

The native shell loads `https://crs-riddor.netlify.app` directly via
`server.url`, so server actions and schema changes flow through the
live web deploy without an App Store update. `capacitor.config.ts`
points `webDir` at `capacitor-shell/` (a 20-line bounce page) rather
than `.next` because the Next.js build output contains sharp's
`darwin-arm64.node` and libvips `.dylib`, which Apple rejects in the
bundle. Do not change `webDir` back to `.next`.

## Architecture map

```
app/                               → Next App Router
  layout.tsx                         fonts, metadata, PWA register
  page.tsx                           dashboard (Langley Demolition mocked)
  actions.ts                         server actions: submitIncident, fetchLog, submitReport wrapper
  report/                            multi-FNOL routing
    page.tsx                         chooser (RIDDOR / Motor / Property / PL / call)
    riddor/page.tsx                  full URL-stateful RIDDOR flow
    motor/page.tsx                   Motor FNOL
    property/page.tsx                Property FNOL
    public-liability/page.tsx        PL FNOL
  cover/
    page.tsx                         your cover — policies, claims, renewal
    certificate/page.tsx             printable Certificate of Insurance
  kitchen-sink/                      gated component library
components/
  flow/                              per-flow screens + the generic OutcomeView
  panels/                            HandlerPanel + LogPanel sharing BottomSheet
  ui/                                Button, Card, Heading, Body, SectionLabel, Checkbox,
                                     OutcomeBanner, ActionStep
  dashboard/Dashboard.tsx            home-tile layout
  cover/                             CoverOverview + Certificate
  TopBar, FooterMark, RegisterPWA, InstallPrompt
lib/
  decision-tree.ts                   RIDDOR OUTCOMES + DANGEROUS_ITEMS + DISEASE_ITEMS
                                     + deriveOutcome — the single source of truth
  flows/                             motor.ts, property.ts, public-liability.ts, shared.ts
  session.ts                         signed HTTP-only cookie (HMAC-SHA256 + timingSafeEqual)
  supabase/server.ts                 service-role admin client
  email.ts                           Resend wrapper — never-throws
  schemas.ts                         Zod schemas for server action inputs
  mock-account.ts                    Langley Demolition Ltd fixture
  use-draft.ts                       useSyncExternalStore-based draft store
  offline-queue.ts                   idb-backed offline submission queue
supabase/migrations/                 numbered SQL migrations
ios/App/                             Capacitor 7 Xcode project
capacitor-shell/index.html           tiny bounce page that is the iOS webDir
scripts/generate-icons.mjs           Sharp-based PWA + iOS icon generator
tests/
  decision-tree.test.ts              26 unit tests — truth table + structure
  e2e/flow.spec.ts                   Playwright happy-path
```

## Lighthouse

Latest mobile run against the live deploy:

| | Performance | Accessibility | Best practices | SEO |
| --- | --- | --- | --- | --- |
| Mobile | 100 | 100 | 100 | 100 |
| Desktop | 100 | 100 | 100 | 100 |

Rerun:

```bash
npx lighthouse https://crs-riddor.netlify.app \
  --output=html --output-path=./lighthouse.html \
  --only-categories=performance,accessibility,best-practices,seo
```

## License

Private. PMBRTN Consultancy, for CRS Insurance Brokers.
