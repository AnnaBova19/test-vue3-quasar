<template>
  <q-page padding class="row justify-evenly items-start">
    <q-spinner-dots v-if="loading"
      color="accent"
      size="4em"
    />

    <q-card v-if="!!currentOrder && !loading"
      class="bg-red-1 q-ma-md q-pa-sm order-form-card">
      <q-card-section>
        <div class="text-h3 text-primary text-center q-mb-md">Edit order</div>
        <OrderForm
          :order="currentOrder"
          @onPostAction="editOrder"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useOrdersStore } from 'stores/orders';
import { Order } from 'src/models/Order';
import OrderForm from 'components/orders/OrderForm.vue';

const route = useRoute();
const ordersStore = useOrdersStore();

const { currentOrder, loading } = storeToRefs(ordersStore);
const { fetchOrder } = ordersStore;

function editOrder(event: Partial<Order>): void {
  // TO DO: edit order
  console.log(event);
}

fetchOrder(Number(route.params.id));
</script>

<style lang="scss">
.order-form-card {
  width: 100%;
  max-width: 700px;
}
</style>
