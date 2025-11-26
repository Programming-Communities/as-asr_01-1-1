'use client';

import Image from 'next/image';
import { Post } from '@/types/blog';
import { useBlogItem } from './hooks/useBlogItem';
import SocialShareButtons from '@/components/shared/SocialShareButtons';
import { CardLoader } from '@/components/shared/CardLoader';

interface BlogItemLgProps extends Post {
  index?: number;
  readingTime?: number;
  views?: number;
  priority?: boolean;
  isCurrent?: boolean;
}

const blurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

export function BlogItemLg({
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
}: BlogItemLgProps) {
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
      className={`blog-item lg group relative w-full bg-white/95 dark:bg-gray-900/95 border-2 border-red-900/20 dark:border-red-800/30 rounded-2xl backdrop-blur-sm transition-all duration-300 ease-out cursor-pointer overflow-hidden ${
        isHovered 
          ? 'border-red-900/40 dark:border-red-800/60 shadow-[-12px_12px_30px_rgba(153,27,27,0.4)] dark:shadow-[-12px_12px_30px_rgba(127,29,29,0.5)] transform -translate-y-2 scale-[1.03]' 
          : 'shadow-xl'
      }`}
      style={{ 
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease-out, transform 0.3s ease-out, box-shadow 0.3s ease-out'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isCardLoading && <CardLoader />}

      {/* Image Container - LG Optimized */}
      <div className="relative h-64 w-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
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
                width={450}
                height={320}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                onError={handleImageError}
                onLoad={handleImageLoad}
                loading={index < 8 ? "eager" : "lazy"}
                priority={index < 4}
                sizes="(max-width: 1439px) 25vw, 20vw"
                quality={80}
                placeholder="blur"
                blurDataURL={blurDataURL}
              />
              
              {imageLoading && (
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
              )}

              {/* Enhanced Hover Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-start p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-white text-base font-bold bg-red-600/90 px-5 py-3 rounded-xl backdrop-blur-sm inline-flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Read Full Article
                  </span>
                </div>
              </div>
            </>
          ) : (
            <div 
              className="flex flex-col items-center justify-center h-full w-full bg-gray-100 dark:bg-gray-800 p-8 text-center cursor-pointer"
              onClick={handleNavigation}
            >
              <div className="flex flex-col items-center gap-4">
                <svg className="w-12 h-12 text-gray-400 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-base font-medium mb-1">
                    {imageError ? 'Image unavailable' : 'Featured Image'}
                  </p>
                  <p className="text-gray-400 dark:text-gray-500 text-sm">
                    Click to read article
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content Section - LG Optimized */}
      <div className="p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        {/* Meta Information */}
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <time dateTime={date} className="font-medium">{formattedDate}</time>
          </div>
          <span className="text-gray-300">•</span>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">{readingTime} min read</span>
          </div>
          {views > 0 && (
            <>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span className="font-medium">{views.toLocaleString()} views</span>
              </div>
            </>
          )}
        </div>

        {/* Title */}
        <div 
          className="mb-4 cursor-pointer"
          onClick={handleNavigation}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white line-clamp-2 leading-tight hover:text-red-700 dark:hover:text-red-400 transition-colors duration-300 group-hover:underline decoration-3 underline-offset-4">
            {title}
          </h3>
        </div>

        {/* Excerpt */}
        <p className="text-lg text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed mb-6">
          {cleanExcerpt}
        </p>

        {/* Bottom Actions Bar */}
        <div className="flex items-center justify-between pt-5 border-t border-gray-100 dark:border-gray-700">
          {/* Categories */}
          <div className="flex items-center gap-3 max-w-[70%]">
            <span className="text-base text-red-700 dark:text-red-400 font-semibold bg-red-50 dark:bg-red-900/20 px-4 py-2.5 rounded-xl border-2 border-red-200 dark:border-red-800 truncate hover:bg-red-100 dark:hover:bg-red-900/30 transition-all duration-300 hover:scale-105">
              {category}
            </span>
            {categories?.nodes && categories.nodes.length > 1 && (
              <span className="text-sm text-gray-500 dark:text-gray-400">
                +{categories.nodes.length - 1} more
              </span>
            )}
          </div>

          {/* Share Button */}
          <div className="relative">
            <button
              className={`flex items-center justify-center w-10 h-10 rounded-2xl transition-all duration-300 backdrop-blur-sm border-2 ${
                showSocialMenu 
                  ? 'bg-red-50 dark:bg-red-900/40 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800 shadow-inner scale-110' 
                  : 'bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 border-gray-200/50 dark:border-gray-700/50 hover:bg-red-50 dark:hover:bg-red-900/30 hover:border-red-200 dark:hover:border-red-800 hover:text-red-600 dark:hover:text-red-400 hover:shadow-lg hover:scale-105'
              }`}
              onClick={handleShareClick}
              aria-label="Share this post"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 00-5.368-2.684z" />
              </svg>
            </button>

            {showSocialMenu && (
              <div className="absolute right-0 bottom-full mb-4 bg-white/95 dark:bg-gray-900/95 border-2 border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-2xl p-5 z-50 backdrop-blur-sm min-w-[200px]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-base font-bold text-gray-700 dark:text-gray-300">
                    Share this post
                  </span>
                  <button
                    onClick={closeSocialMenu}
                    className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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