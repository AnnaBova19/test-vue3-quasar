<template>
  <q-card class="bg-grey-1 q-ma-md q-pa-sm post-preview">   
    <q-card-section>
      <div class="column">
        <div class="text-h6 text-bold text-no-wrap post-title">
          <router-link :to="`/post/${post.id}`">
            {{ post.title }}
          </router-link>
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
  .post-title {
    flex: initial;
    a {
      color: $primary;
      text-decoration: none;
    }
  }
  &:hover {
    .post-title {
      a {
        color: $accent;
      }
    }
  }
}
</style>
