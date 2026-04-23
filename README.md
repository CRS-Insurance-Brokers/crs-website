# CRS RIDDOR Helper

Concept build &mdash; PMBRTN &times; CRS Insurance Brokers. Walks a site manager
through whether a workplace incident needs reporting to the HSE under RIDDOR,
with a one-tap route to the named CRS claims handler.

> This file is a placeholder. The real README &mdash; setup, env vars, local
> dev, Vercel deploy, Azure Static Web Apps build instructions &mdash; ships at
> the final milestone. See [PLAN.md](./PLAN.md) for the migration plan and
> [DECISIONS.md](./DECISIONS.md) for locked-in choices.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The scaffold currently
shows a token/font smoke test &mdash; flow screens land at the flow milestone.

## Scripts

- `npm run dev` &mdash; start the Turbopack dev server
- `npm run build` &mdash; production build
- `npm run start` &mdash; run the production build
- `npm run lint` &mdash; ESLint (flat config)
- `npm run typecheck` &mdash; `tsc --noEmit`
- `npm run test` &mdash; Vitest (decision-tree unit tests)
- `npm run test:e2e` &mdash; Playwright (happy-path)

## Stack

Next.js 16 (App Router), React 19.2, TypeScript strict, Tailwind CSS v4,
Supabase (Postgres + anonymous session cookie), Resend, Serwist for PWA,
Vitest + Playwright for tests. See [DECISIONS.md](./DECISIONS.md) for the
rationale behind non-obvious picks.
