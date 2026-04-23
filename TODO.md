# Backlog — v0.3 and beyond

Things noted during the v0.1/v0.2 build that aren't blocking the concept
demo but are worth doing before the product goes wider.

## Persistence parity across all flows
- RIDDOR offline queue lives in IndexedDB and replays via `submitReport`
  on `online` events. Motor / Property / Public Liability flows route
  through the same `submitIncident` action when online but do NOT queue
  when offline — they fall through to the success card silently.
- Fix: widen `enqueueSubmission` to accept a `SubmitIncidentInput`
  rather than the RIDDOR-shaped `SubmitReportInput`; drain via
  `submitIncident` directly.

## Auth + multi-tenancy
- Dashboard currently shows a hard-coded Langley Demolition fixture.
- For v0.3: lightweight company-code sign-in (no email/password) so the
  demo feels like "my account". Scope: one mocked org per code, stored
  in a `companies` table, resolved by the signed session cookie.

## Real messaging backend
- HandlerPanel thread is device-local. Messages compose-and-send to
  `setMessages` only; nothing syncs to Sarah's desktop inbox.
- Sketch for v0.3: `messages` table keyed by `session_id`, server
  action + Realtime subscription, soft-push via Resend so Sarah gets an
  email for every new client message.

## Transitive uuid advisory
- `resend > svix > uuid@<14` carries a moderate-severity buffer bounds
  check advisory (GHSA-w5hq-g745-h8pq). The advisory only fires when
  `uuid.v3/v5/v6` is called with a caller-supplied buffer; neither
  resend nor svix do that.
- Wait for the upstream resend release that bumps svix past the
  affected range. Don't force-upgrade to the canary — the brief caps
  risk at stable deps only.

## Client-side photo resize
- PhotoPicker caps at 3 attachments and no client resize. A user with a
  modern iPhone can blow past the Resend 25MB cap on a single
  submission.
- Fix: canvas downscale to 1600px max dimension before base64 —
  keeps EXIF-timestamp legibility for loss-adjuster evidence while
  staying well under the email cap.

## Kitchen sink cleanup
- `/kitchen-sink` is gated by `NEXT_PUBLIC_SHOW_KITCHEN_SINK=1`. The
  page renders multiple `<h1>` levels deliberately to demo the
  Heading `size` prop — fine for this page but Lighthouse-unfriendly.
  If we ever ship the kitchen-sink in prod (we shouldn't), switch to
  nested `as="h2"/h3"` per demo section.

## Azure Static Web Apps fallback
- Brief requires build-cleanness on Azure SWA. Not verified in v0.2
  (we deploy to Netlify). `@netlify/plugin-nextjs` is Netlify-specific;
  stock `next build` works on SWA but some server-action routing
  behaviours differ. Run an end-to-end check on Azure before calling
  the brief complete.
