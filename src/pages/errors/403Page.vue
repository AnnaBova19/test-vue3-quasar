<template>
  <ErrorCard
    :status="403"
    :icon="'block'"
    :message="message"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ErrorCard from 'components/errors/ErrorCard.vue';

const message = ref('Access to this resourse on the server is denied...');
</script>