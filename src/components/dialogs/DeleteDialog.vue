<template>
  <q-dialog :model-value="showDialog" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <q-avatar icon="delete_outline" color="primary" text-color="white" />
        <span class="q-ml-sm">Are you sure you want to delete this order?</span>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="primary" @click="closeDialog" />
        <q-btn flat label="Delete" color="primary" @click="deleteAction" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  dialogVisible: boolean,
}>();
const emit = defineEmits(['close', 'onDeleteAction']);

const showDialog = computed<boolean>({
  get() {
    return props.dialogVisible;
  },
  set(value) {
    if(!value) {
      emit('close');
    }
  }
});

function closeDialog(): void {
  showDialog.value = false;
}

function deleteAction(): void {
  emit('onDeleteAction');
  closeDialog();
}
</script>