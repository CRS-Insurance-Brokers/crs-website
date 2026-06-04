import type { MetadataRoute } from "next";

const SITE = "https://crs-ins.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    // Root
    { url: `${SITE}/`,     lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${SITE}/site`, lastModified: now, changeFrequency: "weekly",  priority: 1.0 },

    // Specialisms
    { url: `${SITE}/site/specialisms`,                         lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/site/specialisms/high-risk`,               lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/site/specialisms/construction`,            lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/site/specialisms/engineering`,             lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/site/specialisms/manufacturing-wholesale`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },

    // Claims
    { url: `${SITE}/site/claims/what-to-do-on-site`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // About
    { url: `${SITE}/site/about`,                 lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/site/about/team`,            lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/site/about/how-we-are-paid`, lastModified: now, changeFrequency: "yearly",  priority: 0.5 },
    { url: `${SITE}/site/about/memberships`,     lastModified: now, changeFrequency: "yearly",  priority: 0.6 },
    { url: `${SITE}/site/about/charity`,         lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Resources & Rewards
    { url: `${SITE}/site/resources`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/site/rewards`,   lastModified: now, changeFrequency: "monthly", priority: 0.6 },

    // News
    { url: `${SITE}/site/news`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },

    // Legal
    { url: `${SITE}/site/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE}/site/terms`,   lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE}/site/cookies`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
