'use client';

import { useResponsive } from '@/hooks/useResponsive';
import MobileMenuMobile from './MobileMenu.mobile';
import MobileMenuTablet from './MobileMenu.tablet';
import MobileMenuDesktop from './MobileMenu.desktop';
import MobileMenuLg from './MobileMenu.lg';
import MobileMenu4k from './MobileMenu.4k';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { device } = useResponsive(); // ✅ Use device instead of breakpoint

  // Render appropriate component based on device
  switch (device) { // ✅ Use device instead of breakpoint
    case 'mobile':
      return <MobileMenuMobile isOpen={isOpen} onClose={onClose} />;
    case 'tablet':
      return <MobileMenuTablet isOpen={isOpen} onClose={onClose} />;
    case 'desktop':
      return <MobileMenuDesktop isOpen={isOpen} onClose={onClose} />;
    case 'lg':
      return <MobileMenuLg isOpen={isOpen} onClose={onClose} />;
    case '4k':
      return <MobileMenu4k isOpen={isOpen} onClose={onClose} />;
    default:
      return <MobileMenuMobile isOpen={isOpen} onClose={onClose} />;
  }
}