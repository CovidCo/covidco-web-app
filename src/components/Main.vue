<template>
    <div>
      <b-container>
        <h3>La salud de todos también está en tus manos</h3>
        <h3>Cuidándonos le ganamos al Corona Virus</h3>
        <!-- <section class="slide-bg">      
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
        
        </section> -->
        <br>
        
        <section>
          <div>
            <b-row>
              <div class="card-deck">
                <div class="card">
                  <img class="card-img-top" src="../assets/img/cough.png" alt="Card image cap">
                  <div class="card-body">
                    <b-button variant="primary" @click.prevent="visitPage('symptoms')"> Cuáles son los síntomas </b-button>
                    <!-- <h5 class="card-title">Cuáles son los síntomas</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> -->
                  </div>
                  <!-- <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </div> -->
                </div>
                <div class="card">
                  <img class="card-img-top" src="../assets/img/hand-wash.png" alt="Card image cap">
                  <div class="card-body">
                    <b-button variant="primary" @click.prevent="visitPage('recommendations')"> Recomendaciones para prevenir </b-button>                
                  </div>
                </div>
                <div class="card">
                  <img class="card-img-top" src="../assets/img/fever.png" alt="Card image cap">
                  <div class="card-body">
                    <b-button variant="warning" @click.prevent="visitPage('diagnosis')"> No me siento bien </b-button>                
                  </div>          
                </div>
              </div>
            </b-row>        
          </div>
        </section>
      </b-container>
    </div>
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
   .card-img-top{
    padding: 0rem 3rem;
    /* margin: 4rem 3rem; */
    
  }

</style>
