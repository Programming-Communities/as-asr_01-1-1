'use client';

interface PostContentProps {
  content: string;
  isRTL: boolean;
  readingTheme: 'light' | 'dark';
}

export function PostContent({ content, isRTL, readingTheme }: PostContentProps) {
  return (
    <div
      id="blog-content"
      className={`wp-content max-w-none transition-all duration-300 ${
        isRTL ? 'urdu-arabic-content' : 'english-content'
      } ${readingTheme === 'dark' ? 'text-gray-300' : 'text-gray-700 dark:text-gray-300'}`}
      style={{
        fontFamily: isRTL 
          ? "'Noto Nastaliq Urdu', 'Noto Sans Arabic', serif" 
          : "system-ui, -apple-system, sans-serif",
        textAlign: isRTL ? 'right' : 'left'
      }}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}