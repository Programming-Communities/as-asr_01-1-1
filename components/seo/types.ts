// components/seo/types.ts
export interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    authors?: string[];
    tags?: string[];
  };
  schema?: any;
  noindex?: boolean;
  nofollow?: boolean;
}

export interface WordPressSEOMeta {
  yoast_title?: string;
  yoast_description?: string;
  yoast_canonical?: string;
  yoast_og_image?: string;
  yoast_og_title?: string;
  yoast_og_description?: string;
  yoast_twitter_title?: string;
  yoast_twitter_description?: string;
  yoast_twitter_image?: string;
  yoast_schema?: any;
}