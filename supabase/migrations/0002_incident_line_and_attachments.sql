-- ===========================================================================
-- v0.2: widen incident_reports to handle every FNOL line, not just RIDDOR.
-- Adds a `line` column and relaxes the outcome_key allowance.
-- Idempotent so re-running against a migrated DB is safe.
-- ===========================================================================

alter table public.incident_reports
  add column if not exists line text not null default 'riddor';

create index if not exists incident_reports_line_idx
  on public.incident_reports (line);

comment on column public.incident_reports.line is
  'Insurance line: riddor | motor | property | public-liability';

-- attachment_count mirrors the length of photos stored out-of-band. We
-- don't persist blobs here in v0.2; the count is recorded for audit.
alter table public.incident_reports
  add column if not exists attachment_count int not null default 0;
