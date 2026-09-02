import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: "Complaints",
  description:
    "How to complain to CRS Insurance Brokers, what happens next, and when you can go to the Financial Ombudsman Service. CIB Group UK Ltd, FCA FRN 960073.",
  alternates: { canonical: "/complaints" },
};

const sections = [
  {
    heading: "How to complain",
    body: [
      "Complaints go to the Managing Director. Call 01455 244630, email info@crs-ins.co.uk, or write to Unit 2 Oakberry Road, Lutterworth, LE17 4PP.",
      "Tell us what went wrong and what you would like us to do about it. If you have a policy or claim reference, include it. You do not need to put a complaint in writing for us to deal with it.",
    ],
  },
  {
    heading: "What happens next",
    body: [
      "We will acknowledge your complaint within five business days.",
      "We aim to settle most complaints well inside eight weeks. If we cannot, we will write to you before the eight weeks are up, explain why, and tell you when to expect an answer.",
      "Our final response will set out what we found and what we propose to do about it.",
    ],
  },
  {
    heading: "The Financial Ombudsman Service",
    body: [
      "If you are unhappy with our final response, or we have not sent one within eight weeks, you may be able to take the complaint to the Financial Ombudsman Service. You have six months from the date of our final response to do so.",
      "The Ombudsman is open to consumers and to smaller businesses. A business qualifies if its annual turnover is under £6.5m and it has either fewer than 50 employees or a balance sheet total under £5m. A number of our commercial clients sit above those limits and cannot use the service. We will tell you whether you are eligible when we send our final response.",
      "Financial Ombudsman Service, Exchange Tower, London E14 9SR\nTelephone: 0800 023 4567\nfinancial-ombudsman.org.uk",
    ],
  },
  {
    heading: "The Financial Services Compensation Scheme",
    body: [
      "The FSCS is separate from the complaints process. It pays compensation where a firm cannot meet its liabilities, rather than deciding whether a complaint is justified.",
      "Insurance broking is covered for 90% of a claim with no upper limit. Compulsory classes, such as employers' liability, are covered for 100%.",
      "fscs.org.uk",
    ],
  },
];

export default function ComplaintsPage() {
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
              <span className="font-semibold text-[12px] tracking-[0.01em] text-m-bone/70">
                Complaints
              </span>
              <span className="font-semibold hidden sm:block text-[12px] tracking-[0.01em] text-m-bone/50">
                Last reviewed September 2026
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1
              className="font-display font-bold leading-[1.15] tracking-[-0.015em] text-white max-w-3xl"
              style={{ fontSize: "clamp(2.25rem, 4.8vw, 4rem)" }}
            >
              If something has
              <br />
              <span className="italic text-m-bone-2/85">gone wrong.</span>
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
                    <span className="font-semibold inline-flex items-center gap-2 mb-5 text-[12px] tracking-[0.01em] text-m-bone/70">
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
                <p className="font-semibold text-[12px] tracking-[0.01em] text-m-bone/60 mb-3">
                  Complain to us
                </p>
                <a
                  href="tel:01455244630"
                  className="block text-[13px] font-mono tabular-nums text-m-bone/70 hover:text-white transition-colors duration-300 mb-2"
                >
                  01455 244630 →
                </a>
                <a
                  href="mailto:info@crs-ins.co.uk"
                  className="block text-[13px] tracking-[0.01em] text-m-bone/70 hover:text-white transition-colors duration-300"
                >
                  info@crs-ins.co.uk →
                </a>

                <div
                  className="pt-5 mt-5 mb-5"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <p className="font-semibold text-[12px] tracking-[0.01em] text-m-bone/60 mb-3">
                    Financial Ombudsman
                  </p>
                  <a
                    href="https://www.financial-ombudsman.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[13px] tracking-[0.01em] text-m-bone/70 hover:text-white transition-colors duration-300"
                  >
                    financial-ombudsman.org.uk →
                  </a>
                </div>

                <div
                  className="pt-5"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <p className="font-semibold text-[12px] tracking-[0.01em] text-m-bone/60 mb-3">
                    Compensation scheme
                  </p>
                  <a
                    href="https://www.fscs.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[13px] tracking-[0.01em] text-m-bone/70 hover:text-white transition-colors duration-300"
                  >
                    fscs.org.uk →
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
