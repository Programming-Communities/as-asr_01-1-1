// components/seo/SchemaOrg.tsx
import { SEOProps } from './types';

interface SchemaOrgProps extends Pick<SEOProps, 'title' | 'description' | 'ogImage' | 'ogType' | 'article'> {
  url?: string;
  siteName?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  organization?: {
    name: string;
    url: string;
    logo: string;
  };
}

interface SchemaItem {
  '@type': string;
  '@id'?: string;
  name?: string;
  url?: string;
  headline?: string;
  description?: string;
  image?: string;
  primaryImageOfPage?: string;
  datePublished?: string;
  dateModified?: string;
  author?: any;
  publisher?: any;
  mainEntityOfPage?: any;
  isPartOf?: any;
  inLanguage?: string;
  logo?: any;
  sameAs?: string[];
  about?: any;
  itemListElement?: any[];
}

export default function SchemaOrg({
  title = 'Al-Asr Centers - Islamic Knowledge Portal',
  description = 'Comprehensive Islamic knowledge, community programs, and spiritual guidance',
  ogImage = '/og-image.jpg',
  ogType = 'website',
  url = '/',
  siteName = 'Al-Asr Centers',
  datePublished,
  dateModified,
  author = 'Al-Asr Centers',
  organization = {
    name: 'Al-Asr Centers',
    url: 'https://al-asr.centers.pk',
    logo: 'https://al-asr.centers.pk/logo.png'
  }
}: SchemaOrgProps) {
  
  const baseSchema = {
    '@context': 'https://schema.org',
    '@graph': [] as SchemaItem[]
  };

  // Organization Schema
  baseSchema['@graph'].push({
    '@type': 'Organization',
    '@id': `${organization.url}/#organization`,
    name: organization.name,
    url: organization.url,
    logo: {
      '@type': 'ImageObject',
      url: organization.logo
    },
    sameAs: [
      'https://www.facebook.com/al.asr.centers',
      'https://www.twitter.com/al_asr_centers',
      'https://www.instagram.com/al_asr_centers',
      'https://www.youtube.com/@al_asr_centers'
    ]
  });

  // Website Schema
  baseSchema['@graph'].push({
    '@type': 'WebSite',
    '@id': `${organization.url}/#website`,
    url: organization.url,
    name: siteName,
    publisher: {
      '@id': `${organization.url}/#organization`
    },
    inLanguage: 'en-US'
  });

  if (ogType === 'article') {
    // Article Schema
    baseSchema['@graph'].push({
      '@type': 'Article',
      headline: title,
      description: description,
      image: ogImage,
      datePublished: datePublished || new Date().toISOString(),
      dateModified: dateModified || new Date().toISOString(),
      author: {
        '@type': 'Person',
        name: author
      },
      publisher: {
        '@id': `${organization.url}/#organization`
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url
      },
      isPartOf: {
        '@id': `${organization.url}/#website`
      },
      inLanguage: 'en-US'
    });
  } else {
    // WebPage Schema for other pages
    baseSchema['@graph'].push({
      '@type': 'WebPage',
      name: title,
      description: description,
      url: url,
      primaryImageOfPage: ogImage,
      isPartOf: {
        '@id': `${organization.url}/#website`
      },
      about: {
        '@type': 'Thing',
        name: 'Islamic Education'
      },
      inLanguage: 'en-US'
    });
  }

  // Breadcrumb Schema
  baseSchema['@graph'].push({
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: organization.url
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: title,
        item: url
      }
    ]
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema) }}
    />
  );
}