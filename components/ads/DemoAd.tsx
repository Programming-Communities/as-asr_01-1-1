'use client';

import { useState, useEffect } from 'react';

interface DemoAdProps {
  format?: 'banner' | 'rectangle' | 'vertical' | 'auto';
  className?: string;
  title?: string;
}

export function DemoAd({ format = 'auto', className = '', title = 'Advertisement' }: DemoAdProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const getAdStyles = () => {
    switch (format) {
      case 'banner':
        return 'w-full h-24 bg-gradient-to-r from-red-600 to-red-800';
      case 'rectangle':
        return 'w-300 h-250 bg-gradient-to-br from-green-600 to-green-800';
      case 'vertical':
        return 'w-160 h-600 bg-gradient-to-b from-blue-600 to-blue-800';
      default:
        return 'w-full h-32 bg-gradient-to-r from-purple-600 to-purple-800';
    }
  };

  if (!isVisible) {
    return (
      <div className={`bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg ${className}`}>
        <div className="flex items-center justify-center h-full">
          <div className="text-gray-500 dark:text-gray-400">Loading Ad...</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative rounded-lg overflow-hidden shadow-lg border border-gray-300 dark:border-gray-600 ${getAdStyles()} ${className}`}>
      {/* Ad Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
        <div className="mb-2">
          <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-2">
            <span className="text-xs font-bold">AD</span>
          </div>
          <h3 className="text-lg font-bold mb-1">{title}</h3>
          <p className="text-sm opacity-90">Al-Asr Islamic Center</p>
        </div>
        
        {/* Call to Action */}
        <div className="mt-2">
          <button className="bg-white text-red-600 px-4 py-1 rounded-full text-xs font-semibold hover:bg-gray-100 transition-colors">
            Learn More
          </button>
        </div>
      </div>

      {/* Corner Badge */}
      <div className="absolute top-2 right-2">
        <span className="bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
          Demo Ad
        </span>
      </div>
    </div>
  );
}