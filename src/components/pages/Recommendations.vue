<template>
  <b-container>
    <h1>Recomendaciones</h1>
    <div class="wrapper">
      <b-modal title="Consejos" variant="info" header-bg-variant="info" content-class="border-info"
        v-model="infoModal" @ok="infoModal = false" ok-variant="info" >
        <ol type="1">
          <li>Distanciamiento social (mantener dos metros de distancia entre personas)</li>
          <li>Lavarse las manos frecuentemente con agua y jabón</li>
          <li>Si no tienes jabón puedes usar gel antibacterial</li>
          <li>Recuerda usar gel antibacterial con un porcentaje de alcohol superior al 60%</li>
          <li>Toser o estornudar sobre el pliegue del codo o utilizar pañuelos descartables</li>
          <li>No llevarse las manos a la cara.</li>
          <li>Ventilar bien los ambientes de la casa y del lugar de trabajo.</li>
          <li>Desinfectar bien los objetos que se usan con frecuencia.</li>
          <li>Evita el contacto con personas con síntomas respiratorios.</li>
          <li>No asistas a actividades sociales</li>
          <li>No automedicarse.</li>
        </ol>
      </b-modal>
      <b-modal title="Consejos" variant="info" header-bg-variant="info" content-class="border-info"
        v-model="infoModalDesinfection" @ok="infoModalDesinfection = false" ok-variant="info" >
        <ol type="1">
          <li>Limpie y desinfecte diariamente las superficies que se tocan con frecuencia. 
              Esto incluye las mesas, las manijas de las puertas, los interruptores de luz, los mesones, 
              las barandas, los escritorios, los teléfonos, los teclados, los inodoros, los grifos, los lavamanos y los lavaplatos.
          </li>
          <li>Si las superficies están sucias, límpielas: lávalas con agua y detergente o jabón antes de desinfectarlas. </li>
          <li> La mayoría de los desinfectantes comunes para el hogar  funcionarán.</li>
          <li>IMPORTANTE: Nunca mezcle el blanqueador con cloro o con amoníaco ni con otros productos de limpieza. </li>
        </ol>
      </b-modal>
      <b-modal title="Consejos" variant="info" header-bg-variant="info" content-class="border-info"
        v-model="infoModalPet" @ok="infoModalPet = false" ok-variant="info" >
        <ol type="1">
          <li>Hasta el momento no se ha evidenciado que las mascotas puedan contraer o transmitir COVID-19</li>
          <li>Al no tener información suficiente de este nuevo virus, es importante que si esta enfermo no tenga contacto con sus mascotas.  
              Esto signfica que no las debe acariciar o besar.  El cuidado de ellas se debe delegar a otra persona.
              Si se encuentra solo con sus mascotas, use tapabocas y tenga adecuado lavado de manos.
          </li>
        </ol>
      </b-modal>
    </div>
    <div class="container-fluid main-page">
      <b-row>            
        <div class="col-12 col-md-3 offset-md-1 col-lg-3 card-margin">
          <button class="btn btn-warning btn-width" @click="infoModal = true">
            <img src="../../assets/img/old.png" class="card-img-top" alt="..." >
            <p>Eres mayor de 60 años. <strong>Abrir instrucciones</strong> </p>
            
          </button>
        </div>   
       
        <div class="col-12 col-md-3 offset-md-1 col-lg-3 card-margin">        
          <button class="btn btn-info btn-width" @click="openVideo('hands')">
            <img src="../../assets/img/hand-wash.png" class="card-img-top" alt="...">
            <p>Lavarse las manos es la clave. <strong>Ve el vídeo y enterate de mas</strong></p>            
          </button>
        </div>  
       
        <div class="col-12 col-md-3 offset-md-1 col-lg-3 card-margin">        
          <button class="btn btn-outline-primary btn-width disabled">
            <img src="../../assets/img/face.png" class="card-img-top" alt="...">
            <p>Si no te has lavado las manos. <strong> No te toques la cara </strong> </p>                            
          </button>
        </div>      
       
        <div class="col-12 col-md-3 offset-md-1 col-lg-3 card-margin">        
          <button class="btn btn-outline-primary btn-width disabled">
            <img src="../../assets/img/mask.png" class="card-img-top" alt="...">
            <p>Si tienes síntomas de gripe <strong>usa tapabocas</strong></p>                            
          </button>
        </div>      
       
        <div class="col-12 col-md-3 offset-md-1 col-lg-3 card-margin">        
          <button class="btn btn-outline-primary btn-width disabled">
            <img src="../../assets/img/cough.png" class="card-img-top" alt="...">
            <p>Estornuda en el ángulo interno del codo o en pañuelos descartables. <strong>No uses las manos</strong> </p>
          </button>
        </div>       
        <div class="col-12 col-md-3 offset-md-1 col-lg-3 card-margin">        
          <button class="btn btn-outline-primary btn-width disabled" @click="infoModalDesinfection = true">
            <img src="../../assets/img/cleaning-spray.png" class="card-img-top" alt="...">
            <p>Desinfecta tus pertenencias. <strong>Abrir instrucciones</strong></p>         
          </button>
        </div>          
        <div class="col-12 col-md-3 offset-md-1 col-lg-3 card-margin">        
          <button class="btn btn-info btn-width" @click="openVideo('vegetables')">
            <img src="../../assets/img/hand-wash.png" class="card-img-top" alt="...">
            <p>Desinfecta frutas y verduras. Ver video.</p>                        
          </button>
        </div>  
        <div class="col-12 col-md-3 offset-md-1 col-lg-3 card-margin">        
          <button class="btn btn-info btn-width" @click="infoModalPet = true">
            <img src="../../assets/img/pets.png" class="card-img-top" alt="...">
            <p>Cuidados con tu mascota <strong>Abrir instrucciones</strong></p>   
          </button>
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
          largeModal: false,
          smallModal: false,
          primaryModal: false,
          successModal: false,
          warningModal: false,
          dangerModal: false,
          infoModal: false,
          infoModalDesinfection: false, 
          infoModalPet: false, 
          urlVideoHands: 'https://www.youtube.com/watch?v=NMmAj1EKdVo&t=2s',
          urlVideoVegetables: 'https://www.youtube.com/watch?v=aNjF34-0lRU'

        }
    },
    methods:{
      openVideo: function(value){          
        if(value == 'hands'){
          window.open(this.urlVideoHands, '_blank');      
        }else if(value == 'vegetables'){
          window.open(this.urlVideoVegetables, '_blank');      
        }
      }
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
    padding: 1rem 5rem;
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
    text-align: center
  }
  .btn-width{
    width: 100%;
    height: 100%;
  }
 
   
    @media (max-width: 1024px) {
   
 
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
      padding: 0.2rem 7.5rem;
      height:5rem;     
    }
  }
  @media (max-width: 390px){
    .card-img-top{
      padding: 0.2rem 7.3rem;
      height:3.8rem;     
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
