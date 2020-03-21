<template>
  <b-container>
    <h1>Síntomas</h1>
    <div class="container-fluid main-page" >
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
                    <b-col sm="6" md="4">
                        <div class="card w-75">
                            <img src="../../assets/img/cough.png" class="card-img-top" alt="..." height="180">                           
                            <div class="card-body">
                                <p class="card-text">Tos seca</p>
                            </div>
                        </div>
                    </b-col>
                    <b-col sm="6" md="4">
                        <div class="card w-75">
                            <img src="../../assets/img/sore-throat.png" class="card-img-top" alt="..." height="180">                           
                            <div class="card-body">
                               <p class="card-text">Dolor de garganta</p>
                            </div>
                        </div>
                    </b-col>
                    <b-col sm="6" md="4">
                        <div class="card w-75">
                            <img src="../../assets/img/breath.png" class="card-img-top" alt="..." height="180">
                            <div class="card-body">                                
                                <p class="card-text">Dificultad para respirar</p>                           
                            </div>
                        </div>
                    </b-col>
                    <b-col sm="6" md="4">
                        <div class="card w-75">
                            <img src="../../assets/img/tired.png" class="card-img-top" alt="..." height="180">
                            <div class="card-body">
                                <p class="card-text">Cansancio o malestar</p>                                                     
                            </div>
                        </div>
                    </b-col>
                    <b-col sm="6" md="4">
                        <div class="card w-75">
                            <img src="../../assets/img/diarrhea.png" class="card-img-top" alt="..." height="180">
                            <div class="card-body">
                                <p class="card-text">Diarrea</p>                                                          
                            </div>
                        </div>
                    </b-col>
                </b-row>

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