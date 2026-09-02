import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How CRS Insurance Brokers collects, uses, and protects your personal data. CIB Group UK Ltd, FCA FRN 960073.",
  alternates: { canonical: "/privacy" },
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
      "We do not collect special category data, such as health information, unless it is necessary to arrange a particular type of cover. Where we do, we rely on the insurance condition in Schedule 1 of the Data Protection Act 2018 rather than on your consent, because consent that could be withdrawn part-way through a policy would leave the cover unworkable. We will tell you when this applies.",
      "Information about criminal convictions is handled under the same Act and only where an insurer needs it to assess the risk.",
      "You do not have to give us your information, but we cannot obtain quotations or place cover without it. A policy can also be voided if what we pass to an insurer turns out to be incomplete or inaccurate.",
    ],
  },
  {
    heading: "How we use your data",
    body: [
      "We use your personal data to:",
      "— Arrange and administer insurance policies on your behalf.\n— Communicate with insurers, underwriters, and other parties necessary to place your cover.\n— Process and manage claims.\n— Comply with our legal and regulatory obligations, including FCA requirements.\n— Send you renewal reminders and information about your policy.\n— Improve our services.",
      "Our lawful basis for processing is primarily the performance of a contract, or steps taken at your request before entering into one. Where we have a legal obligation to process data we rely on that. For marketing to business clients and prospects we rely on legitimate interests, being our interest in offering insurance services to businesses likely to need them. Tell us to stop and we will.",
    ],
  },
  {
    heading: "Sharing your data",
    body: [
      "We share your personal data with third parties only where necessary:",
      "— Insurers and underwriters, to obtain and place cover.\n— Premium finance providers, where you choose to pay by instalments.\n— Credit reference agencies, where you apply for premium finance. A credit search will leave a record on your file.\n— Industry anti-fraud databases, including the Claims and Underwriting Exchange and the Insurance Fraud Bureau, which insurers use to detect and prevent fraudulent claims.\n— Loss adjusters and claims handlers, in the event of a claim.\n— Regulatory bodies including the FCA, where required by law.\n— IT service providers who support our business operations, under appropriate data processing agreements.",
      "We do not sell your personal data to third parties.",
    ],
  },
  {
    heading: "Sending data outside the UK",
    body: [
      "Some of the insurers and reinsurers we approach sit outside the UK. Risks placed at Lloyd's are frequently shared with overseas markets, and a claim on such a policy will involve parties abroad. Google, who provide the analytics on this website, also process data outside the UK.",
      "Where personal data leaves the UK we rely either on the adequacy regulations made by the UK government, or on the International Data Transfer Agreement, so that it remains protected to the same standard as it would be here.",
    ],
  },
  {
    heading: "Automated decisions",
    body: [
      "We do not make automated decisions about you. Insurers and finance providers often do. Much commercial underwriting and pricing is now automated, and an application for premium finance will usually involve an automated credit decision.",
      "If a decision affecting you was taken automatically, you can ask for a person to look at it again. Tell us and we will take it up with the insurer or finance provider on your behalf.",
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
      "This policy was last reviewed in September 2026.",
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
              <span className="font-semibold text-[12px] tracking-[0.01em] text-m-bone/55">
                Privacy Policy
              </span>
              <span className="font-semibold hidden sm:block text-[12px] tracking-[0.01em] text-m-bone/60">
                Last reviewed September 2026
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
                    <span className="font-semibold inline-flex items-center gap-2 mb-5 text-[12px] tracking-[0.01em] text-m-bone/55">
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
                  <p className="font-semibold text-[12px] tracking-[0.01em] text-m-bone/60 mb-3">
                    Contact us
                  </p>
                  <a
                    href="mailto:info@crs-ins.co.uk"
                    className="block text-[13px] tracking-[0.01em] text-m-bone/65 hover:text-white transition-colors duration-300 mb-2"
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
                  <p className="font-semibold text-[12px] tracking-[0.01em] text-m-bone/60 mb-3">
                    ICO
                  </p>
                  <a
                    href="https://ico.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[13px] tracking-[0.01em] text-m-bone/65 hover:text-white transition-colors duration-300"
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
