/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  
  // Optimización de imágenes
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Optimización de rendimiento
  experimental: {
    optimizeCss: true,
    optimizeServerReact: true,
    optimizePackageImports: ['react-icons'],
  },
  
  // Mejorar compresión
  webpack: (config, { dev, isServer }) => {
    // Optimización solo para producción
    if (!dev && !isServer) {
      // Activar tree-shaking agresivo
      config.optimization.usedExports = true;
      
      // Optimizar carga dividida
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 25,
        minSize: 20000,
      };
    }
    
    return config;
  },
};

export default nextConfig; 