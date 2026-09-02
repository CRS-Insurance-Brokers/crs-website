import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "How accessible crs-ins.co.uk is, what we know still needs work, and how to reach us if part of the site does not work for you.",
  alternates: { canonical: "/accessibility" },
};

const sections = [
  {
    heading: "What we have done",
    body: [
      "We build this site to the Web Content Accessibility Guidelines 2.2 at level AA.",
      "Text can be enlarged to 200% without the layout breaking. Every page can be reached and operated with a keyboard alone, and there is a skip link at the top of each one. Images carry text descriptions. Body text meets the contrast levels the guidelines set, measured against the background it actually sits on.",
      "If you have told your device to reduce motion, the movement on this site stops. The scrolling strip of trade body logos on the home page pauses when you hover over it or reach it with a keyboard, and does not move at all on a touchscreen.",
    ],
  },
  {
    heading: "What we have not done",
    body: [
      "The site has not been through an independent accessibility audit, and we have not had it tested by anyone who uses a screen reader every day. We are not claiming full conformance on that basis, and there will be things we have missed.",
      "If you find one, we would rather hear about it than not.",
    ],
  },
  {
    heading: "If something here does not work for you",
    body: [
      "Call 01455 244630 or email info@crs-ins.co.uk. Tell us what you were trying to do and we will get you the same information another way, whether that is over the phone, in a different format, or in writing.",
      "Nothing on this site has to be used. A quote, a claim and a complaint can all be dealt with by phone.",
    ],
  },
];

export default function AccessibilityPage() {
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
                Accessibility
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
              Using this
              <br />
              <span className="italic text-m-bone-2/85">website.</span>
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
                  Tell us about a problem
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
                  className="pt-5 mt-5"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <p className="font-semibold text-[12px] tracking-[0.01em] text-m-bone/60 mb-3">
                    Standard we work to
                  </p>
                  <a
                    href="https://www.w3.org/TR/WCAG22/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[13px] tracking-[0.01em] text-m-bone/70 hover:text-white transition-colors duration-300"
                  >
                    WCAG 2.2 level AA →
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
