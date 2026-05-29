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
  title: "Construction Insurance · Principal contractors, subcontractors & all trades",
  description:
    "Cover for the full contractor spectrum. Principal contractors, subcontractors, civils, groundworks, and specialist trades. Contractors All Risks, professional indemnity, and JCT-aligned cover. FCA FRN 960073.",
  alternates: { canonical: "/site/specialisms/construction" },
  openGraph: {
    title: "Construction Insurance — All contractor trades · CRS Insurance Brokers",
    description:
      "Cover for principal contractors, subcontractors, civils, and all contractor trades. Properly structured, not a package off the shelf.",
    type: "website",
  },
};

// ---- Content -------------------------------------------------------------

const faqs: FAQItem[] = [
  {
    q: "We are a principal contractor on a JCT contract. What cover do we need as a minimum?",
    a: "As a principal contractor you will typically need Employers Liability, Public Liability, and Contractors All Risks as a minimum. The JCT sets out specific insurance obligations and the contract should be read carefully alongside your cover. We work through the contract requirements with you to make sure the policy is properly aligned.",
  },
  {
    q: "We work as a subcontractor on large sites. What do we need in place?",
    a: "Employers Liability is a legal requirement. Public Liability will be required by the principal contractor and is often specified at a minimum limit in the subcontract. Where you carry any design or specification responsibility, Professional Indemnity may also be required. We can review any subcontract requirements and make sure your cover meets them.",
  },
  {
    q: "We do design-and-build. Does our professional indemnity cover the design element?",
    a: "Contractor PI is a specific class and not all PI policies are written to cover design liability arising from construction activities. It is important that the policy wording properly reflects the design responsibility you are taking on. We place contractor PI as a distinct class and will ensure the cover is fit for purpose.",
  },
  {
    q: "Our client is asking for contract works cover. What does that involve?",
    a: "Contract works cover protects the physical works in progress against loss or damage before handover, including materials on site awaiting incorporation and temporary works. What the contract requires will vary depending on the project and the terms agreed. We will review what is being asked for and make sure the cover is structured correctly.",
  },
  {
    q: "We are a civils or groundworks contractor. Is that treated differently to building work?",
    a: "The risk profile for civils and groundworks differs from building work in a number of ways, including ground condition risks, third-party liability from excavation, and the proximity of utilities. Civils is a class we place regularly and know well. We will make sure the cover reflects the specific nature of your work rather than treating it as standard construction.",
  },
  {
    q: "We use a lot of subcontractors. Are they covered under our policy?",
    a: "Subcontractors are generally required to carry their own Employers Liability. Whether your policy extends to cover their work under your Public Liability depends on the specific wording. We make sure you understand exactly what is and is not covered, and what warranties you need in place from your subcontractors.",
  },
  {
    q: "We are working on a live building with occupants present. Does that change the cover?",
    a: "Yes. Existing structures, adjacent occupants, and the increased risk of disruption to third parties all need specific consideration. This is a more complex risk than new-build work and the policy needs to reflect that. Bring it to us early and we will make sure the placement is right.",
  },
  {
    q: "What does a Contractors All Risks policy actually cover?",
    a: "The core of a CAR policy is contract works cover, which protects the physical works in progress against loss or damage before handover. Beyond that, a number of additional sections can be added depending on what your business needs. Own plant and equipment, hired-in plant, tools and small items, and employees' tools are all optional sections rather than automatic inclusions. We build the schedule around what you actually own and use, so you are not paying for sections that do not apply and not exposed where they do.",
  },
];

// ---- Page ----------------------------------------------------------------

export default function ConstructionPage() {
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
                <span className="text-white">02 / 04</span> — Construction
              </span>
              <span className="hidden sm:flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-m-bone/35 tnum">
                Principal contractors · Subcontractors · Civils
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
                  Cover for every
                  <br />
                  <span className="italic">contractor trade,</span>
                  <br />
                  <span className="text-m-bone-2/85">top to bottom.</span>
                </h1>
              </Reveal>

              <Reveal delay={300}>
                <p className="mt-10 md:mt-12 max-w-[44ch] text-[15.5px] leading-[1.65] text-m-bone/70">
                  Principal contractors, subcontractors, civils, groundworks,
                  and specialist trades. Contractors All Risks, Professional
                  Indemnity, and contract-aligned cover built around the
                  whole contractor spectrum.
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
                    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80&auto=format&fit=crop"
                    alt="Construction site"
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
                    <span>Fig. 03 — Construction</span>
                    <span>Principal contractor</span>
                  </figcaption>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-3 text-[9.5px] font-mono uppercase tracking-[0.26em] text-m-bone/40 tnum">
                  <span>Class · Construction</span>
                  <span className="text-center font-display italic text-[12px] tracking-normal text-m-bone/55 normal-case">
                    JCT · NEC
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
                  Whether you run the site
                  <br />
                  <span className="italic text-m-bone-2/85">
                    or work on it,
                  </span>
                  <br />
                  the cover needs to fit.
                </h2>
              </div>
              <div className="lg:col-span-6 flex flex-col gap-5 lg:self-center lg:mt-10">
                <p className="text-[15px] md:text-[16px] leading-[1.7] text-m-bone/65">
                  A principal contractor has different obligations to a civils
                  subcontractor, a groundworks firm, or a specialist trade. The
                  contract terms, the chain of liability, the scope of design
                  responsibility — all of it varies. A standard package rarely
                  reflects how construction actually works.
                </p>
                <p className="text-[15px] md:text-[16px] leading-[1.7] text-m-bone/65">
                  We cover the full contractor spectrum. From the principal
                  managing the whole programme to the subcontractor named in
                  the contract, we make sure the cover is structured around
                  your position in the chain and{" "}
                  <span className="text-white">what that actually means for your liability.</span>
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
