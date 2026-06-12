import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Marginalia } from "../components/Marginalia";
import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: "Rewards · Earn up to £1,000 per referral",
  description:
    "Refer a business to CRS Insurance Brokers and earn 10% of our total earnings, up to £1,000 per referral. Terms apply.",
  alternates: { canonical: "/site/rewards" },
};

const steps = [
  {
    num: "01",
    heading: "Make the introduction",
    body: "Refer another business, friend, or family member to CRS Insurance Brokers. All we need is a name and a way to get in touch.",
  },
  {
    num: "02",
    heading: "We do the rest",
    body: "We will quote your contact, get their cover in place, and settle the account. You do not need to be involved beyond the introduction.",
  },
  {
    num: "03",
    heading: "You get paid",
    body: "Once the account is settled, we will transfer 10% of our total earnings to you — up to £1,000 per referral.",
  },
];

export default function RewardsPage() {
  return (
    <main className="relative">
      <Nav />
      <Marginalia />

      {/* SECTION 1 — Hero */}
      <section className="relative pt-[160px] md:pt-[180px] pb-16 md:pb-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-10 items-end">
            <Reveal delay={120} className="lg:col-span-7">
              <h1
                className="font-display font-bold leading-[1.15] tracking-[-0.015em] text-white"
                style={{ fontSize: "clamp(2.25rem, 4.8vw, 4rem)" }}
              >
                Earn up to
                <br />
                <span className="italic text-m-coral">£1,000</span>
                <br />
                <span className="text-m-bone-2/85">per referral.</span>
              </h1>
              <p className="mt-10 max-w-[44ch] text-[15.5px] leading-[1.65] text-m-bone/70">
                Refer a business to us. If they take out a policy and the
                account is settled, we pay you{" "}
                <span className="text-white">10% of our total earnings</span>{" "}
                — up to £1,000.
              </p>
            </Reveal>

            <Reveal delay={280} className="lg:col-span-4 lg:col-start-9">
              <div
                className="p-6 md:p-8 bg-m-ink-2"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-m-bone/45 mb-4">
                  Make a referral
                </p>
                <p className="text-[14px] leading-[1.65] text-m-bone/65 mb-6">
                  Call or email us with an introduction and we will take it
                  from there.
                </p>
                <a
                  href="tel:01455244630"
                  className="block text-[13px] font-mono uppercase tracking-[0.22em] text-m-bone/65 hover:text-white transition-colors duration-300 mb-2"
                >
                  01455 244630 →
                </a>
                <a
                  href="mailto:info@crs-ins.co.uk"
                  className="block text-[13px] font-mono tracking-[0.22em] text-m-bone/65 hover:text-white transition-colors duration-300"
                >
                  info@crs-ins.co.uk →
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Steps */}
      <section
        className="relative py-20 md:py-28"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
          <Reveal>
            <span className="inline-flex items-center gap-2 mb-12 text-[10px] font-mono uppercase tracking-[0.32em] text-m-bone/55">
              How it works
            </span>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {steps.map((s, i) => (
              <Reveal key={s.num} delay={i * 100}>
                <div
                  className="p-8 bg-m-ink-2 h-full"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <span className="font-display text-[3.5rem] leading-none tracking-[-0.02em] text-m-coral tnum">
                    {s.num}
                  </span>
                  <h3 className="mt-4 font-display text-[1.5rem] leading-[1.1] tracking-[-0.015em] text-white">
                    {s.heading}
                  </h3>
                  <p className="mt-4 text-[14px] leading-[1.7] text-m-bone/65">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — T&Cs */}
      <section
        className="relative py-16 md:py-20"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
          <Reveal>
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 mb-6 text-[10px] font-mono uppercase tracking-[0.32em] text-m-bone/55">
                Terms &amp; conditions
              </span>
              <ul className="flex flex-col gap-3 text-[13px] leading-[1.65] text-m-bone/50">
                <li className="flex gap-3">
                  <span className="text-m-bone/25 shrink-0">—</span>
                  It is the responsibility of the recipient to declare any
                  monetary amount received to HMRC and their employer.
                </li>
                <li className="flex gap-3">
                  <span className="text-m-bone/25 shrink-0">—</span>
                  Referrals will be paid upon full settlement of accounts.
                </li>
                <li className="flex gap-3">
                  <span className="text-m-bone/25 shrink-0">—</span>
                  Referred business must be entirely independent to your own
                  business.
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
