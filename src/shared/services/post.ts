import { Post } from 'entities/post';

const BASE_URL = `https://jsonplaceholder.typicode.com`;

class PostsService {
  async getPosts(): Promise<Post[]> {
    const req = await fetch(`${BASE_URL}/posts`);
    return req.json();
  }

  async createPost(post: Post): Promise<Post> {
    const req = await fetch(`${BASE_URL}/posts`, {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return req.json();
  }

  async updatePost(post: Post): Promise<Post> {
    const req = await fetch(`${BASE_URL}/posts/${post.id}`, {
      method: 'PUT',
      body: JSON.stringify(post),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return req.json();
  }

  async deletePost(postId: number): Promise<void> {
    await fetch(`${BASE_URL}/posts/${postId}`, {
      method: 'DELETE',
    });
  }
}

export const postsService = new PostsService();
