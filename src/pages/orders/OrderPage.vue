<template>
  <q-page padding class="row justify-evenly items-start">
    <q-spinner-dots v-if="loading"
      color="accent"
      size="4em"
    />

    <OrderCard v-if="!!currentOrder && !loading"
      :order="currentOrder"
    />
  </q-page>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useOrdersStore } from 'stores/orders';
import OrderCard from 'components/orders/OrderCard.vue';

const route = useRoute();
const ordersStore = useOrdersStore();

const { currentOrder, loading } = storeToRefs(ordersStore);
const { fetchOrder } = ordersStore;

fetchOrder(Number(route.params.id));
</script>