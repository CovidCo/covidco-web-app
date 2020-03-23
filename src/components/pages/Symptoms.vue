<template>
  <b-container>
    <h1>Síntomas</h1>
        <div class="row">

          <div class="col-12 col-md-3 col-lg-3 card-margin">        
            <button class="btn btn-outline-primary btn-width disabled">
              <img src="../../assets/img/fever.png" class="card-img-top" alt="...">
              <p>Fiebre</p>                        
            </button>
          </div> 

          <div class="col-12 col-md-3 col-lg-3 card-margin">        
            <button class="btn btn-outline-primary btn-width disabled">
              <img src="../../assets/img/cough.png" class="card-img-top" alt="...">
              <p>Tos seca</p>                        
            </button>
          </div> 

          <div class="col-12 col-md-3 col-lg-3 card-margin">        
            <button class="btn btn-outline-primary btn-width disabled">
              <img src="../../assets/img/sore-throat.png" class="card-img-top" alt="...">
              <p>Dolor de garganta</p>                        
            </button>
          </div> 

          <div class="col-12 col-md-3 col-lg-3 card-margin">        
            <button class="btn btn-outline-primary btn-width disabled">
              <img src="../../assets/img/tired.png" class="card-img-top" alt="...">
              <p>Cansancio o malestar</p>                        
            </button>
          </div> 

          <div class="col-12 col-md-3 col-lg-3 card-margin">        
            <button class="btn btn-outline-primary btn-width disabled">
              <img src="../../assets/img/breath.png" class="card-img-top" alt="...">
              <p>Dificultad para respirar</p>                        
            </button>
          </div> 

          <div class="col-12 col-md-3 col-lg-3 card-margin">        
            <button class="btn btn-outline-primary btn-width disabled">
              <img src="../../assets/img/diarrhea.png" class="card-img-top" alt="...">
              <p>Diarrea</p>                        
            </button>
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
    padding: 1rem 3rem;
    height:11rem;  
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

  .btn-width{
    width: 100%;
    height: 100%;
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
  @media (max-width: 420px){
    .card-img-top{
      padding: 0.2rem 0.3rem;
      height:6rem;     
    }
    .card-img-top-lg12{
      padding: 1rem 3rem;
      height:8rem;  
    }
    p{
      font-size: 0.9rem;
    }
  }
  @media (max-width: 390px){
    .card-img-top{
      padding: 0.2rem 0.6rem;
      height:6rem;     
    }
    .card-img-top-lg12{
      padding: 1rem 3rem;
      height:7rem;  
    }
    p{
      font-size: 0.7rem;
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
