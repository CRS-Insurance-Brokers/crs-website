import type { Metadata } from "next";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { Reveal } from "../../components/Reveal";
import { ArrowUpRight } from "../../components/icons";

export const metadata: Metadata = {
  title: "Memberships & Associations · NFDC, DSA, BIBA & FCA",
  description:
    "CRS Insurance Brokers is affiliated with the NFDC, DSA, and BIBA, and is authorised and regulated by the Financial Conduct Authority. FCA FRN 960073.",
  alternates: { canonical: "/about/memberships" },
};

const memberships = [
  {
    abbr: "NFDC",
    logo: "/logos/nfdc.png",
    name: "National Federation of Demolition Contractors",
    body: "The NFDC is the principal trade body for the demolition industry in the UK. Our membership reflects our focus on demolition as a core specialism and our relationships with contractors across the sector.",
    href: "https://demolition-nfdc.com/service-providers/type/financial-services/#filters",
  },
  {
    abbr: "DSA",
    logo: "/logos/dsa.webp",
    name: "Drilling & Sawing Association",
    body: "The DSA represents specialist drilling and sawing contractors. Our membership supports our work placing cover for this sector and gives our clients access to an affiliated broker who understands the trade.",
    href: "https://www.drillandsaw.org.uk/member/crs/",
  },
  {
    abbr: "BIBA",
    logo: "/logos/biba.svg",
    name: "British Insurance Brokers' Association",
    body: "BIBA is the UK's leading general insurance intermediary trade association. Membership means we operate to a professional code of conduct and our clients have access to BIBA's dispute resolution service.",
    href: "https://www.biba.org.uk/find-insurance/broker-directory/cib-group-uk-ltd/",
  },
  {
    abbr: "FCA",
    logo: "/logos/fca.png",
    name: "Financial Conduct Authority",
    body: "CRS Insurance Brokers is a trading name of CIB Group UK Ltd, authorised and regulated by the Financial Conduct Authority. FRN 960073. You can verify our registration on the FCA register.",
    href: "https://register.fca.org.uk/s/search?predefined=ALL&q=960073",
  },
];

export default function MembershipsPage() {
  return (
    <main id="main-content" className="relative">
      <Nav />

      {/* SECTION 1 — Hero */}
      <section className="relative pt-[160px] md:pt-[180px] pb-16 md:pb-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
          <Reveal delay={120}>
            <h1
              className="font-display font-bold leading-[1.15] tracking-[-0.015em] text-white max-w-3xl"
              style={{ fontSize: "clamp(2.25rem, 4.8vw, 4rem)" }}
            >
              Memberships
              <br />
              <span className="italic text-m-bone-2/85">&amp; associations.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* SECTION 2 — Cards */}
      <section
        className="relative py-20 md:py-28"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {memberships.map((m, i) => (
              <Reveal key={m.abbr} delay={i * 80}>
                <a
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between h-full p-8 bg-m-ink-2 hover:bg-m-ink-3 transition-colors duration-300"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div>
                    <div className="flex items-start justify-between mb-8">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={m.logo}
                        alt={m.abbr}
                        className="h-10 w-auto"
                        style={{ filter: "brightness(0) invert(1)", opacity: 0.75 }}
                        loading="lazy"
                        decoding="async"
                      />
                      <span
                        className="w-10 h-10 bg-white/[0.04] text-m-bone flex items-center justify-center shrink-0 group-hover:bg-m-coral group-hover:text-m-ink transition-all duration-300"
                        style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.25} />
                      </span>
                    </div>
                    <p className="text-[10.5px] font-mono uppercase tracking-[0.24em] text-m-bone/50 mb-5">
                      {m.name}
                    </p>
                    <p className="text-[14px] leading-[1.7] text-m-bone/65">
                      {m.body}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
