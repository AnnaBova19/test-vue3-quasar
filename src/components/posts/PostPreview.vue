<template>
  <q-card class="bg-grey-1 q-ma-md q-pa-sm post-preview">   
    <q-card-section>
      <div class="column">
        <div class="text-h6 text-bold text-no-wrap post-title">
          {{ post.title }}
          <q-tooltip anchor="top start" self="bottom start" :offset="[5,5]">
            {{ post.title }}
          </q-tooltip>
        </div>
        <div>{{ post.body }}</div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { Post } from 'src/models/Post';

defineProps<{
  post: Post,
}>();
</script>

<style scoped lang="scss">
.post-preview {
  cursor: pointer;
  .post-title {
    color: $primary;
  }
  &:hover {
    .post-title {
      color: $accent;
    }
  }
}
</style>
