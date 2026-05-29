import type { Metadata } from "next";
import { Nav } from "../../components/Nav";
import { Marginalia } from "../../components/Marginalia";
import { Footer } from "../../components/Footer";
import { Reveal } from "../../components/Reveal";
import { ArrowUpRight } from "../../components/icons";
import { HoldToCall } from "../../components/HoldToCall";
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
      "Specialist cover for the trades others won't touch. NFDC and DSA-affiliated cover for demolition, asbestos, hot works and work at height.",
    type: "website",
  },
};

// ---- Content -------------------------------------------------------------

const faqs: FAQItem[] = [
  {
    q: "We're a small demolition contractor — will we get cover at all?",
    a: "Yes, in most cases. Insurers are cautious with smaller demolition firms, but the market will engage if your training records (NFDC, CITB), method statements, and claims history are in order. The conversation usually starts with us walking an underwriter through your recent jobs, not a portal form. We hold a book of demolition contractors across a range of turnover sizes.",
  },
  {
    q: "Our last claim makes renewal feel impossible. Can you help?",
    a: "It depends on the claim type, the cause, and what has changed since. A single fire-from-hot-works claim is often recoverable with a tightened permit-to-work regime. A pattern of fall-from-height EL claims needs more substantive answers. Bring us the renewal early, six weeks minimum and ideally eight, and we will work through the market with you.",
  },
  {
    q: "How quickly can you place new cover?",
    a: "Our new business team will work as hard as it takes. If your renewal is tomorrow, we will do everything we can to get terms on the table. How quickly we can move depends on what you give us. A complete submission with training records, method statements, and claims history lets us go straight to underwriters. The more you give us upfront, the faster we move.",
  },
  {
    q: "Do you handle the asbestos licence application alongside the cover?",
    a: "We do not handle the HSE licence itself; that sits between you and the HSE. We do place the cover the licence application needs evidence of, and we are happy to sense-check your H&S consultant's work before submission. Where asbestos is part of a wider demolition package, we handle both as one programme.",
  },
  {
    q: "What does an 'asbestos extension' on Public Liability actually cover?",
    a: "It covers liability from the release of asbestos fibres during the works, so third-party bodily injury and property contamination. It does not cover the cost of removing your own contamination from site, nor known ACMs left in place where the contract excludes them. Wording differs between insurers and we will walk through the specific clauses with you.",
  },
  {
    q: "We do hot works on Sundays. Does that need special declaration?",
    a: "Most policies carry a hot works permit warranty and a 24-hour fire-watch condition, regardless of day. Some tighten further outside normal working hours. Declare the working pattern at submission; if it comes to light later it can become a coverage issue.",
  },
  {
    q: "Does CRS arrange Environmental Impairment Liability?",
    a: "Yes. Where your work creates environmental exposure, such as demolition near watercourses, asbestos-bearing structures, or work close to fuel storage, we can arrange a separate Environmental Impairment Liability policy. Whether you need one, and at what limit, depends on your specific situation. We will talk through your exposure and advise accordingly.",
  },
  {
    q: "What's the typical excess on our class?",
    a: "It varies depending on your turnover, claims history, and the nature of the work you do. We can adjust the excess up or down to move the premium and there is usually a clear point where it makes sense to do so. We will show you the options at quote stage.",
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
      <section className="relative pt-[160px] md:pt-[180px] pb-16 md:pb-20 overflow-hidden">
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
                NFDC · DSA affiliated
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-14 items-start">
            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <h1
                  className="font-display font-bold leading-[1.15] tracking-[-0.015em] text-white"
                  style={{ fontSize: "clamp(2.25rem, 4.8vw, 4rem)" }}
                >
                  Specialist cover
                  <br />
                  <span className="italic">for the trades</span>
                  <br />
                  <span className="text-m-bone-2/85">others won&rsquo;t touch.</span>
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
                <div className="mt-10 md:mt-12 flex flex-col sm:flex-row sm:items-stretch gap-4">
                  <a
                    href="#sector-contact"
                    className="group relative inline-flex items-center justify-between gap-4 px-5 py-4 bg-white text-m-ink overflow-hidden"
                  >
                    <span className="text-[13px] font-semibold tracking-[0.08em]">
                      Talk to us →
                    </span>
                  </a>
                  <HoldToCall display="01455 244630" number="01455244630" />
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
                    NFDC · DSA
                  </span>
                  <span className="text-right">2026 edition</span>
                </div>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Editorial */}
      <section
        className="relative py-20 md:py-28"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
              <div className="lg:col-span-6">
                <span className="inline-flex items-center gap-2 mb-8 text-[10px] font-mono uppercase tracking-[0.32em] text-m-bone/55">
                  Why specialist
                </span>
                <h2 className="font-display text-[clamp(2.5rem,5.5vw,4.75rem)] leading-[0.95] tracking-[-0.02em] text-white">
                  What a portal<br />
                  <span className="italic text-m-bone-2/85">
                    can&rsquo;t tell an underwriter.
                  </span>
                </h2>
              </div>
              <div className="lg:col-span-6 flex flex-col gap-5 lg:self-center lg:mt-10">
                <p className="text-[15px] md:text-[16px] leading-[1.7] text-m-bone/65">
                  Whether your demolition supervisor holds the CCDO card. How far
                  the nearest occupied building sits from the drop zone. What your
                  permit-to-work regime looks like on a Sunday. Whether the
                  asbestos survey was a management survey or a full refurbishment
                  and demolition survey.
                </p>
                <p className="text-[15px] md:text-[16px] leading-[1.7] text-m-bone/65">
                  These are the details that move a declination to an acceptance —
                  and a standard rate to a competitive one. We know the questions
                  because we&rsquo;ve had the conversations. That&rsquo;s why our
                  clients get cover other brokers{" "}
                  <span className="text-white">can&rsquo;t place.</span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 3 — Sector FAQs */}
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
                  Sector FAQs
                </span>
                <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[-0.02em] text-white">
                  Eight questions<br />
                  <span className="italic text-m-bone-2/85">
                    we&rsquo;re asked every week.
                  </span>
                </h2>
              </div>
              <div className="lg:col-span-5 lg:self-center">
                <p className="text-[15px] md:text-[16px] leading-[1.65] text-m-bone/60 max-w-md">
                  Plain-English answers. If yours isn&rsquo;t here, call us on
                  01455 244630 and we&rsquo;ll talk it through directly.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <FAQList items={faqs} />
          </Reveal>
        </div>
      </section>

      {/* SECTION 4 — Contact CTA */}
      <section
        id="sector-contact"
        className="relative py-32 md:py-44"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
          <Reveal>
            <span className="inline-flex items-center gap-2 mb-8 text-[10px] font-mono uppercase tracking-[0.32em] text-m-bone/55">
              <span className="w-1.5 h-1.5 rounded-full bg-m-coral pulse-dot" />
              Contact
            </span>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <a
                href="tel:01455244630"
                className="group flex items-center justify-between px-8 py-10 bg-m-ink-2 hover:bg-m-ink-3 transition-colors duration-300"
                style={{ border: "1px solid rgba(255,255,255,0.10)" }}
              >
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-m-bone/55 mb-3">
                    Contact
                  </p>
                  <p className="font-display text-[clamp(2rem,4vw,3rem)] leading-none tracking-[-0.02em] text-white tnum">
                    01455 244630
                  </p>
                  <p className="mt-3 text-[12px] font-mono uppercase tracking-[0.22em] text-m-bone/40">
                    Mon–Fri 09:00–17:00
                  </p>
                </div>
                <span
                  className="w-12 h-12 bg-m-coral text-m-ink flex items-center justify-center shrink-0 group-hover:translate-x-[3px] group-hover:-translate-y-[2px] transition-transform duration-300"
                  style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
                >
                  <ArrowUpRight className="w-4 h-4" strokeWidth={1.4} />
                </span>
              </a>

              <a
                href="mailto:info@crs-ins.co.uk"
                className="group flex items-center justify-between px-8 py-10 bg-m-ink-2 hover:bg-m-ink-3 transition-colors duration-300"
                style={{ border: "1px solid rgba(255,255,255,0.10)" }}
              >
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-m-bone/55 mb-3">
                    Email us
                  </p>
                  <p className="font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-none tracking-[-0.02em] text-white">
                    info@crs-ins.co.uk
                  </p>
                  <p className="mt-3 text-[12px] font-mono uppercase tracking-[0.22em] text-m-bone/40">
                    We respond as quickly as possible
                  </p>
                </div>
                <span
                  className="w-12 h-12 bg-m-coral text-m-ink flex items-center justify-center shrink-0 group-hover:translate-x-[3px] group-hover:-translate-y-[2px] transition-transform duration-300"
                  style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
                >
                  <ArrowUpRight className="w-4 h-4" strokeWidth={1.4} />
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
