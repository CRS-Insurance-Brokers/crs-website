# Launch checklist — crs-ins.co.uk

Steps that live OUTSIDE this repo and must be done by hand at go-live.
Everything in the repo is launch-ready once pushed to `main` (GitHub Actions
deploys to Netlify production on push).

## Before announcing the site

GA4 is already wired in (Measurement ID G-6BWHLCMP75, baked into
ConsentBanner.tsx) — nothing to configure for analytics.

1. **Remove the preview password gate** — in the Netlify dashboard, delete
   the `PREVIEW_AUTH_PASS` environment variable (or delete `proxy.ts` from
   the repo and push). While the gate is up, ALL visitors and search
   crawlers get 401 — including robots.txt and sitemap.xml.

2. **Verify the production deploy** — after the gate comes down, check:
   - https://crs-ins.co.uk/ redirects (308) to /site
   - Hero and specialism images load (they live in public/images/)
   - The cookie banner appears on first visit; Accept loads gtag
     (Network tab → googletagmanager.com); Decline loads nothing
   - https://crs-ins.co.uk/sitemap.xml and /robots.txt return 200

## Shortly after launch

3. **Google Search Console** — verify the domain property and submit
   https://crs-ins.co.uk/sitemap.xml.

4. **Confirm GA4 is receiving data** — Realtime report in GA, after
   accepting cookies on the live site.

5. **HSTS preload (optional)** — the site already sends the preload-eligible
   header. Submitting crs-ins.co.uk at https://hstspreload.org is a
   long-term commitment to HTTPS-only; only do this once confident.
