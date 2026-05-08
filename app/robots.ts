import type { MetadataRoute } from "next";

/**
 * /robots.txt — explicit AI crawler positioning per CRS audit §3.2.
 *
 * Default stance: allow retrieval/search bots without qualification (this is
 * how the brand earns visibility inside ChatGPT/Claude/Perplexity/Gemini
 * answers). Allow training bots too — for a B2B specialist, training bots are
 * how the model learns the brand exists at all.
 *
 * The site is currently behind a basic-auth gate (proxy.ts) so this is
 * effectively a future-state declaration. Once the gate is lifted, the
 * declarations here govern crawler behaviour from day one.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Standard crawlers
      { userAgent: "*", allow: "/", disallow: ["/api/"] },

      // OpenAI
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },

      // Anthropic
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-SearchBot", allow: "/" },
      { userAgent: "Claude-User", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },

      // Perplexity
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },

      // Google AI (Gemini, AI Overviews) — separate from standard Googlebot
      { userAgent: "Google-Extended", allow: "/" },

      // Apple Intelligence
      { userAgent: "Applebot-Extended", allow: "/" },

      // Meta AI, Amazon, others
      { userAgent: "Meta-ExternalAgent", allow: "/" },
      { userAgent: "Amazonbot", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
    ],
    sitemap: "https://crs-ins.co.uk/sitemap.xml",
    host: "https://crs-ins.co.uk",
  };
}
