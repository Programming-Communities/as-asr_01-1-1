'use client';

import { useResponsive } from '@/hooks/useResponsive';
import FooterMobile from './Footer.mobile';
import FooterTablet from './Footer.tablet';
import FooterDesktop from './Footer.desktop';
import FooterLg from './Footer.lg';
import Footer4k from './Footer.4k';

export default function Footer() {
  const { device } = useResponsive(); // ✅ Use device instead of breakpoint

  switch (device) { // ✅ Use device instead of breakpoint
    case 'mobile':
      return <FooterMobile />;
    case 'tablet':
      return <FooterTablet />;
    case 'desktop':
      return <FooterDesktop />;
    case 'lg':
      return <FooterLg />;
    case '4k':
      return <Footer4k />;
    default:
      return <FooterDesktop />;
  }
}