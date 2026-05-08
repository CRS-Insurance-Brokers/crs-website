/**
 * LinkedIn feed — single source of truth for the "Live from LinkedIn" section.
 *
 *  Status: PLACEHOLDER. All posts are illustrative.
 *
 *  Migration to a real feed:
 *  --------------------------
 *  Swap the body of `getLinkedInPosts()` below. The component contract stays
 *  the same — `LinkedInPost[]` — so the UI doesn't change.
 *
 *    Option A — LinkedIn Marketing API
 *      - Approve a LinkedIn Developer app with `r_organization_social` scope
 *      - Have a CRS LinkedIn admin grant the app access to the Company Page
 *      - Fetch from `/v2/posts?author=urn:li:organization:{ID}` with a
 *        long-lived OAuth token (refresh every 60 days)
 *      - Cache the response on the server (`unstable_cache` or Next 16's
 *        built-in `fetch` caching) — LinkedIn rate-limits aggressively
 *
 *    Option B — Third-party widget (SociableKIT / Juicer / Tagembed)
 *      - Pay for the relevant tier
 *      - Hit their JSON API: e.g. `https://api.sociablekit.com/widgets/{id}/posts`
 *      - No auth handshake, but you depend on their uptime
 *
 *    Option C — CMS mirror
 *      - Editor copies each LinkedIn post into Sanity / Payload alongside
 *        publishing on LinkedIn itself
 *      - Read from CMS API. Most editorial discipline, fewest moving parts.
 *
 *  All three options return the same `LinkedInPost[]` shape — only the
 *  fetcher changes.
 */

export type LinkedInPostKind = "post" | "article" | "event" | "reshare";

export type LinkedInPost = {
  id: string;
  kind: LinkedInPostKind;
  publishedAt: string; // ISO 8601
  body: string;
  emphasis?: string; // a fragment from `body` to italicise
  href: string;
  reactions?: number;
  comments?: number;
};

const placeholderPosts: LinkedInPost[] = [
  {
    id: "p-2026-04-30",
    kind: "post",
    publishedAt: "2026-04-30T08:30:00Z",
    body:
      "We've placed cover for an asbestos strip nobody else would touch this quarter — eleven days, two underwriter conversations, one Lloyd's syndicate. The hard market for high-risk classes isn't closed. It's just less patient than it used to be.",
    emphasis: "eleven days, two underwriter conversations, one Lloyd's syndicate",
    href: "https://www.linkedin.com/company/crs-insurance-brokers/posts/",
    reactions: 47,
    comments: 8,
  },
  {
    id: "e-2026-04-22",
    kind: "event",
    publishedAt: "2026-04-22T14:00:00Z",
    body:
      "At the NFDC technical committee meeting in Coventry today. Three things on the agenda that will move premiums in 2027: revised hot-works permit standards, asbestos training-record retention, and the EA's enforcement uplift on dust-bound contamination.",
    emphasis: "three things on the agenda that will move premiums in 2027",
    href: "https://www.linkedin.com/company/crs-insurance-brokers/posts/",
    reactions: 31,
    comments: 4,
  },
  {
    id: "a-2026-04-11",
    kind: "article",
    publishedAt: "2026-04-11T09:00:00Z",
    body:
      "New on the CRS Insights page: a practical guide to the seven-day RIDDOR clock. The clock starts when work is interrupted, not when the injury happens — and that distinction is where most of the over-7-day reports we see go wrong.",
    emphasis: "the seven-day RIDDOR clock",
    href: "https://www.linkedin.com/company/crs-insurance-brokers/posts/",
    reactions: 22,
    comments: 2,
  },
  {
    id: "p-2026-04-04",
    kind: "post",
    publishedAt: "2026-04-04T16:15:00Z",
    body:
      "A demolition contractor we placed cover for in 2022 — turnover was £600k, fall-from-height claim two months in — renewed this week with a 12% reduction. Not because the market softened. Because we walked the underwriter through what changed on site.",
    emphasis: "12% reduction",
    href: "https://www.linkedin.com/company/crs-insurance-brokers/posts/",
    reactions: 58,
    comments: 11,
  },
  {
    id: "r-2026-03-28",
    kind: "reshare",
    publishedAt: "2026-03-28T11:30:00Z",
    body:
      "Sharing the HSE's updated guidance on hot works permit warranties — relevant for every demolition, M&E and roofing contractor on our book. Worth ten minutes for site managers and another ten with your insurance broker.",
    href: "https://www.linkedin.com/company/crs-insurance-brokers/posts/",
    reactions: 19,
    comments: 1,
  },
];

/**
 * Returns the most recent posts. The function is async so it matches the
 * shape of any real fetcher we swap in later — no UI change needed when we
 * cut over to the LinkedIn API or a third-party feed.
 */
export async function getLinkedInPosts(limit = 5): Promise<LinkedInPost[]> {
  // When you switch to a live source, replace the line below with a fetch().
  return placeholderPosts.slice(0, limit);
}
