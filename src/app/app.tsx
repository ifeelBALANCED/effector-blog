import { PostsList } from '../entities/posts';

export const Application = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      <PostsList />
    </div>
  );
};
