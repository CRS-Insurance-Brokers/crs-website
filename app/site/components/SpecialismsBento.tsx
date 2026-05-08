import { Reveal } from "./Reveal";
import { ArrowUpRight } from "./icons";

type Card = {
  num: string;
  title: string;
  tagline: string;
  body: string;
  covers: string[];
  image: string;
  href: string;
  feature?: boolean;
};

const cards: Card[] = [
  {
    num: "01",
    title: "High Risk",
    tagline: "Demolition · Asbestos · Hot works",
    body:
      "The crown jewel. Hot works permits, asbestos surveys pre-strip, party wall implications, work at height, environmental impairment, explosives. Where generalist brokers stop pricing, we start.",
    covers: ["Demolition", "Asbestos removal", "Work at height", "Hot works", "Environmental"],
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80&auto=format&fit=crop",
    href: "/specialisms/high-risk",
    feature: true,
  },
  {
    num: "02",
    title: "Construction",
    tagline: "Principal contractors & civils",
    body:
      "Contractors All Risks, professional indemnity for design-and-build, JCT-aligned cover.",
    covers: ["Principal contractors", "Civils", "Subcontractors"],
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80&auto=format&fit=crop",
    href: "/specialisms/construction",
  },
  {
    num: "03",
    title: "Contractors & Engineers",
    tagline: "M&E · Plant · Specialist trades",
    body:
      "Mechanical and electrical, plant hire, scaffolding, roofing — bespoke schedules for tools, plant in transit, and hired-in cover.",
    covers: ["M&E", "Plant hire", "Roofing", "Scaffolding"],
    image:
      "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=1200&q=80&auto=format&fit=crop",
    href: "/specialisms/contractors-engineers",
  },
  {
    num: "04",
    title: "Manufacturing & Wholesale",
    tagline: "Industrial plant · Warehousing",
    body:
      "Combined commercial, machinery breakdown, business interruption that actually models your shifts.",
    covers: ["Industrial plant", "Warehousing", "Distribution"],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80&auto=format&fit=crop",
    href: "/specialisms/manufacturing-wholesale",
  },
];

const Crosshairs = () => (
  <div className="absolute inset-0 pointer-events-none mix-blend-difference">
    <div className="absolute top-2.5 left-2.5 w-3 h-3 border-l border-t border-white/55" />
    <div className="absolute top-2.5 right-2.5 w-3 h-3 border-r border-t border-white/55" />
    <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-l border-b border-white/55" />
    <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-r border-b border-white/55" />
  </div>
);

export function SpecialismsBento() {
  return (
    <section
      id="specialisms"
      className="relative py-32 md:py-44"
      style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-8 mb-12 md:mb-16"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 mb-6 text-[10px] font-mono uppercase tracking-[0.32em] text-m-bone/55">
                Plate <span className="text-white tnum">02</span> — Specialisms
              </span>
              <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.02em] text-white">
                Four trades.<br />
                <span className="italic text-m-bone-2/85">Real depth.</span>
              </h2>
            </div>
            <p className="md:max-w-sm text-[14px] md:text-[15px] leading-[1.65] text-m-bone/60">
              We don&rsquo;t do everything. We do the trades where insurer relationships,
              underwriter access and trade body knowledge actually move the price and
              the cover terms.
            </p>
          </div>
        </Reveal>

        {/* Asymmetrical Bento — flat rectangles, hairline borders */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
          {cards.map((c, i) => (
            <Reveal
              key={c.num}
              delay={i * 90}
              className={
                c.feature
                  ? "md:col-span-12 lg:col-span-8 lg:row-span-2"
                  : c.num === "02"
                  ? "md:col-span-6 lg:col-span-4"
                  : c.num === "03"
                  ? "md:col-span-6 lg:col-span-4"
                  : "md:col-span-12 lg:col-span-8 lg:col-start-5"
              }
            >
              <a
                href={c.href}
                className="group relative block h-full bg-m-ink-2 transition-colors duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                aria-label={`${c.title} — ${c.tagline}`}
              >
                {/* Coral wipe at bottom edge on hover */}
                <span
                  aria-hidden
                  className="absolute left-0 right-0 -bottom-px h-px bg-m-coral"
                  style={{
                    clipPath: "inset(0 100% 0 0)",
                    transition: "clip-path 380ms cubic-bezier(0.23, 1, 0.32, 1)",
                  }}
                  data-coral-rule
                />

                {/* Image — full bleed, with crosshairs only on feature card */}
                <div
                  className={`relative ${
                    c.feature ? "aspect-[16/10] lg:aspect-[16/12]" : "aspect-[5/4]"
                  } overflow-hidden`}
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.image}
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
                        "linear-gradient(180deg, rgba(20,16,46,0) 30%, rgba(20,16,46,0.92) 100%)",
                    }}
                  />

                  {c.feature && <Crosshairs />}

                  {/* Plate label strip */}
                  <div className="absolute top-3 left-3 right-3 flex items-start justify-between text-[9.5px] font-mono uppercase tracking-[0.28em] tnum">
                    <span className="text-m-bone/85">
                      Specimen <span className="text-white">{c.num}</span> / 04
                    </span>
                    {c.feature && (
                      <span className="px-2 py-0.5 bg-m-coral text-m-ink">
                        Lead practice
                      </span>
                    )}
                  </div>

                  {/* Title overlay (feature only) */}
                  {c.feature && (
                    <div className="absolute bottom-5 left-5 right-5 md:bottom-7 md:left-8 md:right-8">
                      <h3 className="font-display text-[clamp(2.75rem,5vw,5rem)] leading-[0.95] tracking-[-0.02em] text-white">
                        {c.title}
                      </h3>
                      <p className="mt-1.5 text-[10.5px] md:text-[11px] font-mono uppercase tracking-[0.26em] text-m-bone/65">
                        {c.tagline}
                      </p>
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="p-6 md:p-8 flex flex-col gap-5">
                  {!c.feature && (
                    <div>
                      <h3 className="font-display text-[40px] md:text-[44px] leading-[0.95] tracking-[-0.02em] text-white">
                        {c.title}
                      </h3>
                      <p className="mt-2 text-[10.5px] font-mono uppercase tracking-[0.26em] text-m-bone/55">
                        {c.tagline}
                      </p>
                    </div>
                  )}

                  <p
                    className={`text-m-bone/65 leading-[1.65] ${
                      c.feature ? "text-[15px] md:text-[16px] max-w-2xl" : "text-[13.5px]"
                    }`}
                  >
                    {c.body}
                  </p>

                  <div className="flex flex-wrap gap-x-3 gap-y-1.5 mt-1 text-[10.5px] font-mono uppercase tracking-[0.18em] text-m-bone/55">
                    {c.covers.map((cv, idx) => (
                      <span key={cv} className="flex items-center gap-3">
                        <span>{cv}</span>
                        {idx < c.covers.length - 1 && (
                          <span className="text-m-bone/25">·</span>
                        )}
                      </span>
                    ))}
                  </div>

                  <div
                    className="mt-2 flex items-center justify-between pt-5"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <span
                      className="text-[11.5px] font-mono uppercase tracking-[0.22em] text-m-bone/55 group-hover:text-white transition-colors duration-300"
                      style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
                    >
                      See {c.title.toLowerCase()} →
                    </span>
                    <span
                      className="flex items-center justify-center w-9 h-9 bg-white/[0.04] text-m-bone group-hover:bg-m-coral group-hover:text-m-ink transition-all duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[1px]"
                      style={{
                        border: "1px solid rgba(255,255,255,0.08)",
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
  );
}
