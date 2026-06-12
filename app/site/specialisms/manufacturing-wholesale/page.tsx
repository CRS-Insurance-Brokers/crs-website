import type { Metadata } from "next";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { Reveal } from "../../components/Reveal";
import { ArrowUpRight } from "../../components/icons";
import { HoldToCall } from "../../components/HoldToCall";
import { FAQList, type FAQItem } from "../_components/FAQ";
import { FAQPageSchema } from "../../components/SchemaJsonLd";

export const metadata: Metadata = {
  title: "Manufacturing & Wholesale Insurance · Industrial plant, warehousing & distribution",
  description:
    "Commercial combined, machinery breakdown, and business interruption cover for manufacturers, wholesalers, and distributors. Industrial plant, warehousing, and supply chain exposure. FCA FRN 960073.",
  alternates: { canonical: "/site/specialisms/manufacturing-wholesale" },
  openGraph: {
    title: "Manufacturing & Wholesale Insurance · CRS Insurance Brokers",
    description:
      "Commercial combined, machinery breakdown, and business interruption cover built around how your operation actually runs.",
    type: "website",
    siteName: "CRS Insurance Brokers",
    locale: "en_GB",
  },
};

// ---- Content -------------------------------------------------------------

const faqs: FAQItem[] = [
  {
    q: "What does a commercial combined policy cover for a manufacturer?",
    a: "A combined policy brings together the main classes your business needs: property, business interruption, employers liability, public liability, and often machinery breakdown. The detail of how each section is structured matters as much as having the cover in place. We build it around your specific operation rather than fitting you into a standard package.",
  },
  {
    q: "How does machinery breakdown cover work?",
    a: "Machinery breakdown covers the sudden and unforeseen failure of plant and machinery. It is a separate class from property insurance, which covers physical damage caused by events like fire or flood. For businesses where a key machine going down would halt production, it is an important part of the programme alongside business interruption cover.",
  },
  {
    q: "How is business interruption calculated for a manufacturing business?",
    a: "BI is based on gross profit and the indemnity period. For manufacturers, the indemnity period needs to reflect how long it would realistically take to get back to full production, including sourcing and installing replacement specialist plant. That is often longer than the time it takes to rebuild or repair the premises, and an underestimate here is one of the most common gaps we see.",
  },
  {
    q: "We hold significant stock. How should it be valued for insurance?",
    a: "Stock should be insured on a basis that reflects replacement cost. For manufacturers that means raw materials, work in progress, and finished goods can all sit at different values at any point. Seasonally fluctuating stock can be handled with a declaration-linked arrangement. We will make sure the basis of cover is right for how your stock moves.",
  },
  {
    q: "We supply goods to retailers. Do we need product liability?",
    a: "Yes. If a product you manufacture, supply, or distribute causes injury or property damage, product liability responds. The wording needs to correctly reflect your supply chain. If you are importing goods or supplying own-label products, that affects how the risk is structured and needs to be declared.",
  },
  {
    q: "Our key supplier is based overseas. If they fail, does our business interruption cover respond?",
    a: "Business interruption is typically triggered by damage at your own premises. Cover for failure of a named supplier — sometimes called contingent business interruption — is a separate section. If a single overseas supplier represents a significant dependency, it is worth discussing whether contingent BI should sit within your programme.",
  },
  {
    q: "We run multiple shifts including nights. Does that affect our cover?",
    a: "Shift patterns affect the risk profile for both property and liability and need to be declared accurately at submission. Working through the night or over weekends is not a problem in itself, but it needs to be on the policy. Undisclosed shift patterns can become an issue at claims stage.",
  },
  {
    q: "We are a wholesaler, not a manufacturer. Do we need the same cover?",
    a: "The core structure is similar but the emphasis shifts. For a wholesaler, stock values, product liability for goods you distribute, and the transit of goods between locations all become more prominent. Business interruption needs to reflect your distribution model and your dependency on suppliers and customers. We will structure the programme around what your business does.",
  },
];

// ---- Page ----------------------------------------------------------------

export default function ManufacturingWholesalePage() {
  return (
    <main id="main-content" className="relative">
      <FAQPageSchema items={faqs} />
      <Nav />

      {/* SECTION 1 — Sector hero */}
      <section className="relative pt-[160px] md:pt-[180px] pb-10 md:pb-14 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-14 items-start">
            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <h1
                  className="font-display font-bold leading-[1.15] tracking-[-0.015em] text-white"
                  style={{ fontSize: "clamp(2.25rem, 4.8vw, 4rem)" }}
                >
                  Cover that fits
                  <br />
                  <span className="italic">how your operation</span>
                  <br />
                  <span className="text-m-bone-2/85">runs day to day.</span>
                </h1>
              </Reveal>

              <Reveal delay={300}>
                <p className="mt-10 md:mt-12 max-w-[44ch] text-[15.5px] leading-[1.65] text-m-bone/70">
                  Commercial combined, machinery breakdown, and business
                  interruption structured around your operation. Industrial
                  plant, warehousing,{" "}
                  <span className="text-white">
                    and supply chain cover built to fit.
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
                    src="/images/manufacturing.jpg"
                    alt="Manufacturing warehouse and industrial plant"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="eager"
                    fetchPriority="high"
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
                </div>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Editorial */}
      <section
        className="relative py-12 md:py-16"
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
                  A standard package
                  <br />
                  <span className="italic text-m-bone-2/85">
                    rarely fits
                  </span>
                  <br />
                  a real operation.
                </h2>
              </div>
              <div className="lg:col-span-6 flex flex-col gap-5 lg:self-center lg:mt-10">
                <p className="text-[15px] md:text-[16px] leading-[1.7] text-m-bone/65">
                  Getting the indemnity period right on business interruption
                  matters. For most manufacturers, sourcing and commissioning
                  replacement specialist plant takes longer than the indemnity
                  period is often set for. Stock valuation needs to move with
                  your production cycle, and if you distribute or supply
                  own-label goods, your product liability needs to be
                  structured to follow your supply chain.
                </p>
                <p className="text-[15px] md:text-[16px] leading-[1.7] text-m-bone/65">
                  We ask about your shift patterns, your key plant, and your
                  supply chain dependencies. The cover is structured around{" "}
                  <span className="text-white">what we find out, not a standard form.</span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 3 — Sector FAQs */}
      <section
        className="relative py-16 md:py-24"
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
        className="relative py-16 md:py-24"
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

