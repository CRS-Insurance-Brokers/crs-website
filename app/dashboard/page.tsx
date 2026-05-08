import { Dashboard } from "@/components/dashboard/Dashboard";
import { FooterMark } from "@/components/FooterMark";
import { TopBar } from "@/components/TopBar";

export default function Home() {
  return (
    <>
      <TopBar />
      <Dashboard />
      <FooterMark />
    </>
  );
}
