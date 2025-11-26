// types/blog.ts
export interface Category {
  id: string;
  name: string;
  slug: string;
  count?: number; // Make count optional
}

export interface Author {
  node: {
    name: string;
    slug?: string; // Make slug optional
    avatar?: {
      url: string;
    };
  };
}

export interface FeaturedImage {
  node: {
    sourceUrl: string;
    altText?: string;
    mediaDetails?: {
      width: number;
      height: number;
    };
  };
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  date: string;
  modified?: string;
  featuredImage?: FeaturedImage;
  categories?: {
    nodes: Category[];
  };
  author?: Author;
  seo?: any;
}

export interface BlogItemProps extends Post {
  index?: number;
  readingTime?: number;
  views?: number;
  priority?: boolean;
  variant?: 'mobile' | 'tablet' | 'desktop' | 'lg' | '4k';
  isCurrent?: boolean;
}


// types/blog.ts
export interface Category {
  id: string;
  slug: string;
  name: string;
  count?: number; // Make count optional
  description?: string; // Add description
  parentId?: string | null;
  children?: Category[];
}


// types/blog.ts - Add this
export interface Comment {
  id: string;
  content: string;
  date: string;
  author: {
    node: {
      name: string;
      email?: string;
    };
  };
  parentId?: string | null;
  replies?: Comment[];
}