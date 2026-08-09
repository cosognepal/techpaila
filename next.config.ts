import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage-sea1.zerops.io",
        pathname: "/5ldq5-storage/**",
      },
    ],
  },
};

export default nextConfig;
