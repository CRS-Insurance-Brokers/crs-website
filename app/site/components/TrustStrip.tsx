import { Reveal } from "./Reveal";

const accreditations = [
  { name: "NFDC", long: "National Federation of Demolition Contractors" },
  { name: "DSA", long: "Demolition Services Association" },
  { name: "BIBA", long: "British Insurance Brokers' Association" },
  { name: "FCA", long: "Financial Conduct Authority — FRN 960073" },
];

export function TrustStrip() {
  const repeated = [...accreditations, ...accreditations, ...accreditations];

  return (
    <section className="relative py-14 md:py-20 border-y border-white/8">
      <Reveal>
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 mb-10">
          <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-m-bone/40">
            <span className="text-m-bone/65">Accredited, regulated,</span> and on the trade
            bodies that matter
          </p>
        </div>
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

        <div className="flex drift gap-12 md:gap-20 whitespace-nowrap will-change-transform">
          {repeated.map((a, i) => (
            <div key={`${a.name}-${i}`} className="flex items-center gap-4 shrink-0">
              <span className="font-display text-[44px] md:text-[60px] leading-none tracking-[-0.02em] text-m-cream/90">
                {a.name}
              </span>
              <span className="hidden md:inline text-[10px] font-mono uppercase tracking-[0.22em] text-m-bone/35 max-w-[180px] whitespace-normal leading-snug">
                {a.long}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-m-bone/20 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
