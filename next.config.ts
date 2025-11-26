import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin-al-asr.centers.pk',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  // Enable React strict mode to catch hydration issues
  reactStrictMode: true,
  // Temporary: Ignore TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig