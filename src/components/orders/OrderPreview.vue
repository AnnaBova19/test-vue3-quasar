<template>
  <q-card class="bg-red-1 q-ma-md q-pa-sm order-preview">   
    <q-card-section>
      <div class="column">
        <div class="text-h6 text-bold text-no-wrap order-title">
          {{ order.title }}
          <q-tooltip anchor="top start" self="bottom start" :offset="[5,5]">
            {{ order.title }}
          </q-tooltip>
        </div>
        <div>{{ order.body }}</div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { Order } from 'src/models/Order';

defineProps<{
  order: Order,
}>();
</script>

<style scoped lang="scss">
.order-preview {
  min-height: 143px;
  cursor: pointer;
  .order-title {
    color: $primary;
  }
  &:hover {
    .order-title {
      color: $accent;
    }
  }
}
</style>
