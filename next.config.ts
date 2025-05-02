import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ufs.sh",
      },
    ],
    domains: ["664utx0fqx.ufs.sh"],
  },
};

export default nextConfig;
