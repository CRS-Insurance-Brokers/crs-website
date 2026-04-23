/**
 * Step identifiers for the RIDDOR flow. The URL's ?step= query param takes
 * one of these values. Keeping the set here as a const-array gives us a
 * type-checked whitelist and makes deep-link validation trivial.
 */

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

/**
 * Per-step <title> text. First segment is the step-specific context, second
 * is the app name — screen readers announce the step, then the app.
 */
export const STEP_TITLES: Readonly<Record<StepId, string>> = {
  welcome: "RIDDOR Helper · CRS Insurance",
  "incident-type": "What kind of incident · RIDDOR Helper",
  "injury-who": "Who was injured · RIDDOR Helper",
  "injury-worker-severity": "How serious · RIDDOR Helper",
  "injury-public-severity": "Taken to hospital · RIDDOR Helper",
  "dangerous-check": "Dangerous occurrences · RIDDOR Helper",
  "disease-check": "Occupational diseases · RIDDOR Helper",
  outcome: "Outcome · RIDDOR Helper",
};

/**
 * Steps that should not display the back button.
 * Welcome has nothing to go back to; outcome is a terminus (users reset
 * forward, not go back through the question chain).
 */
export const HIDE_BACK_ON: ReadonlySet<StepId> = new Set(["welcome", "outcome"]);
