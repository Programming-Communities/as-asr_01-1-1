'use client';

import { useState, useEffect } from 'react';
import BlogItem from '@/components/blog/BlogItem/BlogItem';
import { CardLoader } from '@/components/shared/CardLoader';
import { Post } from '@/types/blog';

export default function HomePageClient() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const fetchPosts = async () => {
      try {
        setLoading(true);
        console.log('🔄 Fetching posts from API...');
        
        const response = await fetch('/api/posts');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const text = await response.text();
        console.log('📦 API Response text:', text);
        
        let data;
        try {
          data = JSON.parse(text);
        } catch (parseError) {
          console.error('❌ JSON Parse Error:', parseError);
          throw new Error('Invalid JSON response from server');
        }
        
        console.log('📦 Parsed API Data:', data);
        
        if (data && data.success && Array.isArray(data.posts)) {
          setPosts(data.posts);
          console.log('✅ Posts loaded:', data.posts.length);
        } else {
          setError(data?.error || 'No posts found in response');
          console.log('❌ API Data issue:', data);
        }
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : 'Unknown error occurred';
        setError(errorMsg);
        console.log('❌ Fetch Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [isMounted]);

  // Server-side render fallback
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-linear-to-br from-red-50 to-pink-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Loading...</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <CardLoader key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-red-50 to-pink-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Loading Posts...</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <CardLoader key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-linear-to-br from-red-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Posts</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-red-50 to-pink-50">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-red-500 to-pink-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Al-Asr Centers
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Welcome to our Islamic Educational Platform
          </p>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Articles
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our latest insights and educational content
          </p>
        </div>

        {/* Debug Info */}
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-700 font-semibold">
            📊 Debug Info: Found {posts.length} posts
          </p>
          {posts.length > 0 && (
            <div className="text-xs text-blue-600 mt-1 space-y-1">
              <p>First post: "{posts[0].title}"</p>
              <p>Post IDs: {posts.map(p => p.id).join(', ')}</p>
            </div>
          )}
        </div>

        {/* Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <BlogItem
                key={post.id}
                {...post}
                index={index}
                readingTime={Math.ceil((post.content?.length || 0) / 200) || 3}
                views={Math.floor(Math.random() * 1000)}
                priority={index < 3}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="bg-yellow-50 p-6 rounded-lg max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-yellow-800 mb-2">No Posts Found</h3>
              <p className="text-yellow-700">No published posts available.</p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}