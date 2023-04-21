import { createGate } from 'effector-react';
import { createApi, createStore, sample } from 'effector';
import { pending } from 'patronum';
import { loadPostsFx } from 'entities/posts/effects';
import { Post } from 'entities/post/types';
import { createPostFx, deletePostFx, updatePostFx } from 'entities/post/effects';

export const $posts = createStore<Post[]>([]);

export const PostsGate = createGate();

export const postsApi = createApi($posts, {
  add: (store: Post[], eventPayload: Post) => {
    return store.concat(eventPayload);
  },
  remove: (store: Post[], postId: number) => {
    return store.filter((post) => post.id !== postId);
  },
  update: (store: Post[], eventPayload: Post) => {
    return store.map((post) => {
      if (post.id === eventPayload.id) {
        return eventPayload;
      }
      return post;
    });
  },
});

export const $postIds = $posts.map((posts) => {
  return posts.map((post) => post.id);
});
export const $isPostsProcessing = pending({
  effects: [loadPostsFx, createPostFx, deletePostFx, updatePostFx],
});
const combinedPostsActions = [postsApi.add, postsApi.remove, postsApi.update, PostsGate.open];
export const $hasPosts = $posts.map((posts) => posts.length > 0);

sample({
  clock: loadPostsFx.doneData,
  target: $posts,
});

sample({
  clock: combinedPostsActions,
  target: loadPostsFx,
});

sample({
  clock: postsApi.remove,
  fn: (postId) => postId,
  target: deletePostFx,
});
