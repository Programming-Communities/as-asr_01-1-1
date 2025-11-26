'use client'

import { ThemeProvider } from "@/contexts/ThemeContext";
import { CookieProvider } from "@/contexts/CookieContext";
import { ApolloWrapper } from "@/lib/apollo-wrapper";
import CookieConsent from "@/components/shared/CookieConsent";
import { PerformanceMonitor } from "@/components/shared/PerformanceMonitor";
import { Analytics } from "@/components/shared/Analytics";
import { PWAInstaller } from "@/components/shared/PWAInstaller";

interface RootLayoutClientProps {
  children: React.ReactNode;
}

export function RootLayoutClient({ children }: RootLayoutClientProps) {
  return (
    <CookieProvider>
      <ThemeProvider>
        <ApolloWrapper>
          {/* Performance Monitoring */}
          {process.env.NODE_ENV === 'development' && <PerformanceMonitor />}
          
          {/* PWA Install Button */}
          <PWAInstaller />
          
          {/* Main Content */}
          <main role="main" id="main-content" className="min-h-screen lcp-optimize">
            {children}
          </main>
          
          {/* Analytics */}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ApolloWrapper>
        
        {/* Cookie Consent */}
        <CookieConsent />
      </ThemeProvider>
    </CookieProvider>
  );
}