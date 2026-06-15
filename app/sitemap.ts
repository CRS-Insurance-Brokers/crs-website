import type { MetadataRoute } from "next";

const SITE = "https://crs-ins.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Homepage
    { url: `${SITE}/`,            lastModified: "2026-06-15", changeFrequency: "weekly",  priority: 1.0 },

    // Specialisms
    { url: `${SITE}/specialisms`,                         lastModified: "2026-06-15", changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/specialisms/high-risk`,               lastModified: "2026-06-15", changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/specialisms/construction`,            lastModified: "2026-06-15", changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/specialisms/engineering`,             lastModified: "2026-06-15", changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/specialisms/manufacturing-wholesale`, lastModified: "2026-06-15", changeFrequency: "monthly", priority: 0.9 },

    // Claims
    { url: `${SITE}/claims/what-to-do-on-site`, lastModified: "2026-06-15", changeFrequency: "monthly", priority: 0.8 },

    // About
    { url: `${SITE}/about`,                 lastModified: "2026-06-15", changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/about/team`,            lastModified: "2026-06-15", changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/about/how-we-are-paid`, lastModified: "2026-06-15", changeFrequency: "yearly",  priority: 0.5 },
    { url: `${SITE}/about/memberships`,     lastModified: "2026-06-15", changeFrequency: "yearly",  priority: 0.6 },
    { url: `${SITE}/about/charity`,         lastModified: "2026-06-15", changeFrequency: "monthly", priority: 0.7 },

    // Resources & Rewards
    { url: `${SITE}/beyond-the-basics`, lastModified: "2026-06-15", changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/rewards`,   lastModified: "2026-06-15", changeFrequency: "monthly", priority: 0.6 },

    // News
    { url: `${SITE}/news`, lastModified: "2026-06-15", changeFrequency: "weekly", priority: 0.7 },

    // Legal
    { url: `${SITE}/privacy`, lastModified: "2026-06-15", changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE}/terms`,   lastModified: "2026-06-15", changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE}/cookies`, lastModified: "2026-06-15", changeFrequency: "yearly", priority: 0.3 },
  ];
}
