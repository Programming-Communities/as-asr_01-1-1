'use client';

import { useResponsive } from '@/hooks/useResponsive';
import CategoriesNavbarMobile from './CategoriesNavbar.mobile';
import CategoriesNavbarTablet from './CategoriesNavbar.tablet';
import CategoriesNavbarDesktop from './CategoriesNavbar.desktop';
import CategoriesNavbarLg from './CategoriesNavbar.lg';
import CategoriesNavbar4k from './CategoriesNavbar.4k';

export default function CategoriesNavbar() {
  const { device } = useResponsive(); // ✅ Use device instead of breakpoint

  switch (device) { // ✅ Use device instead of breakpoint
    case 'mobile':
      return <CategoriesNavbarMobile />;
    case 'tablet':
      return <CategoriesNavbarTablet />;
    case 'desktop':
      return <CategoriesNavbarDesktop />;
    case 'lg':
      return <CategoriesNavbarLg />;
    case '4k':
      return <CategoriesNavbar4k />;
    default:
      return <CategoriesNavbarDesktop />;
  }
}