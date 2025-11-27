'use client';

import { useResponsive } from '@/hooks/useResponsive';
import CommentsSection from '@/components/comments/CommentsSection';
import SocialShareButtons from '@/components/shared/SocialShareButtons';
import Image from 'next/image';

interface SinglePostClientProps {
  post: {
    id: string;
    title: string;
    content: string;
    excerpt: string;
    date: string;
    modified: string;
    featuredImage?: {
      node: {
        sourceUrl: string;
        altText: string;
        mediaDetails: {
          width: number;
          height: number;
        };
      };
    };
    author?: {
      node: {
        name: string;
        avatar: {
          url: string;
        };
      };
    };
    categories?: {
      nodes: Array<{
        id: string;
        name: string;
        slug: string;
      }>;
    };
  };
}

// Safe ID conversion utility
const safeParseInt = (value: string, fallback: number = 0): number => {
  const parsed = parseInt(value, 10);
  return isNaN(parsed) ? fallback : parsed;
};

export default function SinglePostClient({ post }: SinglePostClientProps) {
  const { device, isMobile, isTablet, isDesktop } = useResponsive();

  // ✅ Post undefined hone par error handling
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            The requested post could not be loaded.
          </p>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // ✅ Safe post ID conversion
  const postId = safeParseInt(post?.id || '0', 0);

  return (
    <article className="py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header Section */}
        <header className="mb-8 text-center">
          {/* Categories */}
          {post.categories?.nodes && post.categories.nodes.length > 0 && (
            <div className="flex justify-center flex-wrap gap-2 mb-4">
              {post.categories.nodes.map((category) => (
                <span
                  key={category.id}
                  className="inline-block bg-linear-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                >
                  {category.name}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
            {post.author && (
              <div className="flex items-center gap-2">
                {post.author.node.avatar && (
                  <Image
                    src={post.author.node.avatar.url}
                    alt={post.author.node.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                )}
                <span className="font-medium">{post.author.node.name}</span>
              </div>
            )}
            
            <div className="flex items-center gap-4">
              <time dateTime={post.date} className="text-sm">
                Published: {formatDate(post.date)}
              </time>
              {post.modified !== post.date && (
                <time dateTime={post.modified} className="text-sm">
                  Updated: {formatDate(post.modified)}
                </time>
              )}
            </div>
          </div>

          {/* Featured Image */}
          {post.featuredImage && (
            <div className="relative w-full h-64 sm:h-80 lg:h-96 mb-8 rounded-xl overflow-hidden">
              <Image
                src={post.featuredImage.node.sourceUrl}
                alt={post.featuredImage.node.altText || post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                priority
              />
            </div>
          )}
        </header>

        {/* Content Section */}
        <div className="prose prose-lg max-w-none dark:prose-invert mb-12">
          <div 
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Social Sharing */}
        <div className="mb-12">
          <SocialShareButtons 
            title={post.title}
            excerpt={post.excerpt}
            url={typeof window !== 'undefined' ? window.location.href : ''}
          />
        </div>

        {/* Comments Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <CommentsSection postId={postId} />
        </div>
      </div>
    </article>
  );
}