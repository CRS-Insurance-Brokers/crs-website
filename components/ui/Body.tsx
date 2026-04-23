import type { ReactNode } from "react";

type BodyProps = {
  muted?: boolean;
  size?: "md" | "sm";
  children: ReactNode;
  className?: string;
};

const sizeClasses: Record<NonNullable<BodyProps["size"]>, string> = {
  md: "text-[15.5px]",
  sm: "text-[14px]",
};

export function Body({
  muted,
  size = "md",
  children,
  className = "",
}: BodyProps) {
  const color = muted ? "text-ink-muted" : "text-ink";
  return (
    <p
      className={[
        "font-sans leading-[1.55] tracking-[-0.005em] m-0 mb-3",
        sizeClasses[size],
        color,
        className,
      ].join(" ").trim()}
    >
      {children}
    </p>
  );
}
