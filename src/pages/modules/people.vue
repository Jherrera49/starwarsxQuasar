<template>
  <q-header class="bg-dark" elevated>
    <q-toolbar>
      <q-toolbar-title @click="navigateTo('home')"> 
        <i class="las la-chevron-left"></i>
        People 
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page class="q-pt-md">
    <q-card class="my-card q-mb-md q-mx-md bg-dark1"
      v-for="(people, index) in people" :key="index">
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="~assets/starwars-48.png">
          </q-avatar>
        </q-item-section>
        <q-item-section class="text-white">
          <q-item-label>{{people.name}}</q-item-label>
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
import { useRouter } from 'vue-router'
import starwarsServices from "../../composables/starwarsService";

export default defineComponent({
  name: "People",
  setup(){
    const router = useRouter()
    
    const people = ref(null)
    const count = ref(0)
    const current = ref(1)
    const paginate = ref(1)

    onMounted(() => {
            getCharacters()
    })

    async function getCharacters(){
        const response = await starwarsServices.getData('people', paginate)
        people.value = response.results
        count.value = response.count
        let prom = Math.ceil((count.value)/10)
        count.value = prom
    }

    function selectPage(){
      paginate.value = current.value
      getCharacters()
    }

    function navigateTo(route){
      router.push({name: route})
    }

    return {
      people,
      current,
      count,
      selectPage,
      navigateTo
    }
  }
});
</script>

<style scoped>
  .bg-dark1{
    background-color: #333333;
  }
</style>
