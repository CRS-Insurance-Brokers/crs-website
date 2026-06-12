import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How CRS Insurance Brokers collects, uses, and protects your personal data. CIB Group UK Ltd, FCA FRN 960073.",
  alternates: { canonical: "/site/privacy" },
};

const sections = [
  {
    heading: "Who we are",
    body: [
      "CRS Insurance Brokers is a trading name of CIB Group UK Ltd, a company registered in England and Wales (company no. 13360654). Our registered office is The Copper Room, Deva City Office Park, Trinity Way, Salford, M3 7BG.",
      "We are authorised and regulated by the Financial Conduct Authority (FRN 960073). You can verify our registration at register.fca.org.uk.",
      "For the purposes of data protection legislation, CIB Group UK Ltd is the data controller of your personal information.",
    ],
  },
  {
    heading: "What data we collect",
    body: [
      "We may collect the following categories of personal data when you enquire about or take out insurance through us:",
      "— Contact details: name, address, email address, telephone number.\n— Business information: company name, company registration number, trade type, number of employees, turnover.\n— Insurance history: previous claims, existing policies, periods of uninsured activity.\n— Financial information: details required to arrange premium finance (where applicable).\n— Communications: records of calls (which are recorded), emails, and other correspondence with us.",
      "We do not collect or process special category data (such as health or criminal records) unless this is strictly necessary to arrange a specific type of cover, in which case we will inform you and seek your explicit consent.",
    ],
  },
  {
    heading: "How we use your data",
    body: [
      "We use your personal data to:",
      "— Arrange and administer insurance policies on your behalf.\n— Communicate with insurers, underwriters, and other parties necessary to place your cover.\n— Process and manage claims.\n— Comply with our legal and regulatory obligations, including FCA requirements.\n— Send you renewal reminders and information about your policy.\n— Improve our services.",
      "Our lawful basis for processing is primarily the performance of a contract (or steps taken at your request prior to entering into a contract). Where we have a legal obligation to process data we will rely on that basis. For direct marketing communications, we rely on legitimate interests or, where required, your consent.",
    ],
  },
  {
    heading: "Sharing your data",
    body: [
      "We share your personal data with third parties only where necessary:",
      "— Insurers and underwriters, to obtain and place cover.\n— Premium finance providers, where you choose to pay by instalments.\n— Loss adjusters and claims handlers, in the event of a claim.\n— Regulatory bodies including the FCA, where required by law.\n— IT service providers who support our business operations, under appropriate data processing agreements.",
      "We do not sell your personal data to third parties.",
    ],
  },
  {
    heading: "Data retention",
    body: [
      "We retain your personal data for as long as we have a business relationship with you, and thereafter for a minimum of seven years in accordance with FCA record-keeping requirements and relevant limitation periods under UK law.",
      "Where data is no longer required, it is securely deleted or anonymised.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "Under UK data protection law, you have the right to:",
      "— Access the personal data we hold about you.\n— Correct inaccurate or incomplete data.\n— Request erasure of your data in certain circumstances.\n— Object to or restrict certain types of processing.\n— Receive a portable copy of your data.\n— Withdraw consent where processing is based on consent.",
      "To exercise any of these rights, or to raise a concern about how we handle your data, please contact us at info@crs-ins.co.uk or call 01455 244630.",
      "If you are not satisfied with how we handle your request, you have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "We may update this privacy policy from time to time. The current version will always be available on this page. Where changes are material, we will notify affected individuals directly.",
      "This policy was last reviewed in May 2026.",
    ],
  },
];

export default function PrivacyPage() {
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
              <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-m-bone/55">
                Privacy Policy
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
              Privacy
              <br />
              <span className="italic text-m-bone-2/85">policy.</span>
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
                  Data controller
                </p>
                <p className="text-[14px] leading-[1.7] text-m-bone/65 mb-6">
                  CIB Group UK Ltd t/a CRS Insurance Brokers<br />
                  Company no. 13360654<br />
                  FCA FRN 960073
                </p>
                <div
                  className="pt-5 mb-5"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-m-bone/45 mb-3">
                    Contact us
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
                  className="pt-5"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-m-bone/45 mb-3">
                    ICO
                  </p>
                  <a
                    href="https://ico.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[13px] font-mono tracking-[0.18em] text-m-bone/65 hover:text-white transition-colors duration-300"
                  >
                    ico.org.uk →
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
