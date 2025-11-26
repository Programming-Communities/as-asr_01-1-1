// lib/apollo-wrapper.tsx
'use client';

import { ApolloProvider } from '@apollo/client/react';
import { client } from './apollo-client'; // ✅ Import client directly

interface ApolloWrapperProps {
  children: React.ReactNode;
}

export function ApolloWrapper({ children }: ApolloWrapperProps) {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}

export default ApolloWrapper;