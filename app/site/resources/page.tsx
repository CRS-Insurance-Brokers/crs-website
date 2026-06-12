import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Marginalia } from "../components/Marginalia";
import { Footer } from "../components/Footer";
import { Insights } from "../components/Insights";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Supplementary cover products for contractors and specialist trades. Cyber, management liability, and trade credit — the cover most brokers leave out.",
  alternates: { canonical: "/site/resources" },
};

export default function ResourcesPage() {
  return (
    <main className="relative">
      <Nav />
      <Marginalia />

      <Insights />

      <Footer />
    </main>
  );
}
