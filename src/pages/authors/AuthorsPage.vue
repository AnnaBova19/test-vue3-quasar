<template>
  <q-page padding class="column">
    <div class="row justify-between q-mb-md">
      <div class="text-h3 text-primary">Authors</div>
    </div>

    <div class="row justify-evenly">
      <q-spinner-dots v-if="loading"
        color="accent"
        size="4em"
      />

      <div v-else>
        <div class="row">
          <div v-for="author in allAuthors" :key="author.id" class="col-xs-12 col-md-6">
            <author-card
              :author="author"
              @click="router.push(`/author/${author.id}`)">
            </author-card>
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
import { useAuthorsStore } from 'stores/authors';
import AuthorCard from 'components/authors/AuthorCard.vue';

const router = useRouter();

const { allAuthors, loading } = storeToRefs(useAuthorsStore());
const { fetchAuthors } = useAuthorsStore();

if (!allAuthors.value.length) {
  fetchAuthors();
}
</script>