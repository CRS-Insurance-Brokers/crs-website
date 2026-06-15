import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Insights } from "../components/Insights";

export const metadata: Metadata = {
  title: "Beyond the Basics",
  description:
    "Supplementary cover products for contractors and specialist trades. Cyber, management liability, and trade credit — the cover most brokers leave out.",
  alternates: { canonical: "/beyond-the-basics" },
};

export default function ResourcesPage() {
  return (
    <main id="main-content" className="relative">
      <Nav />

      <Insights />

      <Footer />
    </main>
  );
}
