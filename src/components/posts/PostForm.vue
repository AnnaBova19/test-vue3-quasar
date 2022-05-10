<template>
  <q-form
    class="post-form"
    @submit="onSubmit"
    @reset="onReset">
    <q-input
      outlined
      clearable
      label="Title *"
      v-model="$v.title.$model"
      @blur="$v.title.$touch"
      :error="$v.title.$error"
      error-message="This field is required" />

    <div class="relative-position q-mt-md q-mb-xl"
      :class="{'q-field--error': $v.body.$error}">
      <q-editor
        toolbar-push
        v-model="$v.body.$model"
        placeholder="Type your post here *"
        @blur="$v.body.$touch"
        min-height="200px" />
      <div v-if="$v.body.$error" class="q-field__bottom row items-start q-field__bottom--animated">
        <div class="q-field__messages col">
          This field is required
        </div>
      </div>
    </div>

    <div class="row justify-end">
      <q-btn label="Reset" type="reset" color="primary" flat />
      <q-btn label="Submit" type="submit" color="primary" class="q-ml-sm" :disabled="$v.$invalid"/>
    </div>
  </q-form>
</template>

<script setup lang="ts">
import { reactive, computed, onMounted } from 'vue';
import { required } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';
import { Post } from 'src/models/Post';

const props = defineProps<{
  post?: Post,
}>();

const emit = defineEmits(['onPostAction']);

const state = reactive({
  title: '',
  body: '',
});
const rules = computed(() => {
  return {
    title: { required },
    body: { required },
  };
});
const $v = useVuelidate(rules, state);

onMounted(() => {
  if (!!props.post) {
    state.title = props.post.title;
    state.body = props.post.body;
  }
});

function onSubmit(): void {
  if (!$v.value.$invalid) {
    emit('onPostAction', state);
  }
}

function onReset(): void {
  state.title = '';
  state.body = '';
  $v.value.$reset();
}
</script>

<style lang="scss">
.post-form {
  .q-editor__content:empty:not(:focus):before {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
    opacity: 1;
  }
  .q-field--error {
    .q-editor {
      border: 2px solid $negative;
    }
    .q-editor__content:empty:not(:focus):before {
      color: $negative;
    }
  }
}
</style>