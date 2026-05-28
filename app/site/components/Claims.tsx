import { Reveal } from "./Reveal";
import { ArrowUpRight, AlertIcon, ClockIcon, ShieldIcon } from "./icons";

const panels = [
  {
    eyebrow: "Call",
    title: "Report a claim by phone",
    body: "Call 01455 244630 and select Option 4 for Claims. You'll speak directly to a member of our dedicated Claims team who knows your policy.",
    cta: "Call now",
    href: "tel:01455244630",
    icon: AlertIcon,
    accent: true,
  },
  {
    eyebrow: "Email",
    title: "Email the Claims team",
    body: "For non-urgent notifications or follow-up queries, email claims@crs-ins.co.uk. The mailbox is monitored and we respond as quickly as possible.",
    cta: "Send an email",
    href: "mailto:claims@crs-ins.co.uk",
    icon: ClockIcon,
  },
  {
    eyebrow: "Guidance",
    title: "What should I do first?",
    body: "A first-hour checklist covering evidence preservation, what information to gather, and what to tell us when you call. Plain English.",
    cta: "Read the guidance",
    href: "/site/claims/what-to-do-on-site",
    icon: ShieldIcon,
  },
];

export function Claims() {
  return (
    <section
      id="claims"
      className="relative py-32 md:py-44 overflow-hidden"
      style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(229,108,112,0.10), transparent 60%)",
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
        <Reveal>
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-8 mb-12 md:mb-16"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 mb-6 text-[10px] font-mono uppercase tracking-[0.32em] text-m-bone/55">
                Claims
              </span>
              <h2 className="font-display text-[clamp(2.25rem,4.8vw,4rem)] leading-[1.1] tracking-[-0.015em] text-white">
                When something<br />
                goes wrong,<br />
                <span className="italic text-m-coral">we&rsquo;re your first call.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-16">
              <p className="text-[15px] md:text-[16px] leading-[1.65] text-m-bone/60 max-w-md">
                We run a small, close-knit Client Services department with a
                dedicated Claims team. When something happens, you reach the
                people who know your policy — and they manage the process from
                first notification through to settlement, dealing directly with
                the insurer on your behalf.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {panels.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 100}>
                <a
                  href={p.href}
                  className={`group relative block h-full p-7 md:p-8 flex flex-col gap-7 min-h-[420px] md:min-h-[480px] transition-colors duration-300 ${
                    p.accent ? "bg-m-coral text-m-ink" : "bg-m-ink-2 hover:bg-m-ink-3"
                  }`}
                  style={{
                    border: p.accent
                      ? "1px solid rgba(10,10,10,0.18)"
                      : "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {/* Hover wipe — coral on dark cards, ink on coral card */}
                  <span
                    aria-hidden
                    className={`absolute left-0 right-0 -bottom-px h-px ${
                      p.accent ? "bg-m-ink" : "bg-m-coral"
                    }`}
                    style={{
                      clipPath: "inset(0 100% 0 0)",
                      transition: "clip-path 380ms cubic-bezier(0.23, 1, 0.32, 1)",
                    }}
                    data-coral-rule
                  />

                  <div
                    className={`flex items-start justify-between pb-4 ${
                      p.accent
                        ? ""
                        : ""
                    }`}
                    style={{
                      borderBottom: p.accent
                        ? "1px solid rgba(10,10,10,0.18)"
                        : "1px solid rgba(255,255,255,0.10)",
                    }}
                  >
                    <span
                      className={`w-11 h-11 flex items-center justify-center ${
                        p.accent ? "bg-m-ink/10 text-m-ink" : "bg-white/[0.05] text-m-bone"
                      }`}
                      style={{
                        border: p.accent
                          ? "1px solid rgba(10,10,10,0.20)"
                          : "1px solid rgba(255,255,255,0.10)",
                      }}
                    >
                      <Icon className="w-5 h-5" strokeWidth={1.1} />
                    </span>
                    <span
                      className={`text-[10px] font-mono uppercase tracking-[0.28em] tnum ${
                        p.accent ? "text-m-ink" : "text-m-bone/55"
                      }`}
                    >
                      Panel <span className={p.accent ? "text-m-ink" : "text-white"}>
                        {String(i + 1).padStart(2, "0")}
                      </span> · {p.eyebrow}
                    </span>
                  </div>

                  <div className="flex-1 flex flex-col gap-4">
                    <h3
                      className={`font-display text-[34px] md:text-[40px] leading-[0.98] tracking-[-0.02em] ${
                        p.accent ? "text-m-ink" : "text-white"
                      }`}
                    >
                      {p.title}
                    </h3>
                    <p
                      className={`text-[14px] leading-[1.65] ${
                        p.accent ? "text-m-ink/75" : "text-m-bone/60"
                      }`}
                    >
                      {p.body}
                    </p>
                  </div>

                  <div
                    className="mt-auto pt-6 flex items-center justify-between"
                    style={{
                      borderTop: p.accent
                        ? "1px solid rgba(10,10,10,0.18)"
                        : "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <span
                      className={`text-[12px] font-mono uppercase tracking-[0.22em] transition-colors duration-300 ${
                        p.accent ? "text-m-ink" : "text-m-bone/65 group-hover:text-white"
                      }`}
                      style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
                    >
                      {p.cta} →
                    </span>
                    <span
                      className={`flex items-center justify-center w-10 h-10 transition-all duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[2px] ${
                        p.accent
                          ? "bg-m-ink text-m-coral"
                          : "bg-white/[0.05] text-m-bone group-hover:bg-m-cream group-hover:text-m-ink"
                      }`}
                      style={{
                        border: p.accent
                          ? "1px solid rgba(10,10,10,0.20)"
                          : "1px solid rgba(255,255,255,0.10)",
                        transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
                      }}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.25} />
                    </span>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>

        {/* Reassurance band — flat, hairline */}
        <Reveal delay={300}>
          <div
            className="mt-6 px-6 py-6 md:px-10 md:py-7 flex flex-col md:flex-row md:items-center justify-between gap-5 bg-m-ink-2"
            style={{ border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="flex items-center gap-4">
              <span className="relative flex w-2.5 h-2.5 shrink-0">
                <span className="absolute inset-0 rounded-full bg-emerald-400/40 pulse-dot" />
                <span className="relative w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </span>
              <p className="text-[14px] md:text-[15.5px] text-m-bone/85 leading-snug">
                <span className="text-white">Speak to a person —</span>{" "}
                answered by a member of our Claims team during working hours —
                select Option 4. Mon–Fri 09:00–17:00.
              </p>
            </div>
            <a href="tel:01455244630" className="group flex items-center gap-3 shrink-0">
              <span
                className="font-display text-[28px] md:text-[36px] leading-none text-white group-hover:text-m-coral transition-colors duration-300 tnum"
                style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
              >
                01455 244630
              </span>
              <span
                className="w-10 h-10 bg-m-cream text-m-ink flex items-center justify-center group-hover:bg-m-coral transition-colors duration-300"
                style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                >
                  <path
                    d="M11.5 9.7v1.4a1 1 0 0 1-1.1 1 9.6 9.6 0 0 1-4.2-1.5 9.4 9.4 0 0 1-2.9-2.9A9.6 9.6 0 0 1 1.8 3.5a1 1 0 0 1 1-1.1h1.4a1 1 0 0 1 1 .9c.06.5.18 1 .35 1.4a1 1 0 0 1-.23 1.05L4.7 6.4a7.7 7.7 0 0 0 2.9 2.9l.6-.6a1 1 0 0 1 1.05-.23c.45.17.9.29 1.4.34a1 1 0 0 1 .9 1z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
