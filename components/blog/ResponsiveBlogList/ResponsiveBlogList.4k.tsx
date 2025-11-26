// components/blog/ResponsiveBlogList/ResponsiveBlogList.4k.tsx
import { Post } from '@/types/blog';

interface ResponsiveBlogList4kProps {
  initialPosts: Post[];
}

export default function ResponsiveBlogList4k({
  initialPosts
}: ResponsiveBlogList4kProps) {
  return (
    <div className="responsive-blog-list-4k">
      <div className="grid grid-cols-5 gap-8">
        {initialPosts.map((post, index) => (
          <div key={post.id || index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {post.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {post.excerpt}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}