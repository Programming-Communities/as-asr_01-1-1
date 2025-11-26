// components/comments/CommentList.tsx
'use client';

import CommentItem from './CommentItem'; // ✅ Fixed: Changed to default import

interface Comment {
  id: string;
  author: {
    node: {
      name: string;
      email?: string;
    };
  };
  content: string;
  date: string;
  replies?: {
    nodes: Comment[];
  };
}

interface CommentListProps {
  comments: Comment[];
  loading: boolean;
  error: string | null;
}

export function CommentList({ comments, loading, error }: CommentListProps) {
  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/4" />
                <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-3/4" />
                <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="text-red-600 dark:text-red-400 text-lg mb-2">⚠️</div>
        <p className="text-gray-600 dark:text-gray-300">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-3 text-red-900 dark:text-red-400 hover:underline text-sm"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (comments.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="text-gray-400 text-4xl mb-3">💬</div>
        <h4 className="text-gray-600 dark:text-gray-300 font-semibold mb-2">
          No Comments Yet
        </h4>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Be the first to share your thoughts!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
}