<template>
  <b-container>
    <div class="container-fluid main-page" >
      <b-row>
        <b-col md="12" sm="12">
          <b-card bg-variant="info" text-variant="white" header="¿Cuales son los sintomas?" class="text-center">
            <b-card-text> Conoce los principales sintomas del COVID-19 </b-card-text>
            <b-button variant="light"  @click.prevent="visitPage('symptoms')"> Conocer mas </b-button>
          </b-card>
        </b-col>
      </b-row>
      <br/>
      <b-row>
        <b-col md="12" sm="12">
          <b-card bg-variant="secondary" text-variant="white" header="Recomendaciones para prevenir" class="text-center">
            <b-card-text>Algunas recomendaciones utiles para prevenir el contagio y cuidar a tu familia</b-card-text>
            <b-button variant="light" @click.prevent="visitPage('recommendations')"> Conocer mas </b-button>
          </b-card>
        </b-col>
      </b-row>
      <br/>
      <b-row>
        <b-col md="12" sm="12">
          <b-card bg-variant="success" text-variant="white" header="No me siento bien" class="text-center">
            <b-card-text>Obten una valoración inicial y conoce los pasos a seguir para la identificación y el tratamiento</b-card-text>
            <b-button variant="light" @click.prevent="visitPage('diagnosis')"> Iniciar </b-button>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>
<script>

export default {
    name: 'main',
    data(){
        return{
        }
    },
    methods: {
      visitPage: function(page){
        if(page == 'recommendations'){
          this.$router.push('/recommendations')
        } else if (page == 'symptoms'){
          this.$router.push('/symptoms')
        } else if (page == 'diagnosis'){
          this.$router.push('/initial_diagnosis')
        } else {
          console.log('no redirect')
        }
      }
    }
}
</script>

<style>

  .main-page{
    margin-top: 1rem;
  }

</style>
