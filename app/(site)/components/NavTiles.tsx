import { Reveal } from "./Reveal";
import { ArrowUpRight } from "./icons";

const tiles = [
  {
    label: "Specialisms",
    headline: "Your trade, properly covered.",
    body: "Construction, engineering, and manufacturing & wholesale. Specialist cover placed direct.",
    href: "/specialisms",
    tags: ["High Risk", "Construction", "Engineering", "Manufacturing"],
  },
  {
    label: "Claims & Support",
    headline: "When something goes wrong.",
    body: "What to do first, who to call, and how we manage claims alongside you.",
    href: "/claims/what-to-do-on-site",
  },
  {
    label: "About CRS",
    headline: "Who we are.",
    body: "Independent brokers in Lutterworth. Named handlers, no call centres.",
    href: "/about",
  },
  {
    label: "Beyond the Basics",
    headline: "Beyond the basics.",
    body: "The supplementary cover most brokers never mention.",
    href: "/beyond-the-basics",
  },
  {
    label: "News",
    headline: "Latest from CRS.",
    body: "Team updates, sponsorships, and company news.",
    href: "/news",
  },
  {
    label: "Rewards",
    headline: "Refer and earn.",
    body: "Introduce a client. Earn up to £1,000.",
    href: "/rewards",
  },
];

export function NavTiles() {
  const featured = tiles[0]!;
  const medium = tiles[1]!;
  const small = tiles.slice(2);

  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">

        {/* Row 1 — Specialisms (cream) + Claims (coral) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-4 mb-3 md:mb-4">

          {/* Specialisms — cream */}
          <Reveal className="lg:col-span-7">
            <a
              href={featured.href}
              className="group relative flex flex-col justify-between min-h-[320px] lg:min-h-[380px] bg-m-cream p-8 md:p-10 lg:p-12 transition-opacity duration-300 hover:opacity-90"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.32em] text-m-ink/40">
                  {featured.label}
                </span>
                <span
                  className="flex items-center justify-center w-9 h-9 bg-m-ink/[0.06] text-m-ink group-hover:bg-m-ink group-hover:text-m-cream transition-all duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] flex-shrink-0"
                  style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
                  aria-hidden
                >
                  <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.4} />
                </span>
              </div>

              <div>
                <h2
                  className="font-display font-bold leading-[1.08] tracking-[-0.02em] text-m-ink mb-5"
                  style={{ fontSize: "clamp(2rem, 3.6vw, 3rem)" }}
                >
                  {featured.headline}
                </h2>
                <p className="text-[14px] leading-[1.65] text-m-ink/55 mb-8 max-w-[42ch]">
                  {featured.body}
                </p>
                <div className="flex flex-wrap gap-2">
                  {featured.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[10px] font-mono uppercase tracking-[0.22em] text-m-ink/50"
                      style={{ border: "1px solid rgba(10,10,10,0.15)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </Reveal>

          {/* Claims — coral */}
          <Reveal delay={100} className="lg:col-span-5">
            <a
              href={medium.href}
              className="group relative flex flex-col min-h-[320px] lg:min-h-[380px] bg-m-coral p-8 md:p-10 transition-opacity duration-300 hover:opacity-90"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.32em] text-m-ink/45">
                  {medium.label}
                </span>
                <span
                  className="flex items-center justify-center w-9 h-9 bg-m-ink/[0.08] text-m-ink group-hover:bg-m-ink group-hover:text-m-coral transition-all duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] flex-shrink-0"
                  style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
                  aria-hidden
                >
                  <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.4} />
                </span>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <h2
                  className="font-display font-bold leading-[1.1] tracking-[-0.015em] text-m-ink mb-4"
                  style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.25rem)" }}
                >
                  {medium.headline}
                </h2>
                <p className="text-[13.5px] leading-[1.65] text-m-ink/60">
                  {medium.body}
                </p>
              </div>
            </a>
          </Reveal>
        </div>

        {/* Row 2 — four dark tiles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {small.map((tile, i) => (
            <Reveal key={tile.href} delay={i * 80}>
              <a
                href={tile.href}
                className="group relative flex flex-col justify-between min-h-[200px] md:min-h-[220px] bg-m-ink-2 hover:bg-m-ink-3 p-6 md:p-7 transition-colors duration-300"
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

                <div className="flex items-start justify-between gap-2">
                  <span className="text-[9.5px] font-mono uppercase tracking-[0.28em] text-m-bone/40">
                    {tile.label}
                  </span>
                  <span
                    className="flex items-center justify-center w-7 h-7 bg-white/[0.04] text-m-bone group-hover:bg-m-coral group-hover:text-m-ink transition-all duration-300 flex-shrink-0"
                    style={{
                      border: "1px solid rgba(255,255,255,0.08)",
                      transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
                    }}
                    aria-hidden
                  >
                    <ArrowUpRight className="w-3 h-3" strokeWidth={1.4} />
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-[1.2rem] md:text-[1.35rem] leading-[1.15] tracking-[-0.01em] text-white mb-2">
                    {tile.headline}
                  </h3>
                  <p className="text-[12px] leading-[1.6] text-m-bone/50">
                    {tile.body}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
