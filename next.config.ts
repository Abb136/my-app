import type { NextConfig } from "next";
import { hostname } from "node:os";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname:'pohcdn.com',
      },
    ],
  },
};

export default nextConfig;
