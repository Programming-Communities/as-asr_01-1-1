// app/posts/[slug]/components/PostPageClient.tsx
'use client';

import { Post } from '@/types/blog';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import { PostContent } from './PostContent';
import PostSocialShare from './PostSocialShare';
import PostMetaInfo from './PostMetaInfo';
import ReadingControls from '@/components/shared/ReadingControls';
import CommentsSection from '@/components/comments/CommentsSection';
import { GoogleAdSense } from '@/components/ads/GoogleAdSense';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PostPageClientProps {
  post: Post;
  slug: string;
  isUrdu: boolean;
}

export function PostPageClient({ post, slug, isUrdu }: PostPageClientProps) {
  const [fontSize, setFontSize] = useState(100);
  const [readingTheme, setReadingTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const contentElement = document.getElementById('blog-content');
    if (contentElement) {
      contentElement.style.fontSize = `${fontSize}%`;
      contentElement.style.lineHeight = fontSize > 115 ? '2.2' : '1.8';
    }
  }, [fontSize]);

  useEffect(() => {
    const root = document.documentElement;
    if (readingTheme === 'dark') {
      root.classList.add('reading-dark');
    } else {
      root.classList.remove('reading-dark');
    }
  }, [readingTheme]);

  // Safe ID conversion
  const safeParseInt = (value: string, fallback: number = 0): number => {
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? fallback : parsed;
  };

  const postId = safeParseInt(post.id, 0);

  const handleFontSizeChange = (change: number) => {
    setFontSize(prev => Math.max(80, Math.min(150, prev + change)));
  };

  const handleThemeChange = (theme: 'light' | 'dark') => {
    setReadingTheme(theme);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      readingTheme === 'dark' 
        ? 'bg-gray-900 text-gray-100' 
        : 'bg-white dark:bg-gray-900'
    }`}>
      <Header />
    
      <div className="py-8">
        <article
          className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          dir={isUrdu ? "rtl" : "ltr"}
        >
          {/* Featured Image */}
          {post.featuredImage?.node?.sourceUrl && (
            <div className="w-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <div className="relative w-full h-[500px] mx-auto">
                <Image
                  src={post.featuredImage.node.sourceUrl}
                  alt={post.featuredImage.node.altText || post.title}
                  fill
                  className="object-contain object-center bg-black"
                  priority
                  sizes="100vw"
                />
              </div>
            </div>
          )}

          <div className="p-6 md:p-8">
            {/* Title */}
            <h1
              className={`text-3xl md:text-4xl font-bold mb-6 leading-tight ${
                isUrdu ? 'text-right' : 'text-left'
              } ${readingTheme === 'dark' ? 'text-gray-100' : 'text-gray-900 dark:text-white'}`}
              style={{
                fontFamily: isUrdu 
                  ? "'Noto Nastaliq Urdu', 'Noto Sans Arabic', serif" 
                  : "system-ui, -apple-system, sans-serif"
              }}
            >
              {post.title}
            </h1>

            {/* Meta Information */}
            <PostMetaInfo post={post} isRTL={isUrdu} />

            {/* Google AdSense - After Title */}
            <GoogleAdSense 
              slot="post-title-ad"
              format="auto"
              responsive="true"
              className="my-6"
            />

            {/* Main Content */}
            <PostContent 
              content={post.content} 
              isRTL={isUrdu} 
              readingTheme={readingTheme}
            />

            {/* Google AdSense - After Content */}
            <GoogleAdSense 
              slot="post-content-ad"
              format="auto"
              responsive="true"
              className="my-6"
            />

            {/* Social Sharing */}
            <PostSocialShare title={post.title} slug={slug} isRTL={isUrdu} />

            {/* Comments Section */}
            <CommentsSection 
              postId={postId}
              postSlug={slug}
              postTitle={post.title}
            />

            {/* Back to Posts */}
            <div className={`mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 ${isUrdu ? 'text-right' : 'text-left'}`}>
              <Link
                href="/"
                className={`inline-flex items-center gap-2 bg-red-900 hover:bg-red-800 text-white px-6 py-3 rounded-lg transition-colors duration-200 ${
                  isUrdu ? 'flex-row-reverse' : ''
                }`}
                prefetch={true}
              >
                <svg
                  className={`w-5 h-5 ${isUrdu ? 'ml-2' : 'mr-2'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Back to All Posts
              </Link>
            </div>
          </div>
        </article>
      </div>

      {/* Reading Controls */}
      <ReadingControls 
        onFontSizeChange={handleFontSizeChange}
        onThemeChange={handleThemeChange}
      />

      <Footer />
    </div>
  );
}

export default PostPageClient;