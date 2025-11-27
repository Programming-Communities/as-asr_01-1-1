import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin-al-asr.centers.pk',
        pathname: '/**',
      },
      {
        protocol: 'https', 
        hostname: 'secure.gravatar.com',
        pathname: '/**',
      }
    ],
    formats: ['image/webp', 'image/avif'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // React
  reactStrictMode: true,
  
  // TypeScript - ignore build errors temporarily
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  
  // Headers for security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // Compression
  compress: true,
  
  // Experimental features (only supported ones)
  experimental: {
    // Add only supported experimental features here
  },

  // Compiler options
  compiler: {
    // removeConsole: process.env.NODE_ENV === 'production', // Remove console logs in production
  },
  
  // Production browser source maps
  productionBrowserSourceMaps: false,
  
  // Optimize package imports
  modularizeImports: {
    '@heroicons/react/24/outline': {
      transform: '@heroicons/react/24/outline/{{member}}',
    },
    '@heroicons/react/24/solid': {
      transform: '@heroicons/react/24/solid/{{member}}',
    },
  },

  // Static optimization
  trailingSlash: false,
  
  // Base path if needed (for subdirectory deployment)
  // basePath: '/your-base-path',
  
  // Asset prefix if needed (for CDN)
  // assetPrefix: process.env.NODE_ENV === 'production' ? 'https://cdn.example.com' : '',
};

export default nextConfig;