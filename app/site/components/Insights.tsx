import { Reveal } from "./Reveal";
import { ArrowUpRight } from "./icons";
import { insights } from "../data/content";

const posts = insights.data;

export function Insights() {
  return (
    <section
      id="insights"
      className="relative py-32 md:py-44"
      style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
        <Reveal>
          <div
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 mb-16 md:mb-20"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div>
              <span className="inline-flex items-center gap-2 mb-6 text-[10px] font-mono uppercase tracking-[0.32em] text-m-bone/55">
                Plate <span className="text-white tnum">06</span> — Insights
              </span>
              <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.02em] text-white">
                What we&rsquo;re<br />
                <span className="italic text-m-bone-2/85">seeing in the market.</span>
              </h2>
            </div>
            <a
              href="/insights"
              className="group inline-flex items-center gap-3 text-[12px] font-mono uppercase tracking-[0.22em] text-m-bone/65 hover:text-white transition-colors duration-300"
              style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
            >
              See all insights →
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 110}>
              <a
                href={p.href}
                className="group relative block h-full bg-m-ink-2 hover:bg-m-ink-3 transition-colors duration-300 flex flex-col"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <span
                  aria-hidden
                  className="absolute left-0 right-0 -bottom-px h-px bg-m-coral"
                  style={{
                    clipPath: "inset(0 100% 0 0)",
                    transition: "clip-path 380ms cubic-bezier(0.23, 1, 0.32, 1)",
                  }}
                  data-coral-rule
                />

                <div
                  className="relative aspect-[16/10] overflow-hidden"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
                    style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
                    loading="lazy"
                    decoding="async"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(20,16,46,0) 50%, rgba(20,16,46,0.55) 100%)",
                    }}
                  />
                  {/* Plate caption strip */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[9.5px] font-mono uppercase tracking-[0.28em] tnum">
                    <span className="text-m-bone/85">
                      Article <span className="text-white">{String(i + 1).padStart(2, "0")}</span> · {p.cat}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-7 flex flex-col gap-5 flex-1">
                  <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.28em] text-m-bone/40 tnum">
                    <span>{p.date}</span>
                    <span className="w-1 h-1 rounded-full bg-m-bone/20" />
                    <span>{p.read} read</span>
                  </div>

                  <h3
                    className="font-display text-[28px] md:text-[30px] leading-[1.05] tracking-[-0.01em] text-white"
                    dangerouslySetInnerHTML={{ __html: p.title }}
                  />

                  <p className="text-[13.5px] text-m-bone/55 leading-[1.65]">
                    {p.excerpt}
                  </p>

                  <div
                    className="mt-auto pt-5 flex items-center justify-between"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <span className="text-[11.5px] font-mono uppercase tracking-[0.22em] text-m-bone/55">
                      {p.author}
                    </span>
                    <span
                      className="flex items-center justify-center w-9 h-9 bg-white/[0.04] text-m-bone group-hover:bg-m-coral group-hover:text-m-ink transition-all duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[1px]"
                      style={{
                        border: "1px solid rgba(255,255,255,0.10)",
                        transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
                      }}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.25} />
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
