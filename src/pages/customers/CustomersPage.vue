<template>
  <q-page padding class="column">
    <div class="row justify-between q-mb-md">
      <div class="text-h3 text-primary">Customers</div>
    </div>

    <div class="row justify-evenly">
      <q-spinner-dots v-if="loading"
        color="accent"
        size="4em"
      />

      <div v-else>
        <div class="row">
          <div v-for="customer in allCustomers" :key="customer.id" class="col-xs-12 col-md-6">
            <CustomerCard
              :customer="customer"
              @click="router.push(`/customer/${customer.id}`)"
            />
          </div>
        </div>

        <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
          <q-btn fab icon="keyboard_arrow_up" color="accent" />
        </q-page-scroller>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useCustomersStore } from 'stores/customers';
import CustomerCard from 'components/customers/CustomerCard.vue';

const router = useRouter();
const customersStore = useCustomersStore();

const { allCustomers, loading } = storeToRefs(customersStore);
const { fetchCustomers } = customersStore;

if (!allCustomers.value.length) {
  fetchCustomers();
}
</script>