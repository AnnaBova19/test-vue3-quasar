<template>
  <q-page padding class="row justify-evenly items-start">
    <q-spinner-dots v-if="loading"
      color="accent"
      size="4em"
    />

    <div v-if="!!currentAuthor && !loading">
      <author-card :author="currentAuthor"></author-card>
      <div class="row">
        <div v-for="post in getPostsPerAuthor(currentAuthor.id)" :key="post.id" class="col-xs-12 col-md-6">
          <post-preview
            :post="post"
            @click="router.push(`/post/${post.id}`)">
          </post-preview>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useAuthorsStore } from 'stores/authors';
import { usePostsStore } from 'stores/posts';
import AuthorCard from 'components/authors/AuthorCard.vue';
import PostPreview from 'components/posts/PostPreview.vue';

const router = useRouter();
const route = useRoute();
const { currentAuthor, loading } = storeToRefs(useAuthorsStore());
const { allPosts, getPostsPerAuthor } = storeToRefs(usePostsStore());
const { fetchAuthor } = useAuthorsStore();
const { fetchPosts } = usePostsStore();

fetchAuthor(Number(route.params.id));
if (!allPosts.value.length) {
  fetchPosts();
}
</script>