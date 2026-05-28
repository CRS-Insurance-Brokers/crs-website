import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Marginalia } from "../components/Marginalia";
import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: "Terms of Business · CRS Insurance Brokers",
  description:
    "Terms of business for CRS Insurance Brokers. How we act for you, our regulatory status, and your rights as a client. CIB Group UK Ltd, FCA FRN 960073.",
  alternates: { canonical: "/site/terms" },
};

const sections = [
  {
    heading: "Our regulatory status",
    body: [
      "CRS Insurance Brokers is a trading name of CIB Group UK Ltd, registered in England and Wales (company no. 13360654). Registered office: The Copper Room, Deva City Office Park, Trinity Way, Salford, M3 7BG.",
      "We are authorised and regulated by the Financial Conduct Authority (FRN 960073). You can verify our status on the FCA register at register.fca.org.uk.",
    ],
  },
  {
    heading: "Who we act for",
    body: [
      "In arranging your insurance, we act as your agent. We represent your interests when selecting an insurer and placing cover, and we will take your instructions on all matters relating to your insurance.",
      "There may be occasions, such as handling claims or in certain specialist markets, where we act on behalf of the insurer as their agent. We will inform you when this is the case.",
    ],
  },
  {
    heading: "Our service",
    body: [
      "We offer insurance products from a range of insurers. We will provide you with a fair analysis of the market before making a recommendation. Our recommendation will be based on your requirements as you have described them to us.",
      "It is your responsibility to provide complete and accurate information when applying for insurance and throughout the life of your policy. Failure to do so may result in your policy being voided, claims being reduced or declined, or your policy being cancelled.",
      "We do not provide advice on legal, financial, or tax matters. Where specialist advice is required, you should consult an appropriately qualified professional.",
    ],
  },
  {
    heading: "Conflicts of interest",
    body: [
      "We have a policy of identifying and managing conflicts of interest. Where a conflict arises that we cannot manage effectively, we will inform you before proceeding.",
      "We maintain a conflicts of interest register and review it regularly. A copy is available on request.",
    ],
  },
  {
    heading: "Protecting your money",
    body: [
      "Where we handle client money (premiums collected from you or claims money due to you), we hold it in a statutory trust account in accordance with FCA requirements. This means that, in the event of the insolvency of CIB Group UK Ltd, these funds are protected.",
      "Your premium is held in trust until passed to the insurer. Claims money is held in trust until passed to you.",
    ],
  },
  {
    heading: "Cancellation",
    body: [
      "You have the right to cancel your insurance policy. The terms and conditions of cancellation, including any charges or return of premium, are set out in your policy documents.",
      "If you have purchased a policy and wish to cancel within the statutory 14-day cooling-off period, please notify us in writing. We will arrange a refund of premium less any time on risk, subject to no claims having been made.",
    ],
  },
  {
    heading: "Complaints",
    body: [
      "If you have a complaint about our service, please contact us at:",
      "CRS Insurance Brokers\nUnit 2 Oakberry Road\nLutterworth\nLE17 4PP\n\nTelephone: 01455 244630\nEmail: info@crs-ins.co.uk",
      "We will acknowledge your complaint within five business days and aim to resolve it within eight weeks. If you are dissatisfied with our final response, or if we have not resolved your complaint within eight weeks, you may refer the matter to the Financial Ombudsman Service (FOS) at financial-ombudsman.org.uk or by calling 0800 023 4567.",
      "You may also be entitled to refer your complaint to the Financial Services Compensation Scheme (FSCS) if we are unable to meet our liabilities.",
    ],
  },
  {
    heading: "Governing law",
    body: [
      "These terms of business are governed by the law of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.",
      "These terms were last reviewed in May 2026.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="relative">
      <Nav />
      <Marginalia />

      {/* Hero */}
      <section className="relative pt-[160px] md:pt-[180px] pb-16 md:pb-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
          <Reveal>
            <div
              className="flex items-baseline justify-between mb-12 md:mb-16 pb-4"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-m-bone/55">
                Terms of Business
              </span>
              <span className="hidden sm:block font-mono text-[10px] uppercase tracking-[0.28em] text-m-bone/30">
                Last reviewed May 2026
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
                    <span className="inline-flex items-center gap-2 mb-5 text-[10px] font-mono uppercase tracking-[0.32em] text-m-bone/55">
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
                <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-m-bone/45 mb-4">
                  CRS Insurance Brokers
                </p>
                <p className="text-[14px] leading-[1.7] text-m-bone/65 mb-6">
                  CIB Group UK Ltd<br />
                  Company no. 13360654<br />
                  FCA FRN 960073
                </p>
                <div
                  className="pt-5 mb-5"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-m-bone/45 mb-3">
                    Make a complaint
                  </p>
                  <a
                    href="mailto:info@crs-ins.co.uk"
                    className="block text-[13px] font-mono tracking-[0.18em] text-m-bone/65 hover:text-white transition-colors duration-300 mb-2"
                  >
                    info@crs-ins.co.uk →
                  </a>
                  <a
                    href="tel:01455244630"
                    className="block text-[13px] font-mono tabular-nums text-m-bone/65 hover:text-white transition-colors duration-300"
                  >
                    01455 244630 →
                  </a>
                </div>
                <div
                  className="pt-5 mb-5"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-m-bone/45 mb-3">
                    Financial Ombudsman
                  </p>
                  <a
                    href="https://www.financial-ombudsman.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[13px] font-mono tracking-[0.18em] text-m-bone/65 hover:text-white transition-colors duration-300"
                  >
                    financial-ombudsman.org.uk →
                  </a>
                </div>
                <div
                  className="pt-5"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-m-bone/45 mb-3">
                    FCA Register
                  </p>
                  <a
                    href="https://register.fca.org.uk/s/search?predefined=ALL&q=960073"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[13px] font-mono tracking-[0.18em] text-m-bone/65 hover:text-white transition-colors duration-300"
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
