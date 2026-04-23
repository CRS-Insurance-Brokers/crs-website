-- ===========================================================================
-- CRS RIDDOR Helper — audit log of completed incident reports.
-- Run against a clean Supabase project. All writes go through server actions
-- using the service role key, so RLS policies below are defence-in-depth.
-- ===========================================================================

create extension if not exists "pgcrypto";

create table if not exists public.incident_reports (
  id                   uuid primary key default gen_random_uuid(),
  session_id           uuid not null,
  created_at           timestamptz not null default now(),
  outcome_key          text not null,
  outcome_verdict      text not null,
  severity             text not null check (severity in ('danger','amber','success')),
  answers              jsonb not null,
  dangerous_checks     int[] not null default '{}',
  disease_checks       int[] not null default '{}',
  submitted_to_handler boolean not null default false,
  handler_notified_at  timestamptz,
  user_agent           text,
  ip_hash              text
);

-- Keep the log retrieval path fast: per-session ordered scan.
create index if not exists incident_reports_session_created_idx
  on public.incident_reports (session_id, created_at desc);

alter table public.incident_reports enable row level security;

-- Belt-and-braces: the service role bypasses RLS, so these policies only
-- matter if an anon key ever touches the table. They deny everything from
-- anon by default unless a signed JWT carries a matching session_id claim.
create policy "sessions read own reports"
  on public.incident_reports
  for select
  using (
    session_id = (current_setting('request.jwt.claims', true)::json->>'session_id')::uuid
  );

create policy "sessions insert own reports"
  on public.incident_reports
  for insert
  with check (
    session_id = (current_setting('request.jwt.claims', true)::json->>'session_id')::uuid
  );

comment on table public.incident_reports is
  'CRS RIDDOR Helper v0.1 — one row per completed flow. Anonymous session only; no PII beyond hashed IP + user agent.';
