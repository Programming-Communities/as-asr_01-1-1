import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import PostPageSkeleton from '@/components/skeleton/PostPageSkeleton';
import { PostPageClient } from './components/PostPageClient';
import { getPostBySlug, getAllPostsSlugs } from '@/lib/api/wordpress/posts';
import { CustomSchema } from '@/components/seo/CustomSchema';

// Enhanced RTL detection function
function isRTLText(text: string): boolean {
  if (!text) return false;
  const rtlRegex = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u0590-\u05FF\uFB50-\uFDFF\uFE70-\uFEFF\u0700-\u074F]/;
  return rtlRegex.test(text);
}

// PostContent component
async function PostContent({ slug }: { slug: string }) {
  try {
    const post = await getPostBySlug(slug);
    
    if (!post) {
      notFound();
    }

    // Enhanced RTL language detection
    const isTitleRTL = isRTLText(post.title);
    const isContentRTL = isRTLText(post.content);
    const isUrdu = isTitleRTL || isContentRTL;

    return (
      <>
        <CustomSchema post={post} />
        <PostPageClient post={post} slug={slug} isUrdu={isUrdu} />
      </>
    );
  } catch (error) {
    console.error(`Error fetching post with slug ${slug}:`, error);
    notFound();
  }
}

// Main page component
export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    
    return (
      <Suspense fallback={<PostPageSkeleton />}>
        <PostContent slug={slug} />
      </Suspense>
    );
  } catch (error) {
    console.error('Error in PostPage:', error);
    notFound();
  }
}

// Generate dynamic metadata for each post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
      return {
        title: 'Post Not Found | Al-Asr ( Islamic Service )',
        description: 'The requested post was not found.',
      };
    }

    const SITE_URL = "https://al-asr.centers.pk";
    
    const cleanExcerpt = post.excerpt?.replace(/<[^>]*>/g, '').substring(0, 160) + '...' ||
                        post.content?.replace(/<[^>]*>/g, '').substring(0, 160) + '...' ||
                        'Islamic services and community programs from Al-Asr ( Islamic Service )';

    const imageUrl = post.featuredImage?.node?.sourceUrl 
      ? post.featuredImage.node.sourceUrl
      : `${SITE_URL}/og-image.png`;

    const postUrl = `${SITE_URL}/posts/${slug}`;

    return {
      title: `${post.title} | Al-Asr ( Islamic Service )`,
      description: cleanExcerpt,
      alternates: { canonical: postUrl },
      openGraph: {
        title: post.title,
        description: cleanExcerpt,
        url: postUrl,
        siteName: "Al-Asr Islamic Service",
        images: [{ url: imageUrl, width: 1200, height: 630, alt: post.featuredImage?.node?.altText || post.title }],
        type: 'article',
        publishedTime: post.date,
        authors: [post.author?.node?.name || 'Al-Asr ( Islamic Service )'],
        locale: 'ur_PK',
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: cleanExcerpt,
        images: [imageUrl],
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Al-Asr ( Islamic Service )',
      description: 'Islamic services and community programs',
    };
  }
}

// Generate static params for SSG
export async function generateStaticParams() {
  try {
    const posts = await getAllPostsSlugs();
    
    if (!posts || !Array.isArray(posts)) {
      console.warn('No posts found or invalid posts data');
      return [];
    }
    
    return posts.map((post: { slug: string }) => ({ 
      slug: post.slug
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export const revalidate = 60;