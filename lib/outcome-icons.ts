/**
 * Render-layer concern: map each outcome to its lucide icon.
 *
 * Kept separate from lib/decision-tree.ts so the decision logic stays pure
 * and testable without pulling lucide-react into every test.
 */

import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  Clock,
  FileText,
  Phone,
  ShieldAlert,
  type LucideIcon,
} from "lucide-react";
import type { OutcomeKey } from "./decision-tree";

export const OUTCOME_ICONS: Readonly<Record<OutcomeKey, LucideIcon>> = {
  "report-immediate": AlertTriangle,
  "report-10days": ShieldAlert,
  "report-15days": Clock,
  "report-disease": Activity,
  "record-only": FileText,
  "not-reportable": CheckCircle2,
  "call-handler": Phone,
};
