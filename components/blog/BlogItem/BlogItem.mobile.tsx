// components/blog/BlogItem/BlogItem.mobile.tsx
'use client';

import Image from 'next/image';
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
      className="blog-item mobile group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative h-48 w-full bg-gray-100 dark:bg-gray-700 overflow-hidden">
        <div 
          className="block h-full w-full cursor-pointer"
          onClick={handleClick}
        >
          {featuredImage?.node?.sourceUrl && !imageError ? (
            <Image
              src={featuredImage.node.sourceUrl}
              alt={featuredImage.node.altText || title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              onLoad={handleImageLoad}
              onError={handleImageError}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={priority}
            />
          ) : (
            <div className="w-full h-full bg-linear-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-gray-300 dark:bg-gray-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-gray-500 dark:text-gray-400 text-sm">No Image</span>
              </div>
            </div>
          )}
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span 
            className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium cursor-pointer hover:bg-red-600 transition-colors"
            onClick={(e) => handleCategoryClick(e, categories?.nodes?.[0]?.slug || '')}
          >
            {category}
          </span>
        </div>

        {/* Share Button */}
        <div className="absolute top-3 right-3">
          <button
            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
            onClick={handleShareClick}
            aria-label="Share post"
          >
            <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 00-5.368-2.684z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Meta Information */}
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-3">
          <div className="flex items-center gap-3">
            <time dateTime={date} className="font-medium">{formattedDate}</time>
            <span>•</span>
            <span>{readingTime} min read</span>
          </div>
          {views > 0 && (
            <div className="flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>{views}</span>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 
          className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 leading-tight cursor-pointer hover:text-red-600 dark:hover:text-red-400 transition-colors"
          onClick={handleClick}
        >
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed mb-3">
          {cleanExcerpt}
        </p>

        {/* Author */}
        {author && (
          <div 
            className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            onClick={(e) => handleAuthorClick(e, author.node?.name || '')}
          >
            <div className="w-6 h-6 bg-linear-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
              {author.node?.name?.charAt(0) || 'A'}
            </div>
            <span>by {author.node?.name || 'Author'}</span>
          </div>
        )}
      </div>

      {/* Social Share Menu */}
      {showSocialMenu && (
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-10 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 w-full max-w-xs">
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Share this post</h4>
              <button
                onClick={closeSocialMenu}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <SocialShareButtons 
              title={title}
              url={postUrl}
              excerpt={cleanExcerpt} // FIXED: Added the missing excerpt prop
            />
          </div>
        </div>
      )}
    </article>
  );
}

export default BlogItemMobile;