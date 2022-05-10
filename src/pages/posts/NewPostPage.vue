<template>
  <q-page padding class="row justify-evenly items-start">
    <q-card class="bg-grey-1 q-ma-md q-pa-sm post-form-card">
      <q-card-section>
        <div class="text-h3 text-primary text-center q-mb-md">New post</div>
        <PostForm
          @onPostAction="createPost"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { Post } from 'src/models/Post';
import PostForm from 'components/posts/PostForm.vue';

function createPost(event: Partial<Post>): void {
  // TO DO: create post
  console.log(event);
}
</script>

<style lang="scss">
.post-form-card{
  width: 100%;
  max-width: 700px;
}
</style>
