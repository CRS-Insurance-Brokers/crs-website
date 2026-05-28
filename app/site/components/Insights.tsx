import { Reveal } from "./Reveal";
import { productGuides } from "../data/content";

const guides = productGuides.data;

export function Insights() {
  return (
    <section
      id="resources"
      className="relative pt-[160px] md:pt-[180px] pb-32 md:pb-44"
      style={{ borderTop: "none" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
        <Reveal>
          <div
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 mb-16 md:mb-20"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div>
              <span className="inline-flex items-center gap-2 mb-6 text-[10px] font-mono uppercase tracking-[0.32em] text-m-bone/55">
                Supplementary Cover
              </span>
              <h1 className="font-display font-bold text-[clamp(2.25rem,5vw,4rem)] leading-[1.1] tracking-[-0.015em] text-white">
                Beyond the basics.
              </h1>
            </div>
            <p className="text-[14px] leading-[1.65] text-m-bone/55 max-w-sm md:text-right">
              Your core policy covers the fundamentals. These are the
              supplementary products we layer on top — the ones most brokers
              leave out, and the ones that make the difference when it matters.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {guides.map((g, i) => (
            <Reveal key={g.title} delay={i * 110}>
              <a
                href={g.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col h-full bg-m-ink-2 hover:bg-m-ink-3 transition-colors duration-300"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              >
                {/* Coral rule on hover */}
                <span
                  aria-hidden
                  className="absolute left-0 right-0 -bottom-px h-px bg-m-coral"
                  style={{
                    clipPath: "inset(0 100% 0 0)",
                    transition: "clip-path 380ms cubic-bezier(0.23, 1, 0.32, 1)",
                  }}
                  data-coral-rule
                />

                {/* Colour band */}
                <div
                  className="h-1.5 w-full"
                  style={{ background: g.accent }}
                />

                <div className="p-7 flex flex-col gap-5 flex-1">
                  {/* Tag + index */}
                  <div className="flex items-center justify-between text-[9.5px] font-mono uppercase tracking-[0.28em] text-m-bone/40 tnum">
                    <span>
                      Guide <span className="text-white">{String(i + 1).padStart(2, "0")}</span> · {g.tag}
                    </span>
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: g.accent, opacity: 0.7 }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-[26px] md:text-[28px] leading-[1.1] tracking-[-0.01em] text-white">
                    {g.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13.5px] text-m-bone/55 leading-[1.65] flex-1">
                    {g.description}
                  </p>

                  {/* CTA */}
                  <div
                    className="mt-auto pt-5 flex items-center justify-between"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-m-bone/55 group-hover:text-white transition-colors duration-300">
                      View guide
                    </span>
                    <span
                      className="flex items-center justify-center w-9 h-9 text-m-bone transition-all duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[1px]"
                      style={{
                        background: g.accent + "22",
                        border: `1px solid ${g.accent}55`,
                        transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
                      }}
                    >
                      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 1v8M3 6l4 4 4-4M1 11h12" />
                      </svg>
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
