import { Download, FolderOpen } from "lucide-react";
import Link from "next/link";
import { Body } from "@/components/ui/Body";
import { Heading } from "@/components/ui/Heading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  ACCOUNT,
  daysUntil,
  formatGbDate,
  type Claim,
  type Policy,
} from "@/lib/mock-account";
import { ROUTES } from "@/lib/routes";

export function CoverOverview() {
  const renewalDays = daysUntil(ACCOUNT.renewal.dateISO);
  return (
    <main className="mx-auto max-w-[560px] px-5 pt-8 pb-[100px]">
      <div className="mb-7">
        <SectionLabel>Your cover</SectionLabel>
        <Heading size="xl">Policies, claims, renewal.</Heading>
      </div>
      <Body muted>
        Everything Sarah has on file for {ACCOUNT.company.name}. Tap a policy
        for a summary you can show a principal contractor.
      </Body>

      {/* Renewal */}
      <section className="mt-6 bg-amber-soft border border-accent rounded-soft p-[18px]">
        <div className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted mb-2">
          Renewal
        </div>
        <div className="font-display text-[22px] text-ink tracking-[-0.01em] mb-1">
          {renewalDays > 0
            ? `${renewalDays} days to renewal`
            : renewalDays === 0
              ? "Renewal due today"
              : `${Math.abs(renewalDays)} days overdue`}
        </div>
        <Body muted size="sm">
          {formatGbDate(ACCOUNT.renewal.dateISO)} &middot;{" "}
          {ACCOUNT.renewal.status}
        </Body>
        <Body muted size="sm" className="mb-0">
          Last year&rsquo;s total: {ACCOUNT.renewal.lastYearPremium}.
        </Body>
      </section>

      {/* Claims */}
      <section className="mt-6">
        <SectionLabel>Claims on file</SectionLabel>
        {ACCOUNT.claims.length === 0 ? (
          <Body muted size="sm">
            No claims on file. Clean record.
          </Body>
        ) : (
          <ul className="list-none p-0 m-0 flex flex-col gap-3">
            {ACCOUNT.claims.map((claim) => (
              <li key={claim.reference}>
                <ClaimCard claim={claim} />
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Policies */}
      <section className="mt-6">
        <SectionLabel>Policies in force</SectionLabel>
        <ul className="list-none p-0 m-0 flex flex-col gap-3">
          {ACCOUNT.policies.map((policy) => (
            <li key={policy.id}>
              <PolicyCard policy={policy} />
            </li>
          ))}
        </ul>
      </section>

      {/* Certificate CTA */}
      <section className="mt-6">
        <Link
          href={ROUTES.coverCertificate}
          className="block bg-primary text-primary-ink no-underline rounded-sharp px-[18px] py-[16px] flex items-center gap-3 min-h-[56px]"
        >
          <FolderOpen size={18} strokeWidth={1.6} aria-hidden />
          <div className="flex-1">
            <div className="font-sans text-[15px] font-medium">
              Get a certificate
            </div>
            <div className="font-sans text-[13px] opacity-90">
              Proof of insurance for a principal contractor
            </div>
          </div>
          <Download size={16} strokeWidth={1.5} aria-hidden />
        </Link>
      </section>
    </main>
  );
}

function ClaimCard({ claim }: { claim: Claim }) {
  const statusLabel: Record<Claim["status"], string> = {
    acknowledged: "Acknowledged",
    investigating: "Investigating",
    "settlement-agreed": "Settlement agreed",
    closed: "Closed",
  };
  const tone: Record<Claim["status"], string> = {
    acknowledged: "bg-surface-soft text-ink border-line",
    investigating: "bg-amber-soft text-ink border-accent",
    "settlement-agreed": "bg-success-soft text-ink border-success",
    closed: "bg-surface-soft text-ink-muted border-line",
  };
  return (
    <article className="bg-surface border border-line rounded-soft p-[18px]">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div>
          <div className="font-sans text-[12px] text-ink-muted uppercase tracking-[0.08em]">
            {claim.reference} &middot; {claim.line}
          </div>
          <div className="font-display text-[17px] text-ink tracking-[-0.01em] mt-1">
            {claim.summary}
          </div>
        </div>
        <div
          className={[
            "font-sans text-[11px] uppercase tracking-[0.1em] px-2 py-1 rounded-sharp border shrink-0",
            tone[claim.status],
          ].join(" ")}
        >
          {statusLabel[claim.status]}
        </div>
      </div>
      <Body muted size="sm" className="mb-1">
        <strong>Last update:</strong> {claim.lastUpdate}
      </Body>
      <Body muted size="sm" className="mb-0">
        <strong>Next:</strong> {claim.nextAction}
      </Body>
      <div className="font-sans text-[12px] text-ink-muted mt-2">
        Opened {formatGbDate(claim.openedISO)}
      </div>
    </article>
  );
}

function PolicyCard({ policy }: { policy: Policy }) {
  const statusLabel: Record<Policy["status"], string> = {
    active: "Active",
    renewing: "Renewing",
    lapsed: "Lapsed",
  };
  const tone: Record<Policy["status"], string> = {
    active: "bg-success-soft text-ink border-success",
    renewing: "bg-amber-soft text-ink border-accent",
    lapsed: "bg-danger-soft text-ink border-danger",
  };
  return (
    <article className="bg-surface border border-line rounded-soft p-[18px]">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div>
          <div className="font-display text-[18px] text-ink tracking-[-0.01em]">
            {policy.line}
          </div>
          <div className="font-sans text-[13px] text-ink-muted">
            {policy.insurer} &middot; {policy.policyNumber}
          </div>
        </div>
        <div
          className={[
            "font-sans text-[11px] uppercase tracking-[0.1em] px-2 py-1 rounded-sharp border shrink-0",
            tone[policy.status],
          ].join(" ")}
        >
          {statusLabel[policy.status]}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-y-1 gap-x-4 font-sans text-[13px] mt-2">
        <div className="text-ink-muted">Cover</div>
        <div className="text-ink">{policy.sumInsured}</div>
        <div className="text-ink-muted">Premium</div>
        <div className="text-ink">{policy.premium}</div>
        <div className="text-ink-muted">Period</div>
        <div className="text-ink">
          {formatGbDate(policy.periodFromISO)} &ndash;{" "}
          {formatGbDate(policy.periodToISO)}
        </div>
      </div>
      <Body muted size="sm" className="mt-3 mb-0">
        {policy.summary}
      </Body>
    </article>
  );
}
