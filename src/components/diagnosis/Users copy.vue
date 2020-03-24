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
            <b-col sm="12" md="12">
                <b-table 
                    responsive bordered 
                    :items="items" 
                    :fields="fields" 
                    head-variant="light" 
                    :striped="true" 
                    :sort-by.sync="sortBy" 
                    :sort-desc.sync="sortDesc" 
                    :per-page="perPage"
                    :current-page="currentPage"
                    small>

                         <template v-slot:cell(name)="row">
                            {{ row.value.first }} {{ row.value.last }}
                        </template>
                    
                         <template v-slot:cell(actions)="row">
                            <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
                            Info modal
                            </b-button>                           
                        </template>

                        <template v-slot:row-details="row">
                            <b-card>
                            <ul>
                                <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
                            </ul>
                            </b-card>
                        </template>
                </b-table>
                <b-pagination
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    aria-controls="my-table"
                ></b-pagination>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete'
const { required } = require('vuelidate/lib/validators')

export default {
  name: 'Users',
  data(){
    return{
        city: null, 
        place_id: null,
        sortBy: 'ciudad',
        sortDesc: false,        
        perPage: 10,
        currentPage: 1,
        fields: [
          {key: 'ciudad',sortable: true},
          {key: 'nombre',sortable: false},
          {key: 'celular',sortable: false},
          {key: 'sexo',sortable: false},
          {key: 'edad',sortable: false},
          {key: 'fiebre',sortable: true},
          {key: 'dificultadRespiratoria',sortable: false},
          {key: 'tos',sortable: false},
          {key: 'diarrea',sortable: false},
          {key: 'fatiga',sortable: false},
          {key: 'trabajadorSalud',sortable: false},
          {key: 'dolorGarganta',sortable: false},
        ],
        items: [
          { ciudad: 'Popayán', nombre: 'Jose', celular: '3204359813', sexo: 'hombre', edad:'30', fiebre: 'SI', dificultadRespiratoria: 'SI',tos: 'NO', diarrea: 'NO', fatiga: 'NO', trabajadorSalud: 'SI', dolorGarganta: 'NO',_cellVariants: { fiebre: 'danger', dificultadRespiratoria: 'warning', trabajadorSalud:'warning' }},
          { ciudad: 'Popayán', nombre: 'Jose', celular: '3204359813', sexo: 'hombre', edad:'30', fiebre: 'SI', dificultadRespiratoria: 'SI',tos: 'NO', diarrea: 'NO', fatiga: 'NO', trabajadorSalud: 'SI', dolorGarganta: 'NO',_cellVariants: { fiebre: 'danger', dificultadRespiratoria: 'warning', trabajadorSalud:'warning' }},
          { ciudad: 'Cali', nombre: 'Juan', celular: '3105120393', sexo: 'hombre', edad:'40', fiebre: 'NO', dificultadRespiratoria: 'SI',tos: 'SI', diarrea: 'NO', fatiga: 'NO', trabajadorSalud: 'NO', dolorGarganta: 'NO'},              
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
  computed: {
    rows() {
        return this.items.length
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
  } 
}
</script>

<style>
  
</style>
