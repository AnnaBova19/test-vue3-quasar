<template>
  <q-item class="q-mb-sm">
    <q-item-section avatar top>
      <q-avatar color="primary" text-color="white">
        {{ avatarLetter }}
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-subtitle2">{{ review.name }}</q-item-label>
      <q-item-label caption lines="1" class="q-mb-sm">
        {{ review.email }}
      </q-item-label>
      <q-item-label>{{ review.body }}</q-item-label>
    </q-item-section>

    <q-item-section side top>
      <q-rating
        v-model="getRating"
        size="xs"
        :max="5"
        color="accent"
        readonly
      />
    </q-item-section>
  </q-item>

  <q-separator v-if="hasSeparator" inset="item" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Review } from 'src/models/Review';

const props = defineProps<{
  review: Review,
  hasSeparator: boolean,
}>();

const avatarLetter = computed<string>(() => {
  return props.review.name.substring(0, 1).toUpperCase();
});

const getRating = computed<number>(() => {
  return Math.floor(Math.random() * 5) + 1;
});
</script>
