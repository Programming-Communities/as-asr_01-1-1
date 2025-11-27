import { NextResponse } from 'next/server';
import { getPosts } from '@/lib/api/wordpress/posts';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const first = parseInt(searchParams.get('first') || '10');
    
    console.log('🔄 API: Fetching posts...');
    const posts = await getPosts(first);
    console.log('📦 API: Posts received:', posts?.length || 0);
    
    return NextResponse.json({ 
      success: true,
      posts: posts || [],
      count: posts?.length || 0
    });
  } catch (error) {
    console.error('❌ API Error:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to fetch posts',
        posts: [] 
      },
      { status: 500 }
    );
  }
}