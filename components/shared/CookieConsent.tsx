// components/shared/CookieConsent.tsx
'use client';

import { useCookie } from '@/contexts/CookieContext';
import { useState } from 'react';

export default function CookieConsent() {
  const { preferences, updatePreferences, showBanner, hideBanner } = useCookie();
  const [showDetails, setShowDetails] = useState(false);

  const handleAcceptAll = () => {
    updatePreferences({
      analytics: true,
      marketing: true,
    });
  };

  const handleAcceptNecessary = () => {
    updatePreferences({
      analytics: false,
      marketing: false,
    });
  };

  const handleCustomSave = () => {
    // Preferences are already updated via individual toggles
    hideBanner();
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl p-6 max-w-2xl mx-auto">
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Cookie Preferences
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
              By clicking "Accept All", you consent to our use of cookies.
            </p>
          </div>
        </div>

        {showDetails && (
          <div className="space-y-4 border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Necessary Cookies</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Essential for the website to function properly
                </p>
              </div>
              <div className="w-12 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs font-medium text-gray-700">
                Always
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Analytics Cookies</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Help us understand how visitors interact with our website
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => updatePreferences({ analytics: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-2.5px after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Marketing Cookies</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Used to track visitors across websites for advertising purposes
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => updatePreferences({ marketing: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
              </label>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-sm text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium"
          >
            {showDetails ? 'Hide Details' : 'Customize Preferences'}
          </button>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleAcceptNecessary}
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
            >
              Necessary Only
            </button>
            {showDetails ? (
              <button
                onClick={handleCustomSave}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
              >
                Save Preferences
              </button>
            ) : (
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
              >
                Accept All
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}