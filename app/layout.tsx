import { Inter } from 'next/font/google';
import './globals.css';
import { RootLayoutClient } from '@/app/components/layout/RootLayoutClient';
import SEOMetadata from '@/components/seo/SEOMetadata';
import { DemoAd } from '@/components/ads/DemoAd';
import { SponsorBanner } from '@/components/ads/SponsorBanner';
import { SidebarMenuProvider } from '@/contexts/SidebarMenuContext';
import SidebarMenu from '@/components/layout/SidebarMenu/SidebarMenu';
import { Header } from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Al-Asr Islamic Center - Daily Islamic Content',
  description: 'Your daily source for Islamic knowledge, Quran, Hadith, prayer times, and Islamic calendar',
  keywords: 'islam, quran, hadith, prayer, islamic calendar, muslim',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <SEOMetadata />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/alasr192.png" />
      </head>
      <body className={`font-sans antialiased bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen flex flex-col`} suppressHydrationWarning>
        <SidebarMenuProvider>
          <RootLayoutClient>
            <div className="min-h-screen flex flex-col">
              <Header />
              <div className="flex-1">
                <div className="container mx-auto px-4 py-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Content */}
                    <main className="flex-1 min-w-0">
                      {children}
                    </main>
                    
                    {/* Sidebar - Desktop Only */}
                    <aside className="hidden lg:block w-80 shrink-0">
                      <div className="space-y-6 sticky top-24">
                        <DemoAd 
                          format="rectangle"
                          title="Quran Study"
                          className="w-full"
                        />
                        
                        <SponsorBanner />
                        
                        <DemoAd 
                          format="vertical"
                          title="Hadith Collection"
                          className="w-full"
                        />
                        
                        <PopularPostsWidget />
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </RootLayoutClient>
          <SidebarMenu />
        </SidebarMenuProvider>
      </body>
    </html>
  );
}

function PopularPostsWidget() {
  const popularPosts = [
    { title: 'Daily Prayer Times', slug: 'daily-prayer-times' },
    { title: 'Quran Recitation Rules', slug: 'quran-recitation-rules' },
    { title: 'Islamic Calendar 2024', slug: 'islamic-calendar-2024' },
    { title: 'Benefits of Salah', slug: 'benefits-of-salah' },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-600 pb-2">
        Popular Posts
      </h3>
      <div className="space-y-3">
        {popularPosts.map((post, index) => (
          <a
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="block p-3 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-red-300 dark:hover:border-red-600 transition-colors group"
          >
            <div className="flex items-start space-x-3">
              <span className="shrink-0 w-6 h-6 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 rounded-full text-xs flex items-center justify-center font-bold">
                {index + 1}
              </span>
              <span className="text-gray-700 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors text-sm font-medium">
                {post.title}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}