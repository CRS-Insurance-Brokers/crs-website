import type { Metadata } from "next";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { Reveal } from "../../components/Reveal";
import { ArrowUpRight } from "../../components/icons";

export const metadata: Metadata = {
  title: "Wear Purple Week 2026",
  description:
    "CRS supported The Lighthouse Charity's Wear Purple Week 2026 — wolf run, office bake-off, and a full office in purple on Thursday 18th June.",
  alternates: { canonical: "/news/wear-purple-week" },
};

export default function WearPurpleWeekPage() {
  return (
    <main id="main-content" className="relative">
      <Nav />

      {/* Header */}
      <section className="relative pt-[160px] md:pt-[180px] pb-14 md:pb-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">

          <Reveal>
            <a
              href="/news"
              className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.28em] text-m-bone/40 hover:text-m-bone/70 transition-colors duration-300 mb-10"
            >
              ← News
            </a>
          </Reveal>

          <Reveal delay={60}>
            <div className="flex flex-wrap gap-5 items-center mb-7">
              <span className="text-[9.5px] font-mono uppercase tracking-[0.28em] text-m-coral/80">
                Charity
              </span>
              <span className="text-[9.5px] font-mono uppercase tracking-[0.28em] text-m-bone/35 tnum">
                15–19 Jun 2026
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1
              className="font-display font-bold leading-[1.1] tracking-[-0.015em] text-white mb-7"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
            >
              Wear Purple Week.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-[17px] md:text-[18px] leading-[1.7] text-m-bone/55 max-w-2xl">
              The Lighthouse Charity runs Wear Purple Week every June to raise awareness of
              mental health support in the construction industry. This year CRS got involved.
              Wolf run, a bake-off, and on Thursday the 18th the whole office came in wearing
              purple.
            </p>
          </Reveal>

        </div>
      </section>

      {/* Wolf Run */}
      <section
        className="relative py-16 md:py-24"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">

            <Reveal className="lg:col-span-5">
              <span className="text-[9.5px] font-mono uppercase tracking-[0.28em] text-m-bone/35 block mb-8">
                The Wolf Run
              </span>
              <h2 className="font-display font-bold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] tracking-[-0.015em] text-white mb-7">
                Mud, medals, and family in tow.
              </h2>
              <div className="space-y-4 text-[15.5px] leading-[1.75] text-m-bone/55">
                <p>
                  Leanne Howes and Josh Van Allen took on The Wolf Run in Warwickshire.
                  10km of mud pits, water crossings, and whatever else they throw at you.
                  They brought their family along too.
                </p>
                <p>
                  Everyone got through it. Covered in mud, but through it.
                </p>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7">
              <div
                className="overflow-hidden"
                style={{ aspectRatio: "3/2", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/news/wolf-run-celebrate.jpg"
                  alt="Leanne Howes, Josh Van Allen and family at the Wolf Run finish"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </Reveal>

          </div>

        </div>
      </section>

      {/* Bake Off */}
      <section
        className="relative py-16 md:py-24"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">

            <Reveal delay={160} className="lg:col-span-6">
              <span className="text-[9.5px] font-mono uppercase tracking-[0.28em] text-m-bone/35 block mb-8">
                The Great CRS Bake Off
              </span>
              <h2 className="font-display font-bold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] tracking-[-0.015em] text-white mb-7">
                Baking for Lighthouse.
              </h2>
              <div className="space-y-4 text-[15.5px] leading-[1.75] text-m-bone/55">
                <p>
                  During the week the office held a bake-off. Everyone baked at home, brought
                  it in, and got it judged. Proceeds went to The Lighthouse Charity.
                  Standards, for the record, were higher than expected.
                </p>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-5 lg:col-start-8">
              <div
                className="overflow-hidden mx-auto"
                style={{ maxWidth: "340px", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <video
                  src="/news/bake-off-vid.mp4"
                  poster="/news/bake-off-poster.jpg"
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full"
                />
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Lighthouse CTA */}
      <section
        className="relative py-16 md:py-24"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            <Reveal className="lg:col-span-6">
              <h2 className="font-display font-bold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] tracking-[-0.015em] text-white mb-6">
                The Lighthouse Charity.
              </h2>
              <p className="text-[15.5px] leading-[1.75] text-m-bone/55 mb-8">
                Free, confidential support for anyone working in construction. 24 hours a day,
                seven days a week. Phone, text, or app. No referral needed.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="/about/charity"
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-m-coral text-m-ink text-[11px] font-mono uppercase tracking-[0.24em] hover:bg-m-cream transition-colors duration-300"
                  style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
                >
                  Learn more
                  <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </a>
                <a
                  href="tel:03456051956"
                  className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.24em] text-m-bone/55 hover:text-m-bone transition-colors duration-300 tnum"
                >
                  0345 605 1956
                </a>
              </div>
            </Reveal>

            <Reveal delay={150} className="lg:col-span-5 lg:col-start-8">
              <div
                className="p-7 md:p-8 bg-m-ink-2"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <p className="text-[13px] font-display text-m-bone/50 mb-5">Get support</p>
                {[
                  { label: "UK Helpline", value: "0345 605 1956" },
                  { label: "ROI Helpline", value: "1800 939 122" },
                  { label: "Text", value: "HARDHAT to 85258" },
                ].map((row, i, arr) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between py-3.5"
                    style={{ borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.07)" : undefined }}
                  >
                    <span className="text-[13px] text-m-bone/45">{row.label}</span>
                    <span className="font-mono text-[13px] text-white tnum">{row.value}</span>
                  </div>
                ))}
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
