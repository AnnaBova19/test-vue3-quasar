<template>
  <q-card class="bg-grey-1 q-ma-md q-pa-sm">
    <div class="row justify-end">
      <q-btn
        round
        glossy
        size="sm"
        color="primary"
        icon="visibility"
        class="q-ma-xs"
        @click="viewPost">
        <q-tooltip anchor="top middle" self="bottom middle" :offset="[5,5]">
          View post
        </q-tooltip>
      </q-btn>
    </div>
    
    <q-card-section>
      <div class="column">
        <div class="text-h6 text-accent text-bold text-no-wrap">
          {{ post.title }}
        </div>
        <div>{{ post.body }}</div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Post } from '../models/Post';

const props = defineProps<{
  post: Post,
}>();

const router = useRouter();

function viewPost(): void {
  router.push(`/post/${props.post.id}`);
}
</script>
