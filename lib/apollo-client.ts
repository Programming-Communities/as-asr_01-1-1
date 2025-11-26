// lib/apollo-client.ts
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

// Use server-side environment variable (no NEXT_PUBLIC_ prefix)
const WORDPRESS_GRAPHQL_URL = process.env.WORDPRESS_GRAPHQL_URL;

if (!WORDPRESS_GRAPHQL_URL) {
  throw new Error('WORDPRESS_GRAPHQL_URL environment variable is not set');
}

const httpLink = createHttpLink({
  uri: WORDPRESS_GRAPHQL_URL,
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  ssrMode: typeof window === 'undefined',
});

export function getClient() {
  return client;
}

export default client;