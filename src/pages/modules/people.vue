<template>
  <q-header class="bg-dark" elevated>
    <q-toolbar>
      <q-toolbar-title class="text-warning" @click="navigateTo('home')"> 
        <i class="las la-chevron-left"></i>
        People 
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page class="q-pt-md">
    <q-card class="my-card q-mb-md q-mx-md custom-card cursor-pointer"
      v-for="(people, index) in people" :key="index"
      @click="[showModal = true, selectedPerson = people]">
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
    <DescriptionPeople 
      v-model="showModal"
      :selectedPerson="selectedPerson"
      />
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted, computed, watchEffect } from "vue";
import { useRouter } from 'vue-router'
import starwarsServices from "../../composables/starwarsService";
import DescriptionPeople from '../../components/descriptionPeople'

export default defineComponent({
  name: "People",

  components: {
    DescriptionPeople,  
  },

  setup(){
    const router = useRouter()
    
    const people = ref(null)
    const count = ref(0)
    const current = ref(1)
    const paginate = ref(1)
    const showModal = ref(false)
    const selectedPerson = ref(null)

    const current_path = computed(() => {
        return router.currentRoute.value.name;
    })

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
      navigateTo,
      showModal,
      selectedPerson,
    }
  }
});
</script>

<style scoped>
  .custom-card{
    background-color: #333333;
  }
</style>
