import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { OrganizationSchema } from "./components/SchemaJsonLd";
import "./marketing.css";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CRS Insurance Brokers — Specialist cover for high-risk trades",
    description:
      "Demolition, construction, contractors and manufacturing. We place cover others can't, and answer the phone when it matters. Lutterworth, UK.",
    url: "https://crs-ins.co.uk",
    siteName: "CRS Insurance Brokers",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CRS Insurance Brokers — Specialist cover for high-risk trades",
    description:
      "Demolition, construction, contractors and manufacturing. We place cover others can't.",
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
      className={`${inter.variable} ${geistMono.variable} min-h-[100dvh]`}
    >
      <OrganizationSchema />
      <div className="marketing-grain" aria-hidden />
      {children}
    </div>
  );
}
