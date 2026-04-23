"use client";

import { Check } from "lucide-react";
import { useId, type ChangeEvent, type ReactNode } from "react";

type CheckboxProps = {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  children: ReactNode;
  name?: string;
  value?: string;
};

export function Checkbox({
  checked,
  onCheckedChange,
  children,
  name,
  value,
}: CheckboxProps) {
  const inputId = useId();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onCheckedChange(event.target.checked);
  };

  return (
    <label
      htmlFor={inputId}
      className={[
        "flex gap-3 items-start cursor-pointer mb-2 p-[14px_16px] rounded-soft border min-h-[48px]",
        checked ? "bg-surface-soft border-primary" : "bg-surface border-line",
      ].join(" ")}
    >
      <input
        id={inputId}
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        className="peer sr-only"
      />
      <span
        aria-hidden
        className={[
          "mt-[1px] w-5 h-5 shrink-0 flex items-center justify-center rounded-sharp border-[1.5px]",
          "peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-primary peer-focus-visible:outline-offset-2",
          checked
            ? "bg-primary border-primary"
            : "bg-transparent border-line",
        ].join(" ")}
      >
        {checked ? (
          <Check size={13} color="var(--primary-ink)" strokeWidth={3} />
        ) : null}
      </span>
      <span className="font-sans text-[14.5px] leading-[1.5] text-ink">
        {children}
      </span>
    </label>
  );
}
