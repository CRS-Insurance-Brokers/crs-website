import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Marginalia } from "../components/Marginalia";
import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";
import { WhyCRS } from "../components/WhyCRS";

export const metadata: Metadata = {
  title: "About CRS · CRS Insurance Brokers",
  description:
    "Independent specialist insurance brokers based in Lutterworth. Named handlers, direct lines, and a wide insurer panel for high-risk trades.",
  alternates: { canonical: "/site/about" },
};

export default function AboutPage() {
  return (
    <main className="relative">
      <Nav />
      <Marginalia />

      <section className="relative pt-[160px] md:pt-[180px] pb-16 md:pb-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
          <Reveal>
            <div
              className="flex items-baseline justify-between mb-12 md:mb-16 pb-4"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-m-bone/55">
                About CRS
              </span>
              <span className="hidden sm:block font-mono text-[10px] uppercase tracking-[0.28em] text-m-bone/30">
                Lutterworth · Independent · Since 2022
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1
              className="font-display font-bold leading-[1.15] tracking-[-0.015em] text-white"
              style={{ fontSize: "clamp(2.25rem, 4.8vw, 4rem)" }}
            >
              Specialist brokers.
              <br />
              <span className="italic text-m-bone-2/85">Named people. Direct lines.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <WhyCRS />

      <Footer />
    </main>
  );
}
