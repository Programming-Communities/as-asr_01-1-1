// components/blog/BlogItem/SimpleBlogItem.tsx (temporary)
export default function SimpleBlogItem({ post }: { post: any }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <h3 className="text-lg font-bold text-black">{post.title}</h3>
      <p className="text-gray-600 mt-2">{post.excerpt}</p>
    </div>
  );
}