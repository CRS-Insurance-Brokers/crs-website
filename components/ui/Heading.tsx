import type { ReactNode } from "react";

type HeadingSize = "xl" | "lg" | "md";
type HeadingLevel = 1 | 2 | 3 | 4;

type HeadingProps = {
  size?: HeadingSize;
  as?: `h${HeadingLevel}`;
  children: ReactNode;
  className?: string;
};

const sizeClasses: Record<HeadingSize, string> = {
  xl: "text-[34px] leading-[1.05]",
  lg: "text-[26px] leading-[1.1]",
  md: "text-[20px] leading-[1.2]",
};

export function Heading({
  size = "lg",
  as: Tag = "h1",
  children,
  className = "",
}: HeadingProps) {
  return (
    <Tag
      className={[
        "font-display font-normal text-ink tracking-[-0.02em] m-0",
        sizeClasses[size],
        className,
      ].join(" ").trim()}
    >
      {children}
    </Tag>
  );
}
