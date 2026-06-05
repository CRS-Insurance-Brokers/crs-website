import type { Metadata } from "next";
import { Nav } from "../../components/Nav";
import { Marginalia } from "../../components/Marginalia";
import { Footer } from "../../components/Footer";
import { Reveal } from "../../components/Reveal";
import { ArrowUpRight } from "../../components/icons";

export const metadata: Metadata = {
  title: "Lighthouse Charity · CRS Insurance Brokers",
  description:
    "CRS Insurance Brokers is proud to support the Lighthouse Construction Industry Charity — providing free 24/7 wellbeing support to construction workers and their families.",
  alternates: { canonical: "/site/about/charity" },
};

export default function CharityPage() {
  return (
    <main className="relative">
      <Nav />
      <Marginalia />

      {/* Hero — heading left, logo right */}
      <section className="relative pt-[160px] md:pt-[180px] pb-14 md:pb-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            <Reveal className="lg:col-span-6">
              <h1
                className="font-display font-bold leading-[1.15] tracking-[-0.015em] text-white mb-5"
                style={{ fontSize: "clamp(2.25rem, 4.8vw, 4rem)" }}
              >
                Proud to support<br />
                <span className="italic">Lighthouse.</span>
              </h1>
              <p className="text-[16px] md:text-[18px] leading-[1.65] text-m-bone/55">
                Standing beside the people who build things — since 1956.
              </p>
            </Reveal>

            <Reveal delay={200} className="lg:col-span-5 lg:col-start-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/crs-lighthouse-white.png"
                alt="CRS Insurance Brokers and Lighthouse Construction Industry Charity"
                className="w-full opacity-80"
                loading="eager"
                decoding="async"
              />
            </Reveal>

          </div>
        </div>
      </section>

      {/* Content — copy left, cards right */}
      <section
        className="relative py-14 md:py-20"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">

            {/* Left — copy + CTAs */}
            <Reveal className="lg:col-span-6">
              <div className="space-y-5 text-[16px] md:text-[17px] leading-[1.75] text-m-bone/65 mb-10">
                <p>
                  The construction industry is the heart of what we do. The contractors,
                  site managers and tradespeople we work with every day are exactly
                  the people Lighthouse was built to support.
                </p>
                <p>
                  For nearly 70 years, Lighthouse has provided free, confidential
                  help to anyone in the industry who needs it — whether that&rsquo;s a
                  mental health crisis, financial difficulty, or simply someone to
                  talk to who understands the pressures of the job.
                </p>
                <p>
                  We&rsquo;re proud to be associated with them. They do
                  important work for people we care about, and we&rsquo;re glad to
                  play a small part in helping them continue it.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://lighthousecharity.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-m-coral text-m-ink text-[11px] font-mono uppercase tracking-[0.24em] hover:bg-m-cream transition-colors duration-300"
                  style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
                >
                  Visit Lighthouse
                  <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </a>
                <a
                  href="https://lighthousecharity.org/donate/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.24em] text-m-bone/55 hover:text-m-bone transition-colors duration-300"
                >
                  Donate
                  <ArrowUpRight className="w-3 h-3" strokeWidth={1.25} />
                </a>
              </div>
            </Reveal>

            {/* Right — cards */}
            <Reveal delay={180} className="lg:col-span-5 lg:col-start-8 flex flex-col gap-3">

              <a
                href="tel:03456051956"
                className="group flex items-start justify-between gap-4 p-7 md:p-8 bg-m-ink-2 hover:bg-m-ink-3 transition-colors duration-300"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div>
                  <p className="text-[13px] font-display text-m-bone/50 mb-2">
                    24/7 Helpline · Free &amp; Confidential
                  </p>
                  <p className="font-display text-[clamp(1.6rem,3vw,2.25rem)] leading-none tracking-[-0.02em] text-white tnum">
                    0345 605 1956
                  </p>
                  <p className="mt-2 text-[10.5px] font-mono uppercase tracking-[0.20em] text-m-bone/30">
                    ROI · 1800 939 122
                  </p>
                </div>
                <span className="w-9 h-9 bg-m-coral text-m-ink flex items-center justify-center shrink-0 mt-1 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.4} />
                </span>
              </a>

              <div
                className="p-7 md:p-8 bg-m-ink-2"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <p className="text-[13px] font-display text-m-bone/50 mb-4">About Lighthouse</p>
                <p className="text-[13.5px] leading-[1.7] text-m-bone/55 mb-5">
                  Founded in 1956 by construction professionals who met beneath
                  St Mary&rsquo;s Lighthouse in Whitley Bay and vowed to look after
                  their own. Funded entirely by the industry, not the government.
                </p>
                <div className="space-y-2">
                  {[
                    "Someone to talk to — day or night, no referral needed",
                    "Support through illness, injury or time away from work",
                    "Practical help when money gets tight — debt, emergency aid, legal guidance",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-[11.5px] text-m-bone/45 leading-snug">
                      <span className="w-1 h-1 rounded-full bg-m-bone/25 mt-1.5 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://lighthousecharity.org/the-lighthouse-charity-app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between px-6 py-4 bg-m-ink-2 hover:bg-m-ink-3 transition-colors duration-300"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div>
                  <span className="text-[13px] font-display text-m-bone/50 block mb-0.5">Free App</span>
                  <span className="text-[13px] text-m-bone/65">Construction Industry Helpline · iOS &amp; Android</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-m-bone/30 group-hover:text-m-coral transition-colors duration-200 shrink-0" strokeWidth={1.25} />
              </a>

              <p className="text-[10px] font-mono uppercase tracking-[0.20em] text-m-bone/25 px-1">
                Registered charity · UK 1149488 · ROI 20200334
              </p>

            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
