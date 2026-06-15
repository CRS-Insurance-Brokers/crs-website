import { Reveal } from "./Reveal";
import { LinkedInIcon, MailIcon, ArrowUpRight } from "./icons";
import { team as teamContent } from "../data/content";

const team = teamContent.data;

export function Team() {
  return (
    <section
      id="team"
      className="relative pt-[160px] md:pt-[180px] pb-32 md:pb-44 overflow-hidden"
      style={{ borderTop: "none" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
        <Reveal>
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-8 mb-16 md:mb-20"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 mb-6 text-[10px] font-mono uppercase tracking-[0.32em] text-m-bone/55">
                The team
              </span>
              <h1 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.02em] text-white">
                The management<br />
                <span className="italic text-m-bone-2/85">team.</span>
              </h1>
            </div>
          </div>
        </Reveal>

        {/* Three flat cards — no Z-axis tilt, no rounded corners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 110}>
              <div
                className="group relative h-full bg-m-ink-2 transition-colors duration-300"
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
                  className="relative aspect-[4/5] overflow-hidden"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m.image}
                    alt={`${m.name} — ${m.role}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
                    style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
                    loading="lazy"
                    decoding="async"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(20,16,46,0) 40%, rgba(20,16,46,0.92) 100%)",
                    }}
                  />

                  {/* Bottom block */}
                  <div className="absolute left-5 right-5 bottom-5">
                    <h3 className="font-display text-[34px] leading-[0.95] tracking-[-0.02em] text-white">
                      {m.name}
                    </h3>
                    <p className="mt-1.5 text-[10.5px] font-mono uppercase tracking-[0.26em] text-m-bone/65">
                      {m.role}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-5 flex flex-col gap-4">
                  <div
                    className="flex flex-col gap-1 pb-3 text-[10px] font-mono uppercase tracking-[0.26em]"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <span className="text-m-bone/40">Specialism</span>
                    <span className="text-m-bone/70">{m.speciality}</span>
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <a
                      href={`tel:${m.direct.replace(/\s/g, "")}`}
                      className="flex-1 group/cta inline-flex items-center justify-between gap-2 px-3 py-2 bg-white/[0.04] hover:bg-m-cream hover:text-m-ink transition-all duration-300"
                      style={{
                        border: "1px solid rgba(255,255,255,0.10)",
                        transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
                      }}
                    >
                      <span className="text-[11.5px] font-mono tabular-nums">
                        {m.direct}
                      </span>
                      <span className="w-7 h-7 bg-white/[0.06] group-hover/cta:bg-m-ink/10 flex items-center justify-center">
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 14 14"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.25"
                        >
                          <path
                            d="M11.5 9.7v1.4a1 1 0 0 1-1.1 1 9.6 9.6 0 0 1-4.2-1.5 9.4 9.4 0 0 1-2.9-2.9A9.6 9.6 0 0 1 1.8 3.5a1 1 0 0 1 1-1.1h1.4a1 1 0 0 1 1 .9c.06.5.18 1 .35 1.4a1 1 0 0 1-.23 1.05L4.7 6.4a7.7 7.7 0 0 0 2.9 2.9l.6-.6a1 1 0 0 1 1.05-.23c.45.17.9.29 1.4.34a1 1 0 0 1 .9 1z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                    <a
                      href={`mailto:${m.email}`}
                      aria-label={`Email ${m.name}`}
                      className="w-9 h-9 bg-white/[0.04] flex items-center justify-center text-m-bone/65 hover:bg-m-cream hover:text-m-ink transition-all duration-300"
                      style={{
                        border: "1px solid rgba(255,255,255,0.10)",
                        transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
                      }}
                    >
                      <MailIcon className="w-3.5 h-3.5" strokeWidth={1.25} />
                    </a>
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${m.name} on LinkedIn`}
                      className="w-9 h-9 bg-white/[0.04] flex items-center justify-center text-m-bone/65 hover:bg-m-cream hover:text-m-ink transition-all duration-300"
                      style={{
                        border: "1px solid rgba(255,255,255,0.10)",
                        transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
                      }}
                    >
                      <LinkedInIcon className="w-3.5 h-3.5" strokeWidth={1.25} />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
