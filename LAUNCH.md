# Launch checklist — crs-ins.co.uk

Steps that live OUTSIDE this repo and must be done by hand at go-live.
Everything in the repo is launch-ready once pushed to `main` (GitHub Actions
deploys to Netlify production on push).

## Before announcing the site

1. **Set the GA4 Measurement ID** — in the Netlify dashboard, add the
   environment variable `NEXT_PUBLIC_GA_ID` (value `G-XXXXXXXXXX`, from
   Google Analytics → Admin → Data streams) and redeploy. Without it the
   consent banner works but no analytics load.

2. **Remove the preview password gate** — in the Netlify dashboard, delete
   the `PREVIEW_AUTH_PASS` environment variable (or delete `proxy.ts` from
   the repo and push). While the gate is up, ALL visitors and search
   crawlers get 401 — including robots.txt and sitemap.xml.

3. **Verify the production deploy** — after the gate comes down, check:
   - https://crs-ins.co.uk/ redirects (308) to /site
   - Hero and specialism images load (they live in public/images/)
   - The cookie banner appears on first visit; Accept loads gtag
     (Network tab → googletagmanager.com); Decline loads nothing
   - https://crs-ins.co.uk/sitemap.xml and /robots.txt return 200

## Shortly after launch

4. **Google Search Console** — verify the domain property and submit
   https://crs-ins.co.uk/sitemap.xml.

5. **Confirm GA4 is receiving data** — Realtime report in GA, after
   accepting cookies on the live site.

6. **HSTS preload (optional)** — the site already sends the preload-eligible
   header. Submitting crs-ins.co.uk at https://hstspreload.org is a
   long-term commitment to HTTPS-only; only do this once confident.
