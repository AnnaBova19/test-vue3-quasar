<template>
  <q-page padding class="column">
    <div class="row justify-between q-mb-">
      <div class="text-h3 text-primary">Posts</div>
      <q-btn
        class="glossy"
        color="primary"
        icon="add"
        label="Create new post"
        to="new_post" />
    </div>

    <div class="row justify-evenly">
      <q-spinner-dots v-if="loading"
        color="accent"
        size="4em"
      />

      <div v-else>
        <div class="row">
          <div v-for="post in postsOnPage" :key="post.id" class="col-xs-12 col-md-6">
            <PostPreview
              :post="post"
              @click="router.push(`/post/${post.id}`)"
            />
          </div>
        </div>

        <div class="q-pa-lg flex flex-center">
          <q-pagination
            v-model="currentPage"
            color="primary"
            :max="totalPages"
            :max-pages="5"
            direction-links
            boundary-links
          />
        </div>

        <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
          <q-btn fab icon="keyboard_arrow_up" color="accent" />
        </q-page-scroller>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { usePostsStore } from 'stores/posts';
import { Post } from 'src/models/Post';
import PostPreview from 'components/posts/PostPreview.vue';

const router = useRouter();
const postsStore = usePostsStore();

const currentPage = ref(1);
const postsPerPage = ref(10);

const { allPosts, postsQuantity, loading } = storeToRefs(postsStore);
const { fetchPosts } = postsStore;

const totalPages = computed<number>(() => {
  return postsQuantity.value / postsPerPage.value;
});

const postsOnPage = computed<Array<Post>>(() => {
  return allPosts.value.slice((currentPage.value - 1) * totalPages.value, (currentPage.value - 1) * totalPages.value + totalPages.value);
});

if (!allPosts.value.length) {
  fetchPosts();
}
</script>
