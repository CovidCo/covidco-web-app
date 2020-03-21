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
                <b-col sm="6" md="6" lg="4">
                    <div class="card">
                      <img class="card-img-top" src="../assets/img/cough.png" alt="Card image cap">
                      <div class="card-body">
                        <b-button variant="primary" @click.prevent="visitPage('symptoms')"> Cuáles son los síntomas </b-button>
                      </div>
                    </div>
                </b-col>

                <b-col sm="6" md="6" lg="4">
                  <div class="card">
                    <img class="card-img-top" src="../assets/img/hand-wash.png" alt="Card image cap">
                    <div class="card-body">
                      <b-button variant="primary" @click.prevent="visitPage('recommendations')"> Recomendaciones para prevenir </b-button>
                    </div>
                  </div>
                </b-col>

                <b-col sm="6" md="6" lg="4">
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

<style>

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
    .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl, .col-xl-auto{
      position: relative;
      width: 50%;
      padding-right: 0px;
      padding-left: 0px;
    }
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
    .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl, .col-xl-auto{
      position: relative;
      width: 100%;
      padding-right: 0px;
      padding-left: 0px;
    }
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
     .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl, .col-xl-auto{
      position: relative;
      width: 50%;
      padding-right: 0px;
      padding-left: 0px;
    }
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
