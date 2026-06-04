import type { Metadata } from "next";
import { Nav } from "../../components/Nav";
import { Marginalia } from "../../components/Marginalia";
import { Footer } from "../../components/Footer";
import { Reveal } from "../../components/Reveal";
import { ArrowUpRight } from "../../components/icons";

export const metadata: Metadata = {
  title: "Our Charity Pledge · Lighthouse Construction Industry Charity",
  description:
    "CRS Insurance Brokers is proud to support the Lighthouse Construction Industry Charity — providing free 24/7 emotional, physical and financial wellbeing support for construction workers and their families.",
  alternates: { canonical: "/site/about/charity" },
};

export default function CharityPage() {
  return (
    <main className="relative">
      <Nav />
      <Marginalia />

      {/* SECTION 1 — Hero */}
      <section className="relative pt-[160px] md:pt-[180px] pb-16 md:pb-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
          <Reveal>
            <div
              className="flex items-baseline justify-between mb-12 md:mb-16 pb-4"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-m-bone/55 tnum">
                Our pledge
              </span>
              <span className="hidden sm:flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-m-bone/35 tnum">
                Lighthouse Construction Industry Charity
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1
              className="font-display font-bold leading-[1.15] tracking-[-0.015em] text-white max-w-3xl"
              style={{ fontSize: "clamp(2.25rem, 4.8vw, 4rem)" }}
            >
              Proud supporters<br />
              <span className="italic">of Lighthouse.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* SECTION 2 — What is Lighthouse */}
      <section
        className="relative py-20 md:py-28"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">

            <Reveal className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 mb-5 text-[10px] font-mono uppercase tracking-[0.32em] text-m-bone/55">
                <span className="w-1.5 h-1.5 rounded-full bg-m-coral pulse-dot" />
                About Lighthouse
              </span>
              <h2 className="font-display text-[clamp(1.6rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.015em] text-white mb-6">
                Support that&rsquo;s always<br />
                <span className="italic">there when it counts.</span>
              </h2>
              <p className="text-[15px] md:text-[16px] leading-[1.7] text-m-bone/65">
                The Lighthouse Construction Industry Charity has been delivering charitable welfare and
                support to the construction community since 1956. They offer free, confidential,
                24/7 emotional, physical and financial wellbeing support to construction workers and
                their families across the UK and Republic of Ireland.
              </p>
              <p className="mt-4 text-[15px] md:text-[16px] leading-[1.7] text-m-bone/65">
                Whether it&rsquo;s a mental health crisis at 2am, a financial hardship following
                illness, or simply someone to talk to — Lighthouse answers. No referral needed.
                No charge. Ever.
              </p>
            </Reveal>

            <Reveal delay={150} className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 h-full">

                {/* Helpline card */}
                <a
                  href="tel:08001563044"
                  className="group flex flex-col justify-between p-6 md:p-8 bg-m-ink-2 transition-colors duration-300 hover:bg-m-ink-3"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <span className="text-[10px] font-mono uppercase tracking-[0.28em] text-m-bone/45 mb-6">
                    24/7 helpline
                  </span>
                  <div>
                    <p className="font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-none tracking-[-0.02em] text-white tnum mb-3">
                      0800 156 3044
                    </p>
                    <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-m-bone/40">
                      Free · Confidential · Always open
                    </p>
                  </div>
                  <span
                    className="mt-6 w-9 h-9 bg-m-coral text-m-ink flex items-center justify-center self-end group-hover:translate-x-[3px] group-hover:-translate-y-[2px] transition-transform duration-300"
                    style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.4} />
                  </span>
                </a>

                {/* Website card */}
                <a
                  href="https://lighthousecharity.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between p-6 md:p-8 bg-m-ink-2 transition-colors duration-300 hover:bg-m-ink-3"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <span className="text-[10px] font-mono uppercase tracking-[0.28em] text-m-bone/45 mb-6">
                    Visit Lighthouse
                  </span>
                  <div>
                    <p className="font-display text-[clamp(1rem,2vw,1.35rem)] leading-[1.2] tracking-[-0.01em] text-white mb-3">
                      lighthousecharity.org
                    </p>
                    <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-m-bone/40">
                      Resources · Support · Donate
                    </p>
                  </div>
                  <span
                    className="mt-6 w-9 h-9 bg-white/[0.06] text-m-bone flex items-center justify-center self-end group-hover:bg-m-coral group-hover:text-m-ink transition-all duration-300"
                    style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.4} />
                  </span>
                </a>

                {/* Founded */}
                <div
                  className="p-6 md:p-8 bg-m-ink-2"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <span className="text-[10px] font-mono uppercase tracking-[0.28em] text-m-bone/45 block mb-4">
                    Supporting the industry since
                  </span>
                  <p className="font-display text-[clamp(2.5rem,5vw,3.5rem)] leading-none tracking-[-0.02em] text-white tnum">
                    1956
                  </p>
                </div>

                {/* Coverage */}
                <div
                  className="p-6 md:p-8 bg-m-ink-2"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <span className="text-[10px] font-mono uppercase tracking-[0.28em] text-m-bone/45 block mb-4">
                    Coverage
                  </span>
                  <p className="text-[15px] leading-[1.6] text-m-bone/70">
                    UK &amp; Republic of Ireland — available to all construction workers and their families, at no cost.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Why CRS supports them */}
      <section
        className="relative py-20 md:py-28"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">

            <Reveal className="lg:col-span-4">
              <span className="inline-flex items-center gap-2 mb-5 text-[10px] font-mono uppercase tracking-[0.32em] text-m-bone/55">
                <span className="w-1.5 h-1.5 rounded-full bg-m-coral pulse-dot" />
                Why we&rsquo;re involved
              </span>
              <h2 className="font-display text-[clamp(1.6rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.015em] text-white">
                Our clients<br />
                <span className="italic">build things.</span><br />
                We help protect<br />
                <span className="italic">the people behind them.</span>
              </h2>
            </Reveal>

            <Reveal delay={150} className="lg:col-span-7 lg:col-start-6">
              <div className="space-y-6 text-[15px] md:text-[16px] leading-[1.7] text-m-bone/65">
                <p>
                  The construction sector is the heart of CRS. Our clients are demolition
                  contractors, builders, engineers and site workers — people who take on
                  physical risk every day to deliver the projects that shape our built environment.
                </p>
                <p>
                  That world can be unforgiving. Contracts end. Injuries happen. Pressures
                  accumulate in ways that aren&rsquo;t always visible. Lighthouse exists precisely
                  for those moments — and because our clients are the people Lighthouse was
                  built to serve, supporting this charity is a natural extension of what we do.
                </p>
                <p>
                  Our pledge is a long-term commitment. We believe that an industry that looks
                  after its people is one that performs better, builds safer, and endures longer.
                  Lighthouse makes that possible.
                </p>
              </div>

              <div
                className="mt-10 pt-8 flex flex-col sm:flex-row sm:items-center gap-4"
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
              >
                <a
                  href="https://lighthousecharity.org/donate/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-6 py-3.5 bg-m-coral text-m-ink text-[11px] font-mono uppercase tracking-[0.24em] hover:bg-m-cream transition-colors duration-300"
                  style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
                >
                  Donate to Lighthouse
                  <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </a>
                <a
                  href="https://lighthousecharity.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.24em] text-m-bone/55 hover:text-m-bone transition-colors duration-300"
                >
                  Learn more about Lighthouse
                  <ArrowUpRight className="w-3 h-3" strokeWidth={1.25} />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Charity reg */}
      <section
        className="relative py-14 md:py-20"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
          <Reveal>
            <div className="flex flex-wrap gap-8 md:gap-16 text-[10px] font-mono uppercase tracking-[0.26em] text-m-bone/35">
              <span>Lighthouse Construction Industry Charity</span>
              <span>Registered charity · UK 1149488</span>
              <span>ROI 20200334</span>
              <a
                href="https://lighthousecharity.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-m-bone/65 transition-colors duration-200"
              >
                lighthousecharity.org
                <ArrowUpRight className="w-2.5 h-2.5" strokeWidth={1.25} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
