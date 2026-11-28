import type { NextConfig } from "next";

const basePath =
  process.env
    .NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  trailingSlash: true,
  basePath,
  allowedDevOrigins: [
    "192.168.0.175",
  ],
  experimental: {
    agentFeedback: true,
    agentUpgrade: "security",
  },
  cacheComponents: false,
  partialPrefetching: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
