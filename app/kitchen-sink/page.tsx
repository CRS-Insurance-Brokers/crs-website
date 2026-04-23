import {
  AlertTriangle,
  CheckCircle2,
  HardHat,
  Phone,
} from "lucide-react";
import { notFound } from "next/navigation";
import { ActionStep } from "@/components/ui/ActionStep";
import { Body } from "@/components/ui/Body";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { OutcomeBanner } from "@/components/ui/OutcomeBanner";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FooterMark } from "@/components/FooterMark";
import { KitchenSinkCheckboxes } from "./KitchenSinkCheckboxes";

export const metadata = {
  title: "Kitchen sink · RIDDOR Helper",
  robots: { index: false, follow: false },
};

export default function KitchenSinkPage() {
  if (process.env.NEXT_PUBLIC_SHOW_KITCHEN_SINK !== "1") {
    notFound();
  }

  return (
    <main className="mx-auto max-w-[560px] px-5 py-10 pb-32">
      <div className="mb-8">
        <SectionLabel>Component library</SectionLabel>
        <Heading size="xl">Kitchen sink</Heading>
        <Body muted>
          Every primitive, every variant, every severity. Gated by
          <code className="font-mono text-[14px]"> NEXT_PUBLIC_SHOW_KITCHEN_SINK=1</code>.
        </Body>
      </div>

      <section className="mb-10">
        <SectionLabel>Typography</SectionLabel>
        <div className="flex flex-col gap-2 mt-2">
          <Heading size="xl">Display XL &mdash; 34 / 1.05 Fraunces</Heading>
          <Heading size="lg">Display LG &mdash; 26 / 1.1 Fraunces</Heading>
          <Heading size="md">Display MD &mdash; 20 / 1.2 Fraunces</Heading>
          <Body>
            Body MD &mdash; 15.5px IBM Plex Sans. The quick brown fox jumps
            over the lazy dog.
          </Body>
          <Body size="sm">Body SM &mdash; 14px. Finer print, metadata.</Body>
          <Body muted>Body MD muted &mdash; for supporting context.</Body>
        </div>
      </section>

      <section className="mb-10">
        <SectionLabel>Buttons</SectionLabel>
        <div className="flex flex-col gap-2 mt-2">
          <Button>Primary &mdash; call to action</Button>
          <Button variant="secondary">Secondary &mdash; alternative</Button>
          <Button variant="danger">Danger &mdash; destructive</Button>
          <Button variant="ghost">Ghost &mdash; subtle</Button>
          <Button leadingIcon={HardHat}>Primary with leading icon</Button>
          <Button variant="secondary" leadingIcon={Phone}>
            Secondary with leading icon
          </Button>
          <div>
            <Button size="small" fullWidth={false}>
              Small, auto width
            </Button>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <SectionLabel>Cards</SectionLabel>
        <Card>
          <Body>Default card on <code>--surface</code>.</Body>
        </Card>
        <Card soft>
          <Body>Soft card on <code>--surface-soft</code>.</Body>
        </Card>
      </section>

      <section className="mb-10">
        <SectionLabel>Checkboxes</SectionLabel>
        <KitchenSinkCheckboxes />
      </section>

      <section className="mb-10">
        <SectionLabel>Outcome banners</SectionLabel>
        <OutcomeBanner
          severity="danger"
          icon={AlertTriangle}
          verdict="Reportable to HSE &mdash; notify immediately"
          summary="Danger severity banner &mdash; fatal or major incidents."
          deadline="Immediate + written report within 10 days"
        />
        <OutcomeBanner
          severity="amber"
          icon={Phone}
          verdict="Let&rsquo;s get your CRS handler on the phone"
          summary="Amber severity &mdash; grey areas best handled by a human."
          deadline="Call as soon as you can"
        />
        <OutcomeBanner
          severity="success"
          icon={CheckCircle2}
          verdict="Not RIDDOR-reportable on the information provided"
          summary="Success severity &mdash; no HSE notification required."
          deadline="No HSE deadline applies"
        />
      </section>

      <section className="mb-10">
        <SectionLabel>Action steps</SectionLabel>
        <ActionStep
          number={1}
          label="Notify HSE immediately"
          detail="By telephone: 0345 300 9923 (Incident Contact Centre)."
        />
        <ActionStep
          number={2}
          label="Preserve the scene"
          detail="So far as is reasonably practicable, do not disturb the scene."
        />
        <ActionStep
          number={3}
          label="Notify your CRS claims handler"
          detail="Sarah will coordinate with your insurer."
        />
      </section>

      <FooterMark />
    </main>
  );
}
