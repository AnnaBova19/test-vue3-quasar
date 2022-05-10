<template>
  <q-card class="bg-grey-1 q-mx-xl q-my-md q-pa-sm author-card">
    <q-item>
      <q-item-section avatar top>
        <q-avatar>
          <img :src="`https://i.pravatar.cc/150?img=${author.id}`">
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label class="text-h6 text-no-wrap author-name">
          <router-link :to="`/author/${author.id}`">
            {{ author.name }}
          </router-link>
        </q-item-label>
        <q-item-label class="text-overline">{{ `@${author.username}` }}</q-item-label>
      </q-item-section>
    </q-item> 

    <q-separator />

    <q-item>
      <q-item-section>
        <q-item-label class="text-overline">{{ author.email }}</q-item-label>
        <q-item-label caption>
          Email
        </q-item-label>
      </q-item-section>
    </q-item>

    <q-item>
      <q-item-section>
        <q-item-label class="text-overline">{{ author.website }}</q-item-label>
        <q-item-label caption>
          Website
        </q-item-label>
      </q-item-section>
    </q-item>

    <q-item>
      <q-item-section>
        <q-item-label class="text-overline">{{ author.company.name }}</q-item-label>
        <q-item-label caption>
          Company
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-card>
</template>

<script setup lang="ts">
import { Author } from 'src/models/Author';

defineProps<{
  author: Author,
}>();
</script>

<style scoped lang="scss">
.author-card {
  .author-name {
    a {
      color: $primary;
      text-decoration: none;
    }
  }
  &:hover {
    .author-name {
      a {
        color: $accent;
      }
    }
  }
}
</style>