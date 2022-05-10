<template>
  <q-page padding class="row justify-evenly items-start">
    <q-card class="bg-grey-1 q-ma-md q-pa-sm new-post">
      <q-card-section>
        <div class="text-h3 text-primary text-center q-mb-md">New post</div>
        <q-form
          @submit="onSubmit"
          @reset="onReset"
        >
          <q-input
            outlined
            clearable
            label="Title *"
            v-model="$v.title.$model"
            @blur="$v.title.$touch"
            :error="$v.title.$error"
            error-message="This field is required"
          />

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
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import { required } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';

const post = reactive({
  title: '',
  body: '',
});
const rules = computed(() => {
  return {
    title: { required },
    body: { required },
  };
});
const $v = useVuelidate(rules, post);

function onSubmit(): void {
  if (!$v.value.$invalid) {
    // TO DO: create new post
  }
}

function onReset(): void {
  post.title = '';
  post.body = '';
  $v.value.$reset();
}
</script>

<style lang="scss">
.new-post {
  width: 100%;
  max-width: 700px;
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
