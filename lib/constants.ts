// App Configuration
export const APP_CONFIG = {
  name: 'Al-Asr Centers',
  description: 'Islamic Knowledge Portal - Comprehensive Islamic knowledge, community programs, and spiritual guidance',
  version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://al-asr.centers.pk',
  environment: process.env.NODE_ENV || 'development',
  supportEmail: 'info@al-asr.centers.pk',
  phone: '+92 300 8055414',
} as const;

// API Configuration
export const API_CONFIG = {
  wordpress: {
    url: process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://admin-al-asr.centers.pk/graphql',
    timeout: 10000, // 10 seconds
    retries: 3,
  },
  // Add other API configurations here
} as const;

// Breakpoints for responsive design (in pixels)
export const BREAKPOINTS = {
  mobile: 320,
  mobileLarge: 480,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
  largeDesktop: 1440,
  xlDesktop: 1920,
  ultraWide: 2560,
} as const;

// Cache times in seconds
export const CACHE_TIMES = {
  veryShort: 30, // 30 seconds
  short: 60, // 1 minute
  medium: 300, // 5 minutes
  long: 3600, // 1 hour
  veryLong: 86400, // 1 day
  eternal: 604800, // 1 week
} as const;

// Feature flags for gradual rollouts
export const FEATURE_FLAGS = {
  enableComments: true,
  enableSearch: true,
  enableNewsletter: true,
  enablePWA: true,
  enableDarkMode: true,
  enableAnalytics: process.env.NODE_ENV === 'production',
  enableServiceWorker: true,
  enableOfflineSupport: true,
} as const;

// Social media links
export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/shiaquranteachers',
  instagram: 'https://www.instagram.com/shiaquranteachers/',
  twitter: '#',
  youtube: '#',
  whatsapp: '#',
  email: 'info@al-asr.centers.pk',
} as const;

// Navigation configuration
export const NAVIGATION = {
  main: [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'Islamic Blog', href: '/posts', icon: '📚' },
    { name: 'Categories', href: '/categories', icon: '📂' },
    { name: 'About Us', href: '/about', icon: 'ℹ️' },
    { name: 'Services', href: '/services', icon: '🛠️' },
    { name: 'Contact', href: '/contact', icon: '📞' },
  ],
  services: [
    { name: 'Islamic Calendar', href: '/islamic-calendar', icon: '📅' },
    { name: 'Quran Classes', href: '/quran-classes', icon: '📖' },
    { name: 'Community Programs', href: '/community-programs', icon: '👨‍👩‍👧‍👦' },
    { name: 'Religious Guidance', href: '/religious-guidance', icon: '🕌' },
    { name: 'Education Services', href: '/education-services', icon: '🎓' },
    { name: 'Funeral Services', href: '/funeral-services', icon: '⚰️' },
  ],
  quickActions: [
    { name: 'Prayer Times', href: '/prayer-times', icon: '🕋' },
    { name: 'Donate', href: '/donate', icon: '💝' },
    { name: 'Quran', href: '/quran', icon: '📖' },
    { name: 'Hadith', href: '/hadith', icon: '📜' },
  ],
} as const;

// SEO Configuration
export const SEO_CONFIG = {
  defaultTitle: 'Al-Asr Centers - Islamic Knowledge Portal',
  defaultDescription: 'Comprehensive Islamic knowledge, community programs, and spiritual guidance for the Muslim community.',
  keywords: [
    'islam', 'quran', 'hadith', 'prayer', 'islamic knowledge', 
    'muslim community', 'islamic center', 'islamic education',
    'quran learning', 'islamic studies', 'muslim', 'islamic'
  ],
  authors: ['Al-Asr Centers'],
  publisher: 'Al-Asr Centers',
} as const;

// Performance Configuration
export const PERFORMANCE_CONFIG = {
  imageOptimization: true,
  lazyLoading: true,
  preloadCriticalResources: true,
  cacheStrategies: {
    static: '1 week',
    dynamic: '5 minutes',
    api: '1 hour',
  },
} as const;

// Analytics Configuration
export const ANALYTICS_CONFIG = {
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || '',
  facebookPixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID || '',
  hotjarId: process.env.NEXT_PUBLIC_HOTJAR_ID || '',
} as const;

// Theme Configuration
export const THEME_CONFIG = {
  colors: {
    primary: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
    },
    secondary: {
      50: '#fdf2f8',
      100: '#fce7f3',
      200: '#fbcfe8',
      300: '#f9a8d4',
      400: '#f472b6',
      500: '#ec4899',
      600: '#db2777',
      700: '#be185d',
      800: '#9d174d',
      900: '#831843',
    },
  },
  fonts: {
    primary: 'var(--font-inter)',
    arabic: 'var(--font-arabic)',
    urdu: 'var(--font-urdu)',
  },
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  network: 'Network error occurred. Please check your connection and try again.',
  notFound: 'The requested resource was not found.',
  unauthorized: 'You are not authorized to access this resource.',
  server: 'Server error occurred. Please try again later.',
  generic: 'An unexpected error occurred. Please try again.',
  timeout: 'Request timeout. Please try again.',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  commentSubmitted: 'Thank you for your comment! It will be visible after approval.',
  newsletterSubscribed: 'Thank you for subscribing to our newsletter!',
  contactSubmitted: 'Thank you for your message! We will get back to you soon.',
  donationSubmitted: 'Thank you for your generous donation!',
} as const;

// Validation Messages
export const VALIDATION_MESSAGES = {
  required: 'This field is required.',
  email: 'Please enter a valid email address.',
  phone: 'Please enter a valid phone number.',
  minLength: (min: number) => `Must be at least ${min} characters.`,
  maxLength: (max: number) => `Must be less than ${max} characters.`,
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;
export type FeatureFlag = keyof typeof FEATURE_FLAGS;