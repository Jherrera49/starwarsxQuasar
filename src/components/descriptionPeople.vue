<template>
  <q-dialog>
    <q-card class="custom-card text-white">
      <q-img src="data:image/jpeg;base64,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"/>
      <q-card-section>
        <div class="row no-wrap items-center text-center">
          <div class="col text-h5 text-uppercase text-warning text-weight-bolder">
            {{selectedPerson.name}}
          </div>
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none text-capitalize">
        <div class="row">
          <div class="col-6 col-lg-3 col-md-4 col-sm-4">
            <p><b class="text-warning">Gender:</b> {{selectedPerson.gender}}</p>
          </div>
          <div class="col-6 col-lg-3 col-md-4 col-sm-4">
            <p><b class="text-warning">Birth year:</b> {{selectedPerson.birth_year}}</p>
          </div>
          <div class="col-6 col-lg-3 col-md-4 col-sm-4">
            <p><b class="text-warning">Height:</b> {{selectedPerson.height}}</p>
          </div>
          <div class="col-6 col-lg-3 col-md-4 col-sm-4">
            <p><b class="text-warning">Mass:</b> {{selectedPerson.mass}}</p>
          </div>
          <div class="col-6 col-lg-3 col-md-4 col-sm-4">
            <p><b class="text-warning">Hair color:</b> {{selectedPerson.hair_color}}</p>
          </div>
          <div class="col-6 col-lg-3 col-md-4 col-sm-4">
            <p><b class="text-warning">Eye color:</b> {{selectedPerson.eye_color}}</p>
          </div>
          <div class="col-6 col-lg-3 col-md-4 col-sm-4">
            <p><b class="text-warning">Skin color:</b> {{selectedPerson.skin_color}}</p>
          </div>
        </div>
        
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DescriptionPeople",
  props: {
    selectedPerson: Object
  },
});
</script>

<style scoped>
  .custom-card{
    width: 700px; 
    max-width: 80vw; 
    background-color: #666666
  }
</style>
