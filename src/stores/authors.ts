import { defineStore } from 'pinia';
import { Author } from 'src/models/Author';
import { Post } from 'src/models/Post';

export type AuthorsState = {
  authors: Array<Author>;
  author?: Author;
  posts: Array<Post>;
  loading: boolean;
  error: string;
};

export const useAuthorsStore = defineStore('authors', {
  state: () => (
    {
      authors: [],
      author: undefined,
      posts: [],
      loading: false,
      error: ''
    } as AuthorsState
  ),
  getters: {
    allAuthors: (state) => state.authors,
    currentAuthor: (state) => state.author,
  },
  actions: {
    async fetchAuthors() {
      this.authors = [];
      this.loading = true;
      try {
        this.authors = await fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json()) 
      } catch (error) {
        if (error instanceof Error) {
          this.error = error.message;
        }
      } finally {
        this.loading = false;
      }
    },
    async fetchAuthor(authorId: number) {
      this.author = undefined;
      this.loading = true;
      try {
        this.author = await fetch(`https://jsonplaceholder.typicode.com/users/${authorId}`)
        .then((response) => response.json())
      } catch (error) {
        if (error instanceof Error) {
          this.error = error.message;
        }
      } finally {
        this.loading = false;
      }
    },
  },
});
