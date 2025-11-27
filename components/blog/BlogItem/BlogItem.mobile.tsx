'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/types/blog';
import { useBlogItem } from './hooks/useBlogItem';
import SocialShareButtons from '@/components/shared/SocialShareButtons';
import { CardLoader } from '@/components/shared/CardLoader';

interface BlogItemMobileProps extends Post {
  index?: number;
  readingTime?: number;
  views?: number;
  priority?: boolean;
  isCurrent?: boolean;
}

export function BlogItemMobile({
  title,
  excerpt,
  categories,
  featuredImage,
  date,
  slug,
  author,
  index = 0,
  readingTime = 3,
  views = 0,
  priority = false,
  isCurrent = false
}: BlogItemMobileProps) {
  const {
    imageError,
    imageLoading,
    showSocialMenu,
    isHovered,
    isVisible,
    isCardLoading,
    postUrl,
    cleanExcerpt,
    category,
    formattedDate,
    handleClick,
    handleCategoryClick,
    handleAuthorClick,
    handleShareClick,
    closeSocialMenu,
    handleImageLoad,
    handleImageError,
    setIsHovered
  } = useBlogItem({ title, excerpt, categories, date, slug, index });

  if (isCardLoading) {
    return <CardLoader />;
  }

  return (
    <article 
      className="blog-item-mobile bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 mb-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        <Link href={`/posts/${slug}`} className="block h-full">
          {featuredImage?.node?.sourceUrl && !imageError ? (
            <Image
              src={featuredImage.node.sourceUrl}
              alt={featuredImage.node.altText || title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              onLoad={handleImageLoad}
              onError={handleImageError}
              priority={priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-red-100 to-pink-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
              <span className="text-red-500 dark:text-red-300 text-lg font-semibold">
                📖 Al-Asr
              </span>
            </div>
          )}
        </Link>
        
        {/* Category Badge */}
        {category && (
          <button
            onClick={(e) => handleCategoryClick(e, category.slug)}
            className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-red-600 transition-colors z-10"
          >
            {category.name}
          </button>
        )}
      </div>

      {/* Content Container */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 leading-tight">
          <Link 
            href={`/posts/${slug}`}
            className="hover:text-red-500 dark:hover:text-red-400 transition-colors"
          >
            {title}
          </Link>
        </h3>

        {/* Excerpt */}
        {cleanExcerpt && (
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2 leading-relaxed">
            {cleanExcerpt}
          </p>
        )}

        {/* Meta Information */}
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-3">
          <div className="flex items-center space-x-2">
            <span>{formattedDate}</span>
            <span>•</span>
            <span>{readingTime} min read</span>
          </div>
          <span>{views} views</span>
        </div>

        {/* Author and Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
          {/* Author */}
          {author?.node?.name && (
            <button
              onClick={(e) => handleAuthorClick(e, author.node.name)}
              className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors"
            >
              <div className="w-6 h-6 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                <span className="text-red-500 dark:text-red-300 text-xs font-bold">
                  {author.node.name.charAt(0)}
                </span>
              </div>
              <span>{author.node.name}</span>
            </button>
          )}

          {/* Share Button */}
          <div className="relative">
            <button
              onClick={handleShareClick}
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
              aria-label="Share post"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>

            {/* Social Share Menu */}
            {showSocialMenu && (
              <div className="absolute right-0 bottom-full mb-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-2 z-20">
                <SocialShareButtons 
                  url={postUrl}
                  title={title}
                  onClose={closeSocialMenu}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default BlogItemMobile;