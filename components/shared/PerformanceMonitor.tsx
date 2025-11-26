// components/shared/PerformanceMonitor.tsx
'use client';

import { useEffect } from 'react';

interface PerformanceEntryWithValue extends PerformanceEntry {
  value?: number;
  processingStart?: number;
  processingEnd?: number;
  loadTime?: number;
}

export function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry: PerformanceEntryWithValue) => {
        let metricValue: number | string = 'N/A';
        
        // Handle different types of performance entries
        if ('value' in entry && typeof entry.value === 'number') {
          metricValue = entry.value;
        } else if ('duration' in entry && typeof entry.duration === 'number') {
          metricValue = entry.duration;
        } else if ('loadTime' in entry && typeof entry.loadTime === 'number') {
          metricValue = entry.loadTime;
        }
        
        console.log('Performance Metric:', entry.name, metricValue);
        
        // You can send these metrics to your analytics service
        // Example: sendToAnalytics(entry.name, metricValue);
      });
    });

    try {
      // Observe Core Web Vitals
      observer.observe({ 
        entryTypes: [
          'largest-contentful-paint', 
          'first-input', 
          'layout-shift',
          'paint',
          'navigation'
        ] 
      });
    } catch (error) {
      console.warn('Performance Observer not supported:', error);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // This component doesn't render anything visible
  return null;
}