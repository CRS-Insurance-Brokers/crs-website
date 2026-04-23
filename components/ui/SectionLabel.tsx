import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted mb-2">
      {children}
    </div>
  );
}
