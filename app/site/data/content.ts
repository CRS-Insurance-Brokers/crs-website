/**
 * CRS Insurance Brokers — homepage content source of truth.
 *
 * STATUS LEGEND
 *   verified   — copied verbatim from crs-ins.co.uk, no change needed
 *   from-brief — Jason's CRS rebuild brief, treated as authoritative direction
 *   placeholder — invented for the design north-star; MUST be replaced before launch
 *
 * Replace placeholder blocks with real CRS-supplied content. Once a block is
 * replaced, change `status: "placeholder"` to `status: "verified"`.
 */

export type ContentStatus = "verified" | "from-brief" | "placeholder";

export interface ContentBlock<T> {
  status: ContentStatus;
  notes?: string;
  data: T;
}

// --- Brand chrome (verified from live site) ----------------------------------

export const brand = {
  status: "verified" as ContentStatus,
  data: {
    legalName: "CIB Group UK Ltd",
    tradingName: "CRS Insurance Brokers",
    fcaFrn: "960073",
    companyNumber: "13360654",
    addressLines: ["Unit 2 Oakberry Road", "Lutterworth", "LE17 4PP"],
    phone: "01455 244630",
    phoneTel: "01455244630",
    email: "info@crs-ins.co.uk",
    memberships: ["NFDC", "DSA", "BIBA", "FCA"] as const,
  },
};

// --- Hero stats (placeholder) ------------------------------------------------

export const heroStats: ContentBlock<
  {
    key: string;
    value: number;
    suffix: string;
    decimals?: number;
    note: string;
  }[]
> = {
  status: "placeholder",
  notes:
    "Replace with real CRS figures from the 2024 service review or remove the strip until validated.",
  data: [
    { key: "Insurer panel", value: 30, suffix: "+", note: "writing high-risk classes" },
    { key: "Pickup", value: 9.4, suffix: "s", decimals: 1, note: "average, business hours" },
    { key: "Retention", value: 94, suffix: "%", note: "across last 5 renewals" },
    { key: "Trades covered", value: 412, suffix: "", note: "specialist contractors" },
  ],
};

// --- Hero photo overlay (placeholder) ----------------------------------------

export const heroPhotoOverlay: ContentBlock<{
  status: string;
  location: string;
  handlerName: string;
  detail: string;
  pickupSeconds: number;
}> = {
  status: "placeholder",
  notes: "Confirm a real handler name and pickup SLA before launch, or remove the overlay.",
  data: {
    status: "On the line now",
    location: "Lutterworth",
    handlerName: "Dave Whitcombe",
    detail: "handling new enquiries. Average pickup",
    pickupSeconds: 9,
  },
};

// --- Hero footnote (placeholder, needs underwriting confirmation) -----------

export const heroFootnote: ContentBlock<string> = {
  status: "placeholder",
  notes:
    'Underwriting must confirm Lloyd\'s syndicate access before this claim ships. Otherwise simplify to "30+ insurer panel writing high-risk classes."',
  data:
    "¹ Cover placed via 30+ insurer panel, including Lloyd's syndicates writing high-risk classes. Brokered by CIB Group UK Ltd, FRN 960073.",
};

// --- Why CRS — three pillars (verbatim from live site, stats placeholder) ---

export const whyPillars: ContentBlock<
  {
    title: string;
    sub: string;
    body: string;
    proofStat: string;
    proofLabel: string;
    iconKey: "compass" | "shield" | "handshake";
  }[]
> = {
  status: "placeholder",
  notes:
    'Pillar names ("Independence", "Service excellence", "Commitment") are verbatim from the live CRS site and ARE verified. Body copy and proof stats are placeholder — replace stats with real figures from CRS, or drop the proof line.',
  data: [
    {
      title: "Independence",
      sub: "Wide insurer panel. No restrictive ties.",
      iconKey: "compass",
      body:
        "We hold agency agreements with every major insurer writing high-risk classes, plus access to specialist Lloyd's syndicates for the unusual.",
      proofStat: "30+",
      proofLabel: "insurer panel for high-risk",
    },
    {
      title: "Service excellence",
      sub: "Professional. Prompt. Bespoke.",
      iconKey: "shield",
      body:
        "When something happens on site, you speak to the named handler on your account — not a queue, not a call centre, not an offshore voicemail.",
      proofStat: "3h 47m",
      proofLabel: "average new-claim acknowledgement",
    },
    {
      title: "Commitment",
      sub: "We listen, simplify, deliver, and flex when needed.",
      iconKey: "handshake",
      body:
        "Renewals shouldn't be a stress test. We start the conversation early, present the market plainly, and back you with the underwriter directly.",
      proofStat: "94%",
      proofLabel: "client retention, last 5 renewals",
    },
  ],
};

// --- Team preview (placeholder — entirely invented) -------------------------

export const team: ContentBlock<
  {
    name: string;
    role: string;
    image: string;
    direct: string;
    email: string;
    quals: string;
    rotate: number;
    years: number;
    speciality: string;
  }[]
> = {
  status: "placeholder",
  notes:
    "All names, photos, direct dials, emails, qualifications, and years-in-trade are invented placeholder. Replace with real CRS team members who consent to named profiles per brief §14.",
  data: [
    {
      name: "Dave Whitcombe",
      role: "Director · High Risk practice lead",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=80&auto=format&fit=crop",
      direct: "01455 244 631",
      email: "dave@crs-ins.co.uk",
      quals: "Cert CII",
      rotate: -1.5,
      years: 18,
      speciality: "Demolition · Asbestos",
    },
    {
      name: "Sarah Pemberton",
      role: "Account Executive · Construction",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&q=80&auto=format&fit=crop",
      direct: "01455 244 632",
      email: "sarah@crs-ins.co.uk",
      quals: "Dip CII",
      rotate: 1.2,
      years: 11,
      speciality: "Principal contractors",
    },
    {
      name: "James Holloway",
      role: "Account Executive · Contractors & Engineers",
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=900&q=80&auto=format&fit=crop",
      direct: "01455 244 633",
      email: "james@crs-ins.co.uk",
      quals: "ACII",
      rotate: -0.6,
      years: 14,
      speciality: "M&E · Plant hire",
    },
  ],
};

// --- Insights (placeholder — invented posts) --------------------------------

export const insights: ContentBlock<
  {
    cat: string;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    read: string;
    image: string;
    href: string;
  }[]
> = {
  status: "placeholder",
  notes:
    "All three posts are invented. Replace with real Insights once editorial cadence is confirmed (per brief §6: minimum 2 posts/month, otherwise hide dates and lead evergreen).",
  data: [
    {
      cat: "Sector",
      title: "Hard market for demolition: what&rsquo;s actually placeable in Q2 2026",
      excerpt:
        "Where capacity has tightened, where it&rsquo;s opened up, and the three trades insurers are pricing more aggressively than they did 12 months ago.",
      author: "Dave Whitcombe",
      date: "18 April 2026",
      read: "6 min",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80&auto=format&fit=crop",
      href: "/insights/hard-market-demolition-q2-2026",
    },
    {
      cat: "Regulatory",
      title:
        "RIDDOR over-7-day reporting: the seven-day clock and how it actually works",
      excerpt:
        "The HSE clock starts when work is interrupted, not when the injury happens. A practical guide for site managers.",
      author: "Sarah Pemberton",
      date: "02 April 2026",
      read: "8 min",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80&auto=format&fit=crop",
      href: "/insights/riddor-seven-day-clock",
    },
    {
      cat: "Market",
      title:
        "EL renewals: the four claims patterns insurers are pricing in this year",
      excerpt:
        "Stress-tested against the trades we place most. What underwriters are loading for, and how to mitigate before next renewal.",
      author: "James Holloway",
      date: "24 March 2026",
      read: "5 min",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80&auto=format&fit=crop",
      href: "/insights/el-renewals-2026-claims-patterns",
    },
  ],
};

// --- Testimonial (placeholder — entirely invented) --------------------------

export const testimonial: ContentBlock<{
  quote: string;
  emphasis: string;
  authorName: string;
  authorInitials: string;
  authorRole: string;
  sector: string;
  clientSince: string;
  coverPlaced: string;
}> = {
  status: "placeholder",
  notes:
    "Quote, attribution, and outcome stats are invented. Replace with a real client quote with documented consent (brief §12 acceptance criterion).",
  data: {
    quote:
      "They placed cover for an asbestos strip nobody else would touch, inside {emphasis}, and rang me twice during the week to walk through the wording. The renewal lands a fortnight before the schedule for the first time in eight years.",
    emphasis: "eleven days",
    authorName: "Mark Reilly",
    authorInitials: "MR",
    authorRole: "Operations Director · Reilly Demolition Ltd",
    sector: "Demolition",
    clientSince: "2022",
    coverPlaced: "EL · PL · CAR",
  },
};

// --- Client roster strip (placeholder — invented business names) -----------

export const clientRoster: ContentBlock<string[]> = {
  status: "placeholder",
  notes:
    "All five client names are invented. Replace with real CRS clients who consent to public attribution.",
  data: [
    "Reilly Demolition",
    "Hartwell Civils",
    "Norton M&E",
    "Granger Plant Hire",
    "Ashby Industrial",
  ],
};

// --- Plate header data (editorial framing — design-layer, not from old site)

export const heroPlate = {
  status: "from-brief" as ContentStatus,
  data: {
    plateLabel: "Plate 01 — Front matter",
    rightLabel: "Spec sheet · UK · 2026",
    figLabel: "Fig. 01 — Site survey",
    coords: "51.4378° N · 1.2024° W",
    photoSrc:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1100&q=80&auto=format&fit=crop",
    photoAlt: "Industrial scaffolding on a UK construction site",
  },
  notes:
    "Coordinates are roughly Lutterworth but I picked the digits. Replace with the actual photographed site location, or change to the CRS office coords.",
};
