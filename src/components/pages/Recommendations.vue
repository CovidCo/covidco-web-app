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
      <b-col sm="6" md="4">
          <div class="card">
              <img src="../../assets/img/old.png" class="card-img-top" alt="..." >
              <div class="card-body">
                  <button type="button" class="btn btn-link mr-1" @click="infoModal = true">Si eres mayor de 60 años.</button>
              </div>
          </div>
      </b-col>
      <b-col sm="6" md="4" offset-md="4">
          <div class="card">
              <img src="../../assets/img/hand-wash.png" class="card-img-top" alt="...">
              <div class="card-body">
                  <p class="card-text">Lavar tus manos <strong>cada 3 horas</strong> </p>
              </div>
          </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="6" md="4">
          <div class="card">
              <img src="../../assets/img/mask.png" class="card-img-top" alt="...">
              <div class="card-body">
                 <p class="card-text">Si tienes síntomas de gripe usa tapabocas <strong>NO la mano</strong>  </p>
              </div>
          </div>
      </b-col>
      <b-col sm="6" md="4" offset-md="4">
          <div class="card">
              <img src="../../assets/img/cough.png" class="card-img-top" alt="...">
              <div class="card-body">
                  <p class="card-text">Estornuda en el ángulo interno del codo.</p>
              </div>
          </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="6" md="4">
          <div class="card">
              <img src="../../assets/img/face.png" class="card-img-top" alt="...">
              <div class="card-body">
                  <p class="card-text">No te toques la cara </p>
              </div>
          </div>
      </b-col>
      <b-col sm="6" md="4" offset-md="4">
          <div class="card">
              <img src="../../assets/img/cleaning-spray.png" class="card-img-top" alt="...">
              <div class="card-body">
                  <p class="card-text">Desinfecta tus pertenencias</p>
              </div>
          </div>
      </b-col>
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

<style>

  .main-page{
    margin-top: 1rem;
  }
  .card{
   height: 100%;
  }
   .card-img-top{
    padding: 0.4rem 5.5rem;
    height:10rem;
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
