import {
  Building2,
  Droplets,
  Flame,
  ShieldAlert,
  type LucideIcon,
} from "lucide-react";
import { HANDLER } from "@/lib/decision-tree";
import type { FlowOutcome } from "./shared";

export type PropertyCause =
  | "fire"
  | "flood"
  | "storm"
  | "theft"
  | "vandalism"
  | "accidental"
  | "other";

export type PropertySecure = "yes" | "no" | "partial";

export type PropertyAnswers = {
  readonly cause?: PropertyCause;
  readonly secure?: PropertySecure;
  readonly emergencyCalled?: boolean;
};

export type PropertyOutcomeKey =
  | "property-emergency"
  | "property-secure-first"
  | "property-theft"
  | "property-standard";

export const PROPERTY_OUTCOMES: Readonly<
  Record<PropertyOutcomeKey, FlowOutcome>
> = {
  "property-emergency": {
    verdict: "Active emergency — emergency services first, then us",
    severity: "danger",
    summary:
      "A fire, flood or escape of water still in progress. Life-safety takes priority; claim paperwork follows once the scene is stable.",
    deadline: "Right now",
    actions: [
      {
        label: "Dial 999 if you haven't already",
        detail:
          "Fire, flood, or anything threatening structural integrity or life. Everyone off site until the fire service or structural engineer clears it.",
      },
      {
        label: "Don't enter an unsafe site",
        detail:
          "Even if you think it's out. Hot spots can reignite; damaged scaffolding or structure can collapse without warning.",
      },
      {
        label: "Call Sarah as soon as the scene is stable",
        detail: `${HANDLER.phone}. Contractors' All Risks response includes restoration contractors who can be on site within hours.`,
      },
      {
        label: "Start a photographic record",
        detail:
          "From a safe distance. Loss adjusters rely on before / during / after evidence. Keep timestamps intact.",
      },
    ],
  },

  "property-secure-first": {
    verdict: "Secure the site, then open the claim",
    severity: "danger",
    summary:
      "Site isn't yet secure — exposure is growing every hour. Lock it down first, then notify. Insurers expect you to take reasonable steps to limit the loss.",
    deadline: "Today",
    actions: [
      {
        label: "Make the site safe",
        detail:
          "Hoardings, board-up, security guard where needed. The cost of reasonable securing measures is covered under your CAR policy.",
      },
      {
        label: "Stop further damage",
        detail:
          "Cover exposed materials, drain standing water, isolate power if electrical. Keep receipts for any emergency mitigation work.",
      },
      {
        label: "Photographic record",
        detail:
          "Before you start cleaning up. Scene, damage, cause if visible. Time-stamped where possible.",
      },
      {
        label: "Notify Sarah",
        detail: `Call ${HANDLER.phone} once the site is secure. She'll instruct a loss adjuster if the scale warrants it.`,
      },
    ],
  },

  "property-theft": {
    verdict: "Theft or vandalism — crime reference first",
    severity: "amber",
    summary:
      "A crime reference number is required by your policy before the claim progresses. Report now, then notify us.",
    deadline: "Today",
    actions: [
      {
        label: "Report to police",
        detail:
          "101 for non-emergency theft / vandalism. Get the crime reference number — you'll need it on the claim form.",
      },
      {
        label: "List what's missing or damaged",
        detail:
          "Tools, plant, materials. Serial numbers for anything identifiable. Your CAR policy covers plant on site; contract works cover the works themselves.",
      },
      {
        label: "Review site security",
        detail:
          "Fences, lighting, out-of-hours cover. Insurers will ask what reasonable precautions were in place.",
      },
      {
        label: "Notify Sarah",
        detail: `Call ${HANDLER.phone} with the crime reference. She'll open the claim and, where relevant, the EL or PL overlay.`,
      },
    ],
  },

  "property-standard": {
    verdict: "Standard property claim",
    severity: "amber",
    summary:
      "Damage only, site secure, no ongoing emergency. Notify promptly and get a claim number open so repair work can begin.",
    deadline: "Within 48 hours",
    actions: [
      {
        label: "Photographs",
        detail:
          "Damage in context — wide shot plus close-up. Cause if identifiable. Any adjacent property or third-party assets affected.",
      },
      {
        label: "Don't bin anything yet",
        detail:
          "Keep damaged items on site if possible. Loss adjuster may want to inspect before disposal.",
      },
      {
        label: "Quotes for repair",
        detail:
          "One or two quotes from trusted contractors. Sarah can recommend CRS-approved restoration firms if useful.",
      },
      {
        label: "Notify Sarah",
        detail: `Call ${HANDLER.phone} within 48 hours. She'll open the claim and advise whether a loss adjuster is needed.`,
      },
    ],
  },
};

export const PROPERTY_OUTCOME_ICONS: Readonly<
  Record<PropertyOutcomeKey, LucideIcon>
> = {
  "property-emergency": Flame,
  "property-secure-first": ShieldAlert,
  "property-theft": Droplets,
  "property-standard": Building2,
};

export function derivePropertyOutcome(
  answers: PropertyAnswers,
): PropertyOutcomeKey {
  if (
    (answers.cause === "fire" || answers.cause === "flood") &&
    answers.secure !== "yes"
  ) {
    return "property-emergency";
  }
  if (answers.secure === "no") return "property-secure-first";
  if (answers.cause === "theft" || answers.cause === "vandalism") {
    return "property-theft";
  }
  return "property-standard";
}
