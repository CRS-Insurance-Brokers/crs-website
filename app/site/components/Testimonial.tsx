import { Reveal } from "./Reveal";
import { testimonial, clientRoster } from "../data/content";

export function Testimonial() {
  const t = testimonial.data;
  const [before, after] = t.quote.split("{emphasis}");

  return (
    <section
      className="relative py-32 md:py-44 overflow-hidden"
      style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(229,108,112,0.08), transparent 70%)",
        }}
      />

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
        <Reveal>
          <div
            className="bg-m-ink-2 px-7 py-12 md:px-16 md:py-20 lg:px-20 lg:py-24"
            style={{ border: "1px solid rgba(255,255,255,0.10)" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start gap-4">
                <span
                  aria-hidden
                  className="font-display text-[120px] md:text-[180px] leading-[0.7] text-m-coral/85"
                >
                  &ldquo;
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.32em] text-m-bone/40 lg:-mt-6">
                  Plate <span className="text-m-bone/70 tnum">07</span> — Voices from site
                </span>
              </div>

              <div className="lg:col-span-9">
                <p className="font-display text-[clamp(1.85rem,3.6vw,3.25rem)] leading-[1.18] tracking-[-0.01em] text-m-cream">
                  {before}
                  <span className="italic text-m-coral">{t.emphasis}</span>
                  {after}
                </p>

                <div
                  className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-8"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 bg-m-cream/10 flex items-center justify-center font-display text-[20px] text-m-cream"
                      style={{ border: "1px solid rgba(255,255,255,0.10)" }}
                    >
                      {t.authorInitials}
                    </div>
                    <div className="leading-tight">
                      <p className="font-display text-[22px] text-m-cream tracking-tight">
                        {t.authorName}
                      </p>
                      <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-m-bone/45 mt-1">
                        {t.authorRole}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-[10px] font-mono uppercase tracking-[0.28em] text-m-bone/40">
                    <div>
                      <p className="text-m-bone/35">Sector</p>
                      <p className="mt-1 text-m-bone/75">{t.sector}</p>
                    </div>
                    <div className="w-px h-8 bg-white/10" />
                    <div>
                      <p className="text-m-bone/35">Client since</p>
                      <p className="mt-1 text-m-bone/75 tnum">{t.clientSince}</p>
                    </div>
                    <div className="w-px h-8 bg-white/10 hidden md:block" />
                    <div className="hidden md:block">
                      <p className="text-m-bone/35">Cover placed</p>
                      <p className="mt-1 text-m-bone/75">{t.coverPlaced}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[10px] font-mono uppercase tracking-[0.28em] text-m-bone/35">
            <span>Trusted by specialists across</span>
            {clientRoster.data.map((name, i) => (
              <span key={name} className="flex items-center gap-x-8">
                <span className="text-m-bone/65">{name}</span>
                {i < clientRoster.data.length - 1 && (
                  <span className="w-1 h-1 rounded-full bg-m-bone/20" />
                )}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
