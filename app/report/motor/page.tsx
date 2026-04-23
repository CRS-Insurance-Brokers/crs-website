import { FooterMark } from "@/components/FooterMark";
import { MotorFlow } from "@/components/flow/motor/MotorFlow";
import { TopBar } from "@/components/TopBar";

export const metadata = {
  title: "Motor report · CRS Insurance",
};

export default function MotorPage() {
  return (
    <>
      <TopBar />
      <main className="mx-auto max-w-[560px] px-5 pt-8 pb-[100px]">
        <MotorFlow />
      </main>
      <FooterMark />
    </>
  );
}
