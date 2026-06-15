import type { Metadata } from "next";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { TrustStrip } from "./components/TrustStrip";
import { NavTiles } from "./components/NavTiles";
import { CharityStrip } from "./components/CharityStrip";
import { FooterCTA } from "./components/FooterCTA";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function MarketingHomePage() {
  return (
    <main id="main-content" className="relative">
      <Nav />
      <Hero />
      <TrustStrip />
      <NavTiles />
      <CharityStrip />
      <FooterCTA />
      <Footer />
    </main>
  );
}
