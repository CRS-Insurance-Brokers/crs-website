import type { Metadata } from "next";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { Reveal } from "../../components/Reveal";

export const metadata: Metadata = {
  title: "Finalists at the UK Broker Awards 2026",
  description:
    "CRS Insurance Brokers has been shortlisted as a finalist in two categories at the UK Broker Awards 2026: Commercial Lines Insurance Broker of the Year and the Insurance Broker Customer Service Award.",
  alternates: { canonical: "/news/uk-broker-awards-2026" },
};

export default function UKBrokerAwardsPage() {
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
                Awards
              </span>
              <span className="text-[9.5px] font-mono uppercase tracking-[0.28em] text-m-bone/35 tnum">
                17 Jul 2026
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1
              className="font-display font-bold leading-[1.1] tracking-[-0.015em] text-white mb-7"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
            >
              Finalists at the UK Broker Awards 2026
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-[17px] md:text-[18px] leading-[1.7] text-m-bone/55 max-w-2xl">
              CRS has been shortlisted as a finalist in two categories at the UK Broker
              Awards 2026: Commercial Lines Insurance Broker of the Year, and the Insurance
              Broker Customer Service Award.
            </p>
          </Reveal>

        </div>
      </section>

      {/* Graphic + body */}
      <section
        className="relative py-16 md:py-24"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">

            <Reveal className="lg:col-span-6">
              <div
                className="overflow-hidden"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/news/uk-broker-awards.jpg"
                  alt="CRS Insurance Brokers — UK Broker Awards 2026 Finalist"
                  className="w-full"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </Reveal>

            <Reveal delay={140} className="lg:col-span-6">
              <div className="space-y-5 text-[15.5px] md:text-[16px] leading-[1.75] text-m-bone/60">
                <p>
                  The UK Broker Awards recognise the brokers doing the best work across the
                  market. Being shortlisted in two categories in the same year matters to us,
                  and it&rsquo;s worth being clear about why.
                </p>
                <p>
                  Both categories come down to people, not process. Commercial Lines Broker of
                  the Year is about how well cover is placed for the trades we look after. The
                  Customer Service award is about how clients are treated when they pick up the
                  phone. Neither of those is done by a company. They&rsquo;re done by the team:
                  the handlers who answer the call, the account execs who go back to the market
                  again on an awkward risk, the claims people who stay with a case until it&rsquo;s
                  settled.
                </p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Closing — the team */}
      <section
        className="relative py-16 md:py-24"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
          <div className="max-w-3xl space-y-6">
            <Reveal>
              <p className="font-display text-[clamp(1.4rem,3vw,2rem)] leading-[1.3] tracking-[-0.01em] text-white">
                An award carries the company&rsquo;s name, but the work behind it belongs to the
                people who do it day in, day out. This shortlisting is theirs, and we wanted to
                say so plainly.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-[15.5px] md:text-[16px] leading-[1.75] text-m-bone/60">
                Thank you to our clients for trusting us with your business, and to everyone at
                CRS for earning this. Whatever happens on the night, being recognised among the
                best brokers in the country is something we&rsquo;re proud of.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
