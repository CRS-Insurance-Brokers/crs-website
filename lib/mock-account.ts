/**
 * Demo-only account data. Populates the dashboard, cover and certificate
 * screens with realistic-feeling content so stakeholders see the full
 * client-app frame, not just a reporting tool. Not wired to any database.
 *
 * Dates are real ISO strings; the dashboard derives "X days until renewal"
 * etc. from the current system date so the demo stays evergreen.
 */

export type PolicyStatus = "active" | "lapsed" | "renewing";

export type Policy = {
  readonly id: string;
  readonly line: string;
  readonly insurer: string;
  readonly policyNumber: string;
  readonly sumInsured: string;
  readonly premium: string;
  readonly periodFromISO: string;
  readonly periodToISO: string;
  readonly status: PolicyStatus;
  readonly summary: string;
};

export type ClaimStatus =
  | "acknowledged"
  | "investigating"
  | "settlement-agreed"
  | "closed";

export type Claim = {
  readonly reference: string;
  readonly line: string;
  readonly status: ClaimStatus;
  readonly openedISO: string;
  readonly summary: string;
  readonly lastUpdate: string;
  readonly nextAction: string;
};

export type ActivityEntry = {
  readonly atISO: string;
  readonly title: string;
  readonly href: string | null;
};

export type Account = {
  readonly company: {
    readonly name: string;
    readonly ownerFirstName: string;
    readonly trades: readonly string[];
    readonly vehicles: number;
    readonly employees: number;
    readonly address: string;
  };
  readonly policies: readonly Policy[];
  readonly claims: readonly Claim[];
  readonly renewal: {
    readonly dateISO: string;
    readonly lastYearPremium: string;
    readonly status: string;
  };
  readonly recentActivity: readonly ActivityEntry[];
};

export const ACCOUNT: Account = {
  company: {
    name: "Langley Demolition Ltd",
    ownerFirstName: "Tom",
    trades: ["demolition", "soft-strip", "asbestos removal"],
    vehicles: 12,
    employees: 34,
    address: "Unit 14, Lancaster Road, Lutterworth LE17 4HS",
  },
  policies: [
    {
      id: "el",
      line: "Employers' Liability",
      insurer: "AXA Commercial",
      policyNumber: "EL/CRS/2025/0491",
      sumInsured: "£10,000,000 each occurrence",
      premium: "£18,420",
      periodFromISO: "2025-06-12",
      periodToISO: "2026-06-11",
      status: "active",
      summary: "Statutory EL cover for 34 employees and labour-only subcontractors working under Langley's direction.",
    },
    {
      id: "pl",
      line: "Public & Products Liability",
      insurer: "Allianz",
      policyNumber: "PL/CRS/2025/0491",
      sumInsured: "£5,000,000 any one occurrence",
      premium: "£22,100",
      periodFromISO: "2025-06-12",
      periodToISO: "2026-06-11",
      status: "active",
      summary: "Third-party injury and property damage arising from demolition, soft-strip and asbestos removal operations. Non-aggregate.",
    },
    {
      id: "car",
      line: "Contractors' All Risks",
      insurer: "RSA",
      policyNumber: "CAR/CRS/2025/0491",
      sumInsured: "£2,500,000 per contract",
      premium: "£14,760",
      periodFromISO: "2025-06-12",
      periodToISO: "2026-06-11",
      status: "active",
      summary: "Works, plant and materials on site. 24-month DSU extension. Non-negligent 3rd-party wording included.",
    },
    {
      id: "fm",
      line: "Fleet Motor",
      insurer: "NIG",
      policyNumber: "FM/CRS/2025/0491",
      sumInsured: "Comprehensive · 12 vehicles",
      premium: "£32,480",
      periodFromISO: "2025-04-01",
      periodToISO: "2026-03-31",
      status: "renewing",
      summary: "Fleet of 12 (7 tippers, 3 vans, 2 pickup). Any-driver subject to 25+ / two years on licence.",
    },
    {
      id: "pi",
      line: "Professional Indemnity",
      insurer: "Hiscox",
      policyNumber: "PI/CRS/2025/0491",
      sumInsured: "£2,000,000",
      premium: "£8,940",
      periodFromISO: "2025-06-12",
      periodToISO: "2026-06-11",
      status: "active",
      summary: "Design-and-build wording for temporary works and demolition methodology. Retroactive to 2019.",
    },
  ],
  claims: [
    {
      reference: "CRS-2026-0491",
      line: "Public Liability",
      status: "investigating",
      openedISO: "2026-04-12",
      summary: "Alleged trip outside Leicester demolition site perimeter",
      lastUpdate: "Loss adjuster instructed; site visit and witness statement planned for this week.",
      nextAction: "Awaiting adjuster's initial report — expected by 29 Apr.",
    },
    {
      reference: "CRS-2026-0487",
      line: "Motor",
      status: "settlement-agreed",
      openedISO: "2026-03-28",
      summary: "Tipper rear-ended at traffic lights on the A14",
      lastUpdate: "Third party accepted 100% liability. Repairs complete, invoice with insurer.",
      nextAction: "Settlement cheque en route — should reach you by end of the week.",
    },
  ],
  renewal: {
    dateISO: "2026-06-12",
    lastYearPremium: "£96,700",
    status: "Indicative quote drafted — Sarah will walk it through with you on 15 May.",
  },
  recentActivity: [
    {
      atISO: "2026-04-12",
      title: "Public Liability claim opened · CRS-2026-0491",
      href: "/cover",
    },
    {
      atISO: "2026-04-03",
      title: "Certificate issued — Wilson Homes, Peterborough (principal contractor)",
      href: "/cover/certificate",
    },
    {
      atISO: "2026-03-28",
      title: "Motor claim opened · CRS-2026-0487",
      href: "/cover",
    },
    {
      atISO: "2026-03-15",
      title: "Mid-term review meeting with Sarah at your office",
      href: null,
    },
  ],
};

/** Days until a given ISO date, from today. Negative if already passed. */
export function daysUntil(iso: string): number {
  const target = new Date(`${iso}T00:00:00Z`).getTime();
  const now = new Date();
  const today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  return Math.round((target - today) / (1000 * 60 * 60 * 24));
}

export function formatGbDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function openClaims(): readonly Claim[] {
  return ACCOUNT.claims.filter(
    (c) => c.status !== "closed" && c.status !== "settlement-agreed",
  );
}
