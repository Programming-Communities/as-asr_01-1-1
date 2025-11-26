// app/api/posts/route.ts
import { NextResponse } from 'next/server';
import { getPosts } from '@/lib/api/wordpress/posts';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const first = parseInt(searchParams.get('first') || '10');
    
    const posts = await getPosts(first);
    
    return NextResponse.json({ posts });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}