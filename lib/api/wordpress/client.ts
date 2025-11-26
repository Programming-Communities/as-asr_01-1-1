// lib/api/wordpress/client.ts
export default async function fetchGraphQL(
  query: string,
  variables?: Record<string, any>,
  options?: {
    revalidate?: number;
    tags?: string[];
  }
) {
  const WORDPRESS_GRAPHQL_URL = process.env.WORDPRESS_GRAPHQL_URL;

  if (!WORDPRESS_GRAPHQL_URL) {
    throw new Error('WORDPRESS_GRAPHQL_URL is not defined');
  }

  try {
    const response = await fetch(WORDPRESS_GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      next: options || { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`GraphQL request failed: ${response.statusText}`);
    }

    const { data, errors } = await response.json();

    if (errors) {
      console.error('GraphQL Errors:', errors);
      throw new Error('GraphQL query failed');
    }

    return data;
  } catch (error) {
    console.error('GraphQL Fetch Error:', error);
    throw error;
  }
}