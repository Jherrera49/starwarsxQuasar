<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in menuList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-footer elevated>
      <div class="q-gutter-y-md" style="max-width: 100vw;">
        <q-tabs
          inline-label
           dense
          class="bg-dark text-warning shadow-2"
        >
          <q-tab name="home" icon="las la-home" label="Home" @click="navigateTo('home')" />
          <q-tab name="people" icon="las la-user-friends" label="People" @click="navigateTo('people')" />
          <q-tab name="starships" icon="las la-plane" label="Starships" @click="navigateTo('starships')" />
          <q-tab name="planets" icon="las la-globe-americas" label="Planets" @click="navigateTo('planets')" />
        </q-tabs>
      </div>
    </q-footer>

    <q-page-container style="background-color: #4d4d4d">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import { menuList } from "../router/menuList";
import { useRouter } from 'vue-router'


import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    // EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    const router = useRouter()

    return {
      menuList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      navigateTo(route){
          router.push({name: route})
      },
    };
  },
});
</script>
