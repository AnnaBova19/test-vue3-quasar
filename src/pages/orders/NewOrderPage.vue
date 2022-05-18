<template>
  <q-page padding class="row justify-evenly items-start">
    <q-card class="bg-red-1 q-ma-md q-pa-sm order-form-card">
      <q-card-section>
        <div class="text-h3 text-primary text-center q-mb-md">New order</div>
        <OrderForm
          @onPostAction="createOrder"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { Order } from 'src/models/Order';
import OrderForm from 'components/orders/OrderForm.vue';

function createOrder(event: Partial<Order>): void {
  // TO DO: create order
  console.log(event);
}
</script>

<style lang="scss">
.order-form-card{
  width: 100%;
  max-width: 700px;
}
</style>
