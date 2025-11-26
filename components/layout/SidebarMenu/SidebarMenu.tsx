// components/layout/SidebarMenu/SidebarMenu.tsx
'use client';

import { useResponsive } from '@/hooks/useResponsive';
import SidebarMenuMobile from './SidebarMenu.mobile';
import SidebarMenuTablet from './SidebarMenu.tablet';
import SidebarMenuDesktop from './SidebarMenu.desktop';
import SidebarMenuLg from './SidebarMenu.lg';
import SidebarMenu4k from './SidebarMenu.4k';

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  id?: string;
}

export default function SidebarMenu({ isOpen, onClose, id = "sidebar-menu" }: SidebarMenuProps) {
  const { device } = useResponsive(); // ✅ Changed from deviceType to device

  switch (device) { // ✅ Changed from deviceType to device
    case 'mobile':
      return (
        <SidebarMenuMobile
          isOpen={isOpen}
          onClose={onClose}
          id={id}
        />
      );
    case 'tablet':
      return (
        <SidebarMenuTablet
          isOpen={isOpen}
          onClose={onClose}
          id={id}
        />
      );
    case 'desktop':
      return (
        <SidebarMenuDesktop
          isOpen={isOpen}
          onClose={onClose}
          id={id}
        />
      );
    case 'lg':
      return (
        <SidebarMenuLg
          isOpen={isOpen}
          onClose={onClose}
          id={id}
        />
      );
    case '4k':
      return (
        <SidebarMenu4k
          isOpen={isOpen}
          onClose={onClose}
          id={id}
        />
      );
    default:
      return (
        <SidebarMenuDesktop
          isOpen={isOpen}
          onClose={onClose}
          id={id}
        />
      );
  }
}