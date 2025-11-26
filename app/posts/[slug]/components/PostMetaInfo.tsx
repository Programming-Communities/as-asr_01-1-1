// app/posts/[slug]/components/PostMetaInfo.tsx
import { Post } from '@/types/blog';

interface PostMetaInfoProps {
  post: Post;
  isRTL: boolean;
}

export default function PostMetaInfo({ post, isRTL }: PostMetaInfoProps) {
  // Safe access to categories
  const categories = post.categories?.nodes || [];
  const categoriesCount = categories.length;

  return (
    <div className={`flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6 ${
      isRTL ? 'text-right' : 'text-left'
    }`}>
      {/* Date */}
      <div className="flex items-center gap-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
      </div>

      {/* Author */}
      {post.author?.node?.name && (
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span>By {post.author.node.name}</span>
        </div>
      )}

      {/* Categories */}
      {categoriesCount > 0 && (
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
          <div className="flex gap-1">
            {categories.slice(0, 2).map((category, index) => (
              <span key={category.id}>
                {category.name}
                {index < Math.min(categoriesCount - 1, 1) && ', '}
              </span>
            ))}
            {categoriesCount > 2 && (
              <span>+{categoriesCount - 2} more</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}