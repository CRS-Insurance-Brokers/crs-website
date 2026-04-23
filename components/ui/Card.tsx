import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  soft?: boolean;
  children: ReactNode;
};

export function Card({ soft, className = "", children, ...rest }: CardProps) {
  const bg = soft ? "bg-surface-soft" : "bg-surface";
  return (
    <div
      className={[
        bg,
        "border border-line rounded-soft p-5 mb-[14px]",
        className,
      ].join(" ").trim()}
      {...rest}
    >
      {children}
    </div>
  );
}
