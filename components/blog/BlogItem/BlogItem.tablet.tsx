'use client';

import Image from 'next/image';
import { Post } from '@/types/blog';
import { useBlogItem } from './hooks/useBlogItem';
import SocialShareButtons from '@/components/shared/SocialShareButtons';
import { CardLoader } from '@/components/shared/CardLoader';

interface BlogItemTabletProps extends Post {
  index?: number;
  readingTime?: number;
  views?: number;
  priority?: boolean;
  isCurrent?: boolean;
}

const blurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgDRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

export function BlogItemTablet({
  title,
  excerpt,
  categories,
  featuredImage,
  date,
  slug,
  index = 0,
  readingTime = 3,
  views = 0,
  priority = false,
  isCurrent = false
}: BlogItemTabletProps) {
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
    handleNavigation,
    handleShareClick,
    closeSocialMenu,
    handleImageError,
    handleImageLoad,
    setIsHovered
  } = useBlogItem({ title, excerpt, categories, date, slug, index });

  return (
    <article 
      data-slug={slug}
      className={`blog-item tablet group relative w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl transition-all duration-300 cursor-pointer overflow-hidden ${
        isHovered ? 'shadow-xl transform scale-[1.02] border-red-300 dark:border-red-600' : 'shadow-md'
      } ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ 
        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out, box-shadow 0.3s ease-out'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
     {isCardLoading && <CardLoader />}

      {/* Image Container - Tablet Optimized */}
      <div className="relative h-44 w-full bg-gray-100 dark:bg-gray-800">
        <div 
          className="block h-full w-full cursor-pointer"
          onClick={handleNavigation}
          aria-label={`Read article: ${title}`}
        >
          {featuredImage?.node?.sourceUrl && !imageError ? (
            <>
              <Image
                src={featuredImage.node.sourceUrl}
                alt={featuredImage.node.altText || title}
                width={350}
                height={220}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={handleImageError}
                onLoad={handleImageLoad}
                loading={index < 4 ? "eager" : "lazy"}
                priority={index < 2}
                sizes="(max-width: 1023px) 45vw, 30vw"
                quality={75}
                placeholder="blur"
                blurDataURL={blurDataURL}
              />
              
              {imageLoading && (
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-semibold bg-red-600/90 px-4 py-2 rounded-lg backdrop-blur-sm">
                  Read Article
                </span>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-100 dark:bg-gray-800">
              <div className="text-center p-4">
                <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-500 dark:text-gray-400 text-xs">
                  {imageError ? 'Image unavailable' : 'Featured Image'}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content Section - Tablet Optimized */}
      <div className="p-4 bg-white dark:bg-gray-800">
        {/* Meta Information */}
        <div className="flex items-center gap-2 mb-3 text-xs text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <time dateTime={date}>{formattedDate}</time>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{readingTime} min</span>
          </div>
          {views > 0 && (
            <>
              <span>•</span>
              <div className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>{views}</span>
              </div>
            </>
          )}
        </div>

        {/* Title */}
        <div onClick={handleNavigation} className="mb-2">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-2 leading-tight hover:text-red-700 dark:hover:text-red-400 transition-colors duration-200">
            {title}
          </h3>
        </div>

        {/* Excerpt */}
        <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2 leading-relaxed mb-4">
          {cleanExcerpt}
        </p>

        {/* Bottom Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
          {/* Category */}
          <span className="text-xs text-red-700 dark:text-red-400 font-semibold bg-red-50 dark:bg-red-900/20 px-3 py-1.5 rounded-md border border-red-200 dark:border-red-800 truncate max-w-[65%]">
            {category}
          </span>

          {/* Share Button */}
          <div className="relative">
            <button
              className={`flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 backdrop-blur-sm border ${
                showSocialMenu 
                  ? 'bg-red-50 dark:bg-red-900/40 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800' 
                  : 'bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 border-gray-200/50 dark:border-gray-700/50 hover:bg-red-50 dark:hover:bg-red-900/30'
              }`}
              onClick={handleShareClick}
              aria-label="Share this post"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 00-5.368-2.684z" />
              </svg>
            </button>

            {showSocialMenu && (
              <div className="absolute right-0 bottom-full mb-2 bg-white/95 dark:bg-gray-900/95 border border-gray-200/50 dark:border-gray-700/50 rounded-lg shadow-xl p-3 z-50 backdrop-blur-sm min-w-40">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Share
                  </span>
                  <button
                    onClick={closeSocialMenu}
                    className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors rounded"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <SocialShareButtons 
                  title={title}
                  url={postUrl}
                  excerpt={cleanExcerpt}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}