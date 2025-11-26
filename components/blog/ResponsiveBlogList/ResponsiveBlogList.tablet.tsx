// components/blog/ResponsiveBlogList/ResponsiveBlogList.tablet.tsx
import { Post } from '@/types/blog';

interface ResponsiveBlogListTabletProps {
  initialPosts: Post[];
}

export default function ResponsiveBlogListTablet({
  initialPosts
}: ResponsiveBlogListTabletProps) {
  return (
    <div className="responsive-blog-list-tablet">
      <div className="grid grid-cols-2 gap-6">
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