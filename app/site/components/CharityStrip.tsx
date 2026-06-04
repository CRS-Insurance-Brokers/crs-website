import Link from "next/link";
import { Reveal } from "./Reveal";
import { ArrowUpRight } from "./icons";

export function CharityStrip() {
  return (
    <section
      className="relative py-20 md:py-28"
      style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">

          {/* Left — copy */}
          <Reveal className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 mb-5 text-[10px] font-mono uppercase tracking-[0.32em] text-m-bone/55">
              <span className="w-1.5 h-1.5 rounded-full bg-m-coral pulse-dot" />
              Our pledge
            </span>
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.15] tracking-[-0.015em] text-white mb-6">
              Proud supporters of<br />
              <span className="italic">Lighthouse.</span>
            </h2>
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-m-bone/60 max-w-lg">
              The construction industry is the core of what we do. Lighthouse provides free,
              confidential, 24/7 wellbeing support to construction workers and their families —
              exactly the people we work alongside every day. Our commitment to Lighthouse is
              long-term and unconditional.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <Link
                href="/site/about/charity"
                className="group inline-flex items-center gap-2.5 text-[11px] font-mono uppercase tracking-[0.24em] text-m-bone/70 hover:text-white transition-colors duration-200"
              >
                Read more about our pledge
                <ArrowUpRight className="w-3 h-3" strokeWidth={1.25} />
              </Link>
              <span className="w-px h-4 bg-white/10 hidden sm:block" />
              <a
                href="https://lighthousecharity.org"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 text-[11px] font-mono uppercase tracking-[0.24em] text-m-coral/80 hover:text-m-coral transition-colors duration-200"
              >
                Visit Lighthouse
                <ArrowUpRight className="w-3 h-3" strokeWidth={1.25} />
              </a>
            </div>
          </Reveal>

          {/* Right — Lighthouse info card */}
          <Reveal delay={180} className="lg:col-span-5 lg:col-start-8">
            <div
              className="p-8 md:p-10 bg-m-ink-2"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.32em] text-m-bone/40 block mb-6">
                Lighthouse Construction Industry Charity
              </span>
              <p className="text-[15px] leading-[1.65] text-m-bone/65 mb-8">
                Free 24/7 emotional, physical &amp; financial wellbeing support for
                construction workers &amp; their families. No referral needed. No charge.
              </p>
              <div
                className="pt-6 space-y-3"
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
              >
                <a
                  href="tel:08001563044"
                  className="group flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.22em] text-m-bone/50 hover:text-m-bone transition-colors duration-200"
                >
                  <span>0800 156 3044 · 24/7 helpline</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" strokeWidth={1.25} />
                </a>
                <a
                  href="https://lighthousecharity.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.22em] text-m-bone/50 hover:text-m-bone transition-colors duration-200"
                >
                  <span>lighthousecharity.org</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" strokeWidth={1.25} />
                </a>
                <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-m-bone/30">
                  Reg. charity · UK 1149488
                </p>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
