// components/seo/OpenGraph.tsx
import { SEOProps } from './types';

interface OpenGraphProps extends Pick<SEOProps, 'title' | 'description' | 'ogImage' | 'ogType' | 'article'> {
  url?: string;
  siteName?: string;
  locale?: string;
}

export default function OpenGraph({
  title = 'Al-Asr Centers - Islamic Knowledge Portal',
  description = 'Comprehensive Islamic knowledge, community programs, and spiritual guidance',
  ogImage = '/og-image.jpg',
  ogType = 'website',
  url = '/',
  siteName = 'Al-Asr Centers',
  locale = 'en_US',
  article
}: OpenGraphProps) {
  return (
    <>
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      
      {/* Additional Open Graph for Articles */}
      {ogType === 'article' && article && (
        <>
          {article.publishedTime && (
            <meta property="article:published_time" content={article.publishedTime} />
          )}
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.authors?.map((author, index) => (
            <meta key={index} property="article:author" content={author} />
          ))}
          {article.tags?.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Facebook Specific */}
      <meta property="fb:app_id" content="your-facebook-app-id" />
      <meta property="fb:pages" content="your-facebook-page-id" />
    </>
  );
}