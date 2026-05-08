import { PinIcon } from "./icons";

const cols = [
  {
    heading: "Specialisms",
    links: [
      { label: "High Risk", href: "/specialisms/high-risk" },
      { label: "Construction", href: "/specialisms/construction" },
      { label: "Contractors & Engineers", href: "/specialisms/contractors-engineers" },
      { label: "Manufacturing & Wholesale", href: "/specialisms/manufacturing-wholesale" },
    ],
  },
  {
    heading: "Claims",
    links: [
      { label: "Report an incident", href: "/claims/report-an-incident" },
      { label: "Track a claim", href: "/claims/track-a-claim" },
      { label: "What to do on site", href: "/claims/what-to-do-on-site" },
    ],
  },
  {
    heading: "About",
    links: [
      { label: "Team", href: "/about/team" },
      { label: "Our promise", href: "/about/our-promise" },
      { label: "How we are paid", href: "/about/how-we-are-paid" },
      { label: "Memberships", href: "/about/memberships" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Insights", href: "/insights" },
      { label: "Client login", href: "/clients" },
      { label: "Rewards", href: "/rewards" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative pt-24 md:pt-32 pb-10 border-t border-white/8">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14">
        {/* Top row: brand + nav */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 pb-16 md:pb-20 border-b border-white/8">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/crs-logo-dark.svg"
                alt="CRS Insurance Brokers"
                className="h-9 w-auto"
                width={172}
                height={40}
              />
            </div>

            <p className="text-[14px] leading-relaxed text-m-bone/55 max-w-sm mb-8">
              Specialist commercial insurance for high-risk trades. A trading name
              of CIB Group UK Ltd, regulated by the Financial Conduct Authority.
            </p>

            <div className="flex items-start gap-3 text-[12px] font-mono uppercase tracking-[0.18em] text-m-bone/55">
              <PinIcon className="w-3.5 h-3.5 mt-0.5 text-m-bone/45" strokeWidth={1.25} />
              <span className="leading-snug">
                Unit 2 Oakberry Road
                <br />
                Lutterworth · LE17 4PP
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["NFDC", "DSA", "BIBA", "FCA"].map((b) => (
                <span
                  key={b}
                  className="rounded-full px-3 py-1.5 bg-white/[0.04] ring-1 ring-white/10 text-[10px] font-mono uppercase tracking-[0.22em] text-m-bone/65"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {cols.map((col) => (
              <div key={col.heading}>
                <h4 className="text-[10px] font-mono uppercase tracking-[0.22em] text-m-bone/40 mb-5">
                  {col.heading}
                </h4>
                <ul className="flex flex-col gap-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        className="text-[14px] text-m-bone/75 hover:text-m-coral transition-colors duration-500"
                        style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Massive wordmark */}
        <div className="py-12 md:py-16 overflow-hidden">
          <p
            className="font-display leading-[0.85] tracking-[-0.04em] text-m-cream/95 select-none"
            style={{ fontSize: "clamp(5.5rem, 22vw, 22rem)" }}
            aria-hidden
          >
            <span>CRS</span>
            <span className="text-m-coral">.</span>
          </p>
        </div>

        {/* FCA disclosure */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-10 border-t border-white/8 text-[11px] leading-relaxed text-m-bone/45">
          <p className="md:col-span-8 font-mono">
            CRS Insurance Brokers is a trading name of CIB Group UK Ltd, registered
            in England &amp; Wales (company no. <span className="text-m-bone/65">13360654</span>).
            Authorised and regulated by the Financial Conduct Authority,{" "}
            <span className="text-m-bone/65">FRN 960073</span>. Registered office:
            Unit 2 Oakberry Road, Lutterworth, LE17 4PP. Calls may be recorded for
            training and quality.
          </p>
          <div className="md:col-span-4 flex flex-col md:items-end gap-2 text-[10px] font-mono uppercase tracking-[0.2em]">
            <span>© 2026 CIB Group UK Ltd</span>
            <div className="flex gap-3">
              <a href="/privacy" className="hover:text-m-bone transition-colors duration-300">
                Privacy
              </a>
              <span className="text-m-bone/25">·</span>
              <a href="/terms" className="hover:text-m-bone transition-colors duration-300">
                Terms
              </a>
              <span className="text-m-bone/25">·</span>
              <a href="/cookies" className="hover:text-m-bone transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
