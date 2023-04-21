import { createEffect } from 'effector';
import { postsService } from 'shared/services/post';

export const createPostFx = createEffect(postsService.createPost);
export const updatePostFx = createEffect(postsService.updatePost);
export const deletePostFx = createEffect(postsService.deletePost);
