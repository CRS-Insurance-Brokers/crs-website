import type { Metadata, Viewport } from "next";
import { Source_Sans_3 } from "next/font/google";
import { OrganizationSchema } from "./components/SchemaJsonLd";
import { ConsentBanner } from "./components/ConsentBanner";
import "./marketing.css";

/*
 * Source Sans 3 is the face CRS already uses on its documents and reports, so
 * the site and the paperwork now read as one brand. It replaces Inter, which
 * is the default typeface on a very large number of generated sites.
 *
 * Geist Mono has gone with it. Nothing on a broker's website needs a code
 * typeface, and it was only ever carrying the letterspaced uppercase labels.
 * The --font-inter variable name is kept so the CSS does not have to change
 * in fifty places.
 */
const sourceSans = Source_Sans_3({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crs-ins.co.uk"),
  title: {
    default:
      "CRS Insurance Brokers — Specialist cover for high-risk trades · Lutterworth, UK",
    template: "%s · CRS Insurance Brokers",
  },
  description:
    "NFDC and DSA-affiliated specialist commercial insurance broker for demolition, construction, contractors and engineers, and manufacturing. Lutterworth, Leicestershire, UK. FCA FRN 960073.",
  keywords: [
    "demolition insurance",
    "asbestos removal insurance",
    "hot works insurance",
    "work at height insurance",
    "construction insurance broker",
    "contractors all risks",
    "scaffolding insurance",
    "high-risk insurance broker UK",
    "specialist commercial insurance Midlands",
    "Lutterworth insurance broker",
    "NFDC insurance broker",
    "DSA insurance broker",
    "JCT non-negligence cover",
    "Environmental Impairment Liability UK",
  ],
  authors: [{ name: "CRS Insurance Brokers" }],
  creator: "CIB Group UK Ltd",
  publisher: "CRS Insurance Brokers",
  openGraph: {
    title: "CRS Insurance Brokers — Specialist cover for high-risk trades",
    description:
      "Demolition, construction, contractors and manufacturing. We place the risks a standard panel declines, and answer the phone when it matters. Lutterworth, UK.",
    siteName: "CRS Insurance Brokers",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CRS Insurance Brokers — Specialist cover for high-risk trades",
    description:
      "Demolition, construction, contractors and manufacturing. We place the risks a standard panel declines.",
  },
  verification: {
    google: "488VqjQ5-wQmJ0sRioLm5K_SmKnmf9HH5gqx5NGo4bk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#14102E",
  width: "device-width",
  initialScale: 1,
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      data-marketing
      className={`${sourceSans.variable} min-h-[100dvh]`}
    >
      {/* Without JS the IntersectionObserver never fires and .reveal content
          stays at opacity 0 — force everything visible. */}
      <noscript>
        <style>{`[data-marketing] .reveal { opacity: 1 !important; transform: none !important; }`}</style>
      </noscript>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-white focus:text-m-ink focus:px-5 focus:py-3 focus:text-[13px] focus:font-semibold focus:tracking-[0.08em]"
      >
        Skip to content
      </a>
      <OrganizationSchema />
      <div className="marketing-grain" aria-hidden />
      {children}
      <ConsentBanner />
    </div>
  );
}
