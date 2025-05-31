import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  // Optimize for Azure App Service
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  // Ensure proper static file handling
  trailingSlash: false,
};

export default nextConfig;
