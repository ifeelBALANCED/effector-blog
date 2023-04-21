import { useUnit } from 'effector-react';
import { $posts } from 'entities/posts/model';

export const usePost = (postId: number) => {
  const posts = useUnit($posts);

  return posts.find((p) => p.id === postId);
};
