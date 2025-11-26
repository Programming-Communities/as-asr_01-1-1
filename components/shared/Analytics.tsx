// components/shared/Analytics.tsx
'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Track page views
    const url = `${pathname}${searchParams?.toString() ? `?${searchParams.toString()}` : ''}`;
    
    console.log('Page view:', url);
    
    // Example: Send to Google Analytics
    // if (typeof gtag !== 'undefined') {
    //   gtag('config', 'GA_MEASUREMENT_ID', {
    //     page_path: url,
    //   });
    // }
    
    // Example: Send to custom analytics
    // fetch('/api/analytics', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ url, timestamp: Date.now() }),
    // });
  }, [pathname, searchParams]);

  // This component doesn't render anything visible
  return null;
}