"use client";

import { Camera, X } from "lucide-react";
import { useCallback, useRef, useState } from "react";

export type PickedPhoto = {
  id: string;
  filename: string;
  mimeType: string;
  dataUrl: string;
  dataBase64: string;
  size: number;
};

type PhotoPickerProps = {
  readonly photos: readonly PickedPhoto[];
  readonly onChange: (next: readonly PickedPhoto[]) => void;
  readonly max?: number;
};

const DEFAULT_MAX = 3;

/**
 * Camera-first photo picker. On mobile Safari / Chrome, `capture="environment"`
 * triggers the rear camera directly — the user can still pick from library if
 * they prefer. Photos are stored as base64 data URLs in client state for an
 * instant thumbnail preview and easy submission to the server action.
 *
 * No client-side resize: we cap at 3 photos and rely on the server action's
 * payload limit + the email 25MB total-attachment cap. If photos blow past
 * either threshold, the server degrades gracefully per the brief.
 */
export function PhotoPicker({
  photos,
  onChange,
  max = DEFAULT_MAX,
}: PhotoPickerProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const atLimit = photos.length >= max;

  const onFiles = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (!files || files.length === 0) return;
      setLoading(true);
      try {
        const slots = Math.max(0, max - photos.length);
        const batch = Array.from(files).slice(0, slots);
        const picked = await Promise.all(batch.map(toPicked));
        onChange([...photos, ...picked]);
      } finally {
        setLoading(false);
        // Reset input so picking the same file twice still fires change.
        if (inputRef.current) inputRef.current.value = "";
      }
    },
    [photos, onChange, max],
  );

  const remove = (id: string) => {
    onChange(photos.filter((p) => p.id !== id));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <div className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted">
          Photos (optional)
        </div>
        <div className="font-sans text-[12px] text-ink-muted">
          {photos.length}/{max}
        </div>
      </div>

      {photos.length > 0 ? (
        <ul className="grid grid-cols-3 gap-2 mb-3 list-none p-0">
          {photos.map((photo) => (
            <li key={photo.id} className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.dataUrl}
                alt={photo.filename}
                className="w-full aspect-square object-cover rounded-sharp border border-line"
              />
              <button
                type="button"
                onClick={() => remove(photo.id)}
                aria-label={`Remove ${photo.filename}`}
                className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-ink text-primary-ink border border-line flex items-center justify-center shadow-sm"
              >
                <X size={12} strokeWidth={2} aria-hidden />
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      <label
        className={[
          "flex items-center gap-2 px-[14px] py-[10px] rounded-sharp border font-sans text-[14px] font-medium min-h-[44px] justify-center",
          atLimit || loading
            ? "border-line text-ink-muted bg-surface-soft cursor-not-allowed"
            : "border-line text-ink bg-surface hover:bg-surface-soft cursor-pointer",
        ].join(" ")}
      >
        <Camera size={16} strokeWidth={1.6} aria-hidden />
        {loading
          ? "Reading…"
          : atLimit
            ? `Up to ${max} photos`
            : photos.length === 0
              ? "Add photos from the camera"
              : "Add another photo"}
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          capture="environment"
          multiple
          onChange={onFiles}
          disabled={atLimit || loading}
          className="sr-only"
        />
      </label>
    </div>
  );
}

async function toPicked(file: File): Promise<PickedPhoto> {
  const dataUrl = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
  const commaIdx = dataUrl.indexOf(",");
  const dataBase64 = commaIdx >= 0 ? dataUrl.slice(commaIdx + 1) : dataUrl;
  return {
    id:
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `p-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    filename: file.name || "photo.jpg",
    mimeType: file.type || "image/jpeg",
    dataUrl,
    dataBase64,
    size: file.size,
  };
}
