import type { SVGProps } from "react";

const baseProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ArrowUpRight({ className = "", strokeWidth = 1, ...rest }: SVGProps<SVGSVGElement> & { strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 14 14" {...baseProps} strokeWidth={strokeWidth} className={className} {...rest}>
      <path d="M3.75 10.25 L10.25 3.75" />
      <path d="M5 3.75 L10.25 3.75 L10.25 9" />
    </svg>
  );
}

export function ArrowRight({ className = "", strokeWidth = 1 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 14 14" {...baseProps} strokeWidth={strokeWidth} className={className}>
      <path d="M2.5 7 L11.5 7" />
      <path d="M8 3.5 L11.5 7 L8 10.5" />
    </svg>
  );
}

export function PhoneIcon({ className = "", strokeWidth = 1 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 14 14" {...baseProps} strokeWidth={strokeWidth} className={className}>
      <path d="M11.5 9.7v1.4a1 1 0 0 1-1.1 1 9.6 9.6 0 0 1-4.2-1.5 9.4 9.4 0 0 1-2.9-2.9A9.6 9.6 0 0 1 1.8 3.5a1 1 0 0 1 1-1.1h1.4a1 1 0 0 1 1 .9c.06.5.18 1 .35 1.4a1 1 0 0 1-.23 1.05L4.7 6.4a7.7 7.7 0 0 0 2.9 2.9l.6-.6a1 1 0 0 1 1.05-.23c.45.17.9.29 1.4.34a1 1 0 0 1 .9 1z" />
    </svg>
  );
}

export function SiteIcon({ className = "", strokeWidth = 1 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 24 24" {...baseProps} strokeWidth={strokeWidth} className={className}>
      <path d="M3 21h18" />
      <path d="M5 21V8l5-3 5 3v13" />
      <path d="M15 21V11h4l1 3v7" />
      <path d="M8 12h2" />
      <path d="M8 16h2" />
    </svg>
  );
}

export function HardHatIcon({ className = "", strokeWidth = 1 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 24 24" {...baseProps} strokeWidth={strokeWidth} className={className}>
      <path d="M3 18h18" />
      <path d="M4 18a8 8 0 0 1 16 0" />
      <path d="M10 10v-3a2 2 0 0 1 4 0v3" />
      <path d="M3 18v1.5a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5V18" />
    </svg>
  );
}

export function ToolsIcon({ className = "", strokeWidth = 1 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 24 24" {...baseProps} strokeWidth={strokeWidth} className={className}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6a2 2 0 1 0 2.83 2.83l6-6a4 4 0 0 0 5.4-5.4l-2.42 2.42-2.83-2.83z" />
    </svg>
  );
}

export function FactoryIcon({ className = "", strokeWidth = 1 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 24 24" {...baseProps} strokeWidth={strokeWidth} className={className}>
      <path d="M3 21h18" />
      <path d="M3 21V11l5 3V11l5 3V11l5 3v7" />
      <path d="M7 8V4h2" />
    </svg>
  );
}

export function ShieldIcon({ className = "", strokeWidth = 1 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 24 24" {...baseProps} strokeWidth={strokeWidth} className={className}>
      <path d="M12 3 4 6v6c0 4.5 3.2 8.4 8 9.5 4.8-1.1 8-5 8-9.5V6l-8-3z" />
    </svg>
  );
}

export function HandshakeIcon({ className = "", strokeWidth = 1 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 24 24" {...baseProps} strokeWidth={strokeWidth} className={className}>
      <path d="M11 17l-2-2-2 2 2 2 2-2z" />
      <path d="M14 14l-2-2-3 3 2 2 3-3z" />
      <path d="M17 11l-2-2-3 3 2 2 3-3z" />
      <path d="M3 11h2l3-3 5 5" />
      <path d="M21 13h-2l-3 3-5-5" />
    </svg>
  );
}

export function CompassIcon({ className = "", strokeWidth = 1 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 24 24" {...baseProps} strokeWidth={strokeWidth} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M14.5 9.5 13 13l-3.5 1.5L11 11l3.5-1.5z" />
    </svg>
  );
}

export function LinkedInIcon({ className = "", strokeWidth = 1 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 24 24" {...baseProps} strokeWidth={strokeWidth} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 10v7" />
      <path d="M8 7v.01" />
      <path d="M12 17v-4a2 2 0 0 1 4 0v4" />
      <path d="M12 10v7" />
    </svg>
  );
}

export function MailIcon({ className = "", strokeWidth = 1 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 24 24" {...baseProps} strokeWidth={strokeWidth} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

export function PinIcon({ className = "", strokeWidth = 1 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 24 24" {...baseProps} strokeWidth={strokeWidth} className={className}>
      <path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function ClockIcon({ className = "", strokeWidth = 1 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 24 24" {...baseProps} strokeWidth={strokeWidth} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function AlertIcon({ className = "", strokeWidth = 1 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 24 24" {...baseProps} strokeWidth={strokeWidth} className={className}>
      <path d="M12 3l10 17H2L12 3z" />
      <path d="M12 10v4" />
      <circle cx="12" cy="17" r="0.4" fill="currentColor" />
    </svg>
  );
}
