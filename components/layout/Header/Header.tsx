'use client';
import { useResponsive } from '@/hooks/useResponsive';
import { useSidebarMenu } from '@/hooks/useSidebarMenu';
import { useMobileMenu } from '@/hooks/useMobileMenu';
import HeaderMobile from './Header.mobile';
import HeaderTablet from './Header.tablet';
import HeaderDesktop from './Header.desktop';
import HeaderLg from './Header.lg';
import Header4k from './Header.4k';
import SidebarMenu from '../SidebarMenu/SidebarMenu';
import MobileMenu from '../MobileMenu/MobileMenu';

export default function Header() {
  const { device } = useResponsive(); // ✅ Changed from deviceType to device
  const { isSidebarOpen, closeSidebar, toggleSidebar } = useSidebarMenu();
  const { isMobileMenuOpen, closeMobileMenu, toggleMobileMenu } = useMobileMenu();

  // Render appropriate header based on device
  const renderHeader = () => {
    switch (device) { // ✅ Changed from deviceType to device
      case 'mobile':
        return (
          <HeaderMobile 
            onMenuToggle={toggleMobileMenu}
            onSidebarToggle={toggleSidebar}
          />
        );
      case 'tablet':
        return (
          <HeaderTablet 
            onMenuToggle={toggleMobileMenu}
            onSidebarToggle={toggleSidebar}
          />
        );
      case 'desktop':
        return (
          <HeaderDesktop 
            onSidebarToggle={toggleSidebar}
          />
        );
      case 'lg':
        return (
          <HeaderLg 
            onSidebarToggle={toggleSidebar}
          />
        );
      case '4k':
        return (
          <Header4k 
            onSidebarToggle={toggleSidebar}
          />
        );
      default:
        return (
          <HeaderDesktop 
            onSidebarToggle={toggleSidebar}
          />
        );
    }
  };

  return (
    <>
      {renderHeader()}
      
      {/* Sidebar Menu */}
      <SidebarMenu 
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
      />
      
      {/* Mobile Menu (only for mobile/tablet) */}
      {(device === 'mobile' || device === 'tablet') && ( // ✅ Changed from deviceType to device
        <MobileMenu 
          isOpen={isMobileMenuOpen} // ✅ Added missing props
          onClose={closeMobileMenu} // ✅ Added missing props
        />
      )}
    </>
  );
}