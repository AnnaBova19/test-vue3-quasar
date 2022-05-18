<template>
  <div class="column items-center">
    <div class="flex flex-center app-title bg-grey-3 text-primary">
      Fashion App
    </div>
    <q-parallax
      src="/images/home_first.png"
    >
    </q-parallax>
    <div class="column flex-center app-subtitle q-pa-xl bg-red-3 text-white">
      <div>Make your own order</div>
      <q-btn
        size="lg"
        class="q-mt-xl"
        color="white"
        text-color="primary"
        label="Create new order"
        to="new_order" />
    </div>
    <q-parallax
      src="/images/home_second.jpeg"
    >
    </q-parallax>
    <div class="flex flex-center app-title bg-grey-3 text-primary">
      <q-btn
        size="lg"
        class="q-mt-xl"
        color="primary"
        text-color="white"
        label="See all customers"
        to="customers" />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.app-title {
  width: 100%;
  height: 300px;
  font-size: 15vh;
}
.app-subtitle {
  width: 100%;
  font-size: 7vh;
}
</style>
