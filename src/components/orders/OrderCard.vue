<template>
  <q-card class="bg-red-1 q-ma-md q-pa-sm order-card">
    <div class="row justify-end">
      <q-btn
        v-for="btn in actionBtns" :key="btn.title"
        round
        glossy
        size="sm"
        :color="btn.color"
        :icon="btn.icon"
        class="q-ma-xs"
        @click="btn.action">
        <q-tooltip anchor="top middle" self="bottom middle" :offset="[5,5]">
          {{ btn.title }}
        </q-tooltip>
      </q-btn>
    </div>

    <q-card-section>
      <div class="column">
        <div class="text-h5 text-primary text-bold q-mb-md">
          {{ order.title }}
        </div>
        <div class="text-body1">{{ order.body }}</div>
      </div>
    </q-card-section>

    <q-card-actions align="right">
      <div class="text-overline text-grey">
        {{ expanded ? 'Hide' : 'See' }} reviews
      </div>
      <q-btn
        color="grey"
        round
        flat
        dense
        :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
        @click="toggleReviews"
      />
    </q-card-actions>

    <q-slide-transition>
      <div v-show="expanded">
        <q-separator />
        <q-card-section class="text-subitle2">
          <q-list v-if="!!reviews.length">
            <ReviewItem
              v-for="(review, index) in reviews"
              :key="review.id"
              :review="review"
              :has-separator="index !== reviews.length - 1"
            />
          </q-list>

          <div class="row justify-evenly" v-else>
            <q-spinner-dots
              color="accent"
              size="2.5em"
            />
          </div>
        </q-card-section>
      </div>
    </q-slide-transition>
  </q-card>

  <DeleteDialog
    :dialogVisible="deleteDialogVisible"
    @close="deleteDialogVisible = false"
    @onDeleteAction="deleteOrder"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useReviewsStore } from 'stores/reviews';
import { Order } from 'src/models/Order';
import ReviewItem from 'components/orders/ReviewItem.vue';
import DeleteDialog from 'components/dialogs/DeleteDialog.vue';

const props = defineProps<{
  order: Order,
}>();

const router = useRouter();
const reviewsStore = useReviewsStore();

const expanded = ref(false);
const deleteDialogVisible = ref(false);
const actionBtns = [
    {
    title: 'Edit',
    color: 'primary',
    icon: 'edit',
    action: () => router.push(`/order/${props.order.id}/edit`),
  },
    {
    title: 'Delete',
    color: 'grey',
    icon: 'delete_outline',
    action: () => deleteDialogVisible.value = true,
  }
];

const { reviews } = storeToRefs(reviewsStore);
const { fetchReviews } = reviewsStore;

function toggleReviews(): void {
  expanded.value = !expanded.value;
  if (!reviews.value.length) {
    fetchReviews(props.order.id);
  }
}

function deleteOrder(): void {
  // TO DO: delete order
}

useReviewsStore().$reset();
</script>

<style scoped lang="scss">
.order-card {
  width: 85vw;
}
</style>