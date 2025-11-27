'use client';

import { useState, useEffect } from 'react';

export function SponsorBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return (
      <div className="bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg w-full h-32">
        <div className="flex items-center justify-center h-full">
          <div className="text-gray-500 dark:text-gray-400">Loading Sponsor...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-32 bg-linear-to-r from-amber-500 to-amber-600 rounded-lg shadow-lg border border-amber-400 overflow-hidden">
      {/* Sponsor Content */}
      <div className="absolute inset-0 flex items-center justify-between px-6">
        {/* Text Content */}
        <div className="text-white">
          <div className="flex items-center mb-2">
            <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-2">
              <span className="text-xs font-bold">⭐</span>
            </div>
            <h3 className="text-lg font-bold">Sponsored By</h3>
          </div>
          <p className="text-sm opacity-90">Supporting Islamic Education</p>
        </div>

        {/* Sponsor Logo/Button */}
        <div className="text-right">
          <div className="bg-white text-amber-600 px-4 py-2 rounded-lg shadow-md">
            <p className="font-bold text-sm">Al-Asr</p>
            <p className="text-xs">Islamic Center</p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-white to-transparent opacity-30"></div>
      
      {/* Corner Badge */}
      <div className="absolute top-2 right-2">
        <span className="bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
          Sponsor
        </span>
      </div>
    </div>
  );
}