<template>
  <q-layout view="hhh lpR fFf">
    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar class="glossy">
        <q-btn dense flat round icon="edit_note" />
        <q-toolbar-title>
          <router-link exact to="/">
            Posts App
          </router-link>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          &copy; 2022
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.q-toolbar__title {
  a {
    color: white;
    text-decoration: none;
  }
}
</style>
