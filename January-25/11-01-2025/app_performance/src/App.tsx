import React from 'react';
import { PostList } from './components/PostList';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">React Posts App</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-6 text-center">Latest Posts</h2>
        <PostList />
      </main>
    </div>
  );
};

export default App;

