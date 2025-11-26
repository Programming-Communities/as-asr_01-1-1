// types/graphql.ts
export interface GraphQLResponse<T = any> {
  data?: T;
  errors?: Array<{
    message: string;
    locations?: Array<{ line: number; column: number }>;
    path?: string[];
  }>;
}

export interface PostsResponse {
  posts: {
    nodes: Array<{
      id: string;
      title: string;
      excerpt: string;
      content: string;
      slug: string;
      date: string;
      modified: string;
      featuredImage?: {
        node: {
          sourceUrl: string;
          altText: string;
          mediaDetails: {
            width: number;
            height: number;
          };
        };
      };
      author?: {
        node: {
          name: string;
          avatar: {
            url: string;
          };
        };
      };
      categories: {
        nodes: Array<{
          id: string;
          name: string;
          slug: string;
        }>;
      };
      tags?: {
        nodes: Array<{
          id: string;
          name: string;
          slug: string;
        }>;
      };
      seo?: any;
    }>;
  };
}

export interface PostResponse {
  postBy: {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    slug: string;
    date: string;
    modified: string;
    featuredImage?: {
      node: {
        sourceUrl: string;
        altText: string;
        mediaDetails: {
          width: number;
          height: number;
        };
      };
    };
    author?: {
      node: {
        name: string;
        avatar: {
          url: string;
        };
      };
    };
    categories: {
      nodes: Array<{
        id: string;
        name: string;
        slug: string;
      }>
    };
    tags?: {
      nodes: Array<{
        id: string;
        name: string;
        slug: string;
      }>;
    };
    seo?: any;
  };
}

export interface PostsSlugsResponse {
  posts: {
    nodes: Array<{
      slug: string;
    }>;
  };
}