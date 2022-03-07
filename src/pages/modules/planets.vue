<template>
  <q-header class="bg-dark" elevated>
    <q-toolbar>
      <q-toolbar-title class="text-warning"> 
        <i class="las la-chevron-left"></i>
        Planets
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page class="q-pt-md">

    <q-card class="my-card q-mb-md q-mx-md custom-card cursor-pointer"
      v-for="(planet,index) in planets" :key="index">
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="~assets/planets-48.png">
          </q-avatar>
        </q-item-section>
        <q-item-section class="text-white">
          <q-item-label>{{planet.name}}</q-item-label>
        </q-item-section>
      </q-item>
    </q-card>

    <div class="q-pa-lg flex flex-center ">
      <q-pagination
        v-model="current"
        color="warning"
        :max="count"
        :max-pages="6"
        @click="selectPage"
        boundary-numbers
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import starwarsServices from "../../composables/starwarsService";


export default defineComponent({
  name: "Planets",

  setup(){
    const planets = ref(null)
    const count = ref(0)
    const current = ref(1)
    const paginate = ref(1)

    onMounted(() => {
            getPlanets()
    })

    async function getPlanets(){
        const response = await starwarsServices.getData('planets', paginate)
        planets.value = response.results
        count.value = response.count
        let prom = Math.ceil((count.value)/10)
        count.value = prom
    }

    function selectPage(){
      paginate.value = current.value
      getPlanets()
    }

    function navigateTo(route){
      router.push({name: route})
    }
    return {
      planets,
      current,
      count,
      selectPage,
      navigateTo,
    }
  }


});
</script>

<style scoped>
  .custom-card{
    background-color: #333333;
  }
</style>
