import { defineStore } from 'pinia';
import { Post } from 'src/models/Post';

export type PostsState = {
  posts: Array<Post>;
  post?: Post;
  loading: boolean;
  error: string;
};

export const usePostsStore = defineStore('posts', {
  state: () => (
    {
      posts: [],
      post: undefined,
      loading: false,
      error: ''
    } as PostsState
  ),
  getters: {
    allPosts: (state) => state.posts,
    currentPost: (state) => state.post,
  },
  actions: {
    async fetchPosts(page: number, limit: number) {
      this.posts = [];
      this.loading = true;
      try {
        this.posts = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`)
        .then((response) => response.json()) 
      } catch (error) {
        if (error instanceof Error) {
          this.error = error.message;
        }
      } finally {
        this.loading = false;
      }
    },
    async fetchPost(id: number) {
      this.post = undefined;
      this.loading = true;
      try {
        this.post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
      } catch (error) {
        if (error instanceof Error) {
          this.error = error.message;
        }
      } finally {
        this.loading = false;
      }
    }
  },
});
