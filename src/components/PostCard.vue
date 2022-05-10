<template>
  <q-card class="bg-grey-1 q-ma-md q-pa-sm">
    <div class="row justify-end">
      <q-btn
        v-for="btn in actionBtns" :key="btn.title"
        round
        glossy
        size="sm"
        :color="btn.color"
        :icon="btn.icon"
        class="q-ma-xs">
        <q-tooltip anchor="top middle" self="bottom middle" :offset="[5,5]">
          {{ btn.title }}
        </q-tooltip>
      </q-btn>
    </div>

    <q-card-section>
      <div class="column">
        <div class="text-h5 text-accent text-bold">
          {{ post.title }}
        </div>
        <div class="text-body1">{{ post.body }}</div>
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
        @click="toggleComments"
      />
    </q-card-actions>

    <q-slide-transition>
      <div v-show="expanded">
        <q-separator />
        <q-card-section class="text-subitle2">
          <q-list v-if="postComments">
            <CommentItem
              v-for="(comment, index) in postComments"
              :key="comment.id"
              :comment="comment"
              :has-separator="index !== postComments.length - 1"
            />
          </q-list>
        </q-card-section>
      </div>
    </q-slide-transition>
  </q-card>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useCommentsStore } from 'stores/comments';
import { Post } from '../models/Post';
import CommentItem from 'components/CommentItem.vue';

const props = defineProps<{
  post: Post,
}>();

const actionBtns = [
    {
    title: 'Edit',
    color: 'accent',
    icon: 'edit',
  },
    {
    title: 'Delete',
    color: 'grey',
    icon: 'delete',
  }
];
const expanded = ref(false);
const { postComments } = storeToRefs(useCommentsStore());
const { fetchPostComments } = useCommentsStore();

function toggleComments(): void {
  expanded.value = !expanded.value;
  if (!postComments.value.length) {
    fetchPostComments(props.post.id);
  }
}

onMounted(() => {
  useCommentsStore().$reset();
});
</script>