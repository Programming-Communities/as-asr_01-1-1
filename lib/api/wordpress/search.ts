// lib/api/wordpress/search.ts
import fetchGraphQL from './client';
import { Post } from '@/types/blog';
import { CACHE_TIMES } from '@/lib/constants';

export interface SearchResult {
  posts: Post[];
  categories: any[];
  tags: any[];
  total: number;
}

// Interface for search suggestion response
interface SearchSuggestionPost {
  title: string;
}

interface SearchSuggestionsResponse {
  posts: {
    nodes: SearchSuggestionPost[];
  };
}

// ✅ COMPREHENSIVE SEARCH
export async function searchContent(query: string, limit: number = 20): Promise<SearchResult> {
  if (!query.trim()) {
    return { posts: [], categories: [], tags: [], total: 0 };
  }

  try {
    console.log('🔍 Performing search:', query);
    
    const searchQuery = `
      query SearchContent($query: String!, $limit: Int!) {
        posts: posts(first: $limit, where: { search: $query }) {
          nodes {
            id
            title
            excerpt
            date
            slug
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
            categories {
              nodes {
                slug
                name
              }
            }
          }
        }
        categories: categories(first: 10, where: { search: $query }) {
          nodes {
            id
            slug
            name
            count
            description
          }
        }
        tags: tags(first: 10, where: { search: $query }) {
          nodes {
            id
            slug
            name
            count
          }
        }
      }
    `;

    const data = await fetchGraphQL(searchQuery, { query, limit }, {
      revalidate: CACHE_TIMES.short,
      tags: ['search']
    });

    const result: SearchResult = {
      posts: data?.posts?.nodes || [],
      categories: data?.categories?.nodes || [],
      tags: data?.tags?.nodes || [],
      total: (data?.posts?.nodes?.length || 0) + 
             (data?.categories?.nodes?.length || 0) + 
             (data?.tags?.nodes?.length || 0)
    };

    console.log(`✅ Search found ${result.total} results for: "${query}"`);
    return result;
  } catch (error) {
    console.error('❌ Search error:', error);
    return { posts: [], categories: [], tags: [], total: 0 };
  }
}

// ✅ SEARCH SUGGESTIONS
export async function getSearchSuggestions(query: string, limit: number = 5): Promise<string[]> {
  if (!query.trim() || query.length < 2) {
    return [];
  }

  try {
    const searchQuery = `
      query GetSearchSuggestions($query: String!, $limit: Int!) {
        posts(first: $limit, where: { search: $query }) {
          nodes {
            title
          }
        }
      }
    `;

    const data = await fetchGraphQL(searchQuery, { query, limit }, {
      revalidate: CACHE_TIMES.short
    }) as SearchSuggestionsResponse;

    // ✅ Fixed: Properly type the suggestions with type safety
    const suggestions: string[] = (data?.posts?.nodes || [])
      .map((post: SearchSuggestionPost) => {
        const title = post.title || '';
        return String(title).trim();
      })
      .filter((title: string) => title.length > 0); // Remove empty titles

    return [...new Set(suggestions)]; // Remove duplicates
  } catch (error) {
    console.error('Error fetching search suggestions:', error);
    return [];
  }
}