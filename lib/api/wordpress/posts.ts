// lib/api/wordpress/posts.ts
import fetchGraphQL from './client'; 
import { getClient } from './apollo-client';
import { gql } from '@apollo/client'; // ✅ Add this import
import { PostsResponse, PostResponse, PostsSlugsResponse } from '@/types/graphql';

const POST_FIELDS = gql`
  fragment PostFields on Post {
    id
    title
    excerpt
    content
    slug
    date
    modified
    featuredImage {
      node {
        sourceUrl
        altText
        mediaDetails {
          width
          height
        }
      }
    }
    author {
      node {
        name
        avatar {
          url
        }
      }
    }
    categories {
      nodes {
        id
        name
        slug
      }
    }
    tags {
      nodes {
        id
        name
        slug
      }
    }
    seo {
      title
      metaDesc
      canonical
      opengraphTitle
      opengraphDescription
      opengraphImage {
        sourceUrl
      }
      twitterTitle
      twitterDescription
      twitterImage {
        sourceUrl
      }
      schema {
        raw
      }
    }
  }
`;

export const GET_POSTS = gql`
  ${POST_FIELDS}
  query GetPosts($first: Int = 10) {
    posts(first: $first) {
      nodes {
        ...PostFields
      }
    }
  }
`;

export const GET_POST_BY_SLUG = gql`
  ${POST_FIELDS}
  query GetPostBySlug($slug: String!) {
    postBy(slug: $slug) {
      ...PostFields
    }
  }
`;

export const GET_ALL_POSTS_SLUGS = gql`
  query GetAllPostsSlugs {
    posts(first: 100) {
      nodes {
        slug
      }
    }
  }
`;

export async function getPosts(first: number = 10) {
  try {
    const client = getClient();
    const { data } = await client.query<PostsResponse>({
      query: GET_POSTS,
      variables: { first },
    });

    if (!data?.posts?.nodes) {
      console.warn('No posts data received');
      return [];
    }

    return data.posts.nodes;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPost(slug: string) {
  try {
    const client = getClient();
    const { data } = await client.query<PostResponse>({
      query: GET_POST_BY_SLUG,
      variables: { slug },
    });

    if (!data?.postBy) {
      console.warn(`No post found for slug: ${slug}`);
      return null;
    }

    return data.postBy;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export const getPostBySlug = getPost;

export async function getAllPostsSlugs() {
  try {
    const client = getClient();
    const { data } = await client.query<PostsSlugsResponse>({
      query: GET_ALL_POSTS_SLUGS,
    });

    if (!data?.posts?.nodes) {
      console.warn('No posts slugs data received');
      return [];
    }

    return data.posts.nodes.map((node) => ({
      slug: node.slug,
    }));
  } catch (error) {
    console.error('Error fetching post slugs:', error);
    return [];
  }
}