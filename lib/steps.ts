import { ROUTES } from "./routes";

export const STEP_IDS = [
  "welcome",
  "incident-type",
  "injury-who",
  "injury-worker-severity",
  "injury-public-severity",
  "dangerous-check",
  "disease-check",
  "outcome",
] as const;

export type StepId = (typeof STEP_IDS)[number];

export function isStepId(value: string | null | undefined): value is StepId {
  return typeof value === "string" && (STEP_IDS as readonly string[]).includes(value);
}

export const STEP_TITLES: Readonly<Record<StepId, string>> = {
  welcome: "Report a RIDDOR incident · CRS",
  "incident-type": "What kind of incident · CRS",
  "injury-who": "Who was injured · CRS",
  "injury-worker-severity": "How serious · CRS",
  "injury-public-severity": "Taken to hospital · CRS",
  "dangerous-check": "Dangerous occurrences · CRS",
  "disease-check": "Occupational diseases · CRS",
  outcome: "Outcome · CRS",
};

export const HIDE_BACK_ON: ReadonlySet<StepId> = new Set(["welcome", "outcome"]);

/** Canonical URL for a given RIDDOR step. */
export function stepHref(step: StepId): string {
  return step === "welcome"
    ? ROUTES.reportRiddor
    : `${ROUTES.reportRiddor}?step=${step}`;
}
