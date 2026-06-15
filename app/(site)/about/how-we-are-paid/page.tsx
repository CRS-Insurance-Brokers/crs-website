import type { Metadata } from "next";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { Reveal } from "../../components/Reveal";

export const metadata: Metadata = {
  title: "How we are paid · Remuneration & premium finance",
  description:
    "How CRS Insurance Brokers is remunerated — commission, fees, and our role as a credit broker for premium finance. CIB Group UK Ltd, FCA FRN 960073.",
  alternates: { canonical: "/about/how-we-are-paid" },
};

export default function HowWeArePaidPage() {
  return (
    <main id="main-content" className="relative">
      <Nav />

      {/* SECTION 1 — Hero */}
      <section className="relative pt-[160px] md:pt-[180px] pb-16 md:pb-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
          <Reveal delay={120}>
            <h1
              className="font-display font-bold leading-[1.15] tracking-[-0.015em] text-white max-w-3xl"
              style={{ fontSize: "clamp(2.25rem, 4.8vw, 4rem)" }}
            >
              How we
              <br />
              <span className="italic">are paid.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* SECTION 2 — Content */}
      <section
        className="relative py-20 md:py-28"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">

            {/* Remuneration */}
            <Reveal className="lg:col-span-6">
              <div
                className="pb-10 mb-10"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
              >
                <span className="inline-flex items-center gap-2 mb-6 text-[10px] font-mono uppercase tracking-[0.32em] text-m-bone/55">
                  Our remuneration
                </span>
                <p className="text-[15px] md:text-[16px] leading-[1.75] text-m-bone/70">
                  We will receive a payment for placing your insurance in part
                  by commission from the insurer and in part through fees. You
                  are entitled, at any time, to request further information
                  regarding the commission which we receive.
                </p>
              </div>

              {/* Premium finance */}
              <div>
                <span className="inline-flex items-center gap-2 mb-6 text-[10px] font-mono uppercase tracking-[0.32em] text-m-bone/55">
                  Premium finance
                </span>
                <p className="text-[15px] md:text-[16px] leading-[1.75] text-m-bone/70">
                  Where payment via premium finance is agreed, we will select
                  the option that best suits your requirements. CIB Group UK
                  Ltd trading as CRS Insurance Brokers are acting as a credit
                  broker, not lender. We work with a panel of finance providers
                  and may receive a commission for introducing you to them,
                  setting up your insurance payments and making any changes to
                  your details. The amount of commission we will earn will be
                  confirmed by the finance providers in writing. Where insurer
                  finance is available, CIB Group UK Ltd t/a CRS Insurance
                  Brokers will not earn a commission. For full details, please
                  speak to your account handler.
                </p>
              </div>
            </Reveal>

            {/* Right column — note */}
            <Reveal delay={150} className="lg:col-span-5 lg:col-start-8 lg:self-start lg:mt-16">
              <div
                className="p-6 md:p-8 bg-m-ink-2"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-m-bone/45 mb-4">
                  Your right to information
                </p>
                <p className="text-[14px] leading-[1.7] text-m-bone/65">
                  You can request full details of the commission we receive at
                  any time. Speak to your account handler or contact us
                  directly.
                </p>
                <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                  <a
                    href="tel:01455244630"
                    className="text-[13px] font-mono uppercase tracking-[0.22em] text-m-bone/65 hover:text-white transition-colors duration-300"
                  >
                    01455 244630 →
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
