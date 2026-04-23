import type { ReactNode } from "react";

type ActionStepProps = {
  number: number;
  label: string;
  detail: ReactNode;
};

export function ActionStep({ number, label, detail }: ActionStepProps) {
  return (
    <div className="p-[14px_16px] mb-2 bg-surface border border-line rounded-soft">
      <div className="flex gap-3 items-start">
        <div
          aria-hidden
          className="w-[22px] h-[22px] shrink-0 mt-[1px] rounded-full bg-primary text-primary-ink flex items-center justify-center font-sans text-[12px] font-medium"
        >
          {number}
        </div>
        <div>
          <div className="font-sans text-[15px] font-medium text-ink mb-1 tracking-[-0.005em]">
            {label}
          </div>
          <div className="font-sans text-[14px] leading-[1.5] text-ink-muted">
            {detail}
          </div>
        </div>
      </div>
    </div>
  );
}
