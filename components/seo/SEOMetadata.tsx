// components/seo/SEOMetadata.tsx
'use client';

import { SEOProps, WordPressSEOMeta } from './types';
import MetaHead from './MetaHead';
import OpenGraph from './OpenGraph';
import TwitterCard from './TwitterCard';
import SchemaOrg from './SchemaOrg';
import Favicons from './Favicons';

interface SEOMetadataProps extends SEOProps {
  wordpressMeta?: WordPressSEOMeta;
  children?: React.ReactNode;
}

export default function SEOMetadata({
  title,
  description,
  canonicalUrl,
  ogImage,
  ogType,
  article,
  schema,
  noindex,
  nofollow,
  wordpressMeta,
  children
}: SEOMetadataProps) {
  
  // Use WordPress meta if available, otherwise use props
  const seoTitle = wordpressMeta?.yoast_title || title;
  const seoDescription = wordpressMeta?.yoast_description || description;
  const seoCanonical = wordpressMeta?.yoast_canonical || canonicalUrl;
  const seoOgImage = wordpressMeta?.yoast_og_image || ogImage;
  const seoOgTitle = wordpressMeta?.yoast_og_title || seoTitle;
  const seoOgDescription = wordpressMeta?.yoast_og_description || seoDescription;
  const seoTwitterTitle = wordpressMeta?.yoast_twitter_title || seoTitle;
  const seoTwitterDescription = wordpressMeta?.yoast_twitter_description || seoDescription;
  const seoTwitterImage = wordpressMeta?.yoast_twitter_image || seoOgImage;

  return (
    <>
      <Favicons />
      <MetaHead 
        title={seoTitle}
        description={seoDescription}
        canonicalUrl={seoCanonical}
        noindex={noindex}
        nofollow={nofollow}
      />
      <OpenGraph 
        title={seoOgTitle}
        description={seoOgDescription}
        ogImage={seoOgImage}
        ogType={ogType}
        url={seoCanonical}
        article={article}
      />
      <TwitterCard 
        title={seoTwitterTitle}
        description={seoTwitterDescription}
        ogImage={seoTwitterImage}
      />
      <SchemaOrg 
        title={seoTitle}
        description={seoDescription}
        ogImage={seoOgImage}
        ogType={ogType}
        url={seoCanonical}
        article={article}
      />
      {children}
    </>
  );
}