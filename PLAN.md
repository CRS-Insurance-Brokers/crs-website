# Migration plan — RiddorHelper.jsx → Next.js 15 app

**Status:** Awaiting approval before any scaffold work begins.

This plan is a re-platforming of the canonical artifact, not a redesign. Copy, decision logic, token values and visual identity are preserved verbatim. The work is: move it off a single-file React artifact, onto a real stack, behind real persistence, with real accessibility and a real deploy.

---

## 1. What the artifact actually is

Confirmed after end-to-end read of `RiddorHelper.jsx`:

- **8 steps** in the state machine: `welcome → incident-type → {injury-who | dangerous-check | disease-check | call-handler(outcome)}`. Injury branch splits `injury-who → {injury-worker-severity | injury-public-severity} → outcome`.
- **7 outcome keys**: `report-immediate`, `report-10days`, `report-15days`, `report-disease`, `record-only`, `not-reportable`, `call-handler`. Three severities: `danger`, `amber`, `success`.
- **13 design tokens** in `theme` (bg, surface, surfaceSoft, ink, inkMuted, line, primary, primaryInk, accent, danger, success, amberSoft, dangerSoft, successSoft).
- **5 UI primitives** already extracted inside the file: `Button`, `Card`, `SectionLabel`, `Heading`, `Body`. Plus the outcome banner, numbered-action row, handler panel, log panel, top bar, footer.
- **11 dangerous-occurrence items** and **8 disease items**, stored as module-scope arrays inside the component.
- **Persistence** is `window.storage` (keyed `riddor-log`), capped at 25 entries.
- **Handler**: Sarah Whitlock, `01455 244630`, `Claims@crs-ins.co.uk`, "typically within 30 minutes, Mon–Fri".
- **Footer mark**: `Concept build · PMBRTN × CRS · v0.1`.

Decision-tree branches map to outcomes as follows (all preserved exactly):

| Step / answer | Outcome |
| --- | --- |
| incident-type → not sure | `call-handler` |
| injury-worker → fatal | `report-immediate` |
| injury-worker → specified | `report-10days` |
| injury-worker → >7 days off | `report-15days` |
| injury-worker → 3–7 days | `record-only` |
| injury-worker → minor | `not-reportable` |
| injury-public → fatal | `report-immediate` |
| injury-public → hospital | `report-10days` |
| injury-public → no hospital | `not-reportable` |
| dangerous-check → any ticked | `report-10days` |
| dangerous-check → none ticked | `not-reportable` |
| disease-check → any ticked | `report-disease` |
| disease-check → none ticked | `not-reportable` |

That's the 13-branch truth table the Vitest suite will cover.

---

## 2. What survives unchanged

- Every line of copy inside `OUTCOMES`, `DANGEROUS_ITEMS`, `DISEASE_ITEMS`, `HANDLER`, and every question screen.
- The seven-outcome verdict/summary/deadline/action structure.
- The decision tree (branch structure and outcome mapping).
- The design tokens. Values exactly as listed.
- Typography stack (Fraunces display, IBM Plex Sans body), weights, letter-spacing.
- The 2–3px border radius, no gradients, no shadows, no purple — all preserved.
- The typographic `CRS Insurance` wordmark in the top bar.
- The fixed footer mark on every view, every deploy.
- The sticky mobile bottom-sheet style of the handler and log panels.

---

## 3. What changes in the re-platforming

### 3.1 Structure
Single artifact → App Router tree as specified in the brief:
```
app/{layout.tsx,page.tsx,actions.ts,globals.css}
components/{ui/*, flow/*, panels/*, TopBar.tsx, Footer.tsx}
lib/{decision-tree.ts, supabase/{client.ts,server.ts}, session.ts, email.ts}
tests/{decision-tree.test.ts, e2e/flow.spec.ts}
public/{manifest.json, icons/*, sw.js}
```
Server components by default; client components only for interactive flow screens and the two bottom sheets.

### 3.2 State machine
- In-artifact: `useState` step + `stepStack`.
- Target: URL-driven via `?step=injury-worker-severity`. `useSearchParams` + `router.push` with `scroll:false`. Back button works natively; deep-links work. Answers live in `sessionStorage` (key `riddor-draft`), flushed on submit or reset.

### 3.3 Styling
- In-artifact: inline-styled DOM + Google Fonts `@import` tag.
- Target: CSS custom properties in `globals.css`, Tailwind v4 theme mapping those custom properties to utility classes. `next/font/google` for Fraunces (300/400/500) and IBM Plex Sans (400/500/600), self-hosted. The `@import` Google Fonts tag is removed.
- Every inline-styled element becomes a reusable component under `components/ui/`. Token values are referenced via the CSS variables — never hardcoded in JSX.

### 3.4 Accessibility fixes required
The artifact has real a11y bugs that must be fixed during the port:
- **Clickable `<div>` checkboxes** in the dangerous/disease screens become real `<input type="checkbox">` with `<label>`, keyboard-focusable, Space-toggleable, with visible focus rings. The "card look" moves to a `:has(:checked)` style on the label.
- **`dangerouslySetInnerHTML`** used for one dangerous item (`&ge;` and `&gt;` HTML entities) — replaced with literal Unicode (`≥`, `>`) in the typed constants; all `dangerouslySetInnerHTML` removed.
- **Long button labels** (the "specified injury" button is >500 chars) stay as single buttons — the content is preserved, but semantics use a `<button>` with heading + description structure inside, so screen readers announce the heading first. No redesign, just better internal structure.
- `aria-live="polite"` region announces step changes and outcome reveals.
- Page `<title>` updates per step.
- Focus ring: 2px solid `--primary` with 2px offset, matches palette, never browser default.
- Tap targets: audit all interactive elements for ≥48×48 CSS px (the top-bar history icon is currently smaller).
- `prefers-reduced-motion`: the button `scale(0.99)` press effect and any transitions go behind the media query.

### 3.5 Persistence (Supabase)
Schema matches the brief exactly. **One design question to resolve before writing code** — see Q1 below about RLS vs service role.

- Session cookie: HTTP-only, `SameSite=Lax`, `Secure`, signed with HMAC-SHA256 using `SESSION_SECRET`. 90-day `Max-Age`. Cookie name `crs_session`. Value: `{sessionId}.{hmac}`. Written by a middleware or `ensureSession` server action on first visit.
- All DB access goes through server actions. Client never touches Supabase directly in v0.1.
- `ip_hash`: SHA-256 of `IP + SESSION_SECRET`, never raw IP. `user_agent` stored verbatim.

### 3.6 Email
- Resend via `@resend/node`. Recipient from `HANDLER_EMAIL` env var. `MAIL_FROM` env var for the sender address (must be a verified Resend domain — see Q3).
- Plaintext + HTML bodies rendered server-side. Subject: `[Concept demo] RIDDOR submission — {outcome verdict}`.
- **The action never throws on email failure.** DB row still writes, `handler_notified_at` stays null, a row is written to a light `email_failures` log table (or console + Vercel logs for v0.1). UI always shows the success card.

### 3.7 Audit log panel
- In-artifact: reads all local entries.
- Target: `fetchLog()` server action, filtered by `session_id` from the cookie. Shows at most 25 entries (same cap). Empty state unchanged.

### 3.8 PWA
- `manifest.json` with name/short_name, theme `#F3EEE1`, background `#F3EEE1`, `display: standalone`, icons 192/512 + maskable.
- Service worker: propose **Serwist** (maintained fork of next-pwa; the original next-pwa has known issues with App Router on Next 15 / React 19). Confirms in Q4. App-shell precache + runtime cache for fonts and icons.
- Offline submission queue: IndexedDB (idb library), drained by the service worker on `sync` event where supported, otherwise retried on next visit. The client calls the same server action; if `fetch` fails it enqueues instead and shows "queued, will send when you're back online".
- Install prompt: shown on 2nd visit on mobile only, using `beforeinstallprompt` + a sessionStorage visit counter. Dismissible, remembers dismissal.

### 3.9 Testing
- Vitest: one parameterised test per row of the outcome truth table above. Plus unit tests for `deriveOutcome(answers)` edge cases (empty checks → `not-reportable`, mixed checks, etc).
- Playwright: one happy path — welcome → injury → worker → over-7-day → outcome → submit → success.

---

## 4. Decisions I need from you before I scaffold

**Q1 — Supabase RLS with anonymous sessions.** The RLS policy in the brief references `current_setting('request.jwt.claims', true)::json->>'session_id'`. With a plain signed cookie and no Supabase auth, there is no JWT to carry claims — the policy would deny everything. Three realistic options:

- **(A)** Keep the RLS policies but access the DB only via the service role key in server actions, which bypasses RLS. RLS becomes defence-in-depth if we ever expose the anon key. Simplest, standard pattern for this shape of app. **My recommendation.**
- **(B)** Mint a short-lived custom JWT per session (signed with the Supabase JWT secret, embedding `session_id` as a claim), set it on a Supabase client, and rely on RLS. Closer to the brief's literal text, but more moving parts.
- **(C)** Use Supabase anonymous auth (`supabase.auth.signInAnonymously()`) and map `session_id` to `auth.uid()`. Tightest fit with RLS but adds a Supabase auth dependency we said we didn't want in v0.1.

Which?

**Q2 — Long "specified injury" button.** It's currently ~500 characters of copy in a single `<button>`. Content stays verbatim per the brief. Visually, I'd like to keep it as one tap target but restructure the *inside* so a screen reader reads the short heading ("A specified injury") first and the enumerated list as a description. No copy change, no decision-tree change. Acceptable?

**Q3 — Resend `MAIL_FROM` domain.** What domain should the concept-build emails come from? Options:
- `noreply@pmbrtn.com` (if PMBRTN's domain is already on Resend)
- `noreply@{a subdomain you own}`
- Resend's onboarding/testing domain (works only for dev, Resend blocks it in prod)

For preview deploys, `HANDLER_EMAIL` defaults to a PMBRTN test inbox — what address?

**Q4 — PWA library.** `next-pwa` vs **Serwist** (my recommendation for Next 15/App Router/React 19 compatibility) vs hand-rolled. Preference?

**Q5 — Git & deploys.** The directory isn't a git repo. Shall I `git init` and create a private GitHub repo under your account (which org/user?) so Vercel preview deploys can be wired on the first PR? Or do you want to create the remote yourself and I work against it?

**Q6 — PWA icons.** No logo files — I'll generate 192/512 + maskable PNGs from the CRS typographic wordmark on the `--bg` colour. OK, or do you want to supply?

**Q7 — Kitchen-sink route.** Brief says "remove before launch". My read: keep it at `/kitchen-sink` gated behind `NEXT_PUBLIC_SHOW_KITCHEN_SINK=1` (off in prod, on in preview) so stakeholders can see the component library on the preview URL without it being live-visible. Acceptable, or delete entirely once the port is done?

**Q8 — Analytics.** Brief says "optional, env-gated". Default to off, add Plausible plumbing only, document the env var in the README? Or omit entirely from v0.1?

---

## 5. Proposed delivery order

Mirrors the brief's "First tasks in order", with milestone stops:

1. **Plan approved** ← you are here
2. Repo init + Next 15 scaffold + Tailwind v4 + fonts + tokens → running dev server on `localhost:3000`
3. Component library + `/kitchen-sink` showing every primitive against tokens → **milestone: design system locked**
4. `lib/decision-tree.ts` + Vitest suite covering all 13 branches → **milestone: logic locked**
5. Flow screens built and wired to URL state → **milestone: flow working end-to-end, no persistence**
6. Supabase schema + session cookie + server actions + log panel → **milestone: persistence wired**
7. Resend integration + email templates → **milestone: email wired**
8. PWA: manifest, service worker, offline queue, install prompt → **milestone: installable**
9. Playwright happy-path test + Lighthouse pass → **milestone: tests green**
10. README + `.env.example` + Vercel deploy + Azure SWA build verification → **milestone: shipped to preview URL**

At each milestone I'll stop and summarise what's working, what's next, and anything I found that wasn't in the brief.

---

## 6. Risks I'm flagging now

- **Bundle size budget (<150 KB gzipped).** `lucide-react` tree-shakes per icon, so we're fine there; Supabase JS client is ~25 KB gzipped but lives in server actions so it shouldn't hit the client bundle at all. Real risk: the PWA runtime (Serwist adds ~5 KB) and any client-side idb wrapper. I'll audit with `@next/bundle-analyzer` at the PWA milestone.
- **Lighthouse Accessibility = 100 is uncompromising.** The artifact's div-as-checkbox and long button labels have to be fixed carefully. Budgeted into step 3 above, not step 9.
- **Azure Static Web Apps + server actions.** SWA does support Next.js with SSR via a managed integration, but server actions on SWA are less battle-tested than on Vercel. I'll verify the Azure build early (step 2) rather than leave it to the end. If it's materially painful, I'll raise it before investing more.
- **Hydration warnings from the `<style>` tag with Google Fonts `@import`** in the artifact — dropped by design (we use `next/font`), so not a port issue. Flagging because it's a tempting "fast path" to ignore.

---

## 7. What I am explicitly not doing

Per the brief's out-of-scope list: no auth UI, no multi-tenancy, no admin dashboard, no PAS integration, no voice, no photo capture, no analytics beyond optional Plausible, no non-RIDDOR FNOL paths, en-GB only. Anything I notice while porting that feels like a good v0.2 idea lands in `TODO.md`, not in code.

---

**Ready to proceed on Q1–Q8. Once those are settled, I'll `git init`, scaffold, and check in at the design-system milestone.**
