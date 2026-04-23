import { FooterMark } from "@/components/FooterMark";
import { CoverOverview } from "@/components/cover/CoverOverview";
import { TopBar } from "@/components/TopBar";

export const metadata = {
  title: "Your cover · CRS Insurance",
};

export default function CoverPage() {
  return (
    <>
      <TopBar />
      <CoverOverview />
      <FooterMark />
    </>
  );
}
