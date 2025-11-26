'use client';

import { useState, useEffect } from 'react';

interface CommentAuthor {
  node: {
    name: string;
    email?: string;
  };
}

interface Comment {
  id: string;
  author: CommentAuthor;
  content: string;
  date: string;
  replies?: {
    nodes: Comment[];
  };
}

interface UseCommentsReturn {
  comments: Comment[];
  loading: boolean;
  error: string | null;
  addComment: (comment: Comment) => void;
  refreshComments: () => void;
}

export function useComments(postId: string): UseCommentsReturn {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch comments from WordPress (or mock data for now)
  const fetchComments = async () => {
    try {
      setLoading(true);
      setError(null);

      // TODO: Replace with actual WordPress GraphQL query
      // const response = await fetchWordPressComments(postId);
      
      // Mock data for demonstration
      const mockComments: Comment[] = [
        {
          id: '1',
          author: { node: { name: 'Ahmed Khan', email: 'ahmed@example.com' } },
          content: '<p>This is a very insightful article. JazakAllah Khair for sharing!</p>',
          date: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
          replies: {
            nodes: [
              {
                id: '2',
                author: { node: { name: 'Admin', email: 'admin@al-asr.centers.pk' } },
                content: '<p>Thank you for your kind words, Ahmed!</p>',
                date: new Date(Date.now() - 43200000).toISOString(), // 12 hours ago
              }
            ]
          }
        },
        {
          id: '3',
          author: { node: { name: 'Fatima Ahmed', email: 'fatima@example.com' } },
          content: '<p>Could you please provide more details about the upcoming events?</p>',
          date: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
          replies: { nodes: [] }
        }
      ];

      setComments(mockComments);
    } catch (err) {
      setError('Failed to load comments');
      console.error('Error fetching comments:', err);
    } finally {
      setLoading(false);
    }
  };

  // Add a new comment
  const addComment = (comment: Comment) => {
    setComments(prev => [comment, ...prev]);
  };

  // Refresh comments
  const refreshComments = () => {
    fetchComments();
  };

  // Load comments on component mount
  useEffect(() => {
    fetchComments();
  }, [postId]);

  return {
    comments,
    loading,
    error,
    addComment,
    refreshComments
  };
}