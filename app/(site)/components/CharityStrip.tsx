import Link from "next/link";
import { Reveal } from "./Reveal";
import { ArrowUpRight } from "./icons";

export function CharityStrip() {
  return (
    <section
      className="relative py-24 md:py-36"
      style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">

          <Reveal className="lg:col-span-6">
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.15] tracking-[-0.015em] text-white mb-6">
              Proud supporters of the<br />
              <span className="italic">Lighthouse Charity.</span>
            </h2>
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-m-bone/60 max-w-xl mb-8">
              The construction industry is at the heart of what we do, and Lighthouse
              has supported the people in it for nearly 70 years. Free, confidential
              help — available 24/7 — for anyone who needs it.
              We&rsquo;re glad to play our part.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="/about/charity"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-m-coral text-m-ink text-[11px] font-mono uppercase tracking-[0.24em] hover:bg-m-cream transition-colors duration-300"
                style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
              >
                Our commitment
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </Link>
              <a
                href="https://lighthousecharity.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.24em] text-m-bone/55 hover:text-m-bone transition-colors duration-300"
              >
                Visit Lighthouse
                <ArrowUpRight className="w-3 h-3" strokeWidth={1.25} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={180} className="lg:col-span-6 lg:col-start-7">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logos/crs-lighthouse-white.png"
              alt="CRS Insurance Brokers — proud supporters of the Lighthouse Construction Industry Charity"
              className="w-full opacity-80"
              loading="lazy"
              decoding="async"
            />
          </Reveal>

        </div>
      </div>
    </section>
  );
}
