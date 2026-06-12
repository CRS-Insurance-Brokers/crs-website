import type { Metadata } from "next";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { Reveal } from "../../components/Reveal";
import { ArrowUpRight } from "../../components/icons";

export const metadata: Metadata = {
  title: "What to do when something goes wrong",
  description:
    "Early notification protects your claim. Find out what to do — and what not to do — the moment an incident occurs or a claim circumstance arises.",
  alternates: { canonical: "/site/claims/what-to-do-on-site" },
  openGraph: {
    title: "What to do when something goes wrong · CRS Insurance Brokers",
    description:
      "Early notification protects your claim. Find out what to do — and what not to do — the moment an incident occurs.",
    type: "website",
    siteName: "CRS Insurance Brokers",
    locale: "en_GB",
  },
};

const dos = [
  "Report an incident or set of circumstances to us immediately",
  "Record and document all correspondence following an incident",
  "Provide as much information as you can upon notification — and let us do the rest",
];

const donts = [
  "Wait for an allegation to escalate before notifying us",
  "Ignore or respond directly to a letter of intent from a solicitor",
  "Attempt to settle or recover costs yourself — this can prejudice your cover",
];

const triggers = [
  "Need to make a claim?",
  "Received a letter of intent?",
  "Concerned about an incident?",
  "Aware of any circumstances that could give rise to a claim?",
];

export default function WhatToDoPage() {
  return (
    <main id="main-content" className="relative">
      <Nav />

        {/* Hero */}
        <section className="relative pt-[160px] md:pt-[180px] pb-24 md:pb-36 overflow-hidden">
          <div
            className="absolute inset-0 -z-10 pointer-events-none"
            aria-hidden
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 60% 0%, rgba(229,108,112,0.12), transparent 60%)",
            }}
          />
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
            <Reveal>
              <span className="inline-flex items-center gap-2 mb-6 text-[10px] font-mono uppercase tracking-[0.32em] text-m-bone/55">
                Claims guidance
              </span>
              <h1 className="font-display font-bold text-[clamp(2.25rem,4.8vw,4rem)] leading-[1.1] tracking-[-0.015em] text-white max-w-3xl">
                Do I?{" "}
                <span className="italic text-m-coral">Don&rsquo;t I?</span>
              </h1>
              <p className="mt-6 max-w-xl text-[15px] md:text-[16px] leading-[1.65] text-m-bone/60">
                If any of the following apply, the answer is always the same —
                contact us immediately.
              </p>
            </Reveal>

            {/* Trigger questions */}
            <Reveal delay={150}>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {triggers.map((t) => (
                  <div
                    key={t}
                    className="flex items-start gap-4 px-6 py-5 bg-m-ink-2"
                    style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-m-coral shrink-0" />
                    <span className="text-[15px] font-medium text-white leading-snug">
                      {t}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Why early notification matters */}
        <section
          className="py-20 md:py-28"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
            <Reveal>
              <div className="max-w-3xl">
                <p className="text-[15px] md:text-[16px] leading-[1.75] text-m-bone/70">
                  Nobody likes to receive the news that their claim has been declined
                  by insurers — and here at CRS, we really don&rsquo;t want to deliver
                  that news either.
                </p>
                <p className="mt-5 text-[15px] md:text-[16px] leading-[1.75] text-m-bone/70">
                  Unfortunately, it can and does happen when incidents are notified
                  late. Most policies contain claims conditions requiring incidents to
                  be reported within certain timeframes or as soon as reasonably
                  possible. Delay can result in your insurer&rsquo;s position being
                  prejudiced and claims being declined in their entirety.
                </p>
                <p className="mt-5 text-[15px] md:text-[16px] leading-[1.75] text-white">
                  Please ensure any incident that could give rise to a loss is reported
                  to us as soon as possible. We&rsquo;ll guide you through every step,
                  deal directly with the insurer on your behalf, and fight for the best
                  possible outcome.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Do / Don't */}
        <section
          className="py-20 md:py-28"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* Do */}
              <Reveal>
                <div
                  className="h-full p-8 md:p-10"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <span className="block mb-8 font-display font-bold text-[2rem] leading-none tracking-[-0.015em] text-emerald-400">
                    Do
                  </span>
                  <ul className="flex flex-col gap-5">
                    {dos.map((item) => (
                      <li key={item} className="flex items-start gap-4">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span className="text-[15px] leading-[1.65] text-white">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Don't */}
              <Reveal delay={110}>
                <div
                  className="h-full p-8 md:p-10 bg-m-ink-2"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <span className="block mb-8 font-display font-bold text-[2rem] leading-none tracking-[-0.015em] text-m-coral">
                    Don&rsquo;t
                  </span>
                  <ul className="flex flex-col gap-5">
                    {donts.map((item) => (
                      <li key={item} className="flex items-start gap-4">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-m-coral shrink-0" />
                        <span className="text-[15px] leading-[1.65] text-m-bone/75">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* If in doubt, SHOUT */}
        <section
          className="py-20 md:py-28 bg-m-coral text-m-ink"
          style={{ borderTop: "1px solid rgba(10,10,10,0.10)" }}
        >
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
            <Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7">
                  <p className="text-[10px] font-mono uppercase tracking-[0.32em] text-m-ink/55 mb-4">
                    Remember
                  </p>
                  <h2 className="font-display font-bold text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.1] tracking-[-0.015em] text-m-ink">
                    If in doubt,{" "}
                    <span className="italic">shout.</span>
                  </h2>
                  <p className="mt-6 text-[15px] leading-[1.65] text-m-ink/70 max-w-lg">
                    Our commitment doesn&rsquo;t end at the placement of your policy.
                    Reporting early lets our Claims team give you the strongest
                    support from day one — on hand every step of the way, tailoring
                    guidance to your specific circumstances.
                  </p>
                </div>
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <a
                    href="tel:01455244630"
                    className="group flex items-center justify-between px-6 py-5 bg-m-ink text-m-cream"
                    style={{ border: "1px solid rgba(10,10,10,0.20)" }}
                  >
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-m-bone/55 mb-1">
                        Call · Option 4 for Claims
                      </p>
                      <p className="font-display text-[26px] leading-none tracking-[-0.02em] text-white tnum">
                        01455 244630
                      </p>
                    </div>
                    <span className="w-10 h-10 bg-m-coral text-m-ink flex items-center justify-center group-hover:translate-x-[3px] group-hover:-translate-y-[2px] transition-transform duration-200">
                      <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.4} />
                    </span>
                  </a>
                  <a
                    href="mailto:claims@crs-ins.co.uk"
                    className="group flex items-center justify-between px-6 py-5 bg-m-ink text-m-cream"
                    style={{ border: "1px solid rgba(10,10,10,0.20)" }}
                  >
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-m-bone/55 mb-1">
                        Email the Claims team
                      </p>
                      <p className="font-display text-[20px] leading-none tracking-[-0.01em] text-white">
                        claims@crs-ins.co.uk
                      </p>
                    </div>
                    <span className="w-10 h-10 bg-m-coral text-m-ink flex items-center justify-center group-hover:translate-x-[3px] group-hover:-translate-y-[2px] transition-transform duration-200">
                      <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.4} />
                    </span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

      <Footer />
    </main>
  );
}
