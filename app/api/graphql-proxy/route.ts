// app/api/graphql-proxy/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const WORDPRESS_GRAPHQL_URL = process.env.WORDPRESS_GRAPHQL_URL;

    if (!WORDPRESS_GRAPHQL_URL) {
      return NextResponse.json(
        { error: 'GraphQL endpoint not configured' },
        { status: 500 }
      );
    }

    const response = await fetch(WORDPRESS_GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`GraphQL request failed: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('GraphQL Proxy Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}