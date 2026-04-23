import { FooterMark } from "@/components/FooterMark";
import { PublicLiabilityFlow } from "@/components/flow/public-liability/PublicLiabilityFlow";
import { TopBar } from "@/components/TopBar";

export const metadata = {
  title: "Public liability report · CRS Insurance",
};

export default function PublicLiabilityPage() {
  return (
    <>
      <TopBar />
      <main className="mx-auto max-w-[560px] px-5 pt-8 pb-[100px]">
        <PublicLiabilityFlow />
      </main>
      <FooterMark />
    </>
  );
}
