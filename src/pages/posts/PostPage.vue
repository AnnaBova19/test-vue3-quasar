<template>
  <q-page padding class="row justify-evenly items-start">
    <q-spinner-dots v-if="loading"
      color="accent"
      size="4em"
    />

    <div v-if="!!currentPost && !loading">
      <post-card :post="currentPost"></post-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { usePostsStore } from 'stores/posts';
import PostCard from 'components/posts/PostCard.vue';

const route = useRoute();
const { currentPost, loading } = storeToRefs(usePostsStore());
const { fetchPost } = usePostsStore();

fetchPost(Number(route.params.id));
</script>