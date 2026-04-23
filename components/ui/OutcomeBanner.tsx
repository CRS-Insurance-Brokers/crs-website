import { Clock, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Body } from "./Body";
import { Heading } from "./Heading";
import { SectionLabel } from "./SectionLabel";

export type OutcomeSeverity = "danger" | "amber" | "success";

type OutcomeBannerProps = {
  severity: OutcomeSeverity;
  icon: LucideIcon;
  verdict: string;
  summary: ReactNode;
  deadline: string;
};

const bannerClasses: Record<OutcomeSeverity, string> = {
  danger: "bg-danger-soft border-danger",
  amber: "bg-amber-soft border-accent",
  success: "bg-success-soft border-success",
};

const iconBgClasses: Record<OutcomeSeverity, string> = {
  danger: "bg-danger",
  amber: "bg-accent",
  success: "bg-success",
};

export function OutcomeBanner({
  severity,
  icon: Icon,
  verdict,
  summary,
  deadline,
}: OutcomeBannerProps) {
  return (
    <div
      className={[
        "rounded-soft border p-5 mb-[18px]",
        bannerClasses[severity],
      ].join(" ")}
    >
      <div className="flex gap-[14px] items-start mb-[10px]">
        <div
          className={[
            "w-[38px] h-[38px] rounded-sharp shrink-0 flex items-center justify-center",
            iconBgClasses[severity],
          ].join(" ")}
        >
          <Icon size={20} color="#fff" strokeWidth={1.8} aria-hidden />
        </div>
        <div>
          <SectionLabel>Outcome</SectionLabel>
          <Heading size="md">{verdict}</Heading>
        </div>
      </div>
      <Body>{summary}</Body>
      <div className="inline-flex items-center gap-2 bg-[rgba(255,255,255,0.6)] px-3 py-2 rounded-sharp font-sans text-[13px] font-medium text-ink">
        <Clock size={14} strokeWidth={1.5} aria-hidden />
        <span>{deadline}</span>
      </div>
    </div>
  );
}
