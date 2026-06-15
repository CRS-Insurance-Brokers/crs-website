import { Reveal } from "./Reveal";
import { testimonials } from "../data/content";

const items = testimonials.data;

export function Testimonials() {
  return (
    <section
      className="relative py-32 md:py-44"
      style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">

        {/* Header */}
        <Reveal>
          <div
            className="flex items-baseline justify-between pb-8 mb-0"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.32em] text-m-bone/55">
              Client feedback
            </span>
            <span className="hidden sm:block text-[10px] font-mono uppercase tracking-[0.28em] text-m-bone/30 tnum">
              Client feedback · Feb–Apr 2026
            </span>
          </div>
        </Reveal>

        {/* Ledger rows */}
        <div>
          {items.map((t, i) => (
            <Reveal key={i} delay={i * 120}>
              <div
                className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 py-10 md:py-12 items-baseline transition-colors duration-500"
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  transitionTimingFunction: "cubic-bezier(0.23,1,0.32,1)",
                }}
              >
                {/* Index */}
                <div className="hidden md:block md:col-span-1">
                  <span className="font-mono text-[11px] tnum text-m-bone/25 group-hover:text-m-coral/60 transition-colors duration-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Quote */}
                <div className="md:col-span-7">
                  <p className="font-display text-[clamp(1.15rem,2.2vw,1.6rem)] leading-[1.4] tracking-[-0.01em] text-m-cream">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Attribution */}
                <div className="md:col-span-4 flex flex-col gap-1.5 md:items-end">
                  <span className="text-[12px] font-mono uppercase tracking-[0.18em] text-m-bone/70 group-hover:text-white transition-colors duration-500"
                    style={{ transitionTimingFunction: "cubic-bezier(0.23,1,0.32,1)" }}
                  >
                    {t.trade}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-m-bone/30">
                    {t.sector} · {t.year}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
