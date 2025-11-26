'use client';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="text-center max-w-md">
        {/* Error Icon */}
        <div className="w-24 h-24 bg-linear-to-r from-red-100 to-pink-100 dark:from-red-900/20 dark:to-pink-900/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
          <span className="text-4xl">⚠️</span>
        </div>
        
        {/* Error Message */}
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          Something Went Wrong
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          We encountered an unexpected error while loading the page.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mb-6">
          {error.message || 'Please try refreshing the page'}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="bg-linear-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-xl hover:from-red-600 hover:to-pink-600 transition-all duration-300 shadow-lg font-semibold"
          >
            🔄 Try Again
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 font-semibold"
          >
            🏠 Go Home
          </button>
        </div>

        {/* Technical Info */}
        <details className="mt-6 text-left">
          <summary className="text-sm text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-700 dark:hover:text-gray-300">
            Technical Details
          </summary>
          <pre className="mt-2 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs text-gray-700 dark:text-gray-300 overflow-auto">
            {error.stack || error.message}
          </pre>
        </details>
      </div>
    </div>
  );
}