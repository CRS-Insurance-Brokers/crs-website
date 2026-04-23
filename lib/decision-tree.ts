/**
 * Canonical RIDDOR decision tree, outcome data, and supporting lists.
 *
 * This module is the single source of truth for what the app decides and what
 * it tells the user. Ported from RiddorHelper.jsx without content changes —
 * verdicts, summaries, deadlines and action lists are preserved verbatim.
 *
 * No React, no icons, no DOM — pure data and a pure derivation function so
 * tests can run in a Node environment.
 */

// ---- Types ---------------------------------------------------------------

export const OUTCOME_KEYS = [
  "report-immediate",
  "report-10days",
  "report-15days",
  "report-disease",
  "record-only",
  "not-reportable",
  "call-handler",
] as const;

export type OutcomeKey = (typeof OUTCOME_KEYS)[number];

export type OutcomeSeverity = "danger" | "amber" | "success";

export type OutcomeAction = {
  readonly label: string;
  readonly detail: string;
};

export type Outcome = {
  readonly verdict: string;
  readonly severity: OutcomeSeverity;
  readonly summary: string;
  readonly actions: readonly OutcomeAction[];
  readonly deadline: string;
};

export type IncidentType = "injury" | "dangerous" | "disease" | "unsure";
export type InjuryWho = "worker" | "public";
export type WorkerSeverity =
  | "fatal"
  | "specified"
  | "over-7-day"
  | "3-to-7-day"
  | "minor";
export type PublicSeverity = "fatal" | "hospital" | "no-hospital";

export type Answers = {
  incidentType: IncidentType;
  who?: InjuryWho;
  workerSeverity?: WorkerSeverity;
  publicSeverity?: PublicSeverity;
  dangerousChecks?: readonly number[];
  diseaseChecks?: readonly number[];
};

// ---- Named handler (preserved verbatim from artifact) --------------------

export const HANDLER = {
  name: "Sarah Whitlock",
  role: "Senior Claims Handler",
  initials: "SW",
  phone: "01455 244630",
  email: "Claims@crs-ins.co.uk",
  responseSLA: "typically within 30 minutes, Mon–Fri",
} as const;

// ---- Outcomes ------------------------------------------------------------
// Copy is load-bearing. Do not edit without brief approval.

export const OUTCOMES: Readonly<Record<OutcomeKey, Outcome>> = {
  "report-immediate": {
    verdict: "Reportable to HSE — notify immediately",
    severity: "danger",
    summary:
      "This is a fatal or major incident. You must notify the HSE by the quickest practicable means, and submit the written report within 10 days.",
    actions: [
      {
        label: "Notify HSE immediately",
        detail:
          "By telephone: 0345 300 9923 (Incident Contact Centre, Mon–Fri 08:30–17:00) or online at hse.gov.uk/riddor",
      },
      {
        label: "Preserve the scene",
        detail:
          "So far as is reasonably practicable, do not disturb the scene until the HSE advise you otherwise. Take photographs before anything moves.",
      },
      {
        label: "Complete form F2508",
        detail: "Submit to HSE within 10 days of the incident.",
      },
      {
        label: "Notify your CRS claims handler",
        detail:
          "Sarah will contact your insurer, brief the loss adjuster, and guide you through the investigation.",
      },
    ],
    deadline: "Immediate notification + written report within 10 days",
  },

  "report-10days": {
    verdict: "Reportable to HSE — within 10 days",
    severity: "danger",
    summary:
      "This meets the RIDDOR threshold. A written report must be submitted to the HSE within 10 days of the incident.",
    actions: [
      {
        label: "Submit form F2508 to the HSE",
        detail:
          "Online at hse.gov.uk/riddor. You will need: name and contact details of the injured person, nature of injury, date/time/location, brief description of what happened.",
      },
      {
        label: "Record in your accident book",
        detail:
          "Even when reporting to the HSE, your internal accident record is still required.",
      },
      {
        label: "Preserve evidence",
        detail:
          "Keep the scene, tools, plant, and PPE involved where possible. Take photographs.",
      },
      {
        label: "Notify your CRS claims handler",
        detail:
          "Sarah will open the claim with your insurer and coordinate any investigation.",
      },
    ],
    deadline: "Within 10 days of the incident",
  },

  "report-15days": {
    verdict: "Reportable to HSE — over-seven-day injury",
    severity: "danger",
    summary:
      "The injured worker has been unable to carry out their normal duties for more than seven consecutive days (not counting the day of the accident). This must be reported to the HSE within 15 days.",
    actions: [
      {
        label: "Submit form F2508 to the HSE",
        detail:
          "Online at hse.gov.uk/riddor. The 15-day clock runs from the date of the accident, not from the seventh day.",
      },
      {
        label: "Record in your accident book",
        detail:
          "Keep the internal record alongside the HSE notification.",
      },
      {
        label: "Keep medical documentation",
        detail:
          "Doctor's notes, fit notes, and any treatment records will support both the RIDDOR report and the insurance claim.",
      },
      {
        label: "Notify your CRS claims handler",
        detail:
          "Sarah will start the Employers' Liability notification with your insurer.",
      },
    ],
    deadline: "Within 15 days of the incident",
  },

  "report-disease": {
    verdict: "Reportable to HSE — occupational disease",
    severity: "danger",
    summary:
      "This is a reportable occupational disease. You must submit a written report to the HSE within 10 days of receiving the written diagnosis.",
    actions: [
      {
        label: "Confirm the diagnosis in writing",
        detail:
          "A RIDDOR disease report requires a written diagnosis from a doctor. Keep a copy on file.",
      },
      {
        label: "Submit form F2508A to the HSE",
        detail:
          "The specific form for occupational diseases. Available at hse.gov.uk/riddor",
      },
      {
        label: "Review exposure records",
        detail:
          "Health surveillance records, COSHH assessments, and PPE provision will be relevant to both HSE and insurer enquiries.",
      },
      {
        label: "Notify your CRS claims handler",
        detail:
          "Occupational disease claims can be long-tail. Early insurer notification protects cover.",
      },
    ],
    deadline: "Within 10 days of the written diagnosis",
  },

  "record-only": {
    verdict: "Not RIDDOR-reportable — but you must record it",
    severity: "amber",
    summary:
      "This does not meet the RIDDOR threshold. However, under the Social Security (Claims and Payments) Regulations you must record the incident in your accident book.",
    actions: [
      {
        label: "Record in your accident book (BI 510)",
        detail:
          "Date, time, location, injured person, description, first aid given, signature.",
      },
      {
        label: "Investigate the cause",
        detail:
          "Even minor incidents can indicate a pattern. Consider whether a method statement, risk assessment, or toolbox talk needs updating.",
      },
      {
        label: "Consider notifying your CRS handler",
        detail:
          "If the injured person might later claim, or if the incident suggests a wider exposure, notify Sarah now. Early notification protects your position.",
      },
    ],
    deadline: "Record at the time; review monthly",
  },

  "not-reportable": {
    verdict: "Not RIDDOR-reportable on the information provided",
    severity: "success",
    summary:
      "Based on what you have told me, this incident does not appear to meet the RIDDOR reporting threshold.",
    actions: [
      {
        label: "Record it anyway",
        detail:
          "Good practice is to log every incident, however minor. Patterns only emerge from consistent recording.",
      },
      {
        label: "Review your controls",
        detail:
          "Near-misses are your best leading indicator. A 30-second review now can prevent a reportable incident next month.",
      },
      {
        label: "Call your CRS handler if anything is uncertain",
        detail:
          "Sarah would rather you call and be told you were right than miss a reportable incident.",
      },
    ],
    deadline: "No HSE deadline applies",
  },

  "call-handler": {
    verdict: "Let's get your CRS handler on the phone",
    severity: "amber",
    summary:
      "This sits in a grey area. The right answer depends on specifics I cannot see from here — scene preservation, witness status, third-party involvement, scheme-specific obligations. Sarah will walk through it with you in a few minutes.",
    actions: [
      {
        label: `Call Sarah on ${HANDLER.phone}`,
        detail: `Mon–Fri 08:30–17:30. ${HANDLER.responseSLA}.`,
      },
      {
        label: "For fleet / road incidents out of hours",
        detail: "The 24/7 motor line is available on the same number.",
      },
      {
        label: "Preserve evidence meanwhile",
        detail:
          "Photographs, witness details, any CCTV sources — capture now while memory and access are fresh.",
      },
    ],
    deadline: "Call as soon as you can",
  },
};

// ---- Dangerous occurrences -----------------------------------------------
// Most relevant to construction / demolition (per artifact).
// `≥` and `>` are kept as literal Unicode — no HTML entities.

export const DANGEROUS_ITEMS: readonly string[] = [
  "Collapse or overturning of load-bearing parts of cranes, hoists, forklifts, or lifting equipment",
  "Failure of a pressure system releasing its contents",
  "Plant or equipment coming into contact with overhead power lines",
  "Electrical short-circuit or overload causing fire or explosion",
  "Unintentional explosion, ignition, or fire of substances (≥10 minutes out of control)",
  "Accidental release of a biological agent likely to cause severe illness",
  "Collapse or partial collapse of scaffolding more than 5m high",
  "Collapse of a building or structure (or part) under construction, alteration, or demolition involving more than 5 tonnes of material",
  "Unintended collision of a train with another train or vehicle",
  "Dropped load from a crane or lifting device (where no injury occurred)",
  "Explosion or fire causing work stoppage or suspension >24 hours",
];

// ---- Reportable occupational diseases ------------------------------------

export const DISEASE_ITEMS: readonly string[] = [
  "Carpal tunnel syndrome (where work involves regular use of hand-held vibrating tools)",
  "Severe cramp of the hand or forearm (repetitive movements)",
  "Occupational dermatitis",
  "Hand-arm vibration syndrome (HAVS)",
  "Occupational asthma",
  "Tendonitis or tenosynovitis of the hand or forearm (repetitive movements)",
  "Any occupational cancer",
  "Any disease attributed to an occupational exposure to a biological agent",
];

// ---- Derivation ----------------------------------------------------------

/**
 * Map fully-populated answers to a single outcome key.
 *
 * Throws if the answers object is not complete for its incidentType branch.
 * Callers must only invoke this once the relevant step has recorded a value.
 */
export function deriveOutcome(answers: Answers): OutcomeKey {
  switch (answers.incidentType) {
    case "unsure":
      return "call-handler";

    case "injury": {
      if (answers.who === "worker") {
        switch (answers.workerSeverity) {
          case "fatal":
            return "report-immediate";
          case "specified":
            return "report-10days";
          case "over-7-day":
            return "report-15days";
          case "3-to-7-day":
            return "record-only";
          case "minor":
            return "not-reportable";
          case undefined:
            throw new Error("Worker injury: workerSeverity is required");
        }
      }
      if (answers.who === "public") {
        switch (answers.publicSeverity) {
          case "fatal":
            return "report-immediate";
          case "hospital":
            return "report-10days";
          case "no-hospital":
            return "not-reportable";
          case undefined:
            throw new Error("Public injury: publicSeverity is required");
        }
      }
      throw new Error("Injury: 'who' is required");
    }

    case "dangerous": {
      if (!answers.dangerousChecks) {
        throw new Error("Dangerous occurrence: dangerousChecks is required");
      }
      return answers.dangerousChecks.length > 0
        ? "report-10days"
        : "not-reportable";
    }

    case "disease": {
      if (!answers.diseaseChecks) {
        throw new Error("Disease: diseaseChecks is required");
      }
      return answers.diseaseChecks.length > 0
        ? "report-disease"
        : "not-reportable";
    }
  }
}
