import { Reveal } from "./Reveal";

const accreditations = [
  { name: "NFDC", logo: "/logos/nfdc.png",  long: "National Federation of Demolition Contractors", href: "https://demolition-nfdc.com/service-providers/type/financial-services/#filters" },
  { name: "DSA",  logo: "/logos/dsa.webp",   long: "Drilling & Sawing Association",                 href: "https://www.drillandsaw.org.uk/member/crs/" },
  { name: "BIBA", logo: "/logos/biba.svg",  long: "British Insurance Brokers' Association",         href: "https://www.biba.org.uk/find-insurance/broker-directory/cib-group-uk-ltd/" },
  { name: "FCA",  logo: "/logos/fca.png",   long: "Financial Conduct Authority — FRN 960073",       href: "https://register.fca.org.uk/s/search?predefined=ALL&q=960073" },
];

export function TrustStrip() {
  const repeated = [...accreditations, ...accreditations, ...accreditations];

  return (
    <section className="relative py-14 md:py-20 border-y border-white/8">
      <Reveal>
        <p className="text-center text-[10px] font-mono uppercase tracking-[0.28em] text-m-bone/40 mb-8">
          <span className="text-m-bone/65">Accredited, regulated,</span> and on the trade bodies that matter
        </p>
      </Reveal>

      <div className="relative overflow-hidden">
        <div
          className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
          style={{ background: "linear-gradient(90deg, var(--color-ink), transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
          style={{ background: "linear-gradient(270deg, var(--color-ink), transparent)" }}
        />

        <div className="flex drift drift-pausable gap-12 md:gap-20 whitespace-nowrap will-change-transform">
          {repeated.map((a, i) => (
            <a
              key={`${a.name}-${i}`}
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 shrink-0 group"
              // Copies beyond the first set exist only for the seamless loop —
              // hide them from keyboard and screen readers.
              aria-hidden={i >= accreditations.length || undefined}
              tabIndex={i >= accreditations.length ? -1 : undefined}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={a.logo}
                alt={a.name}
                className="h-9 md:h-11 w-auto opacity-50 group-hover:opacity-90 transition-opacity duration-300"
                style={{ filter: "brightness(0) invert(1)" }}
                loading="lazy"
                decoding="async"
              />
              <span className="hidden md:inline text-[10px] font-mono uppercase tracking-[0.22em] text-m-bone/35 max-w-[140px] whitespace-normal leading-snug">
                {a.long}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-m-bone/20 shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
