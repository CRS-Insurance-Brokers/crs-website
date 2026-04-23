import { ArrowRight, type LucideIcon } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "danger" | "ghost";
type ButtonSize = "default" | "small";

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  leadingIcon?: LucideIcon;
  showTrailingArrow?: boolean;
  children: ReactNode;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary text-primary-ink border-primary hover:opacity-90",
  secondary: "bg-transparent text-ink border-line hover:bg-surface-soft",
  danger: "bg-danger text-white border-danger hover:opacity-90",
  ghost: "bg-transparent text-ink-muted border-transparent hover:text-ink",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "px-[18px] py-[16px] text-[16px] min-h-[52px]",
  small: "px-[14px] py-[10px] text-[14px] min-h-[44px]",
};

export function Button({
  variant = "primary",
  size = "default",
  fullWidth = true,
  leadingIcon: LeadingIcon,
  showTrailingArrow,
  className = "",
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  const width = fullWidth ? "w-full" : "w-auto";
  const trailingArrow = showTrailingArrow ?? variant === "primary";
  return (
    <button
      type={type}
      className={[
        "inline-flex items-center justify-between gap-3 cursor-pointer",
        "rounded-sharp border font-sans font-medium tracking-[-0.01em]",
        "transition-opacity motion-safe:active:scale-[0.99]",
        sizeClasses[size],
        variantClasses[variant],
        width,
        className,
      ].join(" ").trim()}
      {...rest}
    >
      <span className="flex items-center gap-[10px] text-left">
        {LeadingIcon ? <LeadingIcon size={18} strokeWidth={1.5} aria-hidden /> : null}
        <span>{children}</span>
      </span>
      {trailingArrow ? (
        <ArrowRight size={16} strokeWidth={1.5} aria-hidden className="shrink-0" />
      ) : null}
    </button>
  );
}
