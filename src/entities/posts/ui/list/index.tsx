import { useGate } from 'effector-react';
import { PostsGate } from 'entities/posts/model';
import { usePosts } from 'shared';
import { Loader } from 'shared/ui';

export const PostsList = () => {
  useGate(PostsGate);
  const { posts, isProcessing, hasPosts } = usePosts();

  if (isProcessing) return <Loader />;

  return hasPosts && !isProcessing ? (
    <div className="flex flex-col space-y-4">{posts}</div>
  ) : (
    <div>No posts available</div>
  );
};
