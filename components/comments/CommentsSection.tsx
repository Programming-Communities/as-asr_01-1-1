// components/comments/CommentsSection.tsx
'use client';

import { useState } from 'react';

interface CommentsSectionProps {
  postId: number | string; // Accept both number and string
  postSlug?: string;
  postTitle?: string;
}

interface Comment {
  id: number;
  content: string;
  date: string;
  author: {
    node: {
      name: string;
      email: string;
    };
  };
}

interface CommentFormData {
  name: string;
  email: string;
  comment: string;
}

export default function CommentsSection({ postId, postSlug, postTitle }: CommentsSectionProps) {
  const [formData, setFormData] = useState<CommentFormData>({
    name: '',
    email: '',
    comment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Add the new comment to local state
      const newComment: Comment = {
        id: Date.now(),
        content: formData.comment,
        date: new Date().toISOString(),
        author: {
          node: {
            name: formData.name,
            email: formData.email
          }
        }
      };
      
      setComments(prev => [newComment, ...prev]);
      setSubmitMessage({
        type: 'success',
        message: 'Comment submitted successfully! It will appear after moderation.'
      });
      setFormData({ name: '', email: '', comment: '' });
    } catch (error) {
      console.error('Error submitting comment:', error);
      setSubmitMessage({
        type: 'error',
        message: 'Failed to submit comment. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="comments-section">
        <h3 className="text-2xl font-bold mb-6">Comments</h3>
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto"></div>
          <p className="mt-4 text-gray-500 dark:text-gray-400">Loading comments...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="comments-section">
      <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Comments ({comments.length})
      </h3>
      
      {/* Comments List */}
      <div className="space-y-6 mb-8">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-linear-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {comment.author.node.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {comment.author.node.name}
                </h4>
                <time className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(comment.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </time>
              </div>
            </div>
            <div 
              className="text-gray-700 dark:text-gray-300 leading-relaxed prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: comment.content }}
            />
          </div>
        ))}
        
        {comments.length === 0 && (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="text-lg mb-2">No comments yet.</p>
            <p>Be the first to share your thoughts!</p>
          </div>
        )}
      </div>

      {/* Comment Form */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h4 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
          Leave a Comment
        </h4>
        
        {/* Submission Message */}
        {submitMessage && (
          <div className={`p-4 rounded-lg mb-6 ${
            submitMessage.type === 'success' 
              ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-800'
              : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-800'
          }`}>
            {submitMessage.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Comment *
            </label>
            <textarea
              id="comment"
              rows={6}
              required
              value={formData.comment}
              onChange={handleInputChange}
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors resize-vertical"
              placeholder="Share your thoughts..."
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-linear-to-r from-red-500 to-pink-500 text-white px-8 py-3 rounded-lg hover:from-red-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Submitting...
              </span>
            ) : (
              'Post Comment'
            )}
          </button>
        </form>

        {/* Privacy Note */}
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-800 dark:text-blue-300">
            <strong>Privacy Note:</strong> Your email address will not be published. 
            Required fields are marked *
          </p>
        </div>
      </div>
    </div>
  );
}