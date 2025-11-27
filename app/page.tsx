import { Suspense } from 'react';
import HomePageClient from './components/pages/HomePageClient';
import { CardLoader } from '@/components/shared/CardLoader';

export default function Home() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Loading...</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <CardLoader key={index} />
            ))}
          </div>
        </div>
      </div>
    }>
      <HomePageClient />
    </Suspense>
  );
}