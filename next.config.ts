import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'decode.tormasclick.co.ke', // Your external domain
        port: '', // Leave blank for default port
        pathname: '/**', // Adjust the path as needed
      },
    ],
  },
  // Other config options
};

export default nextConfig;
