import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves static files only -> export the whole site to ./out on build.
  output: "export",
  // GitHub Pages has no Node image optimizer - serve images as-is (hero-portrait.png etc).
  images: {
    unoptimized: true,
  },
  // Project sites are served from https://<user>.github.io/<repo>/ and need a
  // base path. This repo is a user site (<user>.github.io), served from the
  // domain root, so no base path is needed unless that ever changes.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: ["*.space-z.ai"],
};

export default nextConfig;
