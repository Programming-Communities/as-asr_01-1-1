// app/posts/[slug]/components/PostSocialShare.tsx
import SocialShareButtons from '@/components/shared/SocialShareButtons';

interface PostSocialShareProps {
  title: string;
  slug: string;
  isRTL: boolean;
}

export default function PostSocialShare({ title, slug, isRTL }: PostSocialShareProps) {
  const currentUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/posts/${slug}`
    : '';

  return (
    <div className={`my-8 ${isRTL ? 'text-right' : 'text-left'}`}>
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
        Share this post
      </h3>
      <SocialShareButtons 
        title={title}
        excerpt={title}
        url={currentUrl}
      />
    </div>
  );
}