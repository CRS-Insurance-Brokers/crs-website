import type { Metadata } from "next";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { Team } from "../../components/Team";

export const metadata: Metadata = {
  title: "Management Team",
  description:
    "Meet the CRS Insurance Brokers management team. Named handlers, direct lines, specialist knowledge across high-risk trades.",
  alternates: { canonical: "/site/about/team" },
};

export default function TeamPage() {
  return (
    <main id="main-content" className="relative">
      <Nav />

      <Team />

      <Footer />
    </main>
  );
}
