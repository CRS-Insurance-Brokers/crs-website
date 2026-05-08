import { Reveal } from "./Reveal";
import { CompassIcon, ShieldIcon, HandshakeIcon } from "./icons";
import { whyPillars } from "../data/content";

const iconMap = {
  compass: CompassIcon,
  shield: ShieldIcon,
  handshake: HandshakeIcon,
} as const;

const pillars = whyPillars.data.map((p, i) => ({
  num: String(i + 1).padStart(2, "0"),
  title: p.title,
  sub: p.sub,
  icon: iconMap[p.iconKey],
  body: p.body,
  proof: { stat: p.proofStat, label: p.proofLabel },
}));

export function WhyCRS() {
  return (
    <section
      className="relative py-32 md:py-44 bg-m-cream text-m-ink overflow-hidden"
      style={{ borderTop: "1px solid rgba(10,10,10,0.08)" }}
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
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-8 mb-16 md:mb-20"
            style={{ borderBottom: "1px solid rgba(10,10,10,0.12)" }}
          >
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 mb-6 text-[10px] font-mono uppercase tracking-[0.32em] text-m-ink/55">
                Plate <span className="text-m-ink tnum">03</span> — Our promise to you
              </span>
              <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.02em] text-m-ink">
                Three words<br />
                we&rsquo;ll <span className="italic">defend</span> with proof.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-6">
              <p className="text-[15px] md:text-[16px] leading-[1.65] text-m-ink/65 max-w-md">
                Independence, service, commitment. Every broker says it.
                We back ours with the numbers, the named handlers, and the insurer
                relationships to actually mean it.
              </p>
              <a
                href="#about"
                className="group mt-6 inline-flex items-center gap-3 text-[12px] font-mono uppercase tracking-[0.22em] text-m-ink hover:text-m-coral transition-colors duration-300"
                style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
              >
                Read our promise →
              </a>
            </div>
          </div>
        </Reveal>

        {/* Three pillar specimens — flat, hairline borders, no rounding */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.num} delay={i * 110}>
                <div
                  className="group relative h-full bg-m-cream-2/40 p-7 md:p-8 flex flex-col gap-6 transition-colors duration-300"
                  style={{ border: "1px solid rgba(10,10,10,0.10)" }}
                >
                  {/* Coral wipe at bottom */}
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
                    className="flex items-start justify-between pb-4"
                    style={{ borderBottom: "1px solid rgba(10,10,10,0.08)" }}
                  >
                    <span className="w-11 h-11 bg-m-ink text-m-cream flex items-center justify-center">
                      <Icon className="w-5 h-5" strokeWidth={1.1} />
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-[0.28em] text-m-ink/40 tnum">
                      Specimen <span className="text-m-ink/70">{p.num}</span> / 03
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-[44px] md:text-[52px] leading-[0.95] tracking-[-0.02em] text-m-ink">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[11.5px] font-mono uppercase tracking-[0.22em] text-m-ink/55">
                      {p.sub}
                    </p>
                  </div>

                  <p className="text-[14.5px] leading-[1.65] text-m-ink/70">{p.body}</p>

                  <div
                    className="mt-auto pt-6 flex items-baseline gap-4"
                    style={{ borderTop: "1px solid rgba(10,10,10,0.10)" }}
                  >
                    <span className="font-display text-[44px] leading-none tracking-[-0.02em] text-m-ink tnum">
                      {p.proof.stat}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-m-ink/55 max-w-[140px] leading-snug">
                      {p.proof.label}
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={400}>
          <p className="mt-12 text-[10.5px] font-mono uppercase tracking-[0.28em] text-m-ink/35">
            ¹ Stats illustrative · validated annually · figures from{" "}
            <span className="text-m-ink/55">2024 service review</span>
          </p>
        </Reveal>

      </div>
    </section>
  );
}
