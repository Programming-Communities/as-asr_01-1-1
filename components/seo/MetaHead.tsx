// components/seo/MetaHead.tsx
import { SEOProps } from './types';

interface MetaHeadProps extends Pick<SEOProps, 'title' | 'description' | 'canonicalUrl' | 'noindex' | 'nofollow'> {
  siteName?: string;
  currentUrl?: string;
}

export default function MetaHead({ 
  title = 'Al-Asr Centers - Islamic Knowledge Portal',
  description = 'Comprehensive Islamic knowledge, community programs, and spiritual guidance for the Muslim community.',
  canonicalUrl = '/',
  siteName = 'Al-Asr Centers',
  currentUrl = '/',
  noindex = false,
  nofollow = false
}: MetaHeadProps) {
  const robotsContent = noindex || nofollow 
    ? `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`
    : 'index, follow';

  return (
    <>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="islam, quran, hadith, prayer, islamic knowledge, muslim community, islamic center" />
      <meta name="author" content="Al-Asr Centers" />
      <meta name="publisher" content="Al-Asr Centers" />
      
      {/* Robots */}
      <meta name="robots" content={robotsContent} />
      
      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Additional Meta */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta httpEquiv="x-ua-compatible" content="IE=edge" />
      
      {/* Language */}
      <meta httpEquiv="content-language" content="en" />
      <meta name="language" content="English" />
      
      {/* Social Media Basic */}
      <meta property="og:site_name" content={siteName} />
      <meta name="twitter:site" content="@al_asr_centers" />
      
      {/* Verification - Add your verification codes here */}
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="facebook-domain-verification" content="your-verification-code" />
    </>
  );
}