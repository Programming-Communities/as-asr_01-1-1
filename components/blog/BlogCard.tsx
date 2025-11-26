// components/blog/BlogCard.tsx
'use client';

import { Post } from '@/types/blog';
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  post: Post;
  priority?: boolean;
}

export function BlogCard({ post, priority = false }: BlogCardProps) {
  const cleanExcerpt = post.excerpt
    ? post.excerpt.replace(/<[^>]*>/g, '').substring(0, 150) + '...'
    : '';

  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      {post.featuredImage?.node?.sourceUrl && (
        <div className="relative h-48 w-full">
          <Image
            src={post.featuredImage.node.sourceUrl}
            alt={post.featuredImage.node.altText || post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
          />
        </div>
      )}
      
      {/* Content */}
      <div className="p-4">
        {/* Categories */}
        {post.categories?.nodes && post.categories.nodes.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2">
            {post.categories.nodes.slice(0, 2).map((category) => (
              <span
                key={category.id}
                className="inline-block bg-linear-to-r from-red-500 to-pink-500 text-white px-2 py-1 rounded text-xs font-medium"
              >
                {category.name}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
          <Link 
            href={`/blog/${post.slug}`}
            className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
          >
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-3">
          {cleanExcerpt}
        </p>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-2">
            {post.author?.node?.name && (
              <span>{post.author.node.name}</span>
            )}
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </time>
          </div>
          
          <Link 
            href={`/blog/${post.slug}`}
            className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium"
          >
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;