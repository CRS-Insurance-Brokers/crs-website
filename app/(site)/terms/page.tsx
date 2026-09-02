import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: "Terms of Business",
  description:
    "A summary of the terms on which CRS Insurance Brokers acts for you. The full Terms of Business Agreement is issued with your proposal. CIB Group UK Ltd, FCA FRN 960073.",
  alternates: { canonical: "/terms" },
};

/*
 * SUMMARY ONLY. Every statement here has to be supportable by the Terms of
 * Business Agreement (August 2025) that clients are issued with. If the TOBA
 * does not say it, it does not belong on this page.
 *
 * Checked against the TOBA on 2 September 2026. The previous version had
 * drifted: it promised a fair analysis of the market, gave complaint
 * timescales, claimed a conflicts of interest register, stated a flat 14-day
 * cooling-off right, and said we act as the insurer's agent when handling
 * claims. None of those appear in the TOBA, and the last one contradicts it.
 */
const sections = [
  {
    heading: "About us",
    body: [
      "CRS Insurance Brokers is a trading name of CIB Group UK Ltd, Unit 2 Oakberry Road, Oakberry Industrial Estate, Lutterworth, LE17 4PP. The company is registered in England and Wales, company no. 13360654, with its registered office at The Copper Room, Deva City Office Park, Trinity Way, Salford, M3 7BG.",
      "We are authorised and regulated by the Financial Conduct Authority. Our firm reference number is 960073. We are permitted to arrange, advise on, deal as an agent of insurers and assist in claims handling in respect of non-investment insurance policies.",
      "You can check this on the FCA register at register.fca.org.uk, or by calling the FCA on 0800 111 6768.",
    ],
  },
  {
    heading: "Who we act for",
    body: [
      "When you appoint us, we become your agent. We act in your interests and on your instructions.",
      "There are occasions where we carry out a specific task on behalf of an insurer, such as issuing policy documentation. Where that happens we act for the insurer for that task only, and we will tell you when it applies.",
      "We do not hold agreements with insurers to settle claims. When you notify a claim, we act as your agent in dealing with the insurer.",
    ],
  },
  {
    heading: "How we approach the market",
    body: [
      "We are an independent intermediary. We place business with a number of insurance companies rather than one, and with a number of insurance-related service providers.",
      "How we approach the market varies by policy. For each one we tell you in your proposal whether we carried out a fair analysis of the market, approached a limited number of insurers, approached a single insurer, or used another intermediary. Where we have not carried out a fair analysis, we will discuss the scope of our search and give you a list of the insurers we use.",
      "When deciding what to recommend we consider the solvency of insurers, premium, policy cover and any other factor we think relevant. We will draw any onerous or unusual terms to your attention as soon as we are aware of them.",
    ],
  },
  {
    heading: "The information you give us",
    body: [
      "You must present the risk fairly. That means telling us, before cover is arranged or renewed and throughout the policy period, anything that might influence an insurer in setting the premium or the terms, or in deciding whether to take the risk at all. If you are not sure whether something matters, tell us anyway.",
      "You are expected to carry out a reasonable search before presenting the risk. That includes asking your senior managers and anyone with particular knowledge of the risk being insured.",
      "Failure to disclose material information may invalidate your cover, and could mean a claim is not paid or an additional premium becomes due.",
    ],
  },
  {
    heading: "Conflicts of interest",
    body: [
      "Our director may from time to time hold shareholdings in other insurance undertakings, for example managing general agents we place business with. If you consider that this creates a conflict of interest, we will exclude them from the panel of insurers we approach on request.",
      "We do not hold claims settlement agreements with insurers, which avoids any question of us acting on both sides of a claim.",
    ],
  },
  {
    heading: "Protecting your money",
    body: [
      "Before your premium reaches the insurer we either hold it as agent of the insurer, in which case your insurance is treated as paid for, or we hold it in a client bank account on trust for you. In some cases we may pass your money to another intermediary.",
      "Your money is protected either way under the FCA's client money rules. We reserve the right to retain any interest earned on the account.",
    ],
  },
  {
    heading: "Cancellation",
    body: [
      "You may have a statutory right to cancel within a short period after taking out a policy. Whether it applies, and how long you have, is set out in your policy summary and policy document.",
      "If you cancel, the insurer will normally return a pro rata refund of premium. We may keep an amount reflecting our administrative costs of arranging and cancelling the cover.",
      "If you cancel after instructing us to place cover, or end our appointment before a policy expires, our commission and any fee are treated as earned in full and are not refunded.",
    ],
  },
  {
    heading: "Fees",
    body: [
      "We are paid by commission from the insurer, by fees, or by a combination of the two. You can ask us at any time what commission we have received.",
      "Where cover carries no commission or a low commission we will charge an arrangement fee, and we will tell you the amount when we give you the quotation. We reserve the right to charge £15 for mid-term changes. Fees are not refundable.",
    ],
  },
  {
    heading: "Complaints",
    body: [
      "If you have a complaint about our service, contact the Managing Director at Unit 2 Oakberry Road, Lutterworth, LE17 4PP, or call 01455 244630.",
      "You may be entitled to refer the matter to the Financial Ombudsman Service afterwards. Our complaints page sets out how to complain and who can use the Ombudsman. A full copy of our complaints procedure is available on request.",
    ],
  },
  {
    heading: "Compensation",
    body: [
      "We are covered by the Financial Services Compensation Scheme. You may be entitled to compensation from the scheme if we cannot meet our obligations. Whether you are depends on the type of business and the circumstances of the claim.",
      "Most insurance contracts are covered for 90% of the claim with no upper limit. Compulsory insurances, such as employers' liability and motor, are covered for 100% with no upper limit.",
      "Further information is available from the FSCS on 0800 678 1100 or at fscs.org.uk.",
    ],
  },
  {
    heading: "Legal effect",
    body: [
      "This page is a summary. The full Terms of Business Agreement is the document that governs our relationship, and it covers matters not repeated here, including limits on our liability, credit searches, payment options and insurer solvency.",
      "Our Terms of Business Agreement is governed by English law and subject to the exclusive jurisdiction of the English courts.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main id="main-content" className="relative">
      <Nav />

      {/* Hero */}
      <section className="relative pt-[160px] md:pt-[180px] pb-16 md:pb-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
          <Reveal>
            <div
              className="flex items-baseline justify-between mb-12 md:mb-16 pb-4"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
            >
              <span className="font-semibold text-[12px] tracking-[0.01em] text-m-bone/60">
                Terms of Business
              </span>
              <span className="font-semibold hidden sm:block text-[12px] tracking-[0.01em] text-m-bone/60">
                Summary · September 2026
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1
              className="font-display font-bold leading-[1.15] tracking-[-0.015em] text-white max-w-3xl"
              style={{ fontSize: "clamp(2.25rem, 4.8vw, 4rem)" }}
            >
              Terms of
              <br />
              <span className="italic text-m-bone-2/85">business.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section
        className="relative py-20 md:py-28"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
            <div className="lg:col-span-7 flex flex-col gap-12">

              {/* States the relationship between this page and the TOBA up front,
                  so the summary cannot be read as the agreement itself. */}
              <Reveal>
                <div
                  className="p-6 md:p-7 bg-m-ink-2"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <p className="text-[15px] leading-[1.75] text-m-bone/75">
                    This is a summary of the terms on which we act for you. The
                    document that governs our relationship is our Terms of
                    Business Agreement, which is issued with your proposal and
                    again at renewal. A copy is available on request at any time.
                  </p>
                </div>
              </Reveal>

              {sections.map((s, i) => (
                <Reveal key={s.heading} delay={i * 60}>
                  <div
                    className="pb-12"
                    style={{
                      borderBottom:
                        i < sections.length - 1
                          ? "1px solid rgba(255,255,255,0.08)"
                          : "none",
                    }}
                  >
                    <span className="font-semibold inline-flex items-center gap-2 mb-5 text-[12px] tracking-[0.01em] text-m-bone/60">
                      {s.heading}
                    </span>
                    <div className="flex flex-col gap-4">
                      {s.body.map((para, j) => (
                        <p
                          key={j}
                          className="text-[15px] leading-[1.75] text-m-bone/70 whitespace-pre-line"
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Sidebar */}
            <Reveal delay={200} className="lg:col-span-4 lg:col-start-9 lg:self-start lg:sticky lg:top-[112px]">
              <div
                className="p-6 md:p-8 bg-m-ink-2"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <p className="font-semibold text-[12px] tracking-[0.01em] text-m-bone/60 mb-4">
                  CRS Insurance Brokers
                </p>
                <p className="text-[14px] leading-[1.7] text-m-bone/70 mb-6">
                  CIB Group UK Ltd<br />
                  Company no. 13360654<br />
                  FCA FRN 960073
                </p>
                <div
                  className="pt-5 mb-5"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <p className="font-semibold text-[12px] tracking-[0.01em] text-m-bone/60 mb-3">
                    Full terms of business
                  </p>
                  <a
                    href="mailto:info@crs-ins.co.uk?subject=Terms%20of%20Business%20Agreement"
                    className="block text-[13px] tracking-[0.01em] text-m-bone/70 hover:text-white transition-colors duration-300"
                  >
                    Request a copy →
                  </a>
                </div>
                <div
                  className="pt-5 mb-5"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <p className="font-semibold text-[12px] tracking-[0.01em] text-m-bone/60 mb-3">
                    Make a complaint
                  </p>
                  <a
                    href="/complaints"
                    className="block text-[13px] tracking-[0.01em] text-m-bone/70 hover:text-white transition-colors duration-300 mb-2"
                  >
                    How to complain →
                  </a>
                  <a
                    href="tel:01455244630"
                    className="block text-[13px] font-mono tabular-nums text-m-bone/70 hover:text-white transition-colors duration-300"
                  >
                    01455 244630 →
                  </a>
                </div>
                <div
                  className="pt-5"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <p className="font-semibold text-[12px] tracking-[0.01em] text-m-bone/60 mb-3">
                    FCA Register
                  </p>
                  <a
                    href="https://register.fca.org.uk/s/search?q=960073&type=firms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[13px] tracking-[0.01em] text-m-bone/70 hover:text-white transition-colors duration-300"
                  >
                    register.fca.org.uk →
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
