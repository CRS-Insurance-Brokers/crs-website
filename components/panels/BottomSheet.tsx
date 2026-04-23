"use client";

import { X } from "lucide-react";
import { useEffect, useRef, type ReactNode } from "react";

type BottomSheetProps = {
  open: boolean;
  onClose: () => void;
  label: string;
  children: ReactNode;
};

/**
 * Modal bottom-sheet used for both the handler and log panels. Consolidates
 * keyboard behaviour (Escape to close, focus entry, background scroll lock)
 * so the two panels can't drift apart.
 */
export function BottomSheet({
  open,
  onClose,
  label,
  children,
}: BottomSheetProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    closeButtonRef.current?.focus();
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-[rgba(26,31,26,0.4)]"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={label}
        onClick={(event) => event.stopPropagation()}
        className="relative w-full max-w-[520px] bg-bg rounded-t-[3px] border-t-[3px] border-primary p-6 max-h-[85vh] overflow-y-auto"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 bg-transparent border-0 cursor-pointer text-ink-muted hover:text-ink min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          <X size={20} aria-hidden />
        </button>
        {children}
      </div>
    </div>
  );
}
