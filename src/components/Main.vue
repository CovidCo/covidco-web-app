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
                <div class="col-12 col-md-12 col-lg-11  card-margin">        
                  <button class="btn btn-warning btn-width" @click.prevent="visitPage('diagnosis')">
                    <img class="card-img-top-lg12" src="../assets/img/fever.png" alt="Card image cap">
                    <p> <strong>¡No me siento bien!, ¿Que debo hacer?</strong>  </p>                        
                  </button>
                </div>   

                <div class="col-12 col-md-3   col-lg-3 card-margin">        
                  <button class="btn btn-primary btn-width" @click.prevent="visitPage('beathome')">
                    <img class="card-img-top" src="../assets/img/medal-color.png" alt="Card image cap">
                    <p>¡Yo ya estoy en casa!</p>                        
                  </button>
                </div> 

                <div class="col-12 col-md-3 offset-md-1 col-lg-3 card-margin">        
                  <button class="btn btn-primary btn-width" @click.prevent="visitPage('recommendations')">
                    <img class="card-img-top" src="../assets/img/hand-wash.png" alt="Card image cap">
                    <p>Recomendaciones para prevenir contagio.</p>                        
                  </button>
                </div> 
                
                <!-- <div class="col-12 col-md-3  offset-md-1 col-lg-3 card-margin">        
                  <button class="btn btn-primary btn-width" @click.prevent="visitPage('symptoms')">
                    <img class="card-img-top" src="../assets/img/cough.png" alt="Card image cap">
                    <p>Conoce los síntomas.</p>                        
                  </button>
                </div>   -->

                <div class="col-12 col-md-3  offset-md-1 col-lg-3 card-margin">        
                  <button class="btn btn-primary btn-width" @click.prevent="visitPage('lines')">
                    <img class="card-img-top" src="../assets/img/phone.png" alt="Card image cap">
                    <p>Líneas de atención a nivel nacional.</p>                        
                  </button>
                </div>  

                                                           
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
        } else if (page == 'beathome'){
          this.$router.push('/beathome')
        } else if (page == 'lines'){
          this.$router.push('/attention_lines')
        }
        else {
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
    padding: 1rem 3rem;
    height:11rem;  
  }
  .card-img-top-lg12{
    padding: 1rem 3rem;
    height:10rem;  
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
    text-align: center
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
