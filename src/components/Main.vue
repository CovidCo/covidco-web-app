<template>
    <div>
      <b-container>
        <h3>La salud de todos también está en tus manos</h3>
        <h3>Cuidándonos le ganamos al Corona Virus</h3>
        <br>
        <section>
          <div>
            <b-row>
              <div class="card-deck">
                <div class="card">
                  <img class="card-img-top" src="../assets/img/cough.png" alt="Card image cap">
                  <div class="card-body">
                    <b-button variant="primary" @click.prevent="visitPage('symptoms')"> Cuáles son los síntomas </b-button>
                  </div>
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
