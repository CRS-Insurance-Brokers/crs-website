import type { Metadata } from "next";
import { Nav } from "../../components/Nav";
import { Marginalia } from "../../components/Marginalia";
import { Footer } from "../../components/Footer";
import { Reveal } from "../../components/Reveal";
import { HoldToCall } from "../../components/HoldToCall";
import {
  ArrowUpRight,
  AlertIcon,
  ShieldIcon,
  HardHatIcon,
  ToolsIcon,
  SiteIcon,
  CompassIcon,
  MailIcon,
  LinkedInIcon,
} from "../../components/icons";
import { FAQList, type FAQItem } from "../_components/FAQ";
import { FAQPageSchema } from "../../components/SchemaJsonLd";

export const metadata: Metadata = {
  title:
    "High Risk Insurance · Demolition, asbestos, hot works, work at height",
  description:
    "NFDC and DSA-affiliated specialist cover for demolition, asbestos removal, hot works, work at height, and environmental impairment. UK-wide, Lutterworth-based. FCA FRN 960073.",
  alternates: { canonical: "/site/specialisms/high-risk" },
  openGraph: {
    title:
      "High Risk Insurance — Demolition, asbestos, hot works · CRS Insurance Brokers",
    description:
      "When generalist brokers stop pricing, we start. NFDC and DSA-affiliated specialist cover for high-risk UK trades.",
    type: "website",
  },
};

// ---- Content -------------------------------------------------------------

const risks = [
  {
    icon: AlertIcon,
    title: "Asbestos exposure during strip-out",
    body:
      "Historic ACMs missed by the pre-strip survey, or fibres released through unlicensed work. Claims often surface years later via lung-screening programmes.",
    cover: "Public Liability with asbestos extension · EL · run-off cover",
  },
  {
    icon: SiteIcon,
    title: "Adjacent property damage",
    body:
      "Vibration cracks, settlement, party wall disputes, dust drift, debris over the line. The third-party owner's surveyor is often calling within hours.",
    cover: "Public Liability · Contractors All Risks · party wall extensions",
  },
  {
    icon: ToolsIcon,
    title: "Fire from hot works",
    body:
      "Torch cutting, oxy-acetylene, grinding sparks landing in concealed timber or insulation. Most expensive single-cause claim in our portfolio.",
    cover:
      "Contractors All Risks · Public Liability · hot works permit warranty conditions",
  },
  {
    icon: HardHatIcon,
    title: "Fall from height",
    body:
      "Edge protection compromised, scaffold tie failure, fragile-roof break-through. EL claims of this kind tail-rate aggressively at renewal.",
    cover: "Employers' Liability · Public Liability · subcontractor warranties",
  },
  {
    icon: ShieldIcon,
    title: "Environmental release",
    body:
      "Hydraulic-fluid spill, fuel bunker breach, contaminated dust onto neighbouring land. Increasingly a separate cover from generic PL since 2024.",
    cover: "Environmental Impairment Liability · Public Liability",
  },
];

const covers = [
  {
    name: "Employers' Liability",
    note: "Statutory minimum £5m. We typically place £10m for high-risk classes given subcontractor density and tail-claim exposure.",
  },
  {
    name: "Public Liability",
    note: "£5m–£10m standard, £25m for principal contractors on adjacent-property-sensitive sites. Asbestos and pollution extensions priced separately.",
  },
  {
    name: "Contractors All Risks",
    note: "Cover for the works themselves, plus existing structures, plus contract works in transit. Aligned to JCT/NEC where applicable.",
  },
  {
    name: "Tools, Plant & Hired-in Plant",
    note: "Owned tools schedule, plant in transit between sites, and hired-in plant under standard CPA conditions including continuing hire charges.",
  },
  {
    name: "Professional Indemnity",
    note: "Where you take design responsibility — design-and-build, temporary works, or method statements influencing structural sequence.",
  },
  {
    name: "Environmental Impairment Liability",
    note: "Sudden and gradual pollution, including third-party clean-up, on-site remediation, and biodiversity damage where the trade triggers it.",
  },
  {
    name: "Directors & Officers",
    note: "Personal liability cover for directors facing HSE prosecutions, IR35 challenges, and corporate-manslaughter investigations.",
  },
  {
    name: "Cyber",
    note: "BIM file ransomware, project-management platform breaches, and bid-fraud cover. Increasingly required by Tier 1 contractors on PQQ.",
  },
];

const faqs: FAQItem[] = [
  {
    q: "We're a small demolition contractor — will we get cover at all?",
    a: "Yes, in most cases. Insurers are pricing cautiously on smaller demolition firms but the panel is open if your training records (NFDC, CITB), method statements, and claims history are in order. The conversation usually starts with us walking the underwriter through your last three jobs — not a portal form. We've placed cover for demolition turnover from £400k to £12m+ this year.",
  },
  {
    q: "Our last claim makes renewal feel impossible. Can you help?",
    a: "It depends on the claim type, the cause, and what's changed since. A single fire-from-hot-works claim is recoverable with a tightened permit-to-work regime. A pattern of fall-from-height EL claims needs more substantive answers. Bring us the renewal early — six weeks minimum, ideally eight — and we'll triage the market with you.",
  },
  {
    q: "How quickly can you place new cover?",
    a: "Standard renewals are typically bound 5–10 working days after we have a complete submission. New business takes longer — 2–3 weeks — because we're presenting your trade to underwriters who haven't seen your name before. Same-day cover is possible for emergency placements but only on classes the panel can pre-quote.",
  },
  {
    q: "Do you handle the asbestos licence application alongside the cover?",
    a: "We don't handle the HSE licence itself — that's between you and the HSE — but we do place the cover that the licence application requires evidence of, and we can sense-check your H&S consultant's work before submission. Where asbestos is part of a wider demolition package we handle both as one programme.",
  },
  {
    q: "What does an 'asbestos extension' on Public Liability actually cover?",
    a: "Liability arising from the release of asbestos fibres during the works — third-party bodily injury and property contamination. It does not cover the cost of removing your own contamination from the site, nor known ACMs left in place where the contract excludes them. Wording varies considerably between insurers; we'll walk through the specific clauses with you.",
  },
  {
    q: "We do hot works on Sundays. Does that need special declaration?",
    a: "Most policies impose a hot works permit warranty plus a 24-hour fire-watch condition that applies regardless of day. Some policies tighten conditions outside normal working hours. Disclose the working pattern at submission — discovery later is a coverage trigger.",
  },
  {
    q: "Does CRS arrange Environmental Impairment Liability?",
    a: "Yes. Standard PL has narrow pollution cover (sudden and accidental only). For demolition near watercourses, asbestos-bearing structures, or fuel-storage proximate work, we place a separate Environmental Impairment Liability policy. Limits typically £1m–£5m, with extensions for biodiversity and historical contamination.",
  },
  {
    q: "What's the typical excess on our class?",
    a: "Public Liability excesses for demolition currently sit between £2,500 and £25,000 depending on turnover, claims history, and asbestos exposure. We can manipulate the excess up or down to move the premium — there's normally a clear inflection point we can show you on a comparison table at quote stage.",
  },
];

const insights = [
  {
    cat: "Sector",
    title: "Hard market for demolition: what's actually placeable in Q2 2026",
    date: "18 April 2026",
    read: "6 min",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80&auto=format&fit=crop",
    href: "/insights/hard-market-demolition-q2-2026",
  },
  {
    cat: "Regulatory",
    title:
      "Asbestos surveys pre-strip: what underwriters actually want to see",
    date: "11 April 2026",
    read: "5 min",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80&auto=format&fit=crop",
    href: "/insights/asbestos-surveys-pre-strip",
  },
  {
    cat: "Market",
    title: "Hot works claims patterns: the three causes pricing 60% of the loss",
    date: "28 March 2026",
    read: "7 min",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80&auto=format&fit=crop",
    href: "/insights/hot-works-claims-patterns",
  },
];

// ---- Page ----------------------------------------------------------------

export default function HighRiskPage() {
  return (
    <main className="relative">
      <FAQPageSchema items={faqs} />
      <Nav />
      <Marginalia />

      {/* SECTION 1 — Sector hero */}
      <section className="relative pt-[140px] md:pt-[180px] pb-24 md:pb-32 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
          <Reveal>
            <div
              className="flex items-baseline justify-between mb-12 md:mb-16 pb-4"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-m-bone/55 tnum">
                Plate <span className="text-white">02</span> · Specialism{" "}
                <span className="text-white">01 / 04</span> — High Risk
              </span>
              <span className="hidden sm:flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-m-bone/35 tnum">
                Lead practice · NFDC · DSA
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-14 items-end">
            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <h1
                  className="font-display leading-[0.92] tracking-[-0.025em] text-white"
                  style={{ fontSize: "clamp(3rem, 8.4vw, 9rem)" }}
                >
                  When generalist brokers
                  <br />
                  <span className="italic">stop pricing,</span>
                  <br />
                  <span className="text-m-bone-2/85">we start.</span>
                </h1>
              </Reveal>

              <Reveal delay={300}>
                <p className="mt-10 md:mt-12 max-w-[44ch] text-[15.5px] leading-[1.65] text-m-bone/70">
                  Demolition. Asbestos removal. Hot works. Work at height.
                  Environmental impairment. The trades the high-street panel
                  declines.{" "}
                  <span className="text-white">
                    The trades we built the practice around.
                  </span>
                </p>
              </Reveal>

              <Reveal delay={460}>
                <div className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4">
                  <a
                    href="#sector-contact"
                    className="group inline-flex items-center justify-between gap-4 px-5 py-4 bg-white text-m-ink"
                    style={{
                      transition: "transform 160ms cubic-bezier(0.23, 1, 0.32, 1)",
                    }}
                  >
                    <span className="text-[11px] font-medium uppercase tracking-[0.22em]">
                      Talk to the practice lead
                    </span>
                    <span className="font-display text-[20px] leading-none">
                      Get in touch →
                    </span>
                  </a>
                  <HoldToCall display="01455 244 631" number="01455244631" />
                </div>
              </Reveal>
            </div>

            <Reveal delay={520} className="lg:col-span-5">
              <figure className="relative">
                <div
                  className="relative overflow-hidden bg-m-ink-3"
                  style={{
                    aspectRatio: "4 / 5",
                    borderTop: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80&auto=format&fit=crop"
                    alt="Demolition site with steel reinforcement exposed"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                  <div className="absolute inset-0 pointer-events-none mix-blend-difference">
                    <div className="absolute top-3 left-3 w-3 h-3 border-l border-t border-white/60" />
                    <div className="absolute top-3 right-3 w-3 h-3 border-r border-t border-white/60" />
                    <div className="absolute bottom-3 left-3 w-3 h-3 border-l border-b border-white/60" />
                    <div className="absolute bottom-3 right-3 w-3 h-3 border-r border-b border-white/60" />
                  </div>
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 50%, rgba(20,16,46,0.85) 100%)",
                    }}
                  />
                  <figcaption className="absolute left-0 right-0 bottom-0 px-4 py-3 flex items-end justify-between text-[10px] font-mono uppercase tracking-[0.24em] text-m-bone/85 tnum">
                    <span>Fig. 02 — Demolition</span>
                    <span>Pre-strip survey complete</span>
                  </figcaption>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-3 text-[9.5px] font-mono uppercase tracking-[0.26em] text-m-bone/40 tnum">
                  <span>Class · High Risk</span>
                  <span className="text-center font-display italic text-[12px] tracking-normal text-m-bone/55 normal-case">
                    Lead practice
                  </span>
                  <span className="text-right">2026 edition</span>
                </div>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 2 — What we know about your trade */}
      <section
        className="relative py-32 md:py-44"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
          <Reveal>
            <div
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-8 mb-12 md:mb-16"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 mb-6 text-[10px] font-mono uppercase tracking-[0.32em] text-m-bone/55">
                  Plate <span className="text-white tnum">03</span> — What we know
                </span>
                <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[-0.02em] text-white">
                  We&rsquo;ve been on the site,<br />
                  <span className="italic text-m-bone-2/85">
                    not just read about it.
                  </span>
                </h2>
              </div>
              <div className="lg:col-span-5 lg:pt-6">
                <p className="text-[15px] md:text-[16px] leading-[1.65] text-m-bone/60 max-w-md">
                  This is the &ldquo;earn trust&rdquo; page. The body below is what we
                  bring to every underwriter conversation about your trade —
                  not a glossary, not a checklist. The detail your generalist
                  broker is googling.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-7 lg:col-start-2">
                <div className="text-[16px] md:text-[17px] leading-[1.78] text-m-bone/75 space-y-6">
                  <p>
                    <span className="float-left font-display text-[76px] leading-[0.78] mr-3 mt-1 text-white">
                      H
                    </span>
                    igh-risk insurance is a relationships market, not a portal
                    market. Underwriters writing demolition, asbestos, and
                    hot-works classes don&rsquo;t take your submission and run
                    it through a model — they read it, ask questions, and price
                    judgement. If your broker can&rsquo;t walk an underwriter
                    through your trade, you don&rsquo;t get a quote.
                  </p>
                  <p>
                    Demolition starts with the survey, not the wrecking ball.{" "}
                    <span className="text-white">
                      Pre-strip refurbishment-and-demolition surveys
                    </span>{" "}
                    (R&D surveys, sometimes called Type 3) are the single most
                    asked-about document in any high-risk submission we hand
                    over. NFDC compliance signals, CITB skills cards, asbestos
                    licence renewals, party wall awards, and Section 80/81
                    notices to local authorities all sit alongside it. We&rsquo;ve
                    seen quotes withdrawn at bind for missing CDM 2015 duty
                    holder paperwork that nobody read on submission.
                  </p>
                  <p>
                    Hot works are the most expensive single cause of loss in
                    our portfolio. Most policies impose a{" "}
                    <span className="text-white">hot works permit warranty</span>{" "}
                    plus a fire-watch condition that survives the end of the
                    shift by 60–120 minutes. Torch cutting through a void with
                    concealed timber or polystyrene insulation triggers the
                    largest claims we see — and the conditions are usually the
                    coverage trigger.
                  </p>
                  <p>
                    Work at height is regulated by sequence, not just by edge
                    protection. The Working at Height Regulations 2005 hierarchy
                    (avoid → prevent → minimise) is what HSE inspectors reference
                    on site after a fall. Underwriters writing your EL at
                    renewal want to see how that hierarchy translates into your
                    method statements — generic boilerplate is read as a sign
                    you don&rsquo;t do it.
                  </p>
                  <p>
                    Environmental impairment is increasingly a separate cover
                    rather than an extension. Standard PL pollution wording is
                    narrow (sudden and accidental only). Demolition near
                    watercourses, fuel storage, or asbestos-bearing structures
                    triggers gradual-release exposure that PL won&rsquo;t pay.
                    Since the EA&rsquo;s 2024 enforcement uplift on
                    construction sites we&rsquo;ve been placing standalone EIL
                    on more than half of new high-risk programmes.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 3 — Typical risks and claims */}
      <section
        className="relative py-32 md:py-44"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
          <Reveal>
            <div
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-8 mb-12 md:mb-16"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 mb-6 text-[10px] font-mono uppercase tracking-[0.32em] text-m-bone/55">
                  Plate <span className="text-white tnum">04</span> — Typical risks
                </span>
                <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[-0.02em] text-white">
                  Five claim patterns<br />
                  <span className="italic text-m-bone-2/85">
                    we see most months.
                  </span>
                </h2>
              </div>
              <div className="lg:col-span-5 lg:pt-6">
                <p className="text-[15px] md:text-[16px] leading-[1.65] text-m-bone/60 max-w-md">
                  Drawn from the last 24 months of placements across our high-risk
                  book. Not theoretical. The cover that responds is what we&rsquo;d
                  put in your wording, not the textbook answer.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col">
            {risks.map((r, i) => {
              const Icon = r.icon;
              return (
                <Reveal key={r.title} delay={i * 80}>
                  <div
                    className="group relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-12 transition-colors duration-300"
                    style={{
                      borderTop: i === 0 ? "1px solid rgba(255,255,255,0.10)" : undefined,
                      borderBottom: "1px solid rgba(255,255,255,0.10)",
                    }}
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 right-0 -bottom-px h-px bg-m-coral"
                      style={{
                        clipPath: "inset(0 100% 0 0)",
                        transition: "clip-path 380ms cubic-bezier(0.23, 1, 0.32, 1)",
                      }}
                      data-coral-rule
                    />

                    <div className="md:col-span-1 flex items-start gap-3">
                      <span
                        className="w-11 h-11 flex items-center justify-center bg-white/[0.04] text-m-bone"
                        style={{ border: "1px solid rgba(255,255,255,0.10)" }}
                      >
                        <Icon className="w-5 h-5" strokeWidth={1.1} />
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-m-bone/40 tnum mt-3.5 md:hidden">
                        {String(i + 1).padStart(2, "0")} / 05
                      </span>
                    </div>

                    <div className="md:col-span-1 hidden md:flex items-start">
                      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-m-bone/40 tnum mt-3.5">
                        {String(i + 1).padStart(2, "0")} / 05
                      </span>
                    </div>

                    <div className="md:col-span-5">
                      <h3 className="font-display text-[28px] md:text-[32px] leading-[1.1] tracking-[-0.01em] text-white">
                        {r.title}
                      </h3>
                      <p className="mt-3 text-[14.5px] leading-[1.65] text-m-bone/60">
                        {r.body}
                      </p>
                    </div>

                    <div className="md:col-span-5">
                      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-m-bone/40 tnum">
                        Cover responds
                      </span>
                      <p className="mt-3 text-[14.5px] leading-[1.65] text-m-bone/85">
                        {r.cover}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Cover types */}
      <section
        className="relative py-32 md:py-44 bg-m-cream text-m-ink"
        style={{ borderTop: "1px solid rgba(10,10,10,0.10)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 90% 10%, rgba(229,108,112,0.10), transparent 60%)",
          }}
        />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
          <Reveal>
            <div
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-8 mb-12 md:mb-16"
              style={{ borderBottom: "1px solid rgba(10,10,10,0.12)" }}
            >
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 mb-6 text-[10px] font-mono uppercase tracking-[0.32em] text-m-ink/55">
                  Plate <span className="text-m-ink tnum">05</span> — Cover types
                </span>
                <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[-0.02em] text-m-ink">
                  Eight policies<br />
                  <span className="italic">we routinely arrange.</span>
                </h2>
              </div>
              <div className="lg:col-span-5 lg:pt-6">
                <p className="text-[15px] md:text-[16px] leading-[1.65] text-m-ink/65 max-w-md">
                  Not all classes need all eight. We start with the EL/PL/CAR
                  spine and add the specialist covers your trade actually
                  triggers.
                </p>
              </div>
            </div>
          </Reveal>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0">
            {covers.map((c, i) => (
              <Reveal key={c.name} delay={i * 60}>
                <li
                  className="group relative flex items-baseline gap-6 py-6 md:py-7"
                  style={{ borderTop: "1px solid rgba(10,10,10,0.10)" }}
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-m-ink/40 tnum shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-[24px] md:text-[26px] leading-[1.15] tracking-[-0.01em] text-m-ink">
                      {c.name}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-[1.65] text-m-ink/65">
                      {c.note}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 5 — Insurer relationships */}
      <section
        className="relative py-32 md:py-40 overflow-hidden"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div
          className="absolute inset-0 -z-10 pointer-events-none"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(229,108,112,0.10), transparent 70%)",
          }}
        />
        <div className="relative max-w-[1240px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
          <Reveal>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 mb-8 text-[10px] font-mono uppercase tracking-[0.32em] text-m-bone/55">
                Plate <span className="text-white tnum">06</span> — Insurer relationships
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="text-center">
              <p className="font-display text-[clamp(2rem,4.6vw,3.75rem)] leading-[1.18] tracking-[-0.01em] text-white max-w-4xl mx-auto">
                We hold agency agreements with{" "}
                <span className="italic text-m-coral">every major insurer</span>{" "}
                writing high-risk classes in the UK, plus access to{" "}
                <span className="italic">specialist Lloyd&rsquo;s syndicates</span>{" "}
                for the placements that need underwriter judgement, not algorithm.
              </p>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-10"
              style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }}
            >
              {[
                { stat: "30+", label: "Insurer panel for high-risk classes" },
                { stat: "12", label: "Lloyd's syndicates accessible via brokers" },
                { stat: "94%", label: "Renewal retention, last 5 years" },
                { stat: "0", label: "Restrictive ties or exclusivity deals" },
              ].map((s, i) => (
                <div key={s.label}>
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.28em] text-m-bone/40 tnum">
                    {String(i + 1).padStart(2, "0")} · Panel
                  </span>
                  <p className="mt-3 font-display text-[clamp(2.5rem,4vw,3.75rem)] leading-none tracking-[-0.02em] text-white tnum">
                    {s.stat}
                  </p>
                  <p className="mt-3 text-[12px] text-m-bone/55 leading-snug max-w-[20ch]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 6 — Sector FAQs */}
      <section
        className="relative py-32 md:py-44"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
          <Reveal>
            <div
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-8 mb-12 md:mb-16"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 mb-6 text-[10px] font-mono uppercase tracking-[0.32em] text-m-bone/55">
                  Plate <span className="text-white tnum">07</span> — Sector FAQs
                </span>
                <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[-0.02em] text-white">
                  Eight questions<br />
                  <span className="italic text-m-bone-2/85">
                    we&rsquo;re asked every week.
                  </span>
                </h2>
              </div>
              <div className="lg:col-span-5 lg:pt-6">
                <p className="text-[15px] md:text-[16px] leading-[1.65] text-m-bone/60 max-w-md">
                  Plain-English answers. If yours isn&rsquo;t here, the practice
                  lead picks up — and the answer&rsquo;s usually the next post on
                  the Insights page.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <FAQList items={faqs} />
          </Reveal>
        </div>
      </section>

      {/* SECTION 7 — Sector contact CTA */}
      <section
        id="sector-contact"
        className="relative py-32 md:py-44"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
          <Reveal>
            <span className="inline-flex items-center gap-2 mb-8 text-[10px] font-mono uppercase tracking-[0.32em] text-m-bone/55">
              <span className="w-1.5 h-1.5 rounded-full bg-m-coral pulse-dot" />
              Plate <span className="text-white tnum">08</span> — Sector contact
            </span>
          </Reveal>

          <Reveal delay={150}>
            <div
              className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-m-ink-2"
              style={{ border: "1px solid rgba(255,255,255,0.10)" }}
            >
              <div
                className="lg:col-span-5 relative aspect-[4/5] lg:aspect-auto overflow-hidden"
                style={{ borderRight: "1px solid rgba(255,255,255,0.10)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=80&auto=format&fit=crop"
                  alt="Dave Whitcombe — Director, High Risk practice lead"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-3 left-3 right-3 flex items-start justify-between text-[9.5px] font-mono uppercase tracking-[0.28em] text-m-bone/85 tnum">
                  <span>Profile · Cert CII</span>
                  <span>18y in trade</span>
                </div>
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 50%, rgba(20,16,46,0.85) 100%)",
                  }}
                />
              </div>

              <div className="lg:col-span-7 p-8 md:p-12 lg:p-14 flex flex-col">
                <span className="text-[10px] font-mono uppercase tracking-[0.28em] text-m-bone/40 mb-6">
                  Practice lead
                </span>
                <h3 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[0.95] tracking-[-0.02em] text-white">
                  Dave Whitcombe
                </h3>
                <p className="mt-3 text-[12px] font-mono uppercase tracking-[0.22em] text-m-bone/55">
                  Director · High Risk practice lead
                </p>

                <p className="mt-8 text-[15px] leading-[1.65] text-m-bone/70 max-w-prose">
                  Eighteen years across demolition, asbestos, and hot-works
                  classes. Sits on the NFDC technical committee and chairs the
                  CRS underwriting working group. Direct dial below — no
                  gatekeeper, no queue.
                </p>

                <div
                  className="mt-10 pt-8 flex flex-col gap-4"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }}
                >
                  <HoldToCall display="01455 244 631" number="01455244631" />
                  <div className="flex gap-3">
                    <a
                      href="mailto:dave@crs-ins.co.uk"
                      className="flex-1 group inline-flex items-center justify-between gap-3 px-5 py-3.5 bg-white/[0.04] hover:bg-m-cream hover:text-m-ink transition-colors duration-300"
                      style={{
                        border: "1px solid rgba(255,255,255,0.10)",
                        transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
                      }}
                    >
                      <span className="text-[11px] font-mono uppercase tracking-[0.22em]">
                        Email Dave
                      </span>
                      <span className="flex items-center gap-2 text-[13px] tnum">
                        dave@crs-ins.co.uk
                        <MailIcon className="w-3.5 h-3.5" strokeWidth={1.25} />
                      </span>
                    </a>
                    <a
                      href="#"
                      aria-label="Dave Whitcombe on LinkedIn"
                      className="w-12 flex items-center justify-center bg-white/[0.04] text-m-bone hover:bg-m-cream hover:text-m-ink transition-colors duration-300"
                      style={{
                        border: "1px solid rgba(255,255,255,0.10)",
                        transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
                      }}
                    >
                      <LinkedInIcon className="w-4 h-4" strokeWidth={1.25} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 8 — Related insights */}
      <section
        className="relative py-32 md:py-44"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
          <Reveal>
            <div
              className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 mb-12 md:mb-16"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div>
                <span className="inline-flex items-center gap-2 mb-6 text-[10px] font-mono uppercase tracking-[0.32em] text-m-bone/55">
                  Plate <span className="text-white tnum">09</span> — Related insights
                </span>
                <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[0.95] tracking-[-0.02em] text-white">
                  Tagged{" "}
                  <span className="italic">High Risk.</span>
                </h2>
              </div>
              <a
                href="/site/insights?tag=high-risk"
                className="group inline-flex items-center gap-3 text-[12px] font-mono uppercase tracking-[0.22em] text-m-bone/65 hover:text-white transition-colors duration-300"
                style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
              >
                See all High Risk insights →
              </a>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {insights.map((p, i) => (
              <Reveal key={p.title} delay={i * 110}>
                <a
                  href={p.href}
                  className="group relative block h-full bg-m-ink-2 hover:bg-m-ink-3 transition-colors duration-300 flex flex-col"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <span
                    aria-hidden
                    className="absolute left-0 right-0 -bottom-px h-px bg-m-coral"
                    style={{
                      clipPath: "inset(0 100% 0 0)",
                      transition: "clip-path 380ms cubic-bezier(0.23, 1, 0.32, 1)",
                    }}
                    data-coral-rule
                  />
                  <div
                    className="relative aspect-[16/10] overflow-hidden"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
                      style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
                      loading="lazy"
                      decoding="async"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 50%, rgba(20,16,46,0.55) 100%)",
                      }}
                    />
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[9.5px] font-mono uppercase tracking-[0.28em] tnum">
                      <span className="text-m-bone/85">
                        Article <span className="text-white">{String(i + 1).padStart(2, "0")}</span> · {p.cat}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 md:p-7 flex flex-col gap-5 flex-1">
                    <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.28em] text-m-bone/40 tnum">
                      <span>{p.date}</span>
                      <span className="w-1 h-1 rounded-full bg-m-bone/20" />
                      <span>{p.read} read</span>
                    </div>
                    <h3 className="font-display text-[24px] md:text-[26px] leading-[1.1] tracking-[-0.01em] text-white">
                      {p.title}
                    </h3>
                    <div
                      className="mt-auto pt-5 flex items-center justify-between"
                      style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-m-bone/55">
                        Read article
                      </span>
                      <span
                        className="flex items-center justify-center w-9 h-9 bg-white/[0.04] text-m-bone group-hover:bg-m-coral group-hover:text-m-ink transition-all duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[1px]"
                        style={{
                          border: "1px solid rgba(255,255,255,0.10)",
                          transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
                        }}
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.25} />
                      </span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
