<template>
    <div>
        <b-row>
            <b-col sm="12" md="12">
                <br>
                <div class="card">
                    <div class="card-header">
                        Líneas de atención a nivel nacional
                    </div>
                    <div class="card-body">
                        <b-row>
                            <b-col sm="4" md="12" lg="12">
                            <div class="form-group">
                                <label for="city"><small id="nameHelp" class="form-text text-muted">Indicanos en que ciudad te encuentras</small></label>
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
                        </b-row>
                    </div>
                </div>
            </b-col>
        </b-row>
        <br>
        <b-row>
            <b-col sm="12" md="12">
                <b-table responsive bordered :items="items" :fields="fields" head-variant="light"></b-table>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete'
const { required } = require('vuelidate/lib/validators')

export default {
  name: 'AttentionLines',
  data(){
    return{
        city: null, 
        place_id: null,
        fields: [
          {
            key: 'contacto',
            sortable: true
          },
          {
            key: 'telefono',
            sortable: false
          },
        ],
        items: [
          { contacto: 'Min Salud Línea nacional ', telefono: '01 8000 95 55 90'},
          { contacto: 'Min Salud Bogotá', telefono: '330 50 41'},
          { contacto: 'Min Salud celular', telefono: '192'}
        ]
        }
  },
  components:{
    VueGoogleAutocomplete
  }, 
  validations: {
    city:{
      required
    }
  }, 
  methods:{
    getAddressData: function(addressData, placeResultData, id){
        // console.log(placeResultData)
        console.log(addressData)
        console.log(id)
        if(addressData.locality != null){
          this.city = addressData.administrative_area_level_1
           this.fetchPhoneNumbers(this.city)
        }             
        this.place_id = placeResultData.place_id 
    },
    fetchPhoneNumbers: function(place){
      console.log(place)
      let db = this.$firebase.firestore();
      let docRef = db.collection("attention_lines")
      this.items = [
          { contacto: 'Min Salud Línea nacional ', telefono: '01 8000 95 55 90' },
          { contacto: 'Min Salud Bogotá', telefono: '330 50 41' },
          { contacto: 'Min Salud celular', telefono: '192' }
        ]
      // return new Promise((resolve, reject) => {
        docRef.where('city','==',place).get().then((querySnapshot) => {
          // console.log(querySnapshot)
          querySnapshot.forEach((doc) => {            
              // let documentId =  doc.id
              let commentRecord = doc.data()
              let phones = commentRecord.phone_numbers

              if(phones!=null && phones.length > 0){
                phones.forEach(item =>{
                let contact = {
                  contacto: item.entity,
                  telefono: item.phone_number
                }
                this.items.unshift(contact)
              })
              }
          })
      }).catch((e) => {
        console.log(e)
      })
    }
  }
}
</script>

<style>
  
</style>
