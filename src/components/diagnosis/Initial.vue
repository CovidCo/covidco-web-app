<template>
  <div class="container panel">
    <section>
      <h1 class="title">¿No se siente bien?</h1>
      <p>Al llenar este formulario podrás determinar si eres es un posible caso de coronavirus.
      Quedarás registrado en la lista de usuarios y los médicos voluntarios se pondrán en contacto contigo.</p>
      <form @submit.prevent>
        <b-row>
          <b-col sm="12" md="6" lg="5">
            <div class="card">
              <div class="card-header">
                1. Síntomas
              </div>
              <div class="card-body">
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="fever" v-model="fever">
                    <label class="form-check-label" for="fever">Fiebre mayor a 38 grados °C, durante las 2 últimas mediciones.</label>
                  </div>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="cough" v-model="cough">
                    <label class="form-check-label" for="cough">Tos seca</label>
                  </div>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="pain" v-model="pain">
                    <label class="form-check-label" for="pain">Dolor de garganta</label>
                  </div>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="breathing" v-model="breathing">
                    <label class="form-check-label" for="breath">Fatiga o dificultad respiratoria</label>
                  </div>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="fatigue" v-model="fatigue">
                    <label class="form-check-label" for="tired">Cansancio o malestar general</label>
                  </div>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="diarrhea" v-model="diarrhea">
                    <label class="form-check-label" for="diarrhea">Diarrea</label>
                  </div>
                  <div class="form-group">
                    <label for="name"> <small id="nameHelp" class="form-text text-muted">Otros síntomas?</small></label>                    
                    <b-form-textarea
                      id="extra-symptoms"
                      v-model="extraSymptoms"
                      placeholder="Describa sus síntomas"
                      rows="3"
                      max-rows="5"
                    ></b-form-textarea>                   
                  </div>                 
                  <br/>
                  <i>Esta lista no incluye todo. Consulte a su proveedor de atención médica ante cualquier otro síntoma grave o que le preocupe</i>
              </div>
            </div>
            <br>
            <div class="card">
              <div class="card-header">
                2. Historial epidemiológico
              </div>
              <div class="card-body">
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="travel" v-model="travel">
                    <label class="form-check-label" for="abroad">¿Ha estado en el exterior durante los últimos 14 días?</label>
                  </div>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="health_worker" v-model="health_worker">
                    <label class="form-check-label" for="employee">¿Eres trabajador asistenial de salud?</label>
                  </div>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="personal_contact" v-model="personal_contact">
                    <label class="form-check-label" for="hadContact">¿Ha estado en contacto con una persona diagnósticada con COVID-19 o que haya
                      tenido síntomas gripales y haya viajado al extranjero?</label>
                  </div>
              </div>
            </div>
          </b-col>
          <b-col sm="12" md="6">
            <div class="card">
              <div class="card-header">
                3. Datos de contacto
              </div>
              <div class="card-body">
                  <div class="form-group">
                    <label for="name"> <small id="nameHelp" class="form-text text-muted">Nombres y apellidos</small></label>
                    <input type="text" id="name" placeholder="Nombres y apellidos" v-model.trim="$v.name.$model"
                      :class=" {'is-invalid': $v.name.$error,'is-valid': !$v.name.$invalid}" class="form-control">
                    <b-form-invalid-feedback v-if="!$v.name.required">
                      Tu nombre es necesario 
                    </b-form-invalid-feedback>
                  </div>
                  <b-row>
                    <b-col sm="12" md="5" lg="5">                                                                   
                      <b-form-group>
                        <label for="typeDocuments"><small id="typeDocumentHelp" class="form-text text-muted">Tipo Doc.</small></label>                              
                        <b-form-select 
                          id="typeDocuments"                                  
                          :plain="true"                                                            
                          :class=" {'is-invalid': $v.selectedOptionDoc.$error,'is-valid': !$v.selectedOptionDoc.$invalid}" class="form-control"
                          v-model.trim="$v.selectedOptionDoc.$model">
                           <!-- v-model="selectedOptionDoc" -->
                            <option 
                              v-for="doc in typeDocs" 
                              v-bind:value="doc"
                              v-bind:key="doc">
                                {{ doc }}
                            </option>
                        </b-form-select> 
                        <b-form-invalid-feedback v-if="!$v.selectedOptionDoc.required">
                          El tipo  de documento es necesario 
                        </b-form-invalid-feedback>                           
                      </b-form-group>
                    </b-col>
                    <b-col sm="12" md="7" lg="7">
                      <div class="form-group">
                        <label for="document"> <small id="documentHelp" class="form-text text-muted">Num. documento</small></label>
                        <input type="text" id="document" placeholder="Número de documento" v-model.trim="$v.document.$model"
                          :class=" {'is-invalid': $v.document.$error,'is-valid': !$v.document.$invalid}" class="form-control">
                        <b-form-invalid-feedback v-if="!$v.document.required">
                          El número de documento es necesario 
                        </b-form-invalid-feedback>
                      </div>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col sm="12" md="6" lg="6">                                                                   
                      <b-form-group>
                        <label for="regime"><small id="regimeHelp" class="form-text text-muted">Régimen:</small></label>                              
                        <b-form-select 
                          id="regime"                                  
                          :plain="true"                                                            
                          :class=" {'is-invalid': $v.selectedOptionRegime.$error,'is-valid': !$v.selectedOptionRegime.$invalid}" class="form-control"
                          v-model.trim="$v.selectedOptionRegime.$model">
                           <!-- v-model="selectedOptionDoc" -->
                            <option 
                              v-for="element in regime" 
                              v-bind:value="element"
                              v-bind:key="element">
                                {{ element }}
                            </option>
                        </b-form-select> 
                        <b-form-invalid-feedback v-if="!$v.selectedOptionRegime.required">
                          El régimen es obligatorio.
                        </b-form-invalid-feedback>                           
                      </b-form-group>
                    </b-col>
                    <b-col sm="12" md="6" lg="6">                                                                   
                      <b-form-group>
                        <label for="joinedTo"><small id="joinedToHelp" class="form-text text-muted">Afiliado a:</small></label>                              
                        <b-form-select 
                          id="joinedTo"                                  
                          :plain="true"                                                            
                          :class=" {'is-invalid': $v.selectedOptionJoinedTo.$error,'is-valid': !$v.selectedOptionJoinedTo.$invalid}" class="form-control"
                          v-model.trim="$v.selectedOptionJoinedTo.$model"
                          @change="onChangeList($event)" >                           
                            <option 
                              v-for="element in joinedTo" 
                              v-bind:value="element"
                              v-bind:key="element">
                                {{ element }}
                            </option>
                        </b-form-select> 
                        <b-form-invalid-feedback v-if="!$v.selectedOptionJoinedTo.required">
                          La entidad a la que se encuentra afiliado es obligatoria.
                        </b-form-invalid-feedback>                           
                      </b-form-group>
                    </b-col>
                    <b-col sm="12" md="12" lg="12" v-if="flagJoinedToOther">
                      <div class="form-group">
                        <label for="other"> <small id="otherHelp" class="form-text text-muted">Cuál?</small></label>
                        <input type="text" id="other" placeholder="Entidad a la que estás afiliado" v-model="other" class="form-control">
                        <!-- <b-form-invalid-feedback v-if="!$v.name.required">
                          Tu nombre es necesario 
                        </b-form-invalid-feedback> -->
                      </div>
                    </b-col>
                   
                  </b-row>
                  <b-row>
                    <b-col sm="4" md="4" lg="6">
                      <div class="form-group">
                        <label for="phone"><small id="phoneNumber" class="form-text text-muted">Celular</small></label>
                        <input type="Number" class="form-control" id="phone" placeholder="Celular" v-model.trim="$v.phone_number.$model"
                          :class=" {'is-invalid': $v.phone_number.$error,'is-valid': !$v.phone_number.$invalid}">
                        <b-form-invalid-feedback v-if="!$v.phone_number.required">
                          Tu número de teléfono es necesario 
                        </b-form-invalid-feedback>
                        <b-form-invalid-feedback v-if="!$v.phone_number.phoneNumber">
                          Tu número de teléfono no es valido
                        </b-form-invalid-feedback>
                      </div>
                    </b-col>
                    <b-col sm="4" md="4" lg="3">
                      <div class="form-group">
                        <label for="age"> <small id="emailHelp" class="form-text text-muted">Edad</small></label>
                        <input type="Number" class="form-control" id="age" placeholder="Edad" v-model.trim="$v.age.$model"
                          :class=" {'is-invalid': $v.age.$error,'is-valid': !$v.age.$invalid}">
                        <b-form-invalid-feedback v-if="!$v.age.required">
                          Tu edad es necesaria
                        </b-form-invalid-feedback>
                        <b-form-invalid-feedback v-if="!$v.age.between">
                          Parece que tu edad no esta bien 
                        </b-form-invalid-feedback>
                      </div>
                    </b-col>
                    <b-col sm="4" md="4" lg="3">
                      <small class="form-text text-muted">Sexo</small>
                      <div class="form-group">
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="genderRadios" id="female" value="woman" v-model.trim="$v.gender.$model">
                          <label class="form-check-label" for="female">
                            Mujer
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="genderRadios" id="male" value="man" v-model.trim="$v.gender.$model">
                          <label class="form-check-label" for="male">
                            Hombre
                          </label>
                        </div>
                        <b-form-invalid-feedback v-if="!$v.gender.required" class="invalid-feedback-radios">
                          Necesitamos saber tu genero
                        </b-form-invalid-feedback>
                      </div>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col sm="4" md="4" lg="6">
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
                    <b-col sm="4" md="4" lg="6">
                      <div class="form-group">
                        <label for="neighborhood"><small id="emailHelp" class="form-text text-muted">Barrio</small></label>
                        <input type="text" class="form-control" id="neighborhood" placeholder="Barrio" v-model="neighborhood">
                      </div>
                    </b-col>
                  </b-row>
              </div>
            </div>
          </b-col>
        </b-row>
        <hr>
        <b-row>
          <b-col sm="12" md="6" lg="6">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" v-model="terms_and_conditions">
              <label class="form-check-label" for="gridCheck">
                <a class="link" v-on:click="openInBlankPage('terms')">Para continuar debes aceptar Términos y Condiciones</a>
              </label>
            </div>
          </b-col>
        </b-row>
        <b-row class="submit-container">
            <b-col sm="12" md="12" lg="12">
              <button type="submit" class="btn btn-primary submit-button" :disabled="!terms_and_conditions" 
                      @click.prevent="submitForm">Registrar información</button>
            </b-col>
        </b-row> 
      </form>
    </section>
  </div>
</template>

<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete'
const { required, minLength, between } = require('vuelidate/lib/validators')
const phoneNumber = (number) => {
    if (number){
     // eslint-disable-next-line
     var rePattern = new RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g)
     return number.match(rePattern)
   } else {
     return false;
   }
}
export default {
  name: 'InitialDiagnosis',
  data(){
    return{
      cough: false, 
      sore: false, 
      breathing:  false, 
      fatigue: false, 
      diarrhea: false,
      extraSymptoms: '',
      travel: false, 
      health_worker: false, 
      personal_contact: false,
      name: '', 
      typeDocs: [
        'Carnet extranjería',
        'Cédula',        
        'Pasaporte',
        'Registro civil',
        'Tarjeta de identidad'
      ],      
      selectedOptionDoc:'',
      document:'',
      regime:[
        'Contributivo', 
        'Subsidiado'
      ],
      joinedTo: [
        'AISEC',
        'Asmet',
        'Cosmitet',
        'Ejercito',
        'Emmsanar',
        'Mayamas',
        'Medimas',
        'Nueva EPS',
        'Policia',
        'Sanitas',
        'Servicio Occidental de Salud S.O.S',
        'Sura',
        'OTRO'
      ],
      other:'',//if joined to another entity
      selectedOptionJoinedTo: '',
      selectedOptionRegime: '',      
      phone_number:  null, 
      city: null, 
      age: null,
      fever: false, 
      gender: '', 
      neighborhood: '', 
      terms_and_conditions: false, 
      pain: false, 
      place_id: null,
      flagJoinedToOther: false,
    }
  }, 
  components:{
    VueGoogleAutocomplete
  }, 
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    selectedOptionDoc: {
      required,      
    },
    document: {
      required,
      minLength: minLength(5)
    },
    selectedOptionRegime:{
      required
    },
    selectedOptionJoinedTo:{
      required
    },
    age: {
      required, 
      between: between(18, 120)
    }, 
    gender: {
      required 
    }, 
    phone_number: {
      required,
      phoneNumber,
      minLength: minLength(6)
    }, 
    city:{
      required
    }
  }, 
  methods: {
    submitForm: async function(){
      this.$v.$touch()
      if (this.$v.$invalid) {
            this.$noty.warning("Revisa tu solicitud")
      } else {
        let payload = {
          "data": {
            "cough": this.cough,
            "fever": this.fever, 
            "sore": this.sore, 
            "breathing": this.breathing, 
            "fatigue": this.fatigue, 
            "diarrhea": this.diarrhea,
            "travel": this.travel,
            "health_worker": this.health_worker,
            "personal_contact": this.personal_contact, 
            "name":this.name, 
            "phone_number": this.phone_number, 
            "city": this.city, 
            "age": this.age, 
            "gender": this.gender,
            "neighborhood": this.neighborhood, 
            "terms_and_conditions": this.terms_and_conditions,
            "pain": this.pain, 
            "place_id": this.place_id,
            "extra_symptoms": this.extraSymptoms,
            "document_type":this.selectedOptionDoc,
            "document":this.document,
            "regime": this.selectedOptionRegime,
            "joined_to": this.selectedOptionJoinedTo,
            "joined_to_other":this.other,//if joined to another entity
            
          }
        }
        console.log(payload)
        // try{
        //   let response = await this.$https.post('/cases', payload)
        //   if (response.status == 200){
        //     this.$noty.success("Solicitud recibida, pronto un especialista te contactará!")
        //     this.$router.push('/main')
        //   } else { 
        //       this.$noty.warning("No hemos podido registrar tu solicitud")
        //   }
        // } catch(e){
        //   this.$noty.warning("No hemos podido registrar tu solicitud")
        // }
      }
    },
    openInBlankPage: function(page){
      if(page == 'terms'){
        let route = this.$router.resolve({path: '/terms'});
        window.open(route.href, '_blank');
      }
    }, 
    getAddressData: function(addressData, placeResultData, id){
        console.log(placeResultData)
        console.log(id)
        if(addressData.locality != null){
          this.city = addressData.locality
        }else{
          this.city = addressData.administrative_area_level_1
        }             
        this.place_id = placeResultData.place_id 
    },
    onChangeList(list){
      console.log(list)
        this.flagJoinedToOther = false
      if(list == 'OTRO')
        this.flagJoinedToOther=true
      
    }
  }
}
</script>

<style>
  .title{ 
    padding: 1rem; 
  }
  .panel{
    background-color: #ebedef;
  }
  
  .submit-container{
    padding: 1rem; 
    margin: 1rem;
  }
  .submit-button{
    margin: auto; 
    display: block; 
  }
  .invalid-feedback-radios{
    display: block; 
  }
</style>
