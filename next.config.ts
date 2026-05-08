import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root so Turbopack ignores the stray package-lock.json
  // sitting in the user's home directory (~) and only resolves modules from
  // this project's node_modules.
  turbopack: {
    root: path.resolve(__dirname),
  },
  // Allow Unsplash placeholder images on the marketing site (will be swapped
  // for real CRS photography later).
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  // Front-door routing: bare URL hits the marketing site, not the FNOL app.
  async redirects() {
    return [
      { source: "/", destination: "/site", permanent: false },
    ];
  },
  experimental: {
    serverActions: {
      // Photos attached to incident reports travel through the server
      // action; the default 1MB cap bounces routine 3-photo payloads.
      // 12MB is generous enough for 3 phone snaps and strict enough to
      // reject accidental huge uploads.
      bodySizeLimit: "12mb",
    },
  },
};

export default nextConfig;
