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
  title: "Engineering Insurance · M&E, machinery & specialist engineering trades",
  description:
    "Specialist cover for mechanical and electrical engineers, machinery, and specialist engineering trades. Tools, machinery in transit, hired-in cover, and M&E-specific liability. FCA FRN 960073.",
  alternates: { canonical: "/site/specialisms/contractors-engineers" },
  openGraph: {
    title: "Engineering Insurance — M&E & specialist trades · CRS Insurance Brokers",
    description:
      "Specialist cover for M&E engineers and engineering trades. Bespoke schedules for tools, machinery in transit, and hired-in cover.",
    type: "website",
  },
};

// ---- Content -------------------------------------------------------------

const faqs: FAQItem[] = [
  {
    q: "We hire plant in under CPA conditions. Are we liable if it is damaged?",
    a: "Under standard CPA terms, you take on responsibility for the plant from the moment it is delivered. Hired-in plant cover addresses that liability. If you are regularly hiring in plant, it is worth making sure you have the right cover in place rather than relying on the hirer's own insurance, which will not protect you.",
  },
  {
    q: "Our tools are kept in the van overnight. Are they insured?",
    a: "It depends on the policy and how it is structured. Tool cover with overnight in-vehicle conditions is available but usually requires evidence of forced entry and may have limits on individual items. We will make sure the schedule reflects what you actually own and where it is kept.",
  },
  {
    q: "We carry out commissioning and testing as part of our M&E scope. Does that affect our cover?",
    a: "Yes. Commissioning and testing introduces liability that is distinct from the installation works themselves. If a system is commissioned incorrectly and causes damage or injury after handover, the question of where liability sits can be complex. We make sure the policy wording addresses your full scope of work, including testing and commissioning, not just the physical installation.",
  },
  {
    q: "We have machinery we own and machinery we hire in. Can that sit on one policy?",
    a: "Yes. We can schedule owned machinery and hired-in machinery together under one programme so you are not managing separate policies. We make sure the basis of settlement is correct for each, as owned and hired-in machinery are typically treated differently at claims stage.",
  },
  {
    q: "We hire specialist equipment out to other trades. Does our insurance cover how they use it?",
    a: "When you hire equipment to others, your liability as the owner relates to the condition of the equipment at the point of hire. What the hirer does with it is generally their liability. A properly structured hire fleet policy will make this clear and ensure you are not exposed for how others operate your equipment.",
  },
  {
    q: "We have specialist equipment worth a significant amount. How is that covered?",
    a: "Plant and equipment cover can be arranged on an all risks basis for owned items. The key is making sure the schedule accurately reflects replacement values, as underinsurance is common on specialist equipment that has appreciated in value or been upgraded over time. We will make sure the schedule is right at the outset and review it at renewal.",
  },
  {
    q: "Our engineers work across the whole of the UK. Does that affect the policy?",
    a: "UK-wide cover is standard on a properly structured policy. If any of your work takes you outside Great Britain, including Northern Ireland or the Republic of Ireland, that needs to be declared as it may affect your EL and PL cover.",
  },
  {
    q: "What is the difference between plant all risks and public liability?",
    a: "Plant all risks covers the plant itself as your asset, so damage to or loss of the machine. Public liability covers damage or injury to third parties caused by the plant or its operation. They are separate classes and both are usually needed if you own or operate plant.",
  },
];

// ---- Page ----------------------------------------------------------------

export default function ContractorsEngineersPage() {
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
                <span className="text-white">03 / 04</span> — Engineering
              </span>
              <span className="hidden sm:flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-m-bone/35 tnum">
                M&amp;E · Machinery · Specialist engineering
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
                  Cover that travels
                  <br />
                  <span className="italic">with your business,</span>
                  <br />
                  <span className="text-m-bone-2/85">site to site.</span>
                </h1>
              </Reveal>

              <Reveal delay={300}>
                <p className="mt-10 md:mt-12 max-w-[44ch] text-[15.5px] leading-[1.65] text-m-bone/70">
                  Mechanical and electrical, machinery, and specialist
                  engineering trades. Bespoke schedules for tools, machinery
                  in transit, and hired-in cover.{" "}
                  <span className="text-white">
                    Built around how you actually work.
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
                    src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=1200&q=80&auto=format&fit=crop"
                    alt="Engineer working with equipment"
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
                    <span>Fig. 04 — Engineers</span>
                    <span>M&amp;E · Machinery</span>
                  </figcaption>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-3 text-[9.5px] font-mono uppercase tracking-[0.26em] text-m-bone/40 tnum">
                  <span>Class · Engineers</span>
                  <span className="text-center font-display italic text-[12px] tracking-normal text-m-bone/55 normal-case">
                    M&amp;E · Machinery
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
                  Your tools, your machinery,
                  <br />
                  <span className="italic text-m-bone-2/85">
                    your liability on site.
                  </span>
                </h2>
              </div>
              <div className="lg:col-span-6 flex flex-col gap-5 lg:self-center lg:mt-10">
                <p className="text-[15px] md:text-[16px] leading-[1.7] text-m-bone/65">
                  A standard commercial policy rarely covers the complexity
                  of an M&E business or engineering operation. Your tools and
                  equipment move between sites. Your machinery is sometimes
                  owned, sometimes hired in. Your liability as an engineer can
                  extend well beyond the installation and into how a system
                  performs after handover.
                </p>
                <p className="text-[15px] md:text-[16px] leading-[1.7] text-m-bone/65">
                  We build the programme around what you actually own, what
                  you hire in, and the full scope of what your business does.
                  Not a package off the shelf, but a schedule that{" "}
                  <span className="text-white">reflects how your business runs.</span>
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

      {/* SECTION 4 — Sector contact CTA */}
      <section
        id="sector-contact"
        className="relative py-32 md:py-44"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
          <Reveal>
            <span className="inline-flex items-center gap-2 mb-8 text-[10px] font-mono uppercase tracking-[0.32em] text-m-bone/55">
              <span className="w-1.5 h-1.5 rounded-full bg-m-coral pulse-dot" />
              Sector contact
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
                    Call us
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
