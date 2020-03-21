<template>
  <b-container>
    <h1>Síntomas</h1>
        <div class="row">
          <div class="col-6 col-md-3 col-lg-3">
            <div class="card card-margin">
              <img src="../../assets/img/fever.png" class="card-img-top" alt="...">
              <div class="card-body">                       
                  <p class="card-text">Fiebre</p>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-3 offset-md-1 col-lg-3 offset-lg-1" >
            <div class="card card-margin">
              <img src="../../assets/img/cough.png" class="card-img-top" alt="...">
              <div class="card-body">
                  <p class="card-text">Tos seca</p>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-3 offset-md-1 col-lg-3 offset-lg-1">
            <div class="card card-margin">
              <img src="../../assets/img/sore-throat.png" class="card-img-top" alt="...">
              <div class="card-body">
                  <p class="card-text">Dolor de garganta</p>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-3  col-lg-3">
            <div class="card card-margin">
              <img src="../../assets/img/tired.png" class="card-img-top" alt="...">
              <div class="card-body">
                  <p class="card-text">Cansancio o malestar</p>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-3 offset-md-1 col-lg-3 offset-lg-1">
            <div class="card card-margin">
              <img src="../../assets/img/breath.png" class="card-img-top" alt="...">
              <div class="card-body">
                  <p class="card-text">Dificultad para respirar</p>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-3 offset-md-1 col-lg-3 offset-lg-1">
            <div class="card card-margin">
                <img src="../../assets/img/diarrhea.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Diarrea</p>
                </div>
            </div>
          </div>
        </div>
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
    padding: 1rem 6rem;
    height:7rem;
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
  .card-margin{
    margin-bottom: 1rem;
  }
 

   

    @media (max-width: 1024px) {
    
    .navbar-brand{
      font-size: 0.8rem;
    }
    
    .card-img-top{
      padding: 0.2rem 5rem;
      height:3.3rem;     
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

  @media(max-width: 991px){
    .card-img-top{
      padding: 0.2rem 3rem;
      height:3rem;     
    }
  }
 

  @media (max-width: 480px) {
    .navbar-brand{
      font-size: 0.8rem;
    }

    .card-img-top{
      padding: 0.2rem 1.3rem;
      height:3rem;
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

  @media (max-width: 420px){
    .card-img-top{
      padding: 0.2rem 3.3rem;
      height:3rem;     
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
