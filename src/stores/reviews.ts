import { defineStore } from 'pinia';
import { api } from 'boot/axios';
import { Review } from 'src/models/Review';
import { Notify } from 'quasar';

export type CommentsState = {
  reviews: Array<Review>;
  error: string;
};

export const useReviewsStore = defineStore('reviews', {
  state: () => (
    {
      reviews: [],
      error: ''
    } as CommentsState
  ),
  getters: {
    orderReviews: (state) => state.reviews,
  },
  actions: {
    fetchReviews(postId: string) {
      this.reviews = [];
      return api.get(`/comments?postId=${postId}`)
        .then((response) => {
          this.reviews = response.data;
        }) 
        .catch((error) => {
          Notify.create({
            message: 'Oops, something went wrong',
            caption: error.message,
            color: 'negative',
            icon: 'report_problem',
            position: 'top-right',
          });
        });
    },
  },
});
