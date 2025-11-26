// components/shared/ReadingControls.tsx
'use client';

interface ReadingControlsProps {
  onFontSizeChange?: (size: number) => void;
  onThemeChange?: (theme: 'light' | 'dark') => void;
}

export default function ReadingControls({ onFontSizeChange, onThemeChange }: ReadingControlsProps) {
  const handleFontSizeDecrease = () => {
    onFontSizeChange?.(-10);
  };

  const handleFontSizeIncrease = () => {
    onFontSizeChange?.(10);
  };

  const handleLightTheme = () => {
    onThemeChange?.('light');
  };

  const handleDarkTheme = () => {
    onThemeChange?.('dark');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="flex gap-2">
        <button
          onClick={handleFontSizeDecrease}
          className="p-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          aria-label="Decrease font size"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </button>
        <button
          onClick={handleFontSizeIncrease}
          className="p-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          aria-label="Increase font size"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
      <div className="flex gap-2">
        <button
          onClick={handleLightTheme}
          className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded hover:bg-yellow-200 dark:hover:bg-yellow-800 transition-colors"
          aria-label="Light theme"
        >
          <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </button>
        <button
          onClick={handleDarkTheme}
          className="p-2 bg-gray-800 dark:bg-gray-200 rounded hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors"
          aria-label="Dark theme"
        >
          <svg className="w-4 h-4 text-gray-200 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>
      </div>
    </div>
  );
}