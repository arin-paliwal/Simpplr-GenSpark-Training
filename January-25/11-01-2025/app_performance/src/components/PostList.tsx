import React from 'react';
import { PostCard } from './PostCard';
import { Pagination } from './Pagination';
import { usePosts } from '../hooks/usePosts';

export const PostList: React.FC = () => {
  const { currentPosts, loading, error, currentPage, totalPages, paginate } = usePosts(6);

  if (loading) {
    return <div className="text-center text-2xl font-bold text-gray-600">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-2xl font-bold text-red-600">Error: {error}</div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
    </>
  );
};

