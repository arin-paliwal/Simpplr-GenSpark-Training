import React from 'react';
import { Post } from '../types/post';

interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{post.title}</h2>
        <p className="text-gray-600">{post.body}</p>
      </div>
      <div className="bg-gray-100 px-6 py-4">
        <p className="text-sm text-gray-500">User ID: {post.userId}</p>
        <p className="text-sm text-gray-500">Post ID: {post.id}</p>
      </div>
    </div>
  );
};

