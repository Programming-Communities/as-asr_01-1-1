// components/blog/BlogItem/BlogItem.4k.tsx
'use client';

import Image from 'next/image';
import { Post } from '@/types/blog';
import { useBlogItem } from './hooks/useBlogItem';
import SocialShareButtons from '@/components/shared/SocialShareButtons';
import { CardLoader } from '@/components/shared/CardLoader';

interface BlogItem4kProps extends Post {
  index?: number;
  readingTime?: number;
  views?: number;
  priority?: boolean;
  isCurrent?: boolean;
}

const blurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

export function BlogItem4k({
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
}: BlogItem4kProps) {
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
      className={`blog-item 4k group relative w-full bg-white/95 dark:bg-gray-900/95 border-3 border-red-900/20 dark:border-red-800/30 rounded-3xl backdrop-blur-sm transition-all duration-500 ease-out cursor-pointer overflow-hidden ${
        isHovered 
          ? 'border-red-900/40 dark:border-red-800/60 shadow-[-16px_16px_40px_rgba(153,27,27,0.5)] dark:shadow-[-16px_16px_40px_rgba(127,29,29,0.6)] transform -translate-y-3 scale-[1.04]' 
          : 'shadow-2xl'
      }`}
      style={{ 
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.4s ease-out, transform 0.4s ease-out, box-shadow 0.4s ease-out'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isCardLoading && <CardLoader />}

      {/* Image Container - 4K Optimized */}
      <div className="relative h-80 w-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
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
                width={500}
                height={400}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-115"
                onError={handleImageError}
                onLoad={handleImageLoad}
                loading={index < 12 ? "eager" : "lazy"}
                priority={index < 6}
                sizes="(max-width: 1919px) 20vw, 16vw"
                quality={90}
                placeholder="blur"
                blurDataURL={blurDataURL}
              />
              
              {imageLoading && (
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
              )}

              {/* Premium Hover Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end justify-start p-8">
                <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="flex items-center gap-3 text-white">
                    <div className="bg-red-600/90 p-3 rounded-2xl backdrop-blur-sm">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xl font-bold block">Read Full Article</span>
                      <span className="text-white/80 text-sm">{readingTime} minute read</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div 
              className="flex flex-col items-center justify-center h-full w-full bg-gray-100 dark:bg-gray-800 p-10 text-center cursor-pointer group/fallback"
              onClick={handleNavigation}
            >
              <div className="flex flex-col items-center gap-5">
                <div className="bg-white/80 dark:bg-gray-700/80 p-4 rounded-2xl backdrop-blur-sm group-hover/fallback:scale-110 transition-transform duration-500">
                  <svg className="w-14 h-14 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-300 text-lg font-semibold mb-2">
                    {imageError ? 'Image unavailable' : 'Featured Image'}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-base">
                    Click to explore this insightful article
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content Section - 4K Optimized */}
      <div className="p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        {/* Meta Information */}
        <div className="flex items-center gap-5 mb-5 text-base text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-3 bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-2xl backdrop-blur-sm">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <time dateTime={date} className="font-semibold">{formattedDate}</time>
          </div>
          <div className="flex items-center gap-3 bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-2xl backdrop-blur-sm">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-semibold">{readingTime} min read</span>
          </div>
          {views > 0 && (
            <div className="flex items-center gap-3 bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-2xl backdrop-blur-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span className="font-semibold">{views.toLocaleString()} views</span>
            </div>
          )}
        </div>

        {/* Title */}
        <div 
          className="mb-5 cursor-pointer group/title"
          onClick={handleNavigation}
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white line-clamp-2 leading-tight group-hover/title:text-red-700 dark:group-hover/title:text-red-400 transition-colors duration-500 group-hover/title:underline decoration-4 underline-offset-4">
            {title}
          </h3>
        </div>

        {/* Excerpt */}
        <p className="text-xl text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed mb-7">
          {cleanExcerpt}
        </p>

        {/* Bottom Actions Bar */}
        <div className="flex items-center justify-between pt-6 border-t-2 border-gray-100 dark:border-gray-700">
          {/* Categories */}
          <div className="flex items-center gap-4 max-w-[70%]">
            <span className="text-lg text-red-700 dark:text-red-400 font-bold bg-red-50 dark:bg-red-900/20 px-5 py-3 rounded-2xl border-3 border-red-200 dark:border-red-800 truncate hover:bg-red-100 dark:hover:bg-red-900/30 transition-all duration-500 hover:scale-110 hover:shadow-lg">
              {category}
            </span>
            {categories?.nodes && categories.nodes.length > 1 && (
              <div className="flex items-center gap-2">
                <span className="text-base text-gray-500 dark:text-gray-400 font-medium">
                  +{categories.nodes.length - 1} more categories
                </span>
              </div>
            )}
          </div>

          {/* Share Button */}
          <div className="relative">
            <button
              className={`flex items-center justify-center w-12 h-12 rounded-3xl transition-all duration-500 backdrop-blur-sm border-3 ${
                showSocialMenu 
                  ? 'bg-red-50 dark:bg-red-900/40 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800 shadow-inner scale-115' 
                  : 'bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 border-gray-200/50 dark:border-gray-700/50 hover:bg-red-50 dark:hover:bg-red-900/30 hover:border-red-200 dark:hover:border-red-800 hover:text-red-600 dark:hover:text-red-400 hover:shadow-2xl hover:scale-110'
              }`}
              onClick={handleShareClick}
              aria-label="Share this post"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 00-5.368-2.684z" />
              </svg>
            </button>

            {showSocialMenu && (
              <div className="absolute right-0 bottom-full mb-5 bg-white/95 dark:bg-gray-900/95 border-3 border-gray-200/50 dark:border-gray-700/50 rounded-3xl shadow-2xl p-6 z-50 backdrop-blur-sm min-w-60">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-lg font-bold text-gray-700 dark:text-gray-300">
                    Share this post
                  </span>
                  <button
                    onClick={closeSocialMenu}
                    className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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