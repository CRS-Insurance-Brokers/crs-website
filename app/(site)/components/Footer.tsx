import { PinIcon } from "./icons";

const cols = [
  {
    heading: "Specialisms",
    links: [
      { label: "Overview",                  href: "/specialisms" },
      { label: "High Risk",                 href: "/specialisms/high-risk" },
      { label: "Construction",              href: "/specialisms/construction" },
      { label: "Engineering",               href: "/specialisms/engineering" },
      { label: "Manufacturing & Wholesale", href: "/specialisms/manufacturing-wholesale" },
    ],
  },
  {
    heading: "Claims",
    links: [
      { label: "What to do first", href: "/claims/what-to-do-on-site" },
      { label: "Report a claim",   href: "/#contact" },
    ],
  },
  {
    heading: "About",
    links: [
      { label: "About CRS",                  href: "/about" },
      { label: "Management Team",            href: "/about/team" },
      { label: "How we are paid",            href: "/about/how-we-are-paid" },
      { label: "Memberships & Associations", href: "/about/memberships" },
      { label: "Lighthouse Charity",         href: "/about/charity" },
      { label: "Rewards",                   href: "/rewards" },
    ],
  },
  {
    heading: "Additional",
    links: [
      { label: "Beyond the basics", href: "/beyond-the-basics" },
      { label: "News",              href: "/news" },
      { label: "Contact",           href: "/#contact" },
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
                className="h-14 w-auto"
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

            <a
              href="/about/charity"
              className="mt-6 mb-8 inline-flex items-center gap-2 text-[14px] leading-relaxed text-m-bone/55 hover:text-m-bone/80 transition-colors duration-300"
            >
              Proud supporters of the Lighthouse Construction Industry Charity
            </a>

            <div className="flex flex-wrap items-center gap-5">
              {/* Each logo sits in a fixed 72×28 box — normalises visual weight across different aspect ratios */}
              {[
                { src: "/logos/nfdc.png",  alt: "NFDC member",    href: "https://demolition-nfdc.com/service-providers/type/financial-services/#filters" },
                { src: "/logos/dsa.webp",   alt: "DSA member",     href: "https://www.drillandsaw.org.uk/member/crs/" },
                { src: "/logos/fca.png",   alt: "FCA regulated",  href: "https://register.fca.org.uk/s/search?predefined=ALL&q=960073" },
              ].map((b) => (
                <a
                  key={b.alt}
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center opacity-45 hover:opacity-80 transition-opacity duration-300"
                  style={{ width: 72, height: 28 }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={b.src}
                    alt={b.alt}
                    style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", filter: "brightness(0) invert(1)" }}
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              ))}
              <a
                key="BIBA"
                href="https://www.biba.org.uk/find-insurance/broker-directory/cib-group-uk-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center opacity-35 hover:opacity-75 transition-opacity duration-300"
                style={{ width: 72, height: 28 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logos/biba.svg"
                  alt="BIBA member"
                  style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", filter: "brightness(0) invert(1)" }}
                  loading="lazy"
                  decoding="async"
                />
              </a>
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
                    <li key={l.label}>
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

        {/* FCA disclosure */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-10 border-t border-white/8 text-[11px] leading-relaxed text-m-bone/45">
          <p className="md:col-span-8 font-mono">
            CRS Insurance Brokers is a trading name of CIB Group UK Ltd, registered
            in England &amp; Wales (company no. <span className="text-m-bone/65">13360654</span>).
            Authorised and regulated by the Financial Conduct Authority,{" "}
            <span className="text-m-bone/65">FRN 960073</span>. Registered office:
            The Copper Room, Deva City Office Park, Trinity Way, Salford, M3 7BG.
            All calls are recorded for training and regulatory purposes.
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
