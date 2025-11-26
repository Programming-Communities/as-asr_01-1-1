// components/blog/ResponsiveBlogList/ResponsiveBlogList.tsx
'use client';

import { useResponsive } from '@/hooks/useResponsive';
import { Post } from '@/types/blog';
import ResponsiveBlogListMobile from './ResponsiveBlogList.mobile';
import ResponsiveBlogListTablet from './ResponsiveBlogList.tablet';
import ResponsiveBlogListDesktop from './ResponsiveBlogList.desktop';
import ResponsiveBlogListLg from './ResponsiveBlogList.lg';
import ResponsiveBlogList4k from './ResponsiveBlogList.4k';

interface ResponsiveBlogListProps {
  initialPosts: Post[];
}

export default function ResponsiveBlogList({
  initialPosts
}: ResponsiveBlogListProps) {
  const { device } = useResponsive();

  switch (device) {
    case 'mobile':
      return <ResponsiveBlogListMobile initialPosts={initialPosts} />;
    case 'tablet':
      return <ResponsiveBlogListTablet initialPosts={initialPosts} />;
    case 'desktop':
      return <ResponsiveBlogListDesktop initialPosts={initialPosts} />;
    case 'lg':
      return <ResponsiveBlogListLg initialPosts={initialPosts} />;
    case '4k':
      return <ResponsiveBlogList4k initialPosts={initialPosts} />;
    default:
      return <ResponsiveBlogListDesktop initialPosts={initialPosts} />;
  }
}