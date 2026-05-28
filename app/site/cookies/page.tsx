import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Marginalia } from "../components/Marginalia";
import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: "Cookie Policy · CRS Insurance Brokers",
  description:
    "How CRS Insurance Brokers uses cookies on this website. CIB Group UK Ltd, FCA FRN 960073.",
  alternates: { canonical: "/site/cookies" },
};

const cookieTypes = [
  {
    name: "Strictly necessary",
    description:
      "These cookies are essential for the website to function. They enable core features such as page navigation and access to secure areas. The website cannot function properly without these cookies and they cannot be switched off.",
    examples: "Session management, security tokens.",
    canDisable: false,
  },
  {
    name: "Analytics",
    description:
      "These cookies allow us to understand how visitors interact with the website — which pages are visited most, how long visitors spend on each page, and how they arrived. This information is used in aggregate to improve our content and user experience.",
    examples: "Google Analytics (anonymised IP).",
    canDisable: true,
  },
  {
    name: "Functional",
    description:
      "These cookies allow the website to remember choices you make and provide enhanced features. They may be set by us or by third-party providers whose services we use on our pages.",
    examples: "Remembering form preferences.",
    canDisable: true,
  },
];

const sections = [
  {
    heading: "What are cookies",
    body: [
      "Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to site owners.",
      "This website uses cookies for the purposes described below. You can control and manage cookies in your browser settings at any time.",
    ],
  },
  {
    heading: "How we use cookies",
    body: [
      "We use cookies to ensure the website functions correctly, to understand how it is used, and to improve the experience for visitors. We do not use cookies for advertising or to track you across other websites.",
      "When you first visit this site, you will be given the option to accept or decline non-essential cookies. You can change your preferences at any time by clearing cookies in your browser settings and revisiting the site.",
    ],
  },
  {
    heading: "Third-party cookies",
    body: [
      "Some cookies on this site are set by third parties whose services we use — for example, analytics providers. These third parties have their own privacy policies governing how they use cookie information.",
      "We do not control third-party cookies and you should refer to the relevant third party's privacy policy for more information.",
    ],
  },
  {
    heading: "Managing cookies",
    body: [
      "You can control and delete cookies through your browser settings. Instructions for the most common browsers are available at the links below.",
      "Please note that disabling certain cookies may affect the functionality of this website. Strictly necessary cookies cannot be disabled as they are required for the site to operate.",
      "For more information about cookies and how to manage them, visit allaboutcookies.org.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "We may update this cookie policy from time to time. The current version will always be available on this page.",
      "This policy was last reviewed in May 2026.",
    ],
  },
];

export default function CookiesPage() {
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
                Cookie Policy
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
              Cookie
              <br />
              <span className="italic text-m-bone-2/85">policy.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Cookie types table */}
      <section
        className="relative py-20 md:py-28"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
          <Reveal>
            <span className="inline-flex items-center gap-2 mb-10 text-[10px] font-mono uppercase tracking-[0.32em] text-m-bone/55">
              Cookies we use
            </span>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-20 md:mb-28">
            {cookieTypes.map((c, i) => (
              <Reveal key={c.name} delay={i * 80}>
                <div
                  className="p-6 md:p-7 bg-m-ink-2 h-full flex flex-col"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <h2 className="font-display text-[22px] leading-[1.1] tracking-[-0.01em] text-white">
                      {c.name}
                    </h2>
                    <span
                      className={`shrink-0 mt-0.5 text-[9px] font-mono uppercase tracking-[0.2em] px-2 py-1 ${
                        c.canDisable
                          ? "text-m-bone/55 bg-white/[0.04]"
                          : "text-m-coral bg-m-coral/10"
                      }`}
                      style={{ border: c.canDisable ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(255,100,80,0.2)" }}
                    >
                      {c.canDisable ? "Optional" : "Required"}
                    </span>
                  </div>
                  <p className="text-[14px] leading-[1.7] text-m-bone/65 flex-1 mb-4">
                    {c.description}
                  </p>
                  <p className="text-[11px] font-mono text-m-bone/35 mt-auto">
                    {c.examples}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Written sections */}
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
                          className="text-[15px] leading-[1.75] text-m-bone/70"
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
                  Browser guides
                </p>
                <div className="flex flex-col gap-2">
                  {[
                    { label: "Google Chrome", href: "https://support.google.com/chrome/answer/95647" },
                    { label: "Mozilla Firefox", href: "https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" },
                    { label: "Apple Safari", href: "https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" },
                    { label: "Microsoft Edge", href: "https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge" },
                  ].map((b) => (
                    <a
                      key={b.label}
                      href={b.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] font-mono tracking-[0.16em] text-m-bone/65 hover:text-white transition-colors duration-300"
                    >
                      {b.label} →
                    </a>
                  ))}
                </div>
                <div
                  className="mt-6 pt-5"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-m-bone/45 mb-3">
                    Questions
                  </p>
                  <a
                    href="mailto:info@crs-ins.co.uk"
                    className="block text-[13px] font-mono tracking-[0.18em] text-m-bone/65 hover:text-white transition-colors duration-300"
                  >
                    info@crs-ins.co.uk →
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
