'use client';

import { useState } from 'react';

interface CommentFormProps {
  postId: string;
  postSlug: string;
  postTitle: string;
  onCommentAdded: (comment: any) => void;
}

export function CommentForm({ postId, postSlug, postTitle, onCommentAdded }: CommentFormProps) {
  const [formData, setFormData] = useState({
    authorName: '',
    authorEmail: '',
    content: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // TODO: Integrate with WordPress comments API
      const newComment = {
        id: Date.now().toString(),
        author: { node: { name: formData.authorName } },
        content: formData.content,
        date: new Date().toISOString(),
        replies: { nodes: [] }
      };

      onCommentAdded(newComment);
      
      // Reset form
      setFormData({ authorName: '', authorEmail: '', content: '' });
    } catch (error) {
      console.error('Error submitting comment:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
      <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
        Leave a Comment
      </h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Your Name *"
          value={formData.authorName}
          onChange={(e) => setFormData({...formData, authorName: e.target.value})}
          required
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        />
        <input
          type="email"
          placeholder="Your Email *"
          value={formData.authorEmail}
          onChange={(e) => setFormData({...formData, authorEmail: e.target.value})}
          required
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        />
      </div>
      
      <textarea
        placeholder="Your Comment *"
        rows={4}
        value={formData.content}
        onChange={(e) => setFormData({...formData, content: e.target.value})}
        required
        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white mb-4"
      />
      
      <button
        type="submit"
        disabled={submitting}
        className="bg-red-900 hover:bg-red-800 disabled:bg-gray-400 text-white px-6 py-2 rounded-lg transition-colors"
      >
        {submitting ? 'Submitting...' : 'Post Comment'}
      </button>
    </form>
  );
}