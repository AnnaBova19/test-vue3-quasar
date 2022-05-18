<template>
  <q-page padding class="column">
    <div class="row justify-between q-mb-">
      <div class="text-h3 text-primary">Orders</div>
      <q-btn
        class="glossy"
        color="primary"
        icon="add"
        label="Create new order"
        to="new_order" />
    </div>

    <div class="row justify-evenly">
      <q-spinner-dots v-if="loading"
        color="accent"
        size="4em"
      />

      <div v-else>
        <div class="row">
          <div v-for="order in postsOnPage" :key="order.id" class="col-xs-12 col-md-6">
            <OrderPreview
              :order="order"
              @click="router.push(`/order/${order.id}`)"
            />
          </div>
        </div>

        <div class="q-pa-lg flex flex-center">
          <q-pagination
            v-model="currentPage"
            color="primary"
            :max="totalPages"
            :max-pages="5"
            direction-links
            boundary-links
          />
        </div>

        <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
          <q-btn fab icon="keyboard_arrow_up" color="accent" />
        </q-page-scroller>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useOrdersStore } from 'stores/orders';
import { Order } from 'src/models/Order';
import OrderPreview from 'components/orders/OrderPreview.vue';

const router = useRouter();
const ordersStore = useOrdersStore();

const currentPage = ref(1);
const postsPerPage = ref(10);

const { allOrders, ordersQuantity, loading } = storeToRefs(ordersStore);
const { fetchOrders } = ordersStore;

const totalPages = computed<number>(() => {
  return ordersQuantity.value / postsPerPage.value;
});

const postsOnPage = computed<Array<Order>>(() => {
  return allOrders.value.slice((currentPage.value - 1) * totalPages.value, (currentPage.value - 1) * totalPages.value + totalPages.value);
});

if (!allOrders.value.length) {
  fetchOrders();
}
</script>
