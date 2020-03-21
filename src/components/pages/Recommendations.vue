<template>  
   <b-container>
    <h1>Recomendaciones</h1>
    <div class="container-fluid main-page" >
        <b-row>
                    <b-col sm="6" md="4">
                        <div class="card w-75">
                            <img src="../../assets/img/old.png" class="card-img-top" alt="..." height="180">
                            <div class="card-body">
                                <!-- <h5 class="card-title">Fiebre</h5> -->
                                <p class="card-text">Si eres mayor de 60 años</p>
                            </div>
                        </div>
                    </b-col>
                    <b-col sm="6" md="4">
                        <div class="card w-75">
                            <img src="../../assets/img/hand-wash.png" class="card-img-top" alt="..." height="180">                           
                            <div class="card-body">
                                <p class="card-text">Lavar tus manos cada 3 horas</p>
                            </div>
                        </div>
                    </b-col>
                    <b-col sm="6" md="4">
                        <div class="card w-75">
                            <img src="../../assets/img/mask.png" class="card-img-top" alt="..." height="180">                           
                            <div class="card-body">
                               <p class="card-text">Si tienes síntomas de gripe usa tapabocas NO la mano</p>
                            </div>
                        </div>
                    </b-col>
                    <b-col sm="6" md="4">
                        <div class="card w-75">
                            <img src="../../assets/img/cough.png" class="card-img-top" alt="..." height="180">
                            <div class="card-body">                                
                                <p class="card-text">Estornuda en el ángulo interno del codo.</p>                           
                            </div>
                        </div>
                    </b-col>
                    <b-col sm="6" md="4">
                        <div class="card w-75">
                            <img src="../../assets/img/face.png" class="card-img-top" alt="..." height="180">
                            <div class="card-body">
                                <p class="card-text">No te toques la cara </p>                                                     
                            </div>
                        </div>
                    </b-col>
                    <b-col sm="6" md="4">
                        <div class="card w-75">
                            <img src="../../assets/img/cleaning-spray.png" class="card-img-top" alt="..." height="180">
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
        }
    }
}
</script>

<style>
  .main-page{
    margin-top: 1rem;
  }
  .card-img-top{
    /* padding: 30px 70px; */
    padding: 1rem 3rem;
    
  }
  .card-body{
      text-align: center
  }
</style>
