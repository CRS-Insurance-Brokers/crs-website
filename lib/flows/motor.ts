import { AlertTriangle, ShieldAlert, Truck, Wrench, type LucideIcon } from "lucide-react";
import { HANDLER } from "@/lib/decision-tree";
import type { FlowOutcome } from "./shared";

export type MotorDriver = "employee" | "subcontractor" | "other";
export type MotorInjury = "none" | "minor" | "serious";
export type MotorDrivable = "yes" | "no";

export type MotorAnswers = {
  readonly driver?: MotorDriver;
  readonly injury?: MotorInjury;
  readonly drivable?: MotorDrivable;
};

export type MotorOutcomeKey =
  | "motor-serious"
  | "motor-el-triggered"
  | "motor-recovery"
  | "motor-standard";

export const MOTOR_OUTCOMES: Readonly<Record<MotorOutcomeKey, FlowOutcome>> = {
  "motor-serious": {
    verdict: "Serious injury — notify immediately",
    severity: "danger",
    summary:
      "Where anyone has been seriously injured in a motor incident, both the insurer and, depending on circumstances, the HSE need prompt notification. Handle the welfare of the injured person first; paperwork can follow.",
    deadline: "Notify us today; HSE within 10 days if RIDDOR applies",
    actions: [
      {
        label: "Attend to the injured person",
        detail:
          "Emergency services if not already called. Driver and any witnesses should stay at the scene until released.",
      },
      {
        label: "Preserve the vehicle and scene",
        detail:
          "Photographs of the scene, the vehicle, and any other vehicles involved. Note road conditions, weather, witnesses' contact details.",
      },
      {
        label: "Notify Sarah immediately",
        detail: `Call ${HANDLER.phone}. Sarah will open both the motor claim and, if the injured person is a worker under your control, the Employers' Liability notification.`,
      },
      {
        label: "Do not admit liability",
        detail:
          "Exchange details (name, vehicle reg, insurer). Do not apologise beyond checking the injured person is OK. Anything you say can affect the claim.",
      },
    ],
  },

  "motor-el-triggered": {
    verdict: "Employers' Liability is in play",
    severity: "danger",
    summary:
      "A minor injury to your driver (employee or labour-only subcontractor) still triggers your EL cover alongside the motor claim. Reporting both together protects your position.",
    deadline: "Notify today",
    actions: [
      {
        label: "Accident book entry",
        detail:
          "Record who, when, where, what happened. Even if the driver is back at work tomorrow, the entry matters.",
      },
      {
        label: "Photographs",
        detail:
          "Scene, vehicle(s), damage. Take the other driver's details — name, address, vehicle reg, insurer.",
      },
      {
        label: "Notify Sarah",
        detail: `Call ${HANDLER.phone} — she'll open the motor claim and flag the EL notification in the same conversation.`,
      },
    ],
  },

  "motor-recovery": {
    verdict: "Recovery and claim — nobody injured",
    severity: "amber",
    summary:
      "Vehicle not drivable and no injuries. Get recovery moving quickly to minimise hire costs, then let us open the claim.",
    deadline: "Today",
    actions: [
      {
        label: "Make the scene safe",
        detail:
          "If the vehicle is obstructing traffic, contact police (101) for assistance. Warning triangle if carried.",
      },
      {
        label: "Arrange recovery",
        detail:
          "Your policy includes recovery — call Sarah or the 24/7 number on your green card. Don't use random tow firms; they can charge storage fees your policy won't reimburse.",
      },
      {
        label: "Photographs and details",
        detail:
          "Damage, scene, other vehicle, witnesses. Police reference number if they attended.",
      },
      {
        label: "Notify Sarah",
        detail: `Call ${HANDLER.phone}. She'll open the claim and arrange a courtesy vehicle if your policy allows.`,
      },
    ],
  },

  "motor-standard": {
    verdict: "Standard motor claim",
    severity: "amber",
    summary:
      "Damage only, no injuries, vehicle drivable. Nothing urgent, but notify promptly — most motor policies require notification within a set window regardless of who's at fault.",
    deadline: "Within 48 hours",
    actions: [
      {
        label: "Exchange details",
        detail:
          "Name, address, vehicle reg, insurer. Take photos of the other party's licence if they'll allow.",
      },
      {
        label: "Photographs",
        detail:
          "Damage to both vehicles, position on the road, any road markings or signs relevant to fault.",
      },
      {
        label: "Witnesses",
        detail:
          "Get contact details. Memories are sharpest in the first 24 hours.",
      },
      {
        label: "Notify Sarah",
        detail: `Call ${HANDLER.phone} within 48 hours. She'll open the claim and coordinate with the other party's insurer.`,
      },
    ],
  },
};

export const MOTOR_OUTCOME_ICONS: Readonly<
  Record<MotorOutcomeKey, LucideIcon>
> = {
  "motor-serious": AlertTriangle,
  "motor-el-triggered": ShieldAlert,
  "motor-recovery": Wrench,
  "motor-standard": Truck,
};

export function deriveMotorOutcome(answers: MotorAnswers): MotorOutcomeKey {
  if (answers.injury === "serious") return "motor-serious";
  if (answers.injury === "minor" && answers.driver !== "other") {
    return "motor-el-triggered";
  }
  if (answers.drivable === "no") return "motor-recovery";
  return "motor-standard";
}
