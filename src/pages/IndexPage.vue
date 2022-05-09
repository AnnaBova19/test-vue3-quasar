<template>
  <q-page padding class="row items-center justify-evenly">
    <q-spinner-dots v-if="loading"
      color="accent"
      size="4em"
    />

    <div v-else>
      <div class="row">
        <div v-for="post in allPosts" :key="post.id" class="col-6">
          <post-preview
            :post="post">
          </post-preview>
        </div>
      </div>

      <div class="q-pa-lg flex flex-center">
        <q-pagination
          :model-value="currentPage"
          color="primary"
          :max="100/postsPerPage"
          :max-pages="5"
          direction-links
          boundary-links
          @update:model-value="handlePageChange"
        />
      </div>

      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
        <q-btn fab icon="keyboard_arrow_up" color="accent" />
      </q-page-scroller>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { usePostsStore } from 'stores/posts';
import PostPreview from 'components/PostPreview.vue';

const currentPage = ref(1);
const postsPerPage = ref(10);

const { allPosts, loading } = storeToRefs(usePostsStore());
const { fetchPosts } = usePostsStore();

fetchPosts(currentPage.value, postsPerPage.value);

function handlePageChange(value: string) {
  currentPage.value = Number(value);
  fetchPosts(currentPage.value, postsPerPage.value);
}
</script>
