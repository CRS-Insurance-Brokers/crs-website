import type { Viewport } from "next";
import "./globals.css";

/*
 * Bare root layout. Per-route metadata + fonts live in the segment that owns
 * them — see app/site/layout.tsx for the marketing site's typography stack.
 *
 * Why no metadata here: the marketing layout exports its own `metadata` with
 * the proper title template, OG image, canonical, etc. Setting overlapping
 * metadata at the root would just be overwritten one level down.
 */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#14102E",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
