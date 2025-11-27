'use client';

import { useResponsive } from '@/hooks/useResponsive';

// Import navigation components (create these if they don't exist)
import NavigationMobile from './Navigation.mobile';
import NavigationTablet from './Navigation.tablet';
import NavigationDesktop from './Navigation.desktop';
import NavigationLg from './Navigation.lg';
import Navigation4k from './Navigation.4k';

export default function Navigation() {
  const { device } = useResponsive(); // ✅ Use device instead of breakpoint

  // Render appropriate component based on device
  switch (device) { // ✅ Use device instead of breakpoint
    case 'mobile':
      return <NavigationMobile />;
    case 'tablet':
      return <NavigationTablet />;
    case 'desktop':
      return <NavigationDesktop />;
    case 'lg':
      return <NavigationLg />;
    case '4k':
      return <Navigation4k />;
    default:
      return <NavigationDesktop />;
  }
}