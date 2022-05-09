import { defineStore } from 'pinia';

export const useCommentsStore = defineStore('comments', {
  state: () => ({
    comments: [],
    error: ''
  }),
  getters: {
    postComments: (state) => state.comments,
  },
  actions: {
    async fetchComments(postId: string) {
      try {
        this.comments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then((response) => response.json()) 
      } catch (error) {
        if (error instanceof Error) {
          this.error = error.message;
        }
      }
    },
  },
});
