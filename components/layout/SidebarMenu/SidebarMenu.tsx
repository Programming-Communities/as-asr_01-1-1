'use client';

import { useSidebarMenu } from '@/hooks/useSidebarMenu';
import { DemoAd } from '@/components/ads/DemoAd';
import { SponsorBanner } from '@/components/ads/SponsorBanner';

export default function SidebarMenu() {
  const { isSidebarOpen, closeSidebar } = useSidebarMenu();

  if (!isSidebarOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={closeSidebar}
      />
      
      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-xl z-50 overflow-y-auto border-l border-gray-200 dark:border-gray-700">
        <div className="p-6">
          {/* Close Button */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Quick Menu
            </h2>
            <button
              onClick={closeSidebar}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          {/* Sidebar Content */}
          <div className="space-y-6">
            <DemoAd 
              format="rectangle"
              title="Islamic Learning"
              className="w-full"
            />

            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Categories
              </h3>
              <nav className="space-y-2">
                {[
                  { name: 'Quran', slug: 'quran' },
                  { name: 'Hadith', slug: 'hadith' },
                  { name: 'Prayer', slug: 'prayer' },
                  { name: 'Islamic History', slug: 'islamic-history' },
                  { name: 'Daily Calendar', slug: 'daily-calendar' },
                ].map((category) => (
                  <a
                    key={category.slug}
                    href={`/categories/${category.slug}`}
                    className="block py-2 px-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors border border-gray-200 dark:border-gray-700"
                    onClick={closeSidebar}
                  >
                    {category.name}
                  </a>
                ))}
              </nav>
            </div>

            <SponsorBanner />

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Quick Links
              </h3>
              <nav className="space-y-2">
                <a
                  href="/about"
                  className="block py-2 px-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors border border-gray-200 dark:border-gray-700"
                  onClick={closeSidebar}
                >
                  About Us
                </a>
                <a
                  href="/contact"
                  className="block py-2 px-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors border border-gray-200 dark:border-gray-700"
                  onClick={closeSidebar}
                >
                  Contact
                </a>
                <a
                  href="/privacy"
                  className="block py-2 px-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors border border-gray-200 dark:border-gray-700"
                  onClick={closeSidebar}
                >
                  Privacy Policy
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}