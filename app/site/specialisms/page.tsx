import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Marginalia } from "../components/Marginalia";
import { Footer } from "../components/Footer";
import { SpecialismsBento } from "../components/SpecialismsBento";

export const metadata: Metadata = {
  title: "Specialisms · CRS Insurance Brokers",
  description:
    "Specialist commercial insurance for demolition, construction, engineering, and manufacturing. Cover placed by CRS Insurance Brokers.",
  alternates: { canonical: "/site/specialisms" },
};

export default function SpecialismsPage() {
  return (
    <main className="relative">
      <Nav />
      <Marginalia />

      <SpecialismsBento />

      <Footer />
    </main>
  );
}
