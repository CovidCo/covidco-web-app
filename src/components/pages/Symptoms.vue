<template>
  <b-container>
    <h1>Síntomas</h1>
        <b-row>
            <b-col sm="6" md="4">
                <div class="card w-75">
                    <img src="../../assets/img/fever.png" class="card-img-top" alt="..." height="180">
                    <div class="card-body">
                        <!-- <h5 class="card-title">Fiebre</h5> -->
                        <p class="card-text">Fiebre</p>
                    </div>
                </div>
            </b-col>
            <b-col sm="6" md="4" offset-md="4">
                <div class="card w-75">
                    <img src="../../assets/img/cough.png" class="card-img-top" alt="..." height="180">
                    <div class="card-body">
                        <p class="card-text">Tos seca</p>
                    </div>
                </div>
            </b-col>
        </b-row>
        <b-row>
          <b-col sm="6" md="4">
              <div class="card w-75">
                  <img src="../../assets/img/sore-throat.png" class="card-img-top" alt="..." height="180">
                  <div class="card-body">
                     <p class="card-text">Dolor de garganta</p>
                  </div>
              </div>
          </b-col>
          <b-col sm="6" md="4" offset-md="4">
              <div class="card w-75">
                  <img src="../../assets/img/breath.png" class="card-img-top" alt="..." height="180">
                  <div class="card-body">
                      <p class="card-text">Dificultad para respirar</p>
                  </div>
              </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="6" md="4">
              <div class="card w-75">
                  <img src="../../assets/img/tired.png" class="card-img-top" alt="..." height="180">
                  <div class="card-body">
                      <p class="card-text">Cansancio o malestar</p>
                  </div>
              </div>
          </b-col>
          <b-col sm="6" md="4" offset-md="4">
              <div class="card w-75">
                  <img src="../../assets/img/diarrhea.png" class="card-img-top" alt="..." height="180">
                  <div class="card-body">
                      <p class="card-text">Diarrea</p>
                  </div>
              </div>
          </b-col>
      </b-row>
  </b-container>
</template>
<script>
export default {
    name: 'symptoms',
    data(){
        return{
        }
    },
    methods: {
      visitPage: function(){
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
      font-size: 0.9rem;
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
      padding: 0.3rem;
      /* height:6rem;
      width: 6rem; */
      margin-right: auto;
      margin-left: auto;
      display: block
    }

    .card-body{
      padding: 0.1rem;
      text-align: center;
    }

    .card-deck{
      margin: 0 auto;
      display: block;
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
