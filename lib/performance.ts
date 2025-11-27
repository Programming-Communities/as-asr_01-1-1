import React from 'react';

// Performance monitoring and optimization utilities

// Performance metrics
export class PerformanceMonitor {
  private static marks = new Map<string, number>();
  private static measures = new Map<string, number>();

  static mark(name: string) {
    if (typeof window !== 'undefined' && performance) {
      performance.mark(name);
      this.marks.set(name, performance.now());
    }
  }

  static measure(name: string, startMark: string, endMark: string) {
    if (typeof window !== 'undefined' && performance) {
      performance.measure(name, startMark, endMark);
      const measure = performance.getEntriesByName(name)[0];
      this.measures.set(name, measure.duration);
      
      // Log slow operations
      if (measure.duration > 100) {
        console.warn(`🐌 Slow operation detected: ${name} took ${measure.duration}ms`);
      }
      
      return measure.duration;
    }
    return 0;
  }

  static getMeasures() {
    return Object.fromEntries(this.measures);
  }

  static clear() {
    if (typeof window !== 'undefined' && performance) {
      performance.clearMarks();
      performance.clearMeasures();
    }
    this.marks.clear();
    this.measures.clear();
  }
}

// Image optimization
export function optimizeImageUrl(url: string, options: {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png';
} = {}): string {
  if (!url) return '';
  
  const { width, height, quality = 80, format = 'webp' } = options;
  
  // If it's an external URL or already optimized, return as is
  if (!url.includes('wp-content') || url.includes('?') || url.includes('&')) {
    return url;
  }
  
  const params = new URLSearchParams();
  if (width) params.append('w', width.toString());
  if (height) params.append('h', height.toString());
  if (quality) params.append('q', quality.toString());
  if (format) params.append('fm', format);
  
  return `${url}?${params.toString()}`;
}

// Resource preloading
export function preloadResource(url: string, as: 'image' | 'script' | 'style' | 'font') {
  if (typeof window === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = url;
  link.as = as;
  
  if (as === 'font') {
    link.crossOrigin = 'anonymous';
  }
  
  document.head.appendChild(link);
}

// Lazy loading helper
export function lazyLoadImage(image: HTMLImageElement) {
  if (!image) return;
  
  const src = image.getAttribute('data-src');
  if (!src) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        image.src = src;
        image.classList.remove('lazy');
        observer.unobserve(image);
      }
    });
  });
  
  observer.observe(image);
}

// Memory management
export class MemoryManager {
  private static cache = new Map<string, { data: any; timestamp: number; size: number }>();
  private static maxSize = 50 * 1024 * 1024; // 50MB
  private static currentSize = 0;

  static set(key: string, data: any, size?: number) {
    const itemSize = size || this.estimateSize(data);
    
    // Check if we need to clear space
    if (this.currentSize + itemSize > this.maxSize) {
      this.clearOldItems();
    }
    
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      size: itemSize
    });
    
    this.currentSize += itemSize;
  }

  static get(key: string): any {
    const item = this.cache.get(key);
    if (item) {
      // Update timestamp for LRU
      item.timestamp = Date.now();
      return item.data;
    }
    return null;
  }

  static remove(key: string) {
    const item = this.cache.get(key);
    if (item) {
      this.currentSize -= item.size;
      this.cache.delete(key);
    }
  }

  static clear() {
    this.cache.clear();
    this.currentSize = 0;
  }

  private static clearOldItems() {
    const items = Array.from(this.cache.entries())
      .sort(([, a], [, b]) => a.timestamp - b.timestamp);
    
    let clearedSize = 0;
    const targetSize = this.maxSize * 0.5; // Clear until we're at 50% capacity
    
    for (const [key, item] of items) {
      if (this.currentSize - clearedSize <= targetSize) break;
      
      this.cache.delete(key);
      clearedSize += item.size;
    }
    
    this.currentSize -= clearedSize;
  }

  private static estimateSize(data: any): number {
    const json = JSON.stringify(data);
    return new Blob([json]).size;
  }

  static getStats() {
    return {
      items: this.cache.size,
      size: this.currentSize,
      maxSize: this.maxSize
    };
  }
}

// Bundle optimization helpers - FIXED: No JSX in .ts file
export function dynamicImport(component: () => Promise<any>, loadingComponent?: React.ReactNode) {
  if (typeof window === 'undefined') {
    // Return simple component for server-side rendering
    return { 
      default: () => loadingComponent || 'Loading...' 
    };
  }
  
  return React.lazy(component);
}

// Critical CSS injection
export function injectCriticalCSS(css: string) {
  if (typeof window === 'undefined') return;
  
  const style = document.createElement('style');
  style.textContent = css;
  style.setAttribute('data-critical', 'true');
  document.head.appendChild(style);
}

// Connection-aware loading - Fix TypeScript errors
interface NetworkInformation {
  effectiveType?: string;
  saveData?: boolean;
  downlink?: number;
}

declare global {
  interface Navigator {
    connection?: NetworkInformation;
  }
}

export function getConnectionInfo() {
  if (typeof window === 'undefined' || !navigator.connection) {
    return { effectiveType: '4g', saveData: false, downlink: 10 };
  }
  
  const connection = navigator.connection;
  return {
    effectiveType: connection.effectiveType || '4g',
    saveData: connection.saveData || false,
    downlink: connection.downlink || 10
  };
}

export function shouldLoadHeavyResources(): boolean {
  const connection = getConnectionInfo();
  return connection.effectiveType === '4g' && !connection.saveData;
}