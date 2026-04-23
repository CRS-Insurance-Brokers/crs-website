import {
  AlertTriangle,
  Gavel,
  ShieldAlert,
  Users,
  type LucideIcon,
} from "lucide-react";
import { HANDLER } from "@/lib/decision-tree";
import type { FlowOutcome } from "./shared";

export type PLClaimant =
  | "member-of-public"
  | "another-business"
  | "unknown"
  | "solicitor-letter";

export type PLAnswers = {
  readonly claimant?: PLClaimant;
  readonly injuryAlleged?: boolean;
  readonly askedToAdmit?: boolean;
};

export type PLOutcomeKey =
  | "pl-solicitor"
  | "pl-injury"
  | "pl-admission-risk"
  | "pl-standard";

export const PL_OUTCOMES: Readonly<Record<PLOutcomeKey, FlowOutcome>> = {
  "pl-solicitor": {
    verdict: "Solicitor's letter — forward immediately, don't respond",
    severity: "danger",
    summary:
      "A letter of claim from a solicitor starts a legal clock under the pre-action protocol. Your insurer's claims team must handle the response. Anything you write direct can weaken the defence.",
    deadline: "Forward today",
    actions: [
      {
        label: "Do not respond",
        detail:
          "Not even an acknowledgement. Responses are the insurer's role under the Civil Procedure Rules; your reply can inadvertently admit fact or liability.",
      },
      {
        label: "Forward the letter to Sarah",
        detail: `Email Claims@crs-ins.co.uk or call ${HANDLER.phone}. Include all attachments, the envelope if there's a post-mark that matters, and any context.`,
      },
      {
        label: "Preserve everything",
        detail:
          "Site diary, RAMS, method statement, training records, sub-contractor checks. Anything the defence solicitor may need.",
      },
      {
        label: "Flag any witnesses",
        detail:
          "Statements taken while memories are fresh are worth more than those taken six months in. Note names and contact details.",
      },
    ],
  },

  "pl-injury": {
    verdict: "Alleged third-party injury — notify now",
    severity: "danger",
    summary:
      "An injury allegation against your business, whether or not it's been formalised yet, should be notified immediately. Early notification protects your cover and your defence.",
    deadline: "Today",
    actions: [
      {
        label: "Do not admit liability",
        detail:
          "Don't apologise beyond checking welfare. Don't speculate on cause. Don't discuss insurance details. All of these affect the insurer's ability to defend.",
      },
      {
        label: "Capture their details",
        detail:
          "Name, address, contact number, description of what they say happened and when. Witnesses if any.",
      },
      {
        label: "Photographs and site condition",
        detail:
          "How the site looked at the time. Signage, barriers, lighting, PPE in use. Anything that'll inform the liability picture.",
      },
      {
        label: "Notify Sarah immediately",
        detail: `${HANDLER.phone}. Public Liability notifications are treated as urgent; expect a callback within the hour.`,
      },
    ],
  },

  "pl-admission-risk": {
    verdict: "You're being asked to admit liability — step back",
    severity: "danger",
    summary:
      "Any pressure to accept fault before the insurer has seen the facts is a red flag. The admission itself can void cover in some policy wordings.",
    deadline: "Before your next conversation with them",
    actions: [
      {
        label: "Tell them you need to refer it to your insurer",
        detail:
          "Polite and firm. You are not stonewalling — you are following the process your cover requires.",
      },
      {
        label: "Keep a record of the conversation",
        detail:
          "Who said what, when, in front of whom. Text / email is easier to preserve than phone.",
      },
      {
        label: "Call Sarah",
        detail: `${HANDLER.phone}. She'll call you back within an hour. She can help you script the next conversation with the third party.`,
      },
    ],
  },

  "pl-standard": {
    verdict: "Third-party complaint noted — notify promptly",
    severity: "amber",
    summary:
      "Damage only, no injury, no legal correspondence. Still notify so the file is open if anything escalates.",
    deadline: "Within 48 hours",
    actions: [
      {
        label: "Capture the facts",
        detail:
          "What happened, where, to whom, when. Their account and yours. Photos of any damage to their property.",
      },
      {
        label: "Don't admit liability",
        detail:
          "Even for property damage. A lot of 'it was probably our fault' conversations turn out to be not-our-fault once investigated.",
      },
      {
        label: "Notify Sarah",
        detail: `${HANDLER.phone}. She'll open the file and advise on next steps.`,
      },
    ],
  },
};

export const PL_OUTCOME_ICONS: Readonly<Record<PLOutcomeKey, LucideIcon>> = {
  "pl-solicitor": Gavel,
  "pl-injury": AlertTriangle,
  "pl-admission-risk": ShieldAlert,
  "pl-standard": Users,
};

export function derivePlOutcome(answers: PLAnswers): PLOutcomeKey {
  if (answers.claimant === "solicitor-letter") return "pl-solicitor";
  if (answers.askedToAdmit === true) return "pl-admission-risk";
  if (answers.injuryAlleged === true) return "pl-injury";
  return "pl-standard";
}
