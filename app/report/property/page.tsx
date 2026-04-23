import { FooterMark } from "@/components/FooterMark";
import { PropertyFlow } from "@/components/flow/property/PropertyFlow";
import { TopBar } from "@/components/TopBar";

export const metadata = {
  title: "Property / site damage · CRS Insurance",
};

export default function PropertyPage() {
  return (
    <>
      <TopBar />
      <main className="mx-auto max-w-[560px] px-5 pt-8 pb-[100px]">
        <PropertyFlow />
      </main>
      <FooterMark />
    </>
  );
}
