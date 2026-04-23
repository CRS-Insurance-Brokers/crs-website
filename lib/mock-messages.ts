/**
 * Demo message thread between the client and Sarah. Reads like a
 * working conversation so stakeholders can see what continuity looks
 * like. Real messaging requires a backend store + push — out of scope
 * for v0.2, but the UX is already convincing with mocked data.
 */

export type MessageSender = "handler" | "me";

export type Message = {
  readonly id: string;
  readonly sender: MessageSender;
  readonly atISO: string;
  readonly body: string;
};

export const INITIAL_MESSAGES: readonly Message[] = [
  {
    id: "m-001",
    sender: "handler",
    atISO: "2026-04-03T09:12:00Z",
    body: "Morning Tom — certificate for Wilson Homes is out. I've sent a copy to your site office and to their PM. Anything else you need for the start on Monday?",
  },
  {
    id: "m-002",
    sender: "me",
    atISO: "2026-04-03T11:47:00Z",
    body: "Thanks Sarah. Can you email me the EL cert again too? Their principal contractor wants it on file before we're on site.",
  },
  {
    id: "m-003",
    sender: "handler",
    atISO: "2026-04-03T12:03:00Z",
    body: "On its way. Attached the asbestos licensing refs as well — they tend to ask.",
  },
  {
    id: "m-004",
    sender: "handler",
    atISO: "2026-04-12T16:22:00Z",
    body: "Had the call from you about the trip outside the Leicester site — claim opened, reference CRS-2026-0491. Loss adjuster instructed, site visit on Thursday 18 Apr. I'll update you once they've been out.",
  },
  {
    id: "m-005",
    sender: "me",
    atISO: "2026-04-12T16:30:00Z",
    body: "Cheers. Will Kevin need to be there?",
  },
  {
    id: "m-006",
    sender: "handler",
    atISO: "2026-04-12T16:34:00Z",
    body: "Not essential — adjuster's happy to go around the scaffold — but if Kevin can spare 10 minutes it'll speed things up. His lived-in knowledge is always the quickest route.",
  },
  {
    id: "m-007",
    sender: "handler",
    atISO: "2026-04-18T18:05:00Z",
    body: "Site visit done. Adjuster's initial view: the claimant was outside your hoarding line. I'll send the written report when it's in but you should be fine. Enjoy the weekend.",
  },
];
