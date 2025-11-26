// components/blog/BlogItem/hooks/useBlogItem.ts
import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

export interface UseBlogItemProps {
  title?: string;
  excerpt?: string;
  categories?: any;
  date?: string;
  slug?: string;
  index?: number;
}

export function useBlogItem({ 
  title = '', 
  excerpt = '', 
  categories,
  date = '',
  slug = '',
  index = 0
}: UseBlogItemProps) {
  const router = useRouter();
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const [showSocialMenu, setShowSocialMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isCardLoading, setIsCardLoading] = useState(false);

  const isLoading = imageLoading || isCardLoading;
  
  const postUrl = slug ? `/blog/${slug}` : '#';
  
  const cleanExcerpt = excerpt
    ? excerpt.replace(/<[^>]*>/g, '').substring(0, 200) + '...'
    : '';

  // Get first category name
  const category = categories?.nodes?.[0]?.name || 'Uncategorized';

  // Format date
  const formattedDate = date ? new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }) : '';

  const handleNavigation = useCallback(() => {
    if (slug) {
      setIsCardLoading(true);
      router.push(postUrl);
    }
  }, [slug, router, postUrl]);

  const handleShareClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setShowSocialMenu(true);
  }, []);

  const closeSocialMenu = useCallback(() => {
    setShowSocialMenu(false);
  }, []);

  const handleImageLoad = useCallback(() => {
    setImageLoading(false);
    setImageError(false);
  }, []);

  const handleImageError = useCallback(() => {
    setImageLoading(false);
    setImageError(true);
  }, []);

  // ADD THE MISSING METHODS:
  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    handleNavigation();
  }, [handleNavigation]);

  const handleCategoryClick = useCallback((e: React.MouseEvent, categorySlug: string) => {
    e.stopPropagation();
    // Navigate to category page
    router.push(`/category/${categorySlug}`);
  }, [router]);

  const handleAuthorClick = useCallback((e: React.MouseEvent, authorName: string) => {
    e.stopPropagation();
    // Navigate to author page or filter by author
    console.log('Navigate to author:', authorName);
  }, []);

  return {
    // State
    imageError,
    imageLoading,
    showSocialMenu,
    isHovered,
    isVisible,
    isCardLoading,
    isLoading,
    postUrl,
    cleanExcerpt,
    category,
    formattedDate,
    
    // Setters
    setImageError,
    setImageLoading,
    setShowSocialMenu,
    setIsHovered,
    setIsVisible,
    setIsCardLoading,
    
    // Methods
    handleNavigation,
    handleShareClick,
    closeSocialMenu,
    handleImageLoad,
    handleImageError,
    
    // ADD THE MISSING METHODS TO RETURN:
    handleClick,
    handleCategoryClick,
    handleAuthorClick,
  };
}