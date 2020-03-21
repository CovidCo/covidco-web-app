<template>
    <div>
      <b-container>
        <h1>La salud de todos también está en tus manos</h1>
        <p>Cuidándonos le ganamos al Corona Virus</p>
        <br>
        <section>
          <div>
            <div class="card-deck">
              <b-row>
                <b-col sm="6" md="4">
                    <div class="card">
                      <img class="card-img-top" src="../assets/img/cough.png" alt="Card image cap">
                      <div class="card-body">
                        <b-button variant="primary" @click.prevent="visitPage('symptoms')"> Cuáles son los síntomas </b-button>
                      </div>
                    </div>
                </b-col>
                <b-col sm="6" md="4" offset-md="4">
                  <div class="card">
                    <img class="card-img-top" src="../assets/img/hand-wash.png" alt="Card image cap">
                    <div class="card-body">
                      <b-button variant="primary" @click.prevent="visitPage('recommendations')"> Recomendaciones para prevenir </b-button>
                    </div>
                  </div>
                </b-col>
              </b-row>
              <b-row>
                <b-col sm="6" offset-sm="3" md="4" offset-md="4">
                  <div class="card">
                    <img class="card-img-top" src="../assets/img/fever.png" alt="Card image cap">
                    <div class="card-body">
                      <b-button variant="warning" @click.prevent="visitPage('diagnosis')"> No me siento bien </b-button>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </div>
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

<style scoped>

  .main-page{
    margin-top: 1rem;
  }
   .card-img-top{
    padding: 1rem 4rem;
    height:14rem;
    /* width: 18rem; */

  }
  .card-body{
      padding: 0.4rem 0.2rem;
      text-align: center;
  }
  .card-deck{
    margin: 0 auto;
    display: block;
  }
  
  @media (max-width: 1024px) {
    .navbar-brand{
      font-size: 0.8rem;
    }

    .card-img-top{
      padding: 0.2rem 0rem 0.2rem 0rem;
      height:5rem;
      width: 5rem;
      margin-right: auto;
      margin-left: auto;
      display: block
    }

    .card-body{
      padding: 0.4rem;
      text-align: center;
    }

    p.card-text{
      font-size: 0.9rem
    }

    p.contact-text{
      font-size: 0.9rem
    }

    .btn{
      font-size: 0.9rem;
      padding: 0.1rem;
    }

    h1{
      font-size: 2rem
    }

    h2{
      font-size: 1.5rem
    }

    h3{
      font-size: 1.2rem
    }

    h4{
      font-size: 1.0rem
    }

  }

  @media (max-width: 480px) {
    .navbar-brand{
      font-size: 0.8rem;
    }
    .card-img-top{
      padding: 0.2rem 0rem 0.2rem 0rem;
      height:6rem;
      width: 6rem;
      margin-right: auto;
      margin-left: auto;
      display: block
    }
    .card-body{
      padding: 0.1rem;
      text-align: center;
    }
    p.card-text{
      font-size: 0.6rem
    }
    p.contact-text{
      font-size: 0.6rem
    }
    .btn{
      font-size: 0.6rem;
      padding: 0.1rem;
    }
    h1{
      font-size: 1.5rem
    }

    h2{
      font-size: 1.2rem
    }

    h3{
      font-size: 0.9rem
    }

    h4{
      font-size: 0.7rem
    }

  }

  @media (max-width: 320px) {
    .card-img-top{
      padding: 0.2rem;
      height:3rem;
      width: 3rem;
      margin-right: auto;
      margin-left: auto;
      display: block
    }

    .card-body{
      padding: 0.1rem;
      text-align: center;
    }

    p.card-text{
      font-size: 0.5rem
    }

    .btn{
      font-size: 0.5rem;
      padding: 0.1rem;
    }

    h1{
      font-size: 1.2rem
    }
    h2{
      font-size: 0.9rem
    }
    h3{
      font-size: 0.7rem
    }
    h4{
      font-size: 0.5rem
    }
  }

</style>
