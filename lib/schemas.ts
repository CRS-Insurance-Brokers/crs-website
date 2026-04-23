import { z } from "zod";
import { OUTCOME_KEYS } from "./decision-tree";

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

export const submitReportInputSchema = z.object({
  answers: answersSchema,
  outcomeKey: outcomeKeySchema,
});

export type SubmitReportInput = z.infer<typeof submitReportInputSchema>;
