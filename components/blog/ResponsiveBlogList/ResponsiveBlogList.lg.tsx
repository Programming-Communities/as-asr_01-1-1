// components/blog/ResponsiveBlogList/ResponsiveBlogList.lg.tsx
import { Post } from '@/types/blog';

interface ResponsiveBlogListLgProps {
  initialPosts: Post[];
}

export default function ResponsiveBlogListLg({
  initialPosts
}: ResponsiveBlogListLgProps) {
  return (
    <div className="responsive-blog-list-lg">
      <div className="grid grid-cols-4 gap-6">
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