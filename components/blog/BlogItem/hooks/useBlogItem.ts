'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface UseBlogItemProps {
  title: string;
  excerpt?: string;
  categories?: any;
  date: string;
  slug: string;
  index: number;
}

export function useBlogItem({ title, excerpt, categories, date, slug, index }: UseBlogItemProps) {
  const router = useRouter();
  
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const [showSocialMenu, setShowSocialMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isCardLoading, setIsCardLoading] = useState(false);

  // Remove visibility logic - causing issues
  const [isVisible] = useState(true);

  const postUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}/posts/${slug}`;

  const cleanExcerpt = excerpt
    ? excerpt.replace(/<[^>]*>/g, '').substring(0, 120) + '...'
    : 'No excerpt available';

  const category = categories?.nodes?.[0]?.name || 'Uncategorized';

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  const handleNavigation = useCallback(() => {
    setIsCardLoading(true);
    router.push(`/posts/${slug}`);
  }, [router, slug]);

  const handleClick = useCallback(() => {
    handleNavigation();
  }, [handleNavigation]);

  const handleCategoryClick = useCallback((e: React.MouseEvent, categorySlug: string) => {
    e.stopPropagation();
    router.push(`/categories/${categorySlug}`);
  }, [router]);

  const handleAuthorClick = useCallback((e: React.MouseEvent, authorName: string) => {
    e.stopPropagation();
    // Handle author click - could navigate to author page
    console.log('Author clicked:', authorName);
  }, []);

  const handleShareClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setShowSocialMenu(true);
  }, []);

  const closeSocialMenu = useCallback(() => {
    setShowSocialMenu(false);
  }, []);

  const handleImageLoad = useCallback(() => {
    setImageLoading(false);
  }, []);

  const handleImageError = useCallback(() => {
    setImageError(true);
    setImageLoading(false);
  }, []);

  return {
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
    handleClick,
    handleCategoryClick,
    handleAuthorClick,
    handleShareClick,
    closeSocialMenu,
    handleImageLoad,
    handleImageError,
    setIsHovered,
    setIsCardLoading
  };
}