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
                Our promise to you
              </span>
              <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.02em] text-m-ink">
                Three promises.<br />
                <span className="italic">All kept.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-6">
              <p className="text-[15px] md:text-[16px] leading-[1.65] text-m-ink/65 max-w-md">
                Independence, service excellence, commitment. Every broker says it.
                We back ours with named handlers, direct underwriter relationships,
                and a track record that speaks for itself.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Three pillar specimens — flat, hairline borders, no rounding */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.num} delay={i * 110} className="h-full">
                <div
                  className="group relative h-full overflow-hidden bg-m-cream-2/40 p-7 md:p-8 flex flex-col gap-6 transition-colors duration-300"
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
                  </div>

                  <div>
                    <h3 className="font-display leading-[0.95] tracking-[-0.02em] text-m-ink" style={{ fontSize: "clamp(1.25rem, 3vw, 3.25rem)" }}>
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[11.5px] font-mono uppercase tracking-[0.22em] text-m-ink/55">
                      {p.sub}
                    </p>
                  </div>

                  <p className="text-[14.5px] leading-[1.65] text-m-ink/70">{p.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>


      </div>
    </section>
  );
}
