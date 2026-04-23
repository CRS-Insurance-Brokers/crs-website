import { z } from "zod";
import { OUTCOME_KEYS } from "./decision-tree";

// ---- RIDDOR answers (existing) -----------------------------------------

const incidentTypeSchema = z.enum(["injury", "dangerous", "disease", "unsure"]);
const whoSchema = z.enum(["worker", "public"]);
const workerSeveritySchema = z.enum([
  "fatal",
  "specified",
  "over-7-day",
  "3-to-7-day",
  "minor",
]);
const publicSeveritySchema = z.enum(["fatal", "hospital", "no-hospital"]);

export const answersSchema = z.object({
  incidentType: incidentTypeSchema,
  who: whoSchema.optional(),
  workerSeverity: workerSeveritySchema.optional(),
  publicSeverity: publicSeveritySchema.optional(),
  dangerousChecks: z.array(z.number().int().nonnegative()).readonly().optional(),
  diseaseChecks: z.array(z.number().int().nonnegative()).readonly().optional(),
});

export const outcomeKeySchema = z.enum(OUTCOME_KEYS);

// ---- Generic incident submission (v0.2, all flow lines) -----------------

export const flowLineSchema = z.enum([
  "riddor",
  "motor",
  "property",
  "public-liability",
]);

export const severitySchema = z.enum(["danger", "amber", "success"]);

const attachmentSchema = z.object({
  filename: z.string().min(1).max(120),
  mimeType: z.string().regex(/^[\w.-]+\/[\w.+-]+$/),
  dataBase64: z.string().min(1),
  size: z.number().int().nonnegative(),
});

export const submitIncidentInputSchema = z.object({
  line: flowLineSchema,
  outcomeKey: z.string().min(1).max(64),
  outcomeVerdict: z.string().min(1).max(240),
  severity: severitySchema,
  /** Arbitrary JSON payload; each flow decides its own answers shape. */
  answers: z.unknown(),
  attachments: z.array(attachmentSchema).max(4).optional(),
});

export type SubmitIncidentInput = z.infer<typeof submitIncidentInputSchema>;

// ---- Back-compat RIDDOR schema (kept for typed callers) -----------------

export const submitReportInputSchema = z.object({
  answers: answersSchema,
  outcomeKey: outcomeKeySchema,
});

export type SubmitReportInput = z.infer<typeof submitReportInputSchema>;
