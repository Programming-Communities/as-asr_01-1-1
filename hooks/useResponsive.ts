'use client';

import { useState, useEffect } from 'react';

type DeviceType = 'mobile' | 'tablet' | 'desktop' | 'lg' | '4k';

interface ResponsiveHook {
  device: DeviceType;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLg: boolean;
  is4k: boolean;
}

export function useResponsive(): ResponsiveHook {
  const [device, setDevice] = useState<DeviceType>('desktop');

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      
      if (width < 768) {
        setDevice('mobile');
      } else if (width >= 768 && width < 1024) {
        setDevice('tablet');
      } else if (width >= 1024 && width < 1440) {
        setDevice('desktop');
      } else if (width >= 1440 && width < 1920) {
        setDevice('lg');
      } else {
        setDevice('4k');
      }
    };

    // Initial check
    checkDevice();

    // Debounced resize handler
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkDevice, 100); // ✅ Fixed: Added debounce
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return {
    device,
    isMobile: device === 'mobile',
    isTablet: device === 'tablet',
    isDesktop: device === 'desktop',
    isLg: device === 'lg',
    is4k: device === '4k',
  };
}