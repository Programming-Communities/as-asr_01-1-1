'use client';

import { useResponsive } from '@/hooks/useResponsive';
import { Post } from '@/types/blog';
import { BlogItemMobile } from './BlogItem.mobile';
import { BlogItemTablet } from './BlogItem.tablet';
import { BlogItemDesktop } from './BlogItem.desktop';
import { BlogItemLg } from './BlogItem.lg';
import { BlogItem4k } from './BlogItem.4k';
import { useBlogItem } from './hooks/useBlogItem';
import './styles/base.css';

interface BlogItemProps extends Post {
  index?: number;
  readingTime?: number;
  views?: number;
  priority?: boolean;
  variant?: 'mobile' | 'tablet' | 'desktop' | 'lg' | '4k';
  isCurrent?: boolean;
}

export function BlogItem(props: BlogItemProps) {
  const { 
    id,
    title,
    content,
    excerpt,
    date,
    slug,
    featuredImage,
    categories,
    author,
    index = 0,
    readingTime = 3,
    views = 0,
    priority = false,
    variant,
    isCurrent = false
  } = props;
  
  const { breakpoint } = useResponsive();
  
  // Create complete props object with all required fields
  const blogItemProps: BlogItemProps = { 
    id,
    title, 
    content,
    excerpt, 
    categories, 
    featuredImage, 
    date, 
    slug,
    author,
    index, 
    readingTime, 
    views, 
    priority, 
    isCurrent 
  };

  // Use provided variant or determine from breakpoint
  const currentVariant = variant || breakpoint;

  switch (currentVariant) {
    case 'mobile':
      return <BlogItemMobile {...blogItemProps} />;
    case 'tablet':
      return <BlogItemTablet {...blogItemProps} />;
    case 'desktop':
      return <BlogItemDesktop {...blogItemProps} />;
    case 'lg':
      return <BlogItemLg {...blogItemProps} />;
    case '4k':
      return <BlogItem4k {...blogItemProps} />;
    default:
      return <BlogItemDesktop {...blogItemProps} />;
  }
}

export default BlogItem;