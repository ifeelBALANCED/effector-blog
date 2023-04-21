import { Post } from 'entities/post/types';
import { postsApi } from 'entities/posts/model';
import { usePosts } from 'shared/index';
import { useUnit } from 'effector-react';
import { memo } from 'react';
import { usePost } from 'shared/hooks/usePost';

type Props = {
  postId: Post['id'];
};

export const SinglePost = memo(({ postId }: Props) => {
  const { isProcessing } = usePosts();
  const handleDelete = useUnit(postsApi.remove);
  const post = usePost(postId);
  console.log('post', post);

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">{post?.title}</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">{post?.body}</p>
      </div>
      <div className="px-4 py-3 sm:px-6">
        <button
          type="button"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleDelete(postId)}
          disabled={isProcessing}
        >
          {isProcessing ? 'Deleting...' : 'Delete'}
        </button>
      </div>
    </div>
  );
});
