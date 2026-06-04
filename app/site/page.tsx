import { Nav } from "./components/Nav";
import { Marginalia } from "./components/Marginalia";
import { Hero } from "./components/Hero";
import { TrustStrip } from "./components/TrustStrip";
import { NavTiles } from "./components/NavTiles";
import { CharityStrip } from "./components/CharityStrip";
import { FooterCTA } from "./components/FooterCTA";
import { Footer } from "./components/Footer";

export default function MarketingHomePage() {
  return (
    <main className="relative">
      <Nav />
      <Marginalia />
      <Hero />
      <TrustStrip />
      <NavTiles />
      <CharityStrip />
      <FooterCTA />
      <Footer />
    </main>
  );
}
