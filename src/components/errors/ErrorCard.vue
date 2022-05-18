<template>
  <div class="fullscreen bg-red-3 text-white text-center q-pa-md flex flex-center">
    <div>
      <div>
        <q-icon :name="icon" size="10vh" />
      </div>

      <div class="error-status">
        {{ status }}
      </div>

      <div class="text-h2 text-red-1">
        {{ message }}
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="primary"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  status: number,
  icon: string,
  message: string,
}>();
</script>

<style scoped lang="scss">
.error-status {
  font-size: 21vh;
}
</style>
