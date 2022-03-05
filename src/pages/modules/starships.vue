<template>
  <q-header class="bg-dark" elevated>
    <q-toolbar>
      <q-toolbar-title> 
        <i class="las la-chevron-left"></i>
        Starships
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page class="q-pt-md">

    <q-card class="my-card q-mb-md q-mx-md bg-dark1"
      v-for="(starship,index) in starships" :key="index">
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="~assets/starships-48.png">
          </q-avatar>
        </q-item-section>
        <q-item-section class="text-white">
          <q-item-label>{{starship.name}}</q-item-label>
          <q-item-label class="text-warning" caption>{{starship.model}}</q-item-label>
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
  name: "Starships",

  setup(){
    const starships = ref(null)
    const count = ref(0)
    const current = ref(1)
    const paginate = ref(1)

    onMounted(() => {
            getStarships()
    })

    async function getStarships(){
        const response = await starwarsServices.getData('starships', paginate)
        starships.value = response.results
        count.value = response.count
        let prom = Math.ceil((count.value)/10)
        count.value = prom
    }

    function selectPage(){
      paginate.value = current.value
      getStarships()
    }

    function navigateTo(route){
      router.push({name: route})
    }

    return {
      starships,
      current,
      count,
      selectPage,
      navigateTo,
    }

  }


});
</script>

<style scoped>
  .bg-dark1{
    background-color: #333333;
  }
</style>
