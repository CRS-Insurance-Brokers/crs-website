"use client";

import { Phone, Send } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Body } from "@/components/ui/Body";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { HANDLER } from "@/lib/decision-tree";
import { INITIAL_MESSAGES, type Message } from "@/lib/mock-messages";
import { BottomSheet } from "./BottomSheet";

type HandlerPanelProps = {
  open: boolean;
  onClose: () => void;
};

export function HandlerPanel({ open, onClose }: HandlerPanelProps) {
  const dialPhone = HANDLER.phone.replace(/\s/g, "");
  const [messages, setMessages] = useState<Message[]>([...INITIAL_MESSAGES]);
  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const ordered = useMemo(
    () =>
      [...messages].sort(
        (a, b) => Date.parse(a.atISO) - Date.parse(b.atISO),
      ),
    [messages],
  );

  // Keep the latest message visible whenever the sheet opens or a
  // message is added.
  useEffect(() => {
    if (!open) return;
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [open, messages.length]);

  const send = () => {
    const body = draft.trim();
    if (!body) return;
    setSending(true);
    setMessages((prev) => [
      ...prev,
      {
        id: `m-local-${Date.now()}`,
        sender: "me",
        atISO: new Date().toISOString(),
        body,
      },
    ]);
    setDraft("");
    // Demo-only "Sarah is typing" affordance; a real backend would push
    // the handler's reply via websocket or SSE.
    window.setTimeout(() => setSending(false), 300);
  };

  return (
    <BottomSheet open={open} onClose={onClose} label="Your CRS team">
      <div className="mb-4 pr-10">
        <SectionLabel>Your CRS team</SectionLabel>
        <div className="h-1" />
        <Heading size="md" as="h2">
          {HANDLER.name}
        </Heading>
        <Body muted size="sm" className="mb-0">
          {HANDLER.role} &middot; {HANDLER.responseSLA}
        </Body>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-4">
        <a
          href={`tel:${dialPhone}`}
          className="no-underline block"
          aria-label={`Call ${HANDLER.name} on ${HANDLER.phone}`}
        >
          <Button
            leadingIcon={Phone}
            showTrailingArrow={false}
            tabIndex={-1}
            size="small"
          >
            Call
          </Button>
        </a>
        <a
          href={`mailto:${HANDLER.email}`}
          className="no-underline block"
          aria-label={`Email ${HANDLER.name}`}
        >
          <Button
            variant="secondary"
            showTrailingArrow={false}
            tabIndex={-1}
            size="small"
          >
            Email
          </Button>
        </a>
      </div>

      <SectionLabel>Messages</SectionLabel>
      <div
        ref={scrollerRef}
        className="mt-2 max-h-[40vh] overflow-y-auto bg-surface-soft border border-line rounded-soft p-3 flex flex-col gap-2"
        aria-label="Message history"
      >
        {ordered.map((message, index) => {
          const prev = ordered[index - 1];
          const showDate =
            !prev || !sameDay(prev.atISO, message.atISO);
          return (
            <div key={message.id}>
              {showDate ? (
                <div className="text-center font-sans text-[11px] text-ink-muted uppercase tracking-[0.1em] my-2">
                  {formatDateSeparator(message.atISO)}
                </div>
              ) : null}
              <MessageBubble message={message} />
            </div>
          );
        })}
      </div>

      <form
        className="mt-3 flex gap-2"
        onSubmit={(event) => {
          event.preventDefault();
          send();
        }}
      >
        <label htmlFor="message-body" className="sr-only">
          New message to {HANDLER.name}
        </label>
        <input
          id="message-body"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder={`Message ${HANDLER.name.split(" ")[0]}…`}
          className="flex-1 bg-surface border border-line rounded-soft px-3 py-[10px] font-sans text-[14.5px] text-ink min-h-[44px] focus:outline-none focus:ring-2 focus:ring-primary"
          autoComplete="off"
        />
        <button
          type="submit"
          disabled={sending || !draft.trim()}
          aria-label="Send message"
          className="bg-primary text-primary-ink border-0 rounded-sharp min-w-[48px] min-h-[44px] px-4 flex items-center justify-center disabled:opacity-50"
        >
          <Send size={16} strokeWidth={1.8} aria-hidden />
        </button>
      </form>
      <Body muted size="sm" className="mt-2 mb-0">
        Concept demo — thread is on this device only. Real messages would sync
        to Sarah&rsquo;s desktop inbox.
      </Body>
    </BottomSheet>
  );
}

function MessageBubble({ message }: { message: Message }) {
  const isMe = message.sender === "me";
  return (
    <div
      className={[
        "flex",
        isMe ? "justify-end" : "justify-start",
      ].join(" ")}
    >
      <div
        className={[
          "max-w-[85%] rounded-soft px-3 py-2 font-sans text-[14px] leading-[1.4]",
          isMe
            ? "bg-primary text-primary-ink"
            : "bg-surface border border-line text-ink",
        ].join(" ")}
      >
        <div>{message.body}</div>
        <div
          className={[
            "font-sans text-[10.5px] mt-1",
            isMe ? "opacity-75" : "text-ink-muted",
          ].join(" ")}
        >
          {formatTime(message.atISO)}
        </div>
      </div>
    </div>
  );
}

function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

function formatDateSeparator(iso: string): string {
  const d = new Date(iso);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  if (sameDay(iso, today.toISOString())) return "Today";
  if (sameDay(iso, yesterday.toISOString())) return "Yesterday";
  return d.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

function sameDay(a: string, b: string): boolean {
  const da = new Date(a);
  const db = new Date(b);
  return (
    da.getFullYear() === db.getFullYear() &&
    da.getMonth() === db.getMonth() &&
    da.getDate() === db.getDate()
  );
}
