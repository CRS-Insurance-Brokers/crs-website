import { Certificate } from "@/components/cover/Certificate";
import { FooterMark } from "@/components/FooterMark";
import { TopBar } from "@/components/TopBar";

export const metadata = {
  title: "Certificate of insurance · CRS",
};

export default function CertificatePage() {
  return (
    <>
      <div className="print:hidden">
        <TopBar />
      </div>
      <Certificate />
      <div className="print:hidden">
        <FooterMark />
      </div>
    </>
  );
}
