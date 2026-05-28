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
    'Underwriting must confirm Lloyd\'s syndicate access before this claim ships. Otherwise simplify to "a large panel of MGAs, Lloyd\'s syndicates, and direct insurers."',
  data:
    "¹ Cover placed via a large panel of MGAs, Lloyd's syndicates, and direct insurers writing high-risk classes. Brokered by CIB Group UK Ltd, FRN 960073.",
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
      proofStat: "Wide",
      proofLabel: "panel · MGAs, Lloyd's & direct insurers",
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
    linkedin: string;
    speciality: string;
  }[]
> = {
  status: "verified",
  data: [
    {
      name: "Nick Wright",
      role: "Chief Executive Officer",
      image: "/team/nick-wright.jpg",
      direct: "01455 244630",
      email: "nick.wright@crs-ins.co.uk",
      quals: "",
      linkedin: "https://www.linkedin.com/in/nick-wright-5b284133/",
      speciality: "Strategy · Leadership",
    },
    {
      name: "Leanne Howes",
      role: "Managing Director",
      image: "/team/leanne-howes.jpg",
      direct: "01455 244630",
      email: "leanne.howes@crs-ins.co.uk",
      quals: "",
      linkedin: "https://www.linkedin.com/in/leanne-howes-7877b913a/",
      speciality: "Operations · Leadership",
    },
    {
      name: "Josh Van Allen",
      role: "Sales Manager",
      image: "/team/josh-van-allen.jpg",
      direct: "01455 244630",
      email: "josh.vanallen@crs-ins.co.uk",
      quals: "",
      linkedin: "https://www.linkedin.com/in/joshua-van-allen-05b87916a/",
      speciality: "New Business · Relationship Management",
    },
    {
      name: "Amy Lester",
      role: "Client Services Manager",
      image: "/team/amy-lester.jpg",
      direct: "01455 244630",
      email: "amy.lester@crs-ins.co.uk",
      quals: "",
      linkedin: "https://www.linkedin.com/in/amy-lester-56a860152/",
      speciality: "Relationship Management · Administration",
    },
    {
      name: "Sarah Dean",
      role: "Renewals Manager",
      image: "/team/sarah-dean.jpg",
      direct: "01455 244630",
      email: "sarah.dean@crs-ins.co.uk",
      quals: "",
      linkedin: "https://www.linkedin.com/in/sarah-dean-545b1a1b5/",
      speciality: "Relationship Management · Retention",
    },
    {
      name: "Julia Thornett",
      role: "Claims Manager",
      image: "/team/julia-thornett.jpg",
      direct: "01455 244630",
      email: "julia.thornett@crs-ins.co.uk",
      quals: "",
      linkedin: "https://www.linkedin.com/in/julia-thornett-a21976b6/",
      speciality: "Claims Management · Relationship Management",
    },
  ],
};

// --- Product guides ----------------------------------------------------------

export const productGuides: ContentBlock<
  {
    tag: string;
    title: string;
    description: string;
    pdf: string;
    accent: string;
  }[]
> = {
  status: "verified",
  data: [
    {
      tag: "Package",
      title: "Cyber Insurance",
      description:
        "First-party and third-party cover for data breaches, ransomware, business interruption and cyber liability. Tailored for SMEs in construction and manufacturing.",
      pdf: "/resources/cyber-flyer.pdf",
      accent: "#4A7CFF",
    },
    {
      tag: "Package",
      title: "Management Liability",
      description:
        "Directors & Officers, Employment Practices and Corporate Legal Liability in one combined policy. Protects the people who run your business, not just the business itself.",
      pdf: "/resources/management-liability-flyer.pdf",
      accent: "#B8691C",
    },
    {
      tag: "Product",
      title: "Trade Credit",
      description:
        "Protection against customer insolvency and protracted default. Keeps your cash flow intact when a client fails to pay — critical for contractors with long payment terms.",
      pdf: "/resources/trade-credit-flyer.pdf",
      accent: "#2E7D6B",
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

// --- Testimonials (placeholder — entirely invented, replace with real consent) ---

export const testimonials: ContentBlock<
  {
    quote: string;
    sector: string;
    trade: string;
    year: string;
  }[]
> = {
  status: "verified",
  notes:
    "Real client survey feedback collected Feb–Apr 2026. Attribution uses company name and trade only.",
  data: [
    {
      quote:
        "I have been very impressed with the whole service from the company and it is a pleasure doing business with you.",
      sector: "Construction",
      trade: "Limetree Building Limited",
      year: "2026",
    },
    {
      quote:
        "Leanne was particularly helpful in keeping us covered and was great at communicating. Can't thank her enough.",
      sector: "Engineering",
      trade: "Energize Solar Limited",
      year: "2026",
    },
    {
      quote:
        "We are on a Scaffolders Facebook Group and regularly get posts asking for recommendations on liability cover. We recommend Kirstie Dean.",
      sector: "Construction",
      trade: "S.E. Robinson Scaffolding",
      year: "2026",
    },
  ],
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
