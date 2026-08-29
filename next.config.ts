import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves static files only → export the whole site to ./out on build.
  output: "export",
  // GitHub Pages has no Node image optimizer — serve images as-is (hero-portrait.png etc).
  images: {
    unoptimized: true,
  },
  // Project sites are served from https://<user>.github.io/<repo>/ — the deploy
  // workflow sets NEXT_PUBLIC_BASE_PATH=/<repo-name> automatically. Leave empty
  // when building locally or for a custom domain / <user>.github.io repo.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: ["*.space-z.ai"],
};

export default nextConfig;
