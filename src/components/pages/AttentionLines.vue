<template>
    <div>
        <b-row>
            <b-col sm="12" md="6">
                <br>
                <div class="card">
                    <div class="card-header">
                        Líneas de atención
                    </div>
                    <div class="card-body">
                        <b-row>
                            <b-col sm="4" md="4" lg="6">
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
            <b-col sm="12" md="6">
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
          { contacto: 'Dickerson', telefono: 'Macdonald' },
          { contacto: 'Dickerson', telefono: 'Macdonald' },
          { contacto: 'Dickerson', telefono: 'Macdonald' }
        ]
        }
  },
  mounted(){
    this.fetchPhoneNumbers().then((data) => {
      console.log('hendrix says  ' + JSON.stringify(data))

    }).catch((e) => {
      console.log('error ' + e)
    })  
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
        console.log(placeResultData)
        console.log(id)
        if(addressData.locality != null){
          this.city = addressData.locality
        }else{
          this.city = addressData.administrative_area_level_1
        }             
        this.place_id = placeResultData.place_id 
    },
    fetchPhoneNumbers: function(){
      let db = this.$firebase.firestore();
      let docRef = db.collection("attention_lines")
      return new Promise((resolve, reject) => {
        docRef.get().then((querySnapshot) => {
          console.log(querySnapshot)
          querySnapshot.forEach((doc) => {
              let documentId =  doc.id
              let commentRecord = doc.data()
              console.log(documentId)
              console.log(commentRecord)
          })
          resolve({'hey': 'joe'})
        }).catch((e) => {
          console.log(e)
          reject(null)
        })
      })
    }
  }
}
</script>

<style>
  
</style>
