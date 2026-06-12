import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { SpecialismsBento } from "../components/SpecialismsBento";

export const metadata: Metadata = {
  title: "Specialisms",
  description:
    "Specialist commercial insurance for demolition, construction, engineering, and manufacturing. Cover placed by CRS Insurance Brokers.",
  alternates: { canonical: "/site/specialisms" },
};

export default function SpecialismsPage() {
  return (
    <main id="main-content" className="relative">
      <Nav />

      <SpecialismsBento />

      <Footer />
    </main>
  );
}
