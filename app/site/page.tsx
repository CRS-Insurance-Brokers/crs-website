import { Nav } from "./components/Nav";
import { Marginalia } from "./components/Marginalia";
import { Hero } from "./components/Hero";
import { TrustStrip } from "./components/TrustStrip";
import { SpecialismsBento } from "./components/SpecialismsBento";
import { WhyCRS } from "./components/WhyCRS";
import { Claims } from "./components/Claims";
import { Team } from "./components/Team";
import { Insights } from "./components/Insights";
import { LinkedInFeed } from "./components/LinkedInFeed";
import { Testimonial } from "./components/Testimonial";
import { FooterCTA } from "./components/FooterCTA";
import { Footer } from "./components/Footer";

export default function MarketingHomePage() {
  return (
    <main className="relative">
      <Nav />
      <Marginalia />
      <Hero />
      <TrustStrip />
      <SpecialismsBento />
      <WhyCRS />
      <Claims />
      <Team />
      <Insights />
      <LinkedInFeed />
      <Testimonial />
      <FooterCTA />
      <Footer />
    </main>
  );
}
