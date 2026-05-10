import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.higgs.ai',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
