import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'react-icons'],
  },
  // Optimización para mejorar el rendimiento
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Compresión de assets
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
