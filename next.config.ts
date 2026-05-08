import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root so Turbopack ignores any stray package-lock.json
  // sitting above the project — was triggering "Can't resolve tailwindcss"
  // failures on the Netlify build before this was set.
  turbopack: {
    root: path.resolve(__dirname),
  },

  // Allow Unsplash placeholder images. Will be swapped for real CRS
  // photography before public launch — no production traffic relies on this.
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },

  // Bare URL hits the marketing site.
  async redirects() {
    return [
      { source: "/", destination: "/site", permanent: false },
    ];
  },
};

export default nextConfig;
