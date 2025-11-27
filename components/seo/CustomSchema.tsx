// components/seo/CustomSchema.tsx
interface CustomSchemaProps {
  post: {
    title: string;
    excerpt: string;
    date: string;
    modified?: string;
    slug: string;
    featuredImage?: {
      node: {
        sourceUrl: string;
        altText?: string;
      };
    };
    author?: {
      node: {
        name: string;
      };
    };
    categories?: {
      nodes: Array<{
        name: string;
      }>;
    };
  };
}

export function CustomSchema({ post }: CustomSchemaProps) {
  // Clean excerpt for schema
  const cleanExcerpt = post.excerpt?.replace(/<[^>]*>/g, '') || 
                       'Islamic services and community programs from Al-Asr ( Islamic Service )';

  // Prepare categories for schema
  const categories = post.categories?.nodes?.map(cat => cat.name) || ['Islamic Services'];
  
  // Base schema data
  const schemaData: any = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": cleanExcerpt,
    "datePublished": post.date,
    "dateModified": post.modified || post.date,
    "author": {
      "@type": "Person",
      "name": post.author?.node?.name || 'Al-Asr ( Islamic Service )'
    },
    "publisher": {
      "@type": "Organization",
      "name": "Al-Asr ( Islamic Service )",
      "url": "https://al-asr.centers.pk",
      "logo": {
        "@type": "ImageObject",
        "url": "https://al-asr.centers.pk/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://al-asr.centers.pk/posts/${post.slug}`
    },
    "articleSection": categories,
    "keywords": categories.join(', ')
  };

  // Add image if available
  if (post.featuredImage?.node?.sourceUrl) {
    schemaData.image = post.featuredImage.node.sourceUrl;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData, null, 2) }}
    />
  );
}

export default CustomSchema;