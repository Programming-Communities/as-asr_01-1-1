// lib/api/wordpress/comments.ts
import fetchGraphQL from './client'; // ✅ Changed to default import
import { Comment } from '@/types/blog';
import { CACHE_TIMES } from '@/lib/constants';

// ✅ GET COMMENTS FOR A POST
export async function getCommentsForPost(postId: number): Promise<Comment[]> {
  try {
    const query = `
      query GetCommentsForPost($postId: ID!) {
        comments(where: {contentId: $postId, status: "APPROVED"}, first: 100) {
          nodes {
            id
            content
            date
            author {
              node {
                name
                email
                url
              }
            }
            parentId
          }
        }
      }
    `;

    const data = await fetchGraphQL(query, { postId }, {
      revalidate: CACHE_TIMES.short,
      tags: [`comments:${postId}`]
    });

    return data?.comments?.nodes || [];
  } catch (error) {
    console.error('Error fetching comments:', error);
    return [];
  }
}

// ✅ SUBMIT A COMMENT
export async function submitComment(
  postId: number,
  authorName: string,
  authorEmail: string,
  content: string,
  parentId?: number
): Promise<boolean> {
  try {
    const mutation = `
      mutation SubmitComment(
        $postId: Int!,
        $authorName: String!,
        $authorEmail: String!,
        $content: String!,
        $parentId: Int
      ) {
        createComment(input: {
          commentOn: $postId,
          author: $authorName,
          authorEmail: $authorEmail,
          content: $content,
          parent: $parentId
        }) {
          success
          comment {
            id
            content
            date
            author {
              node {
                name
                email
                url
              }
            }
          }
        }
      }
    `;

    const data = await fetchGraphQL(mutation, {
      postId,
      authorName,
      authorEmail,
      content,
      parentId: parentId || null
    });

    return data?.createComment?.success || false;
  } catch (error) {
    console.error('Error submitting comment:', error);
    return false;
  }
}