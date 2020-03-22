<template>
  <b-container>
    <h1>Recomendaciones</h1>
    <div class="wrapper">
      <b-modal title="Consejos" variant="info" header-bg-variant="info" content-class="border-info"
        v-model="infoModal" @ok="infoModal = false" ok-variant="info" >
        <ol type="1">
          <li>Distanciamiento social (mantener un metro de distancia entre personas)</li>
          <li>Lavarse las manos frecuentemente con agua y jabón o alcohol en gel.</li>
          <li>Toser o estornudar sobre el pliegue del codo o utilizar pañuelos descartables.</li>
          <li>No llevarse las manos a la cara.</li>
          <li>Ventilar bien los ambientes de la casa y del lugar de trabajo.</li>
          <li>Desinfectar bien los objetos que se usan con frecuencia.</li>
          <li>Evita el contacto con personas con síntomas respiratorios.</li>
          <li>No asistas a actividades sociales</li>
          <li>No automedicarse.</li>
        </ol>
      </b-modal>
    </div>
    <div class="container-fluid main-page">
      <b-row>
        <div class="col-6 col-md-3 offset-md-1 col-lg-3 card-margin">
          <div class="card">
            <img src="../../assets/img/old.png" class="card-img-top" alt="..." >
            <div class="card-body">
                <button type="button" class="btn btn-link mr-1" @click="infoModal = true">Si eres mayor de 60 años.</button>
            </div>
          </div>
        </div>

        <div class="col-6 col-md-3 offset-md-1 col-lg-3 offset-lg-1 card-margin">
          <div class="card">
            <img src="../../assets/img/hand-wash.png" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">Lavar tus manos <strong>cada 3 horas</strong> </p>
            </div>
          </div>
        </div>    

        <div class="col-6 col-md-3 offset-md-1 col-lg-3 offset-lg-1 card-margin" >        
          <div class="card card-margin">
            <img src="../../assets/img/mask.png" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">Si tienes síntomas de gripe usa tapabocas <strong>NO la mano</strong>  </p>
            </div>
          </div>
        </div>

        <div class="col-6 col-md-3 offset-md-1 col-lg-3 offset-lg-1 card-margin" >        
          <div class="card card-margin">
            <img src="../../assets/img/cough.png" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">Estornuda en el ángulo interno del codo.</p>
            </div>
          </div>
        </div>
      
        <div class="col-6 col-md-3 offset-md-1 col-lg-3 offset-lg-1 card-margin" >        
          <div class="card card-margin">
            <img src="../../assets/img/face.png" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">No te toques la cara </p>
            </div>
          </div>
        </div>
      
        <div class="col-6 col-md-3 offset-md-1 col-lg-3 offset-lg-1 card-margin" >        
          <div class="card card-margin">
            <img src="../../assets/img/cleaning-spray.png" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">Desinfecta tus pertenencias</p>
            </div>
          </div>
        </div>


      </b-row>
    </div>
  </b-container>
</template>

<script>

export default {
    name: 'Recommendations',
    data(){
        return{
          myModal: false,
          largeModal: false,
          smallModal: false,
          primaryModal: false,
          successModal: false,
          warningModal: false,
          dangerModal: false,
          infoModal: false
        }
    },
    methods:{

    },

}
</script>

<style scoped>
.main-page{
    margin-top: 1rem;
  }
  .card{
    height: 100%;
  }
  .card-img-top{
    padding: 1rem 6rem;
    height:6rem;
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
      padding: 0.2rem 4.5rem;
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
      padding: 0.2rem 3rem;
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
