<template>
  <q-card class="bg-grey-1 q-ma-md q-pa-sm">
    <q-card-actions align="right">
      <q-btn
        round
        glossy
        size="sm"
        color="primary"
        icon="visibility"
        @click="viewPost">
        <q-tooltip anchor="top middle" self="bottom middle" :offset="[5,5]">
          View post
        </q-tooltip>
      </q-btn>
    </q-card-actions>
    <q-card-section class="q-pt-none">
      <div class="column">
        <div class="text-h6 text-accent text-bold">
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

function viewPost() {
  router.push(`/post/${props.post.id}`);
}
</script>
