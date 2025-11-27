import { Inter } from 'next/font/google';
import './globals.css';
import { ApolloWrapper } from '@/lib/apollo-wrapper';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import SEOMetadata from '@/components/seo/SEOMetadata';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <SEOMetadata />
        {/* ✅ Fixed: Add favicon links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/alasr192.png" />
      </head>
      <body className={`font-sans antialiased bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen flex flex-col`} suppressHydrationWarning>
        <ApolloWrapper>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ApolloWrapper>
      </body>
    </html>
  );
}