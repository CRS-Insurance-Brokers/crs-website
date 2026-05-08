/**
 * Structured data (JSON-LD) for the marketing site.
 *
 * Why each block exists (per CRS Website Audit Report v1):
 *   - Organization + LocalBusiness + InsuranceAgency: entity disambiguation,
 *     since "CRS Insurance" collides with at least four other UK/US entities
 *     (audit §2.1, §3.4).
 *   - sameAs: anchors the entity to FCA register + Companies House + LinkedIn,
 *     which is the canonical pattern LLMs use for entity resolution.
 *   - hasCredential: surfaces the trade-body memberships (NFDC, DSA, BIBA)
 *     that confer topical authority (audit §2.4).
 *
 * Render this once at the root of the marketing layout. Per-page schema
 * (FAQPage, Article, Service) is added inline on the relevant page.
 */
import { brand } from "../data/content";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "InsuranceAgency", "LocalBusiness"],
    name: "CRS Insurance Brokers",
    legalName: brand.data.legalName,
    alternateName: "CRS Insurance",
    description:
      "Specialist commercial insurance broker for demolition, construction, contractors and engineers, manufacturing and high-risk trades. Lutterworth, UK.",
    url: "https://crs-ins.co.uk",
    logo: "https://crs-ins.co.uk/crs-logo-light.svg",
    image: "https://crs-ins.co.uk/crs-logo-light.svg",
    telephone: `+44 ${brand.data.phone.replace(/^0/, "").replace(/\s/g, "")}`,
    email: brand.data.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: brand.data.addressLines[0],
      addressLocality: brand.data.addressLines[1],
      postalCode: brand.data.addressLines[2],
      addressCountry: "GB",
      addressRegion: "Leicestershire",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.4536,
      longitude: -1.2024,
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    identifier: [
      {
        "@type": "PropertyValue",
        name: "FCA Firm Reference Number",
        value: brand.data.fcaFrn,
      },
      {
        "@type": "PropertyValue",
        name: "Companies House Number",
        value: brand.data.companyNumber,
      },
    ],
    sameAs: [
      `https://register.fca.org.uk/s/firm?id=${brand.data.fcaFrn}`,
      `https://find-and-update.company-information.service.gov.uk/company/${brand.data.companyNumber}`,
      "https://www.linkedin.com/company/crs-insurance-brokers",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Trade body membership",
        name: "National Federation of Demolition Contractors (NFDC)",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Trade body membership",
        name: "Demolition Services Association (DSA)",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Trade body membership",
        name: "British Insurance Brokers' Association (BIBA)",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Regulatory authorisation",
        name: "Authorised and regulated by the Financial Conduct Authority",
      },
    ],
    knowsAbout: [
      "Demolition insurance",
      "Asbestos removal insurance",
      "Hot works insurance",
      "Work at height insurance",
      "Environmental impairment liability",
      "Construction insurance",
      "Contractors All Risks (CAR)",
      "Public Liability",
      "Employers' Liability",
      "Professional Indemnity",
      "JCT non-negligence cover",
      "RIDDOR-related claims",
    ],
    serviceArea: {
      "@type": "Country",
      name: "United Kingdom",
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Per-page FAQPage schema. Pass the same FAQ items that render on screen.
 */
export function FAQPageSchema({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
