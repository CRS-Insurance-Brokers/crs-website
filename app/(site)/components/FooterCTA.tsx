import { Reveal } from "./Reveal";
import { ArrowUpRight, PhoneIcon } from "./icons";

export function FooterCTA() {
  return (
    <section
      id="contact"
      className="relative py-32 md:py-44 bg-m-cream text-m-ink overflow-hidden"
      style={{ borderTop: "1px solid rgba(10,10,10,0.10)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-70"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 80% 20%, rgba(229,108,112,0.20), transparent 60%), radial-gradient(ellipse 40% 50% at 20% 90%, rgba(38,34,98,0.08), transparent 60%)",
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
        <Reveal>
          <span className="inline-flex items-center gap-2 mb-8 text-[10px] font-mono uppercase tracking-[0.32em] text-m-ink/55">
            <span className="w-1.5 h-1.5 rounded-full bg-m-coral pulse-dot" />
            Save the number
          </span>
        </Reveal>

        <Reveal delay={150}>
          <h2 className="font-display font-bold text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.15] tracking-[-0.015em] text-m-ink max-w-3xl">
            When something<br />
            goes wrong,<br />
            <span className="italic">we want to be</span><br />
            your <span className="text-m-coral italic">first call.</span>
          </h2>
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-10 md:mt-14 max-w-xl text-[15px] md:text-[17px] leading-[1.65] text-m-ink/70">
            Save 01455 244630 to your phone now. Pin the contact card. Put it in the
            site induction pack. We&rsquo;d rather be the call you don&rsquo;t need to
            make than the one you can&rsquo;t reach.
          </p>
        </Reveal>

        <Reveal delay={420}>
          <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-4">
            {/* Big phone card — flat, hairline */}
            <div className="lg:col-span-7">
              <a
                href="tel:01455244630"
                className="group block bg-m-ink text-m-cream px-7 py-9 md:px-12 md:py-12"
                style={{ border: "1px solid rgba(10,10,10,0.20)" }}
              >
                <div
                  className="flex items-start justify-between gap-6 mb-8 pb-6"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.10)" }}
                >
                  <span className="text-[10px] font-mono uppercase tracking-[0.28em] text-m-bone/55 tnum">
                    Call us · Mon&ndash;Fri 09:00&ndash;17:00
                  </span>
                  <span
                    className="w-10 h-10 bg-m-coral text-m-ink flex items-center justify-center group-hover:translate-x-[3px] group-hover:-translate-y-[2px] transition-transform duration-300"
                    style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
                  >
                    <PhoneIcon className="w-4 h-4" strokeWidth={1.4} />
                  </span>
                </div>
                <p className="font-display text-[clamp(3.25rem,9vw,7rem)] leading-none tracking-[-0.02em] text-m-cream tnum">
                  01455 244630
                </p>
                <div
                  className="mt-8 pt-6 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.22em] text-m-bone/55"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }}
                >
                  <span>Lutterworth · LE17 4PP</span>
                  <span className="text-m-coral">Tap to dial →</span>
                </div>
              </a>
            </div>

            {/* Right column */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-3 md:gap-4">
              <a
                href="mailto:info@crs-ins.co.uk"
                className="group block bg-m-cream-2/40 px-6 py-7 md:px-7 md:py-8"
                style={{ border: "1px solid rgba(10,10,10,0.10)" }}
              >
                <span className="text-[10px] font-mono uppercase tracking-[0.32em] text-m-ink/55">
                  Or write
                </span>
                <p className="mt-3 font-display text-[28px] md:text-[32px] leading-[1.05] tracking-[-0.01em] text-m-ink">
                  info@crs-ins.co.uk
                </p>
                <div
                  className="mt-5 pt-4 flex items-center justify-between"
                  style={{ borderTop: "1px solid rgba(10,10,10,0.10)" }}
                >
                  <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-m-ink/55">
                    We respond as quickly as possible
                  </span>
                  <span
                    className="w-8 h-8 bg-m-ink text-m-cream flex items-center justify-center group-hover:bg-m-coral group-hover:text-m-ink transition-colors duration-300"
                    style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
                  >
                    <ArrowUpRight className="w-3 h-3" strokeWidth={1.25} />
                  </span>
                </div>
              </a>

              <a
                href="tel:01455244630"
                className="group block bg-m-coral text-m-ink px-6 py-7 md:px-7 md:py-8"
                style={{ border: "1px solid rgba(10,10,10,0.20)" }}
              >
                <span className="text-[10px] font-mono uppercase tracking-[0.32em] text-m-ink/65">
                  Report a claim · Option 4
                </span>
                <p className="mt-3 font-display text-[28px] md:text-[32px] leading-[1.05] tracking-[-0.01em] text-m-ink">
                  01455 244630
                </p>
                <div
                  className="mt-5 pt-4 flex items-center justify-between"
                  style={{ borderTop: "1px solid rgba(10,10,10,0.18)" }}
                >
                  <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-m-ink/65">
                    Tap to call · Claims team
                  </span>
                  <span
                    className="w-8 h-8 bg-m-ink text-m-coral flex items-center justify-center group-hover:translate-x-[3px] group-hover:-translate-y-[2px] transition-transform duration-300"
                    style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
                  >
                    <ArrowUpRight className="w-3 h-3" strokeWidth={1.25} />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
