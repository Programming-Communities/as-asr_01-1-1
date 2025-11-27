// lib/apollo-client.ts
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

// ✅ Temporary fix - remove error throw
const WORDPRESS_GRAPHQL_URL = process.env.WORDPRESS_GRAPHQL_URL || 
                              'https://admin-al-asr.centers.pk/graphql';

console.log('GraphQL URL:', WORDPRESS_GRAPHQL_URL); // Debug

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