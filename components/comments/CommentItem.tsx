'use client';

interface CommentItemProps {
  comment: {
    id: string;
    content: string;
    date: string;
    author: {
      node: {
        name: string;
        email?: string;
      };
    };
  };
}

export default function CommentItem({ comment }: CommentItemProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-linear-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
            {comment.author.node.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{comment.author.node.name}</h4>
            <p className="text-gray-500 text-sm">
              {new Date(comment.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>
        </div>
      </div>
      
      <div 
        className="text-gray-700 leading-relaxed prose prose-sm max-w-none"
        dangerouslySetInnerHTML={{ __html: comment.content }}
      />
    </div>
  );
}