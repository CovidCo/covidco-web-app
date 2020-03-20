<template>
    <div>
        <div v-if="!isCovicoVisible">
            <b-col>
                <b-row>
                    <b-col class="header" sm="12" md="12">
                        <h1>¿Crees tener COVID-19?</h1>
                    </b-col>
                </b-row>
                <!-- Information cards-->
                <b-row>
                    <b-col sm="12" md="4">
                        <div class="card">
                            <img src="../assets/img/old-man.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h2 class="card-title">Tienes mas de 60 años</h2>
                                <p class="card-text">Evita el contacto con quienes presenten síntomas respiratorios o estén diagnosticados con alguna infección respiratoria</p>
                            </div>
                        </div>
                    </b-col>
                    <b-col sm="12" md="4">
                        <div class="card">
                            <img src="../assets/img/hands-wash.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h2 class="card-title">Lavado de manos</h2>
                                <p class="card-text">Lávese frecuentemente las manos con agua y jabón antes y después de ingerir alimentos, toser o estornudar y utilizar el baño.</p>
                            </div>
                        </div>
                    </b-col>
                    <b-col sm="12" md="4">
                        <div class="card">
                            <img src="../assets/img/face-mask.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h2 class="card-title">¿Tienes sintomas de resfrio?</h2>
                                <p class="card-text">Cúbrete la boca y nariz con la parte interna del codo <br>
                                    Evita saludar de beso o dar la mano
                                </p>
                            </div>
                        </div>
                    </b-col>
                </b-row>
                <!-- Information cards-->
            </b-col>
        </div>
        <div class="covico-container" v-else>
          <Covico/>
        </div>
        <a class="btn btn-primary btn-lg btn-chat-covico" @click.prevent="showCovico" role="button"> Interacturar con Covico </a>
    </div>
</template>

<script>
import Covico from './Covico.vue'

export default {
    name: 'home',
    data(){
        return{
          isCovicoVisible: false
        }
    },
    components:{
      Covico
    },
    methods: {
      showCovico: function(){
        this.isCovicoVisible = true
      }
    }

}
</script>

<style>

  .covico-container{
    width: 100%;
  }

  .btn-chat-covico{
    float: right;
    position: relative;
  }

</style>
