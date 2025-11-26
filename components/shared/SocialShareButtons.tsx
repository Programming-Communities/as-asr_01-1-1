// components/shared/SocialShareButtons.tsx
'use client';

interface SocialShareButtonsProps {
  title: string;
  excerpt: string;
  url: string;
}

export default function SocialShareButtons({ 
  title, 
  excerpt, 
  url 
}: SocialShareButtonsProps) {
  const shareUrl = encodeURIComponent(url);
  const shareTitle = encodeURIComponent(title);
  const shareText = encodeURIComponent(excerpt);

  const socialPlatforms = [
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      icon: '👥',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`,
      icon: '🐦',
      color: 'bg-sky-500 hover:bg-sky-600'
    },
    {
      name: 'LinkedIn',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
      icon: '💼',
      color: 'bg-blue-700 hover:bg-blue-800'
    },
    {
      name: 'WhatsApp',
      url: `https://api.whatsapp.com/send?text=${shareTitle}%20${shareUrl}`,
      icon: '💬',
      color: 'bg-green-500 hover:bg-green-600'
    }
  ];

  const handleShare = (platformUrl: string, platformName: string) => {
    const width = 600;
    const height = 400;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    
    window.open(
      platformUrl,
      `share-${platformName}`,
      `width=${width},height=${height},left=${left},top=${top}`
    );
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {socialPlatforms.map((platform) => (
        <button
          key={platform.name}
          onClick={() => handleShare(platform.url, platform.name)}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg text-white transition-all duration-200 ${platform.color} shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
          aria-label={`Share on ${platform.name}`}
        >
          <span className="text-xl">{platform.icon}</span>
          <span className="font-medium">{platform.name}</span>
        </button>
      ))}
    </div>
  );
}