import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { NewsStrip } from "../components/NewsStrip";

export const metadata: Metadata = {
  title: "News",
  description:
    "The latest news from CRS Insurance Brokers. Team updates, sponsorships, and company news.",
  alternates: { canonical: "/site/news" },
};

export default function NewsPage() {
  return (
    <main id="main-content" className="relative">
      <Nav />

      <NewsStrip />

      <Footer />
    </main>
  );
}
