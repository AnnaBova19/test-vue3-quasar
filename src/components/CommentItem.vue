<template>
  <q-item class="q-mb-sm">
    <q-item-section avatar>
      <q-avatar color="primary" text-color="white">
        {{ avatarLetter }}
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-subtitle2">{{ comment.name }}</q-item-label>
      <q-item-label caption lines="1" class="q-mb-sm">
        {{ comment.email }}
      </q-item-label>
      <q-item-label>{{ comment.body }}</q-item-label>
    </q-item-section>

    <q-item-section side top>
      <q-rating
        v-model="getRating"
        size="1em"
        :max="5"
        color="primary"
        readonly
      />
    </q-item-section>
  </q-item>

  <q-separator v-if="hasSeparator" inset="item" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Comment } from '../models/Comment';

const props = defineProps<{
  comment: Comment,
  hasSeparator: boolean,
}>();

const avatarLetter = computed<string>(() => {
  return props.comment.name.substring(0, 1).toUpperCase();
});

const getRating = computed<number>(() => {
  return Math.floor(Math.random() * 5) + 1;
});
</script>
