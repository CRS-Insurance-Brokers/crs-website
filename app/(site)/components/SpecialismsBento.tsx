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
};

const cards: Card[] = [
  {
    num: "01",
    title: "High Risk",
    tagline: "Demolition · Asbestos · Hot works",
    body:
      "Hot works permits, asbestos surveys pre-strip, party wall implications, work at height, environmental impairment, explosives. Where generalist brokers stop pricing, we start.",
    covers: ["Demolition", "Asbestos removal", "Work at height", "Hot works", "Environmental"],
    image: "/images/high-risk-demolition.jpg",
    href: "/specialisms/high-risk",
  },
  {
    num: "02",
    title: "Construction",
    tagline: "Principal contractors · Subcontractors · Civils",
    body:
      "Contractors All Risks, Professional Indemnity for design-and-build, and contract-aligned cover for the full contractor spectrum — from principal to specialist trade.",
    covers: ["Principal contractors", "Subcontractors", "Civils", "Groundworks"],
    image: "/images/construction.jpg",
    href: "/specialisms/construction",
  },
  {
    num: "03",
    title: "Engineering",
    tagline: "M&E · Machinery · Specialist engineering",
    body:
      "Mechanical and electrical, machinery, and specialist engineering trades — bespoke schedules for tools, machinery in transit, and hired-in cover.",
    covers: ["M&E", "Machinery", "Specialist engineering"],
    image: "/images/engineering.jpg",
    href: "/specialisms/engineering",
  },
  {
    num: "04",
    title: "Manufacturing & Wholesale",
    tagline: "Industrial plant · Warehousing",
    body:
      "Commercial combined, machinery breakdown, and business interruption structured around your shifts, plant, and supply chain exposure.",
    covers: ["Industrial plant", "Warehousing", "Distribution"],
    image: "/images/manufacturing.jpg",
    href: "/specialisms/manufacturing-wholesale",
  },
];

export function SpecialismsBento() {
  return (
    <section
      id="specialisms"
      className="relative pt-[160px] md:pt-[180px] pb-32 md:pb-44"
      style={{ borderTop: "none" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">

        {/* Header row */}
        <Reveal>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 mb-12 md:mb-16"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div>
              <span className="inline-flex items-center gap-2 mb-6 text-[10px] font-mono uppercase tracking-[0.32em] text-m-bone/55">
                Specialisms
              </span>
              <h1 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.02em] text-white">
                4 specialisms.<br />
                <span className="italic text-m-bone-2/85">Real depth.</span>
              </h1>
            </div>
            <div className="flex items-center">
              <p className="text-[14px] md:text-[15px] leading-[1.65] text-m-bone/60">
                Four areas where our insurer relationships, underwriter access and
                trade body knowledge move the price and the cover terms. Each one
                handled with the same level of care.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Cards — 2×2 grid, matching the header column widths */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {cards.map((c, i) => (
            <Reveal key={c.num} delay={i * 90}>
              <a
                href={c.href}
                className="group relative block h-full bg-m-ink-2 transition-colors duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                aria-label={`${c.title} — ${c.tagline}`}
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
                  className="relative aspect-[16/9] overflow-hidden"
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
                        "linear-gradient(180deg, rgba(20,16,46,0) 30%, rgba(20,16,46,0.85) 100%)",
                    }}
                  />
                  <div className="absolute top-3 left-3 text-[9.5px] font-mono uppercase tracking-[0.28em] text-m-bone/75 tnum">
                    Specimen <span className="text-white">{c.num}</span> / 04
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col gap-5">
                  <div>
                    <h3 className="font-display text-[36px] md:text-[42px] leading-[0.95] tracking-[-0.02em] text-white">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-[10.5px] font-mono uppercase tracking-[0.26em] text-m-bone/55">
                      {c.tagline}
                    </p>
                  </div>

                  <p className="text-[13.5px] text-m-bone/65 leading-[1.65]">
                    {c.body}
                  </p>

                  <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-[10.5px] font-mono uppercase tracking-[0.18em] text-m-bone/55">
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
