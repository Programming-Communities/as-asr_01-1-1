'use client';

import { useState } from 'react';

interface NewsletterFormProps {
  variant?: 'default' | 'minimal' | 'inline';
  className?: string;
}

export function NewsletterForm({ variant = 'default', className = '' }: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // TODO: Integrate with newsletter service (Mailchimp, ConvertKit, etc.)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate API call
      console.log('Subscribing email:', email);
      setSubscribed(true);
      setEmail('');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  // Minimal variant for headers/sidebars
  if (variant === 'minimal') {
    return (
      <div className={`newsletter-form minimal ${className}`}>
        {!subscribed ? (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
            <button
              type="submit"
              disabled={submitting}
              className="px-4 py-2 bg-red-900 hover:bg-red-800 disabled:bg-gray-400 text-white text-sm rounded-lg transition-colors font-medium whitespace-nowrap"
            >
              {submitting ? '...' : 'Subscribe'}
            </button>
          </form>
        ) : (
          <div className="text-green-600 dark:text-green-400 text-sm font-medium">
            ✅ Subscribed! Thank you.
          </div>
        )}
      </div>
    );
  }

  // Inline variant for content areas
  if (variant === 'inline') {
    return (
      <div className={`newsletter-form inline ${className}`}>
        {!subscribed ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="px-6 py-3 bg-red-900 hover:bg-red-800 disabled:bg-gray-400 text-white rounded-lg transition-colors font-semibold whitespace-nowrap"
            >
              {submitting ? 'Subscribing...' : 'Subscribe Now'}
            </button>
          </form>
        ) : (
          <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <div className="text-green-600 dark:text-green-400 text-lg mb-2">🎉</div>
            <h4 className="text-green-800 dark:text-green-300 font-semibold mb-1">
              Welcome to our community!
            </h4>
            <p className="text-green-700 dark:text-green-400 text-sm">
              Thank you for subscribing to our newsletter.
            </p>
          </div>
        )}
      </div>
    );
  }

  // Default variant - Full featured
  return (
    <div className={`newsletter-form default bg-linear-to-br from-red-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 border border-red-200 dark:border-red-800 rounded-2xl p-6 ${className}`}>
      {!subscribed ? (
        <>
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📧</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Stay Updated
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get the latest Islamic insights, events, and community updates delivered to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-center"
              />
            </div>
            
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-red-900 hover:bg-red-800 disabled:bg-gray-400 text-white py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 font-semibold flex items-center justify-center gap-2"
            >
              {submitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Subscribing...
                </>
              ) : (
                <>
                  <span>📨</span>
                  Subscribe to Newsletter
                </>
              )}
            </button>
          </form>

          <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
            No spam ever. Unsubscribe at any time.
          </p>
        </>
      ) : (
        <div className="text-center py-8">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">✅</span>
          </div>
          <h3 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-2">
            Welcome Aboard!
          </h3>
          <p className="text-green-700 dark:text-green-400 mb-4">
            Thank you for subscribing to our newsletter. We're excited to have you in our community.
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <strong>What to expect:</strong>
            </p>
            <ul className="text-xs text-gray-500 dark:text-gray-400 mt-2 space-y-1">
              <li>• Weekly Islamic insights and articles</li>
              <li>• Event announcements and community updates</li>
              <li>• Prayer time reminders</li>
              <li>• Exclusive content and resources</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}