import {
  ArrowRight,
  CalendarClock,
  FileText,
  FolderOpen,
  Phone,
  Shield,
} from "lucide-react";
import Link from "next/link";
import {
  ACCOUNT,
  daysUntil,
  formatGbDate,
  openClaims,
} from "@/lib/mock-account";
import { HANDLER } from "@/lib/decision-tree";
import { ROUTES } from "@/lib/routes";
import { Body } from "@/components/ui/Body";
import { Heading } from "@/components/ui/Heading";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Dashboard() {
  const renewalDays = daysUntil(ACCOUNT.renewal.dateISO);
  const open = openClaims();
  const renewingSoon = renewalDays <= 90 && renewalDays >= 0;

  return (
    <main className="mx-auto max-w-[560px] px-5 pt-8 pb-[100px]">
      <div className="mb-7">
        <SectionLabel>{ACCOUNT.company.name}</SectionLabel>
        <Heading size="xl">Good to see you, {ACCOUNT.company.ownerFirstName}.</Heading>
      </div>

      {/* Sarah card */}
      <section
        aria-label="Your CRS team"
        className="bg-surface border border-line rounded-soft p-[18px] mb-4"
      >
        <div className="flex items-center gap-[14px]">
          <div
            aria-hidden
            className="w-[52px] h-[52px] rounded-full bg-primary text-primary-ink flex items-center justify-center font-display text-[19px] tracking-[0.02em] shrink-0"
          >
            {HANDLER.initials}
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-display text-[18px] text-ink tracking-[-0.01em] leading-tight">
              {HANDLER.name}
            </div>
            <div className="font-sans text-[13.5px] text-ink-muted truncate">
              {HANDLER.role} &middot; your CRS claims handler
            </div>
          </div>
          <a
            href={`tel:${HANDLER.phone.replace(/\s/g, "")}`}
            aria-label={`Call ${HANDLER.name} on ${HANDLER.phone}`}
            className="bg-primary text-primary-ink border-0 px-3 py-2 rounded-sharp no-underline flex items-center gap-[6px] font-sans text-[13px] font-medium min-h-[44px] shrink-0"
          >
            <Phone size={14} strokeWidth={1.8} aria-hidden />
            Call
          </a>
        </div>
      </section>

      {/* Status */}
      <section aria-label="Account status" className="mb-5">
        <SectionLabel>Status</SectionLabel>
        <div className="grid grid-cols-2 gap-3">
          <StatusTile
            label="Claims in progress"
            value={open.length === 0 ? "None" : String(open.length)}
            tone={open.length > 0 ? "amber" : "calm"}
            href={ROUTES.cover}
            sub={
              open.length > 0
                ? open.map((c) => c.reference).join(", ")
                : "All quiet"
            }
          />
          <StatusTile
            label="Renewal"
            value={
              renewalDays > 0
                ? `${renewalDays} days`
                : renewalDays === 0
                  ? "Today"
                  : `${Math.abs(renewalDays)} days overdue`
            }
            tone={renewingSoon ? "amber" : "calm"}
            href={ROUTES.cover}
            sub={formatGbDate(ACCOUNT.renewal.dateISO)}
          />
        </div>
      </section>

      {/* Quick actions */}
      <section aria-label="Quick actions" className="mb-5">
        <SectionLabel>Quick actions</SectionLabel>
        <div className="flex flex-col gap-2">
          <ActionRow
            href={ROUTES.report}
            icon={FileText}
            title="Report an incident"
            subtitle="Workplace injury, motor, property, public liability"
          />
          <ActionRow
            href={ROUTES.cover}
            icon={Shield}
            title="Your cover"
            subtitle="Policies, claims in progress, renewal"
          />
          <ActionRow
            href={ROUTES.coverCertificate}
            icon={FolderOpen}
            title="Get a certificate"
            subtitle="Proof of insurance for a principal contractor"
          />
        </div>
      </section>

      {/* Recent activity */}
      <section aria-label="Recent activity">
        <SectionLabel>Recent activity</SectionLabel>
        <ul className="list-none p-0 m-0">
          {ACCOUNT.recentActivity.map((entry) => {
            const inner = (
              <div className="flex items-start gap-3 py-3 border-t border-line first:border-t-0">
                <CalendarClock
                  size={16}
                  strokeWidth={1.5}
                  className="text-ink-muted mt-[2px] shrink-0"
                  aria-hidden
                />
                <div className="flex-1 min-w-0">
                  <div className="font-sans text-[12px] text-ink-muted uppercase tracking-[0.08em]">
                    {formatGbDate(entry.atISO)}
                  </div>
                  <div className="font-sans text-[15px] text-ink leading-[1.4]">
                    {entry.title}
                  </div>
                </div>
                {entry.href ? (
                  <ArrowRight
                    size={14}
                    strokeWidth={1.5}
                    className="text-ink-muted mt-[4px] shrink-0"
                    aria-hidden
                  />
                ) : null}
              </div>
            );
            return (
              <li key={`${entry.atISO}-${entry.title}`}>
                {entry.href ? (
                  <Link
                    href={entry.href}
                    className="no-underline text-inherit block hover:bg-surface-soft -mx-2 px-2 rounded-sharp"
                  >
                    {inner}
                  </Link>
                ) : (
                  inner
                )}
              </li>
            );
          })}
        </ul>
      </section>

      <Body muted size="sm" className="mt-8 text-center">
        {ACCOUNT.company.address}
      </Body>
    </main>
  );
}

function StatusTile({
  label,
  value,
  tone,
  sub,
  href,
}: {
  label: string;
  value: string;
  tone: "calm" | "amber";
  sub: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className={[
        "block border rounded-soft p-4 no-underline text-inherit transition-colors",
        tone === "amber"
          ? "bg-amber-soft border-accent"
          : "bg-surface border-line hover:bg-surface-soft",
      ].join(" ")}
    >
      <div className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted">
        {label}
      </div>
      <div className="font-display text-[24px] text-ink tracking-[-0.01em] mt-1 mb-1">
        {value}
      </div>
      <div className="font-sans text-[12px] text-ink-muted leading-snug">
        {sub}
      </div>
    </Link>
  );
}

function ActionRow({
  href,
  icon: Icon,
  title,
  subtitle,
}: {
  href: string;
  icon: typeof Phone;
  title: string;
  subtitle: string;
}) {
  return (
    <Link
      href={href}
      className="bg-surface border border-line rounded-soft p-[14px] flex items-center gap-[14px] no-underline text-inherit hover:bg-surface-soft transition-colors min-h-[56px]"
    >
      <div
        aria-hidden
        className="w-9 h-9 shrink-0 rounded-sharp bg-surface-soft border border-line flex items-center justify-center text-ink"
      >
        <Icon size={16} strokeWidth={1.6} aria-hidden />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-sans text-[15px] font-medium text-ink">
          {title}
        </div>
        <div className="font-sans text-[13px] text-ink-muted leading-tight">
          {subtitle}
        </div>
      </div>
      <ArrowRight size={16} strokeWidth={1.5} className="text-ink-muted shrink-0" aria-hidden />
    </Link>
  );
}
