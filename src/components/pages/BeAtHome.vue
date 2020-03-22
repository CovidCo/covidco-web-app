<template>
  <b-container>
    <h1>Yo también estoy en casa</h1>    
   
    <br>
    <div class="container-fluid main-page">
        <b-row>
            <b-col sm="12" md="6" lg="6">
                <h5>¡Todos en casa para ayudar a combatir COVID-19!</h5>
                <p>Mostramos cuántos de nosotros ya estamos en casa.</p>
                <p>El propósito de esta página es ayudar a crear conciencia sobre este tema tan importante en este momento.</p>
                <br>
                <div class="card">
                    <div class="card-body card-background quantity">
                        <h1>{{quantity}}</h1>
                        <p>Personas en casa</p>
                    </div>
                </div>
            </b-col>

            <b-col sm="12" md="6" lg="6">
                <form @submit.prevent>
                    <div class="card">
                        <div class="card-header">
                            Quiero decir que también estoy en casa
                        </div>
                        <div class="card-body">
                            <b-row>                            
                                <b-col sm="12" md="12">
                                    <div class="form-group">
                                        <label for="city"><small id="nameHelp" class="form-text text-muted">Ciudad</small></label>

                                        <vue-google-autocomplete
                                        v-model="city"
                                        id="city"
                                        ref="city"
                                        classname="form-control {'form-control is-invalid': $v.city.$error,'form-control is-valid': !$v.city.$invalid}"
                                        placeholder="Ingresa tu ciudad"
                                        v-on:placechanged="getAddressData"
                                        types="(cities)">
                                        </vue-google-autocomplete>
                                        <b-form-invalid-feedback v-if="!$v.city.required">
                                            Tu ubicación es necesaria
                                        </b-form-invalid-feedback>
                                    </div>
                                </b-col>
                                <b-col sm="12" md="12">
                                   <div class="form-group">
                                        <label for="email"><small id="nameHelp" class="form-text text-muted">Correo electrónico</small></label>
                                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model.trim="$v.email.$model"
                                            :class=" {'is-invalid': $v.email.$error,'is-valid': !$v.email.$invalid}">
                                        <small id="emailHelp" class="form-text text-muted">No compartiremos tu correo con nadie.</small>
                                        <b-form-invalid-feedback v-if="!$v.email.required">
                                            Tu email es obligatorio.
                                        </b-form-invalid-feedback>
                                        <b-form-invalid-feedback v-if="!$v.email.email">
                                            Tu email no tiene el formato indicado.
                                        </b-form-invalid-feedback>
                                    </div>
                                </b-col>
                                <b-col sm="12" md="12">
                                   <div class="form-group">
                                        <label for="date"><small id="nameHelp" class="form-text text-muted">¿Desde cuándo en casa?</small></label>
                                        <input type="date" class="form-control" id="date" aria-describedby="emailHelp" v-model.trim="$v.startDate.$model"
                                            :class=" {'is-invalid': $v.startDate.$error,'is-valid': !$v.startDate.$invalid}">    
                                        <b-form-invalid-feedback v-if="!$v.startDate.required">
                                            La fecha es obliatoria
                                        </b-form-invalid-feedback>                                      
                                    </div>
                                </b-col>
                               
                            </b-row>
                            <button class="btn btn-primary" type="submit" @click.prevent="submitForm">Enviar</button>
                        </div>
                    </div>
                   
                </form>
            </b-col>
        </b-row>

        <hr>
        
        <b-row v-if="false">
            <b-col sm="6" md="8">
                <h5 class="graph-title">Total de personas en casa por departamentos</h5>               
                <Graph/>
            </b-col>
            
          
            
        </b-row>
        
       
            
    </div>
  </b-container>
</template>

<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete'
import Graph from '../charts/Line.vue'
import moment from 'moment'
moment.locale('es')

const { required, email } = require('vuelidate/lib/validators')

export default {
    
    name: 'BeAtHome',
    components:{
        VueGoogleAutocomplete,
        Graph
    }, 
    data(){
        return{
            quantity: 1200,
            city: null, 
            email: '',
            startDate: null,
            place_id: null
        }
    },
    validations: {                    
        city:{
            required
        },
        email:{
            required,
            email
        },
        startDate:{
            required
        }
      
    }, 
    methods:{
        getAddressData: function(addressData, placeResultData, id){
            console.log(placeResultData)
            console.log(id)            
            this.city = addressData.locality            
            this.place_id = placeResultData.place_id
        },
        submitForm: async function(){
            this.$v.$touch()            
            if (this.$v.$invalid) {
                this.$noty.warning("Verifica los datos insertados")           
            }else{
                let payload = {
                    "data": {
                        email: this.email,
                        city: this.city,
                        place_id: this.place_id,
                        home_at:  moment(String(this.startDate)).format('DD/MM/YYYY')
                    }
                }
                console.log(JSON.stringify(payload))
          
            }     
        }
    },

}
</script>

<style scoped>
    .main-page{
        margin-top: 1rem;
    }
    .card-background{
        background-color: #3399ff;
    }
    .quantity{
        color: #ebedef;
        text-align: center
    }
    .graph-title{
        text-align: center
    }


  

  
</style>
