// contexts/CookieContext.tsx
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface CookieContextType {
  preferences: CookiePreferences;
  updatePreferences: (prefs: Partial<CookiePreferences>) => void;
  hasConsent: boolean;
  showBanner: boolean;
  hideBanner: () => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

const defaultPreferences: CookiePreferences = {
  necessary: true, // Always true as these are essential
  analytics: false,
  marketing: false,
};

export function CookieProvider({ children }: { children: React.ReactNode }) {
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [hasConsent, setHasConsent] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check for existing consent
    const savedConsent = localStorage.getItem('cookie-consent');
    const savedPreferences = localStorage.getItem('cookie-preferences');

    if (savedConsent === 'true' && savedPreferences) {
      try {
        const parsedPrefs = JSON.parse(savedPreferences);
        setPreferences({ ...defaultPreferences, ...parsedPrefs });
        setHasConsent(true);
        setShowBanner(false);
      } catch (error) {
        console.error('Error parsing cookie preferences:', error);
        setShowBanner(true);
      }
    } else {
      setShowBanner(true);
    }
  }, []);

  const updatePreferences = (newPrefs: Partial<CookiePreferences>) => {
    const updatedPrefs = { ...preferences, ...newPrefs };
    setPreferences(updatedPrefs);
    localStorage.setItem('cookie-preferences', JSON.stringify(updatedPrefs));
    localStorage.setItem('cookie-consent', 'true');
    setHasConsent(true);
    setShowBanner(false);
  };

  const hideBanner = () => {
    setShowBanner(false);
  };

  return (
    <CookieContext.Provider value={{
      preferences,
      updatePreferences,
      hasConsent,
      showBanner,
      hideBanner,
    }}>
      {children}
    </CookieContext.Provider>
  );
}

export function useCookie() {
  const context = useContext(CookieContext);
  if (context === undefined) {
    throw new Error('useCookie must be used within a CookieProvider');
  }
  return context;
}