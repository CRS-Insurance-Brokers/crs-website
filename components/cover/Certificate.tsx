"use client";

import { Printer } from "lucide-react";
import { Body } from "@/components/ui/Body";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { HANDLER } from "@/lib/decision-tree";
import { ACCOUNT, formatGbDate } from "@/lib/mock-account";

/**
 * A nicely-formatted on-screen "Certificate of Insurance" the client can
 * show a principal contractor. The Print / Save as PDF button uses the
 * browser's native dialog — zero backend, works offline from the installed
 * PWA, outputs a clean, letterhead-style PDF.
 *
 * This is demo-grade: a real cert would render from a signed insurer source
 * with policy-specific wording. For v0.2 it's enough to make the "I need a
 * cert on a Friday afternoon" moment feel real.
 */
// Stable demo values — real certs would carry an insurer-generated reference
// and issue-date from the server.
const CERT_REF = "CRS/CERT/2026-0491";
const ISSUED_ISO = "2026-04-23";

export function Certificate() {
  const printIt = () => window.print();

  return (
    <main className="mx-auto max-w-[620px] px-5 pt-8 pb-[100px] print:pb-0 print:pt-0">
      <div className="mb-6 print:hidden">
        <SectionLabel>Certificate of insurance</SectionLabel>
        <Heading size="xl">Proof of cover.</Heading>
        <Body muted>
          A letterhead summary of live cover for {ACCOUNT.company.name}.
          Principal contractors typically want this before site access. Use
          Print / Save as PDF to send it on.
        </Body>
        <div className="mt-4">
          <Button leadingIcon={Printer} onClick={printIt}>
            Print / Save as PDF
          </Button>
        </div>
      </div>

      <article
        id="certificate"
        className="bg-surface border border-line rounded-soft p-8 print:border-0 print:p-0 print:shadow-none"
      >
        <header className="flex items-start justify-between gap-6 pb-6 border-b border-line mb-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/crs-logo.svg"
            alt="CRS Insurance Brokers"
            width={180}
            height={42}
            className="h-[42px] w-auto"
          />
          <div className="text-right">
            <div className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted">
              Reference
            </div>
            <div className="font-sans text-[13px] text-ink">{CERT_REF}</div>
            <div className="font-sans text-[11px] text-ink-muted mt-1">
              Issued {formatGbDate(ISSUED_ISO)}
            </div>
          </div>
        </header>

        <Heading size="lg" as="h2">
          Certificate of Insurance
        </Heading>
        <Body muted className="mt-2">
          This is to certify that the following insurances are in force for
          the policyholder named below, arranged through CRS Insurance
          Brokers.
        </Body>

        <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 font-sans text-[14px] mt-6">
          <dt className="text-ink-muted">Policyholder</dt>
          <dd className="text-ink font-medium">{ACCOUNT.company.name}</dd>

          <dt className="text-ink-muted">Registered address</dt>
          <dd className="text-ink">{ACCOUNT.company.address}</dd>

          <dt className="text-ink-muted">Business description</dt>
          <dd className="text-ink">
            {ACCOUNT.company.trades.join(", ")} contractor
          </dd>
        </dl>

        <section className="mt-8">
          <div className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted mb-3">
            Policies in force
          </div>
          <table className="w-full text-left font-sans text-[13px] border-collapse">
            <thead>
              <tr className="border-b border-line">
                <th className="py-2 font-medium text-ink-muted">Cover</th>
                <th className="py-2 font-medium text-ink-muted">Insurer</th>
                <th className="py-2 font-medium text-ink-muted">Limit</th>
                <th className="py-2 font-medium text-ink-muted">Expires</th>
              </tr>
            </thead>
            <tbody>
              {ACCOUNT.policies
                .filter((p) => p.status !== "lapsed")
                .map((p) => (
                  <tr key={p.id} className="border-b border-line last:border-0">
                    <td className="py-2 text-ink align-top">
                      <div>{p.line}</div>
                      <div className="text-[11px] text-ink-muted">
                        {p.policyNumber}
                      </div>
                    </td>
                    <td className="py-2 text-ink align-top">{p.insurer}</td>
                    <td className="py-2 text-ink align-top">{p.sumInsured}</td>
                    <td className="py-2 text-ink align-top">
                      {formatGbDate(p.periodToISO)}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </section>

        <section className="mt-8 pt-6 border-t border-line">
          <Body muted size="sm">
            This certificate is issued as evidence that the insurances listed
            are in place as at the date above. It does not modify the policy
            terms or constitute an extension of cover. Cover is subject to the
            terms, conditions and exclusions of the underlying policies, a
            copy of which is available on request.
          </Body>

          <div className="mt-6 grid grid-cols-[1fr_auto] gap-6 items-end">
            <div>
              <div className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted mb-1">
                Issued by
              </div>
              <div className="font-display text-[17px] text-ink tracking-[-0.01em]">
                {HANDLER.name}
              </div>
              <div className="font-sans text-[12px] text-ink-muted">
                {HANDLER.role}, CRS Insurance Brokers
              </div>
              <div className="font-sans text-[12px] text-ink-muted">
                {HANDLER.phone} &middot; {HANDLER.email}
              </div>
            </div>
            <div className="text-right">
              <div className="font-display text-[14px] text-ink italic border-b border-ink pb-1 min-w-[140px]">
                S. Whitlock
              </div>
              <div className="font-sans text-[10px] text-ink-muted mt-1 uppercase tracking-[0.14em]">
                Authorised signatory
              </div>
            </div>
          </div>
        </section>
      </article>

      <style>{`
        @media print {
          :root { --bg: #ffffff; }
          body { background: #ffffff !important; }
        }
      `}</style>
    </main>
  );
}
