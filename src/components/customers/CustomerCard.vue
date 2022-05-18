<template>
  <q-card class="bg-red-1 q-mx-xl q-my-md q-pa-sm customer-card">
    <q-item>
      <q-item-section avatar top>
        <q-avatar>
          <img :src="`https://i.pravatar.cc/150?img=${customer.id}`">
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label class="text-h6 customer-name" :class="{ 'text-no-wrap': $q.screen.gt.sm }">
          {{ customer.name }}
        </q-item-label>
        <q-item-label class="text-overline">{{ `@${customer.username}` }}</q-item-label>
      </q-item-section>
    </q-item> 

    <q-separator />

    <q-item>
      <q-item-section>
        <q-item-label class="text-overline">{{ customer.email }}</q-item-label>
        <q-item-label caption>
          Email
        </q-item-label>
      </q-item-section>
    </q-item>

    <q-item>
      <q-item-section>
        <q-item-label class="text-overline">{{ customer.website }}</q-item-label>
        <q-item-label caption>
          Website
        </q-item-label>
      </q-item-section>
    </q-item>

    <q-item>
      <q-item-section>
        <q-item-label class="text-overline">{{ customer.company.name }}</q-item-label>
        <q-item-label caption>
          Company
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-card>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { Customer } from 'src/models/Customer';

defineProps<{
  customer: Customer,
}>();

const $q = useQuasar();
</script>

<style scoped lang="scss">
.customer-card {
  cursor: pointer;
  .customer-name {
    color: $primary;
  }
  &:hover {
    .customer-name {
      color: $accent;
    }
  }
}
</style>