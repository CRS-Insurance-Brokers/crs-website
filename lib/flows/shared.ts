/**
 * Shared outcome shape used by every FNOL flow — RIDDOR, Motor, Property,
 * Public Liability. Keeps the Outcome UI component generic so we don't
 * duplicate the banner + numbered-steps layout per flow.
 */

export type FlowSeverity = "danger" | "amber" | "success";

export type FlowAction = {
  readonly label: string;
  readonly detail: string;
};

export type FlowOutcome = {
  readonly verdict: string;
  readonly severity: FlowSeverity;
  readonly summary: string;
  readonly deadline: string;
  readonly actions: readonly FlowAction[];
};

export type FlowLine =
  | "riddor"
  | "motor"
  | "property"
  | "public-liability";

export const LINE_LABEL: Record<FlowLine, string> = {
  riddor: "RIDDOR / workplace injury",
  motor: "Motor / fleet",
  property: "Property / site damage",
  "public-liability": "Public liability / third-party",
};
