<template>
  <q-page padding class="row justify-evenly items-start">
    <q-spinner-dots v-if="loading"
      color="accent"
      size="4em"
    />

    <q-card v-if="!!currentPost && !loading"
      class="bg-grey-1 q-ma-md q-pa-sm post-form-card">
      <q-card-section>
        <div class="text-h3 text-primary text-center q-mb-md">Edit post</div>
        <PostForm
          :post="currentPost"
          @onPostAction="editPost"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { usePostsStore } from 'stores/posts';
import { Post } from 'src/models/Post';
import PostForm from 'components/posts/PostForm.vue';

const route = useRoute();
const { currentPost, loading } = storeToRefs(usePostsStore());
const { fetchPost } = usePostsStore();

fetchPost(Number(route.params.id));
function editPost(event: Partial<Post>): void {
  // TO DO: edit post
  console.log(event);
}
</script>

<style lang="scss">
.post-form-card {
  width: 100%;
  max-width: 700px;
}
</style>
