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

// --- Hero footnote -----------------------------------------------------------

export const heroFootnote: ContentBlock<string> = {
  status: "verified",
  data:
    "Cover placed via a large panel of MGAs, Lloyd's brokers, and direct insurers writing high-risk classes. Brokered by CIB Group UK Ltd, FRN 960073.",
};

// --- Why CRS — three pillars -------------------------------------------------

export const whyPillars: ContentBlock<
  {
    title: string;
    sub: string;
    body: string;
    iconKey: "compass" | "shield" | "handshake";
  }[]
> = {
  status: "verified",
  data: [
    {
      title: "Independence",
      sub: "Wide insurer panel. No restrictive ties.",
      iconKey: "compass",
      body:
        "We hold agency agreements with major insurers writing high-risk policies, plus access to Lloyd's brokers for the unusual.",
    },
    {
      title: "Service excellence",
      sub: "Professional. Prompt. Bespoke.",
      iconKey: "shield",
      body:
        "When something happens on site, you speak to the named handler on your account — not a queue, not a call centre, not an offshore voicemail.",
    },
    {
      title: "Commitment",
      sub: "We listen, simplify, deliver, and flex when needed.",
      iconKey: "handshake",
      body:
        "Renewals shouldn't be a stress test. We start the conversation early, present the market plainly, and back you with the underwriter directly.",
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
    {
      name: "Jake Pemberton",
      role: "Head of Technology",
      image: "/team/jake-pemberton.jpg",
      direct: "01455 244630",
      email: "jake.pemberton@crs-ins.co.uk",
      quals: "",
      linkedin: "https://www.linkedin.com/in/jake-pemberton-05877025b/",
      speciality: "Business Transformation · Technology",
    },
  ],
};

// --- Product guides ----------------------------------------------------------

export const productGuides: ContentBlock<
  {
    tag: string;
    title: string;
    description: string;
    pdf: string | null;
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
    {
      tag: "Product",
      title: "Motor Fleet",
      description:
        "Motor insurance for businesses running multiple vehicles. Fleet terms cover cars, vans, and HGVs, with options for named driver or any driver.",
      pdf: null,
      accent: "#5C7AEA",
    },
    {
      tag: "Package",
      title: "Commercial Legal Expenses",
      description:
        "Covers legal costs for contract disputes, debt recovery, employment claims, and tax investigations. Sits alongside your main commercial policy.",
      pdf: null,
      accent: "#8B5CF6",
    },
    {
      tag: "Product",
      title: "Motor Legal Expenses",
      description:
        "Legal costs cover following a non-fault road accident. Used to recover uninsured losses and pursue compensation claims.",
      pdf: null,
      accent: "#C084FC",
    },
    {
      tag: "Product",
      title: "Tools in Transit",
      description:
        "Cover for tools and equipment in transit between sites and depots. The specific conditions vary by policy — ask us about what applies to how you work.",
      pdf: null,
      accent: "#F97316",
    },
    {
      tag: "Package",
      title: "Group PA & Travel",
      description:
        "Personal accident and travel cover for employees on company business. Can be arranged as a group scheme or on a named individual basis.",
      pdf: null,
      accent: "#EAB308",
    },
    {
      tag: "Product",
      title: "Performance Bonds",
      description:
        "A bond that guarantees a contractor's obligations under a contract. Often required by clients as a condition of tendering, particularly on public sector and large commercial work.",
      pdf: null,
      accent: "#06B6D4",
    },
    {
      tag: "Product",
      title: "Insurance Backed Guarantees",
      description:
        "A guarantee backed by an insurer rather than the contractor, protecting the end client if the contractor can no longer honour their warranty. Common on new-build and retrofit projects.",
      pdf: null,
      accent: "#10B981",
    },
  ],
};

// --- Testimonials (real client survey feedback) ------------------------------

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

// --- Hero photograph ----------------------------------------------------------

export const heroPlate = {
  status: "verified" as ContentStatus,
  data: {
    photoSrc: "/images/hero-scaffolding.jpg",
    photoAlt: "Industrial scaffolding on a UK construction site",
  },
};
