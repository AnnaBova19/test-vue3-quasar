<template>
  <q-page padding class="row justify-evenly items-start">
    <q-spinner-dots v-if="loading"
      color="accent"
      size="4em"
    />

    <PostCard v-if="!!currentPost && !loading"
      :post="currentPost"
    />
  </q-page>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { usePostsStore } from 'stores/posts';
import PostCard from 'components/posts/PostCard.vue';

const route = useRoute();
const postsStore = usePostsStore();

const { currentPost, loading } = storeToRefs(postsStore);
const { fetchPost } = postsStore;

fetchPost(Number(route.params.id));
</script>