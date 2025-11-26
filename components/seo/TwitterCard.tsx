// components/seo/TwitterCard.tsx
import { SEOProps } from './types';

interface TwitterCardProps extends Pick<SEOProps, 'title' | 'description' | 'ogImage'> {
  cardType?: 'summary' | 'summary_large_image' | 'app' | 'player';
  site?: string;
  creator?: string;
}

export default function TwitterCard({
  title = 'Al-Asr Centers - Islamic Knowledge Portal',
  description = 'Comprehensive Islamic knowledge, community programs, and spiritual guidance',
  ogImage = '/og-image.jpg',
  cardType = 'summary_large_image',
  site = '@al_asr_centers',
  creator = '@al_asr_centers'
}: TwitterCardProps) {
  return (
    <>
      {/* Twitter Card */}
      <meta name="twitter:card" content={cardType} />
      <meta name="twitter:site" content={site} />
      <meta name="twitter:creator" content={creator} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Additional Twitter */}
      <meta name="twitter:domain" content="al-asr.centers.pk" />
    </>
  );
}