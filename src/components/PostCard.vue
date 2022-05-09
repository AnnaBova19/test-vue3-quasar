<template>
  <q-card class="bg-grey-1 q-ma-md q-pa-sm">
    <q-card-actions align="right">
      <q-btn
        v-for="btn in actionBtns" :key="btn.title"
        round
        glossy
        size="sm"
        :color="btn.color"
        :icon="btn.icon">
        <q-tooltip anchor="top middle" self="bottom middle" :offset="[5,5]">
          {{ btn.title }}
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
// import { Post } from '../models/Post';

defineProps(['post']);

const actionBtns = [
    {
    title: 'Edit',
    color: 'accent',
    icon: 'edit',
  },
    {
    title: 'Delete',
    color: 'grey',
    icon: 'delete',
  }
];
</script>