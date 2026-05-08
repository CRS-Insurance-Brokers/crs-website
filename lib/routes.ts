/**
 * Canonical route paths. Pulled into a single module so a change to the
 * URL structure flows everywhere without grep-and-replace.
 */

export const ROUTES = {
  // The marketing site lives at /, the existing app's dashboard is at /dashboard.
  home: "/dashboard",
  report: "/report",
  reportRiddor: "/report/riddor",
  reportMotor: "/report/motor",
  reportProperty: "/report/property",
  reportPublicLiability: "/report/public-liability",
  cover: "/cover",
  coverCertificate: "/cover/certificate",
} as const;

export type RouteHref = (typeof ROUTES)[keyof typeof ROUTES];
