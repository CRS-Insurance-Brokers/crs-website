import { describe, expect, test } from "vitest";
import {
  DANGEROUS_ITEMS,
  DISEASE_ITEMS,
  deriveOutcome,
  HANDLER,
  OUTCOMES,
  OUTCOME_KEYS,
  type Answers,
  type OutcomeKey,
} from "@/lib/decision-tree";

// ---------------------------------------------------------------------------
// Truth table — every terminal path in the decision tree. 13 rows.
// Mirrors PLAN.md §1 so the test is the executable form of the plan.
// ---------------------------------------------------------------------------

type Row = {
  readonly desc: string;
  readonly answers: Answers;
  readonly expected: OutcomeKey;
};

const ROWS: readonly Row[] = [
  {
    desc: "incident-type: not sure → call-handler",
    answers: { incidentType: "unsure" },
    expected: "call-handler",
  },
  {
    desc: "injury-worker → fatal → report-immediate",
    answers: {
      incidentType: "injury",
      who: "worker",
      workerSeverity: "fatal",
    },
    expected: "report-immediate",
  },
  {
    desc: "injury-worker → specified injury → report-10days",
    answers: {
      incidentType: "injury",
      who: "worker",
      workerSeverity: "specified",
    },
    expected: "report-10days",
  },
  {
    desc: "injury-worker → over-7-day → report-15days",
    answers: {
      incidentType: "injury",
      who: "worker",
      workerSeverity: "over-7-day",
    },
    expected: "report-15days",
  },
  {
    desc: "injury-worker → 3-to-7 day → record-only",
    answers: {
      incidentType: "injury",
      who: "worker",
      workerSeverity: "3-to-7-day",
    },
    expected: "record-only",
  },
  {
    desc: "injury-worker → minor → not-reportable",
    answers: {
      incidentType: "injury",
      who: "worker",
      workerSeverity: "minor",
    },
    expected: "not-reportable",
  },
  {
    desc: "injury-public → fatal → report-immediate",
    answers: {
      incidentType: "injury",
      who: "public",
      publicSeverity: "fatal",
    },
    expected: "report-immediate",
  },
  {
    desc: "injury-public → taken to hospital → report-10days",
    answers: {
      incidentType: "injury",
      who: "public",
      publicSeverity: "hospital",
    },
    expected: "report-10days",
  },
  {
    desc: "injury-public → no hospital → not-reportable",
    answers: {
      incidentType: "injury",
      who: "public",
      publicSeverity: "no-hospital",
    },
    expected: "not-reportable",
  },
  {
    desc: "dangerous-check: any ticked → report-10days",
    answers: { incidentType: "dangerous", dangerousChecks: [2] },
    expected: "report-10days",
  },
  {
    desc: "dangerous-check: multiple ticked → report-10days",
    answers: { incidentType: "dangerous", dangerousChecks: [0, 4, 7] },
    expected: "report-10days",
  },
  {
    desc: "dangerous-check: none ticked → not-reportable",
    answers: { incidentType: "dangerous", dangerousChecks: [] },
    expected: "not-reportable",
  },
  {
    desc: "disease-check: any ticked → report-disease",
    answers: { incidentType: "disease", diseaseChecks: [3] },
    expected: "report-disease",
  },
  {
    desc: "disease-check: multiple ticked → report-disease",
    answers: { incidentType: "disease", diseaseChecks: [0, 3, 6] },
    expected: "report-disease",
  },
  {
    desc: "disease-check: none ticked → not-reportable",
    answers: { incidentType: "disease", diseaseChecks: [] },
    expected: "not-reportable",
  },
];

describe("deriveOutcome — truth table", () => {
  test.each(ROWS)("$desc", ({ answers, expected }) => {
    expect(deriveOutcome(answers)).toBe(expected);
  });
});

// ---------------------------------------------------------------------------
// Guardrails — bad inputs should throw rather than return a wrong verdict.
// ---------------------------------------------------------------------------

describe("deriveOutcome — rejects incomplete input", () => {
  test("injury with no 'who' throws", () => {
    expect(() =>
      deriveOutcome({ incidentType: "injury" } as Answers),
    ).toThrow(/'who' is required/);
  });

  test("worker injury without severity throws", () => {
    expect(() =>
      deriveOutcome({
        incidentType: "injury",
        who: "worker",
      } as Answers),
    ).toThrow(/workerSeverity is required/);
  });

  test("public injury without severity throws", () => {
    expect(() =>
      deriveOutcome({
        incidentType: "injury",
        who: "public",
      } as Answers),
    ).toThrow(/publicSeverity is required/);
  });

  test("dangerous without checks array throws", () => {
    expect(() =>
      deriveOutcome({ incidentType: "dangerous" } as Answers),
    ).toThrow(/dangerousChecks is required/);
  });

  test("disease without checks array throws", () => {
    expect(() =>
      deriveOutcome({ incidentType: "disease" } as Answers),
    ).toThrow(/diseaseChecks is required/);
  });
});

// ---------------------------------------------------------------------------
// Structural tests — catch accidental drift in content or keys.
// ---------------------------------------------------------------------------

describe("OUTCOMES structural integrity", () => {
  test("has exactly the 7 canonical outcome keys", () => {
    expect(Object.keys(OUTCOMES).sort()).toEqual([...OUTCOME_KEYS].sort());
  });

  test("every outcome has verdict, severity, summary, deadline, actions", () => {
    for (const key of OUTCOME_KEYS) {
      const outcome = OUTCOMES[key];
      expect(outcome.verdict, `${key} verdict`).toBeTruthy();
      expect(outcome.summary, `${key} summary`).toBeTruthy();
      expect(outcome.deadline, `${key} deadline`).toBeTruthy();
      expect(outcome.severity, `${key} severity`).toMatch(
        /^(danger|amber|success)$/,
      );
      expect(outcome.actions.length, `${key} actions`).toBeGreaterThanOrEqual(3);
      for (const action of outcome.actions) {
        expect(action.label).toBeTruthy();
        expect(action.detail).toBeTruthy();
      }
    }
  });

  test("severity mapping matches the artifact", () => {
    // danger = must-report; amber = record/grey-area; success = clear
    const bySev: Record<string, OutcomeKey[]> = {
      danger: [],
      amber: [],
      success: [],
    };
    for (const key of OUTCOME_KEYS) bySev[OUTCOMES[key].severity]!.push(key);
    expect(bySev.danger!.sort()).toEqual(
      [
        "report-immediate",
        "report-10days",
        "report-15days",
        "report-disease",
      ].sort(),
    );
    expect(bySev.amber!.sort()).toEqual(
      ["record-only", "call-handler"].sort(),
    );
    expect(bySev.success!.sort()).toEqual(["not-reportable"].sort());
  });
});

describe("DANGEROUS_ITEMS and DISEASE_ITEMS", () => {
  test("exact counts from artifact (11 dangerous, 8 diseases)", () => {
    expect(DANGEROUS_ITEMS).toHaveLength(11);
    expect(DISEASE_ITEMS).toHaveLength(8);
  });

  test("no HTML entities leaked from artifact source", () => {
    for (const item of [...DANGEROUS_ITEMS, ...DISEASE_ITEMS]) {
      expect(item, `entity in: ${item}`).not.toMatch(/&(ge|le|gt|lt|amp|nbsp|#\d+);/);
    }
  });
});

describe("HANDLER identity preserved", () => {
  test("matches artifact contact details", () => {
    expect(HANDLER.name).toBe("Sarah Whitlock");
    expect(HANDLER.phone).toBe("01455 244630");
    expect(HANDLER.email).toBe("Claims@crs-ins.co.uk");
    expect(HANDLER.initials).toBe("SW");
  });
});
