import type { NextConfig } from "next";
import { getLegacyRedirects } from "./lib/legacy-redirects";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return getLegacyRedirects();
  },
};

export default nextConfig;
