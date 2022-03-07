<template>
  <q-header class="bg-dark" elevated>
    <q-toolbar>
      <q-toolbar-title class="text-warning"> Starwars x Quasar </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page class="flex flex-center">

    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
});
</script>
