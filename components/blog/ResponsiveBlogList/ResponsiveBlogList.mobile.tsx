// components/blog/ResponsiveBlogList/ResponsiveBlogList.mobile.tsx
import { Post } from '@/types/blog';

interface ResponsiveBlogListMobileProps {
  initialPosts: Post[];
}

export default function ResponsiveBlogListMobile({
  initialPosts
}: ResponsiveBlogListMobileProps) {
  return (
    <div className="responsive-blog-list-mobile">
      <div className="space-y-6">
        {initialPosts.map((post, index) => (
          <div key={post.id || index} className="border-b border-gray-200 dark:border-gray-700 pb-6">
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