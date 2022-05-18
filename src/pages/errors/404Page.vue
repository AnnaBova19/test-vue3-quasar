<template>
  <ErrorCard
    :status="404"
    :icon="'sentiment_very_dissatisfied'"
    :message="message"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ErrorCard from 'components/errors/ErrorCard.vue';

const message = ref('Sorry, this page cannot be found...');
</script>