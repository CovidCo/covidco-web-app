<template>
  <b-container>
    <h1>Yo también estoy en casa</h1> 
    <br>
    <div class="container-fluid main-page">
        <b-row>
            <b-col sm="12" md="6" lg="6">
                <h3>¡Todos en casa para ayudar a combatir el COVID-19!</h3>
                <p>Mostramos cuántos de nosotros ya estamos en casa.</p>
                <p>El propósito de esta página es ayudar a crear conciencia sobre este tema tan importante en este momento.</p>
                <br>
                <div class="card">
                    <div class="card-body card-background quantity">
                        <h1>{{quantity}}</h1>
                        <p>Personas en casa</p>
                    </div>
                </div>
                <div class="social">
                    <div class="links">
                      <vue-goodshare-facebook
                        page_url="https://covid19co.org/beathome"
                        title_social="Facebook"
                        has_counter
                        has_icon
                        class="social-share"></vue-goodshare-facebook>
                      <vue-goodshare-whatsapp
                        page_url="hola yo tambien estoy en casa, conoce mas en https://covid19co.org/beathome"
                        title_social="Whatsapp"
                        has_counter
                        has_icon
                        class="social-share"></vue-goodshare-whatsapp>
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
                                          v-model.trim="$v.city.$model"
                                          id="city"
                                          ref="city"
                                          classname="form-control"
                                          :class="{'form-control is-invalid': $v.city.$error,'form-control is-valid': !$v.city.$invalid}"
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
                                        <label for="familyMembers"><small id="familyMembersHelp" class="form-text text-muted">Número total de personas en casa?</small></label>
                                        <input type="Number" class="form-control" id="familyMembers" aria-describedby="familyMembersHelp" v-model.trim="$v.familyMembers.$model"
                                            :class=" {'is-invalid': $v.familyMembers.$error,'is-valid': !$v.familyMembers.$invalid}">                                        
                                        <b-form-invalid-feedback v-if="!$v.familyMembers.required">
                                            Debes insertar cuántas personas son en total.
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
        <h2 class="graph-title">Total de personas en casa por ciudad</h2>               
        <b-row>           
            <b-col  sm="12" md="7" offset-md="3" >               
                <Graph/>
            </b-col> 
        </b-row>
        <!--  TBD -->
        <!-- <b-row>           
            <b-col  sm="12" md="7" offset-md="3" v-for="data in datas" v-bind:key="data.country" >               
                <Graph :data="data"  />
            </b-col> 
        </b-row> --> 
    </div>
  </b-container>
</template>

<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete'
import VueGoodshareFacebook from "vue-goodshare/src/providers/Facebook.vue";
import VueGoodshareWhatsapp from "vue-goodshare/src/providers/WhatsApp.vue";
import Graph from '../charts/Line.vue'
import moment from 'moment'
moment.locale('es')

const { required, email } = require('vuelidate/lib/validators')

export default {
    
    name: 'BeAtHome',
    components:{
        VueGoogleAutocomplete, 
        VueGoodshareFacebook, 
        VueGoodshareWhatsapp,
        Graph
    }, 
    data(){
        return{
            quantity: 0,
            familyMembers: 1,
            city: null, 
            email: '',
            startDate: null,
            place_id: null
        }
    },
    async beforeCreate(){
      try{
        let response = await this.$https.get('/homeReports/counter')
        if (response.status == 200){
          console.log(response)
          this.quantity = response.data.data.home_reports
        } else { 
          this.$noty.warning("No hemos podido obtener los datos")
        } 
      } catch(e){
        this.$noty.warning("No hemos podido obtener los datos")
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
        },
        familyMembers:{
            required
        }
      
    }, 
    methods:{
        getAddressData: function(addressData, placeResultData, id){
            console.log(placeResultData)
            console.log(id)            

            if(addressData.locality != null){
                this.city = addressData.locality
            }else{
                this.city = addressData.administrative_area_level_1
            }             
            this.place_id = placeResultData.place_id 
            console.log(addressData)
            console.log(this.city)
        },
        submitForm: async function(){
            this.$v.$touch()          
            if (this.$v.$invalid) {
                this.$noty.warning("Verifica los datos insertados")           
            }else{
                let payload = {
                    data: {
                        email: this.email,
                        city: this.city,
                        place_id: this.place_id,
                        home_at:  moment(String(this.startDate)).format('DD/MM/YYYY'),
                        people_at_home: this.familyMembers
                    }
                }
                try{ 
                  let response = await this.$https.post('/homeReports', payload)
                  if (response.status == 200){
                    this.$noty.success("Hemos recibido tus datos, por mas personas en casa!")
                    this.$router.push('/main')
                  } else { 
                    this.$noty.warning("No hemos podido registrar tu información")
                  } 
                } catch(e){
                  this.$noty.warning("Parece ser que ya has registrado tus datos")
                }
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
    .social{
      text-align: center; 
    }
    .p-centered{
        text-align: center;
    }
    

    @media (max-width: 1024px) {
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
        h5{
            font-size: 0.9rem
        }
    }
    @media(max-width: 991px){

    }
 
    @media (max-width: 480px) {
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
        h5{
            font-size: 0.6rem
        }
  }
  @media (max-width: 420px){
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
        h5{
            font-size: 0.6rem
        }
  }
  @media (max-width: 390px){
        h1{
            font-size: 1.5rem
        }
        h2{
            font-size: 1.1rem
        }
        h3{
            font-size: 0.9rem
        }
        h4{
            font-size: 0.7rem
        }
        h5{
            font-size: 0.6rem
        }
  }
  @media (max-width: 320px) {
   
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
    h5{
      font-size: 0.4rem
    }
  }

</style>
