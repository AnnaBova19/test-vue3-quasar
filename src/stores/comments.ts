import { defineStore } from 'pinia';
import { Comment } from 'src/models/Comment';

export type CommentsState = {
  comments: Array<Comment>;
  error: string;
};

export const useCommentsStore = defineStore('comments', {
  state: () => (
    {
      comments: [],
      error: ''
    } as CommentsState
  ),
  getters: {
    postComments: (state) => state.comments,
  },
  actions: {
    async fetchPostComments(postId: string) {
      this.comments = [];
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
