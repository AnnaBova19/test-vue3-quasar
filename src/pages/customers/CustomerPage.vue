<template>
  <q-page padding class="row justify-evenly items-start">
    <q-spinner-dots v-if="loading"
      color="accent"
      size="4em"
    />

    <div v-if="!!currentCustomer && !loading">
      <CustomerCard :customer="currentCustomer"
      />
      <div class="row">
        <div v-for="order in getOrdersPerCustomer(currentCustomer.id)" :key="order.id" class="col-xs-12 col-md-6">
          <OrderPreview
            :order="order"
            @click="router.push(`/order/${order.id}`)" 
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useCustomersStore } from 'stores/customers';
import { useOrdersStore } from 'stores/orders';
import CustomerCard from 'components/customers/CustomerCard.vue';
import OrderPreview from 'components/orders/OrderPreview.vue';

const router = useRouter();
const route = useRoute();
const customersStore = useCustomersStore();
const ordersStore = useOrdersStore();

const { currentCustomer, loading } = storeToRefs(customersStore);
const { allOrders, getOrdersPerCustomer } = storeToRefs(ordersStore);
const { fetchCustomer } = customersStore;
const { fetchOrders } = ordersStore;

fetchCustomer(Number(route.params.id));
if (!allOrders.value.length) {
  fetchOrders();
}
</script>