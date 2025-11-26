// hooks/useResponsive.ts
import { useState, useEffect } from 'react';

export type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'lg' | '4k';
export type Device = Breakpoint; // Make Device include all breakpoints

export interface UseResponsiveReturn {
  breakpoint: Breakpoint;
  device: Device;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLg: boolean;
  is4k: boolean;
}

export function useResponsive(): UseResponsiveReturn {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('desktop');

  useEffect(() => {
    const getBreakpoint = (width: number): Breakpoint => {
      if (width < 768) return 'mobile';
      if (width < 1024) return 'tablet';
      if (width < 1280) return 'desktop';
      if (width < 1920) return 'lg';
      return '4k';
    };

    const updateBreakpoint = () => {
      setBreakpoint(getBreakpoint(window.innerWidth));
    };

    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);

    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  // Device is now the same as breakpoint
  const device: Device = breakpoint;

  return {
    breakpoint,
    device,
    isMobile: breakpoint === 'mobile',
    isTablet: breakpoint === 'tablet',
    isDesktop: breakpoint === 'desktop',
    isLg: breakpoint === 'lg',
    is4k: breakpoint === '4k',
  };
}