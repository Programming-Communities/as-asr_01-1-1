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
      className={`blog-item mobile group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ 
        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Rest of mobile component code remains the same */}
      {/* ... */}
    </article>
  );
}