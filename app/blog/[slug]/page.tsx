// app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostsSlugs } from '@/lib/api/wordpress/posts';
import SinglePostClient from '@/app/components/pages/SinglePostClient';
import SEOMetadata from '@/components/seo/SEOMetadata';
import { WordPressSEOMeta } from '@/components/seo/types';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = await getAllPostsSlugs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found - Al-Asr Centers',
      description: 'The requested post could not be found.',
      robots: 'noindex, nofollow'
    };
  }

  // Extract WordPress SEO data
  const wordpressMeta: WordPressSEOMeta = {
    yoast_title: post.seo?.title || post.title,
    yoast_description: post.seo?.metaDesc || post.excerpt,
    yoast_canonical: post.seo?.canonical || `/blog/${post.slug}`,
    yoast_og_image: post.seo?.opengraphImage?.sourceUrl || post.featuredImage?.node?.sourceUrl,
    yoast_og_title: post.seo?.opengraphTitle || post.title,
    yoast_og_description: post.seo?.opengraphDescription || post.excerpt,
    yoast_twitter_title: post.seo?.twitterTitle || post.title,
    yoast_twitter_description: post.seo?.twitterDescription || post.excerpt,
    yoast_twitter_image: post.seo?.twitterImage?.sourceUrl || post.featuredImage?.node?.sourceUrl,
    yoast_schema: post.seo?.schema?.raw
  };

  return {
    title: wordpressMeta.yoast_title,
    description: wordpressMeta.yoast_description,
    alternates: {
      canonical: wordpressMeta.yoast_canonical,
    },
    openGraph: {
      title: wordpressMeta.yoast_og_title,
      description: wordpressMeta.yoast_og_description,
      images: [wordpressMeta.yoast_og_image || '/og-image.jpg'],
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.modified,
      authors: [post.author?.node?.name || 'Al-Asr Centers'],
      tags: post.categories?.nodes?.map(cat => cat.name) || [],
    },
    twitter: {
      card: 'summary_large_image',
      title: wordpressMeta.yoast_twitter_title,
      description: wordpressMeta.yoast_twitter_description,
      images: [wordpressMeta.yoast_twitter_image || '/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Extract WordPress SEO data for client component
  const wordpressMeta: WordPressSEOMeta = {
    yoast_title: post.seo?.title || post.title,
    yoast_description: post.seo?.metaDesc || post.excerpt,
    yoast_canonical: post.seo?.canonical || `/blog/${post.slug}`,
    yoast_og_image: post.seo?.opengraphImage?.sourceUrl || post.featuredImage?.node?.sourceUrl,
    yoast_og_title: post.seo?.opengraphTitle || post.title,
    yoast_og_description: post.seo?.opengraphDescription || post.excerpt,
    yoast_twitter_title: post.seo?.twitterTitle || post.title,
    yoast_twitter_description: post.seo?.twitterDescription || post.excerpt,
    yoast_twitter_image: post.seo?.twitterImage?.sourceUrl || post.featuredImage?.node?.sourceUrl,
    yoast_schema: post.seo?.schema?.raw
  };

  return (
    <>
      <SEOMetadata
        title={wordpressMeta.yoast_title}
        description={wordpressMeta.yoast_description}
        canonicalUrl={wordpressMeta.yoast_canonical}
        ogImage={wordpressMeta.yoast_og_image}
        ogType="article"
        article={{
          publishedTime: post.date,
          modifiedTime: post.modified,
          authors: [post.author?.node?.name || 'Al-Asr Centers'],
          tags: post.categories?.nodes?.map(cat => cat.name) || [],
        }}
        wordpressMeta={wordpressMeta}
      />
      <SinglePostClient post={post} />
    </>
  );
}