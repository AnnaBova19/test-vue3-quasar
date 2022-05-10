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
    postsQuantity: (state) => state.posts.length,
    currentPost: (state) => state.post,
    getPostsPerAuthor: (state) => {
      return (authorId: string) => state.posts.filter((post: Post) => post.userId === authorId);
    }
  },
  actions: {
    async fetchPosts() {
      this.posts = [];
      this.loading = true;
      try {
        this.posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json()) 
      } catch (error) {
        if (error instanceof Error) {
          this.error = error.message;
        }
      } finally {
        this.loading = false;
      }
    },
    async fetchPost(postId: number) {
      this.post = undefined;
      this.loading = true;
      try {
        this.post = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
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
