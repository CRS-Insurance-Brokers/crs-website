import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import { InstallPrompt } from "@/components/InstallPrompt";
import { RegisterPWA } from "@/components/RegisterPWA";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RIDDOR Helper · CRS Insurance",
  description:
    "Work out what to do after a workplace incident. A CRS concept build.",
  applicationName: "CRS RIDDOR Helper",
  manifest: "/manifest.json",
  referrer: "origin-when-cross-origin",
  formatDetection: { telephone: true, email: false, address: false },
  appleWebApp: {
    capable: true,
    title: "RIDDOR",
    statusBarStyle: "default",
  },
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: { url: "/icons/apple-touch-icon.png", sizes: "180x180" },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#F3EEE1",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-GB"
      className={`${fraunces.variable} ${plexSans.variable}`}
    >
      <body>
        {children}
        <RegisterPWA />
        <InstallPrompt />
      </body>
    </html>
  );
}
