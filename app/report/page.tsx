import { Building2, HardHat, Info, Truck, Users, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { FooterMark } from "@/components/FooterMark";
import { TopBar } from "@/components/TopBar";
import { Body } from "@/components/ui/Body";
import { Heading } from "@/components/ui/Heading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { HANDLER } from "@/lib/decision-tree";
import { ROUTES } from "@/lib/routes";

export const metadata = {
  title: "Report an incident · CRS Insurance",
};

type Choice = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  tone: "primary" | "accent" | "ink";
};

const CHOICES: readonly Choice[] = [
  {
    title: "Someone\u2019s been hurt or taken ill",
    description:
      "Workplace injury, RIDDOR assessment, third-party injury from our work.",
    href: ROUTES.reportRiddor,
    icon: HardHat,
    tone: "primary",
  },
  {
    title: "A vehicle\u2019s been involved",
    description: "Fleet collision, tipper damage, courtesy-vehicle request.",
    href: ROUTES.reportMotor,
    icon: Truck,
    tone: "ink",
  },
  {
    title: "Property or site damage",
    description:
      "Fire, flood, theft, vandalism, escape of water, accidental damage.",
    href: ROUTES.reportProperty,
    icon: Building2,
    tone: "ink",
  },
  {
    title: "Someone\u2019s claiming against us",
    description:
      "Public liability, solicitor\u2019s letter, third-party complaint, professional indemnity.",
    href: ROUTES.reportPublicLiability,
    icon: Users,
    tone: "accent",
  },
];

export default function ReportChooserPage() {
  const firstName = HANDLER.name.split(" ")[0] ?? HANDLER.name;
  return (
    <>
      <TopBar />
      <main className="mx-auto max-w-[560px] px-5 pt-8 pb-[100px]">
        <div className="mb-7">
          <SectionLabel>Report an incident</SectionLabel>
          <Heading size="xl">What&rsquo;s happened?</Heading>
        </div>
        <Body muted>
          Pick the closest match. Each route walks you through a short set of
          questions, then sends the summary to {firstName}.
        </Body>

        <div className="flex flex-col gap-3 mt-6">
          {CHOICES.map((choice) => {
            const Icon = choice.icon;
            return (
              <Link
                key={choice.href}
                href={choice.href}
                className="block bg-surface border border-line rounded-soft p-[18px] hover:bg-surface-soft transition-colors no-underline text-inherit"
              >
                <div className="flex items-start gap-4">
                  <div
                    aria-hidden
                    className={[
                      "w-10 h-10 shrink-0 rounded-sharp flex items-center justify-center",
                      choice.tone === "primary"
                        ? "bg-primary text-primary-ink"
                        : choice.tone === "accent"
                          ? "bg-accent text-white"
                          : "bg-surface-soft border border-line text-ink",
                    ].join(" ")}
                  >
                    <Icon size={18} strokeWidth={1.6} aria-hidden />
                  </div>
                  <div>
                    <div className="font-display text-[19px] text-ink tracking-[-0.01em] mb-1">
                      {choice.title}
                    </div>
                    <div className="font-sans text-[14px] text-ink-muted leading-[1.5]">
                      {choice.description}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-6">
          <div className="flex items-start gap-3 bg-surface-soft border border-line rounded-soft p-4">
            <Info
              size={18}
              strokeWidth={1.5}
              className="text-ink-muted mt-[2px] shrink-0"
              aria-hidden
            />
            <Body muted size="sm" className="mb-0">
              None of these quite right? Tap <strong>Call Sarah</strong> at
              the top of the screen &mdash; she&rsquo;ll take it from a
              conversation.
            </Body>
          </div>
        </div>
      </main>
      <FooterMark />
    </>
  );
}
