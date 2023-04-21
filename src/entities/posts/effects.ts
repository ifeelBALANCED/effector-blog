import { createEffect } from 'effector';
import { postsService } from 'shared/services/post';

export const loadPostsFx = createEffect(postsService.getPosts);
