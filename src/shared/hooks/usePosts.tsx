import { useList, useUnit } from 'effector-react';
import { $hasPosts, $isPostsProcessing, $posts } from 'entities/posts/model';
import { SinglePost } from 'entities/post';

export const usePosts = () => {
  const isPostsProcessing = useUnit($isPostsProcessing);
  const hasPosts = useUnit($hasPosts);
  const posts = useList($posts, ({ id }) => <SinglePost postId={id} />);

  return {
    posts,
    hasPosts,
    isProcessing: isPostsProcessing,
  };
};
