import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
