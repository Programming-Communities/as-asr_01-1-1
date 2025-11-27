// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin-al-asr.centers.pk',
      },
      {
        protocol: 'https', 
        hostname: 'al-asr.centers.pk',
      }
    ],
    domains: ['admin-al-asr.centers.pk', 'al-asr.centers.pk'],
    // ✅ Add image qualities to fix warnings
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ['image/webp', 'image/avif'],
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  }
}

export default nextConfig