'use client';

import { useState } from 'react';

interface Sponsor {
  id: string;
  name: string;
  logo: string;
  website: string;
  description: string;
  tier: 'premium' | 'gold' | 'silver';
}

interface SponsorBannerProps {
  sponsors?: Sponsor[];
  variant?: 'carousel' | 'grid' | 'single';
  className?: string;
}

const defaultSponsors: Sponsor[] = [
  {
    id: '1',
    name: 'Islamic Book Store',
    logo: '/sponsors/book-store.png',
    website: 'https://example.com',
    description: 'Your trusted source for Islamic books and resources',
    tier: 'premium'
  },
  {
    id: '2', 
    name: 'Halal Food Market',
    logo: '/sponsors/food-market.png',
    website: 'https://example.com',
    description: '100% Halal certified food products',
    tier: 'gold'
  },
  {
    id: '3',
    name: 'Muslim Travel Agency',
    logo: '/sponsors/travel-agency.png',
    website: 'https://example.com',
    description: 'Hajj & Umrah packages with 5-star service',
    tier: 'silver'
  }
];

export function SponsorBanner({ 
  sponsors = defaultSponsors, 
  variant = 'carousel',
  className = '' 
}: SponsorBannerProps) {
  const [currentSponsor, setCurrentSponsor] = useState(0);

  // Auto-rotate carousel
  useState(() => {
    if (variant === 'carousel') {
      const interval = setInterval(() => {
        setCurrentSponsor((prev) => (prev + 1) % sponsors.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  });

  // Single sponsor display
  if (variant === 'single' && sponsors.length > 0) {
    const sponsor = sponsors[0];
    return (
      <div className={`sponsor-banner single ${className}`}>
        <div className="bg-linear-to-r from-red-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 border border-red-200 dark:border-red-800 rounded-2xl p-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-xl flex items-center justify-center border border-gray-200 dark:border-gray-600">
              <span className="text-2xl">🏢</span>
            </div>
            <div className="text-left">
              <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                {sponsor.name}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {sponsor.description}
              </p>
            </div>
          </div>
          <a
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-900 hover:bg-red-800 text-white px-6 py-2 rounded-lg transition-colors font-medium text-sm"
          >
            Visit Website
          </a>
        </div>
      </div>
    );
  }

  // Grid layout for multiple sponsors
  if (variant === 'grid') {
    return (
      <div className={`sponsor-banner grid ${className}`}>
        <div className="bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
          <h3 className="text-center text-lg font-bold text-gray-900 dark:text-white mb-6">
            Our Valued Sponsors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className={`text-center p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                  sponsor.tier === 'premium' 
                    ? 'bg-linear-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border-yellow-200 dark:border-yellow-800' 
                    : sponsor.tier === 'gold'
                    ? 'bg-linear-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-200 dark:border-amber-800'
                    : 'bg-linear-to-br from-gray-50 to-slate-50 dark:from-gray-800 dark:to-slate-800 border-gray-200 dark:border-gray-700'
                }`}
              >
                <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-3 border border-gray-200 dark:border-gray-600">
                  <span className="text-xl">
                    {sponsor.tier === 'premium' ? '⭐' : sponsor.tier === 'gold' ? '🥇' : '🥈'}
                  </span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {sponsor.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-xs mb-3">
                  {sponsor.description}
                </p>
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-900 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 text-xs font-medium transition-colors"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Carousel variant (default)
  return (
    <div className={`sponsor-banner carousel ${className}`}>
      <div className="bg-linear-to-r from-red-900 to-red-800 rounded-2xl p-6 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="relative z-10">
          <div className="text-center mb-4">
            <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium mb-2">
              🤝 Community Partner
            </span>
            <h3 className="text-xl font-bold">
              Supported by Our Sponsors
            </h3>
          </div>

          <div className="flex items-center justify-between gap-6">
            {/* Sponsor Info */}
            <div className="flex-1 text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3 border border-white/30">
                <span className="text-3xl">🏢</span>
              </div>
              <h4 className="font-bold text-lg mb-1">
                {sponsors[currentSponsor]?.name}
              </h4>
              <p className="text-white/80 text-sm mb-3">
                {sponsors[currentSponsor]?.description}
              </p>
              <a
                href={sponsors[currentSponsor]?.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-red-900 hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors font-medium text-sm"
              >
                Visit Website
              </a>
            </div>

            {/* Navigation Dots */}
            <div className="flex flex-col gap-2">
              {sponsors.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSponsor(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSponsor 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Go to sponsor ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}