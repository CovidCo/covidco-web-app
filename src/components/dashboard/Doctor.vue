<template>
    <b-container fluid class="main">
      <!-- User Interface controls -->
      <b-row>
        <b-col lg="6" class="my-1">
          <b-form-group label="Ordenar por" label-cols-sm="3" label-align-sm="right"
            label-size="sm" label-for="sortBySelect" class="mb-0">
            <b-input-group size="sm">
              <b-form-select v-model="sortBy" id="sortBySelect" :options="sortOptions" class="w-75">
                <template v-slot:first>
                  <option value="">-- Ninguno --</option>
                </template>
              </b-form-select>
              <b-form-select v-model="sortDesc" size="sm" :disabled="!sortBy" class="w-25">
                <option :value="false">A-Z</option>
                <option :value="true">Z-A</option>
              </b-form-select>
            </b-input-group>
          </b-form-group>
        </b-col>

        <b-col lg="6" class="my-1">
          <!-- <b-form-group
            label="Initial sort"
            label-cols-sm="3"
            label-align-sm="right"
            label-size="sm"
            label-for="initialSortSelect"
            class="mb-0"
          >
            <b-form-select
              v-model="sortDirection"
              id="initialSortSelect"
              size="sm"
              :options="['asc', 'desc', 'last']"
            ></b-form-select>
          </b-form-group> -->
        </b-col>

        <b-col lg="6" class="my-1">
          <b-form-group
            label="Filtrar" label-cols-sm="3" label-align-sm="right"
            label-size="sm" label-for="filterInput" class="mb-0">
            <b-input-group size="sm">
              <b-form-input
                v-model="filter"
                type="search"
                id="filterInput"
                placeholder="Escribe para buscar"
              ></b-form-input>
              <b-input-group-append>
                <b-button :disabled="!filter" @click="filter = ''">Limpiar</b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>

        <b-col lg="6" class="my-1">
          <b-form-group
            label="Filtrar por" label-cols-sm="3" label-align-sm="right" label-size="sm"
            description="Deja vacio para filtrar por todos los campos" class="mb-0">
            <b-form-checkbox-group v-model="filterOn" class="mt-1">
              <b-form-checkbox value="name">Nombre</b-form-checkbox>
              <!-- <b-form-checkbox value="age">Edad</b-form-checkbox> -->
              <b-form-checkbox value="fever">Fiebre</b-form-checkbox>
              <b-form-checkbox value="city">Ciudad</b-form-checkbox>
              <b-form-checkbox value="status">Estado</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>
        </b-col>

        <b-col sm="5" md="6" class="my-1">
          <b-form-group
            label="Filas por página" label-cols-sm="6"
            label-cols-md="4" label-cols-lg="3"
            label-align-sm="right" label-size="sm"
            label-for="perPageSelect" class="mb-0">
            <b-form-select
              v-model="perPage" id="perPageSelect" size="sm" :options="pageOptions"
            ></b-form-select>
          </b-form-group>
        </b-col>

        <b-col sm="7" md="6" class="my-1">
          <b-pagination
            v-model="currentPage" :total-rows="totalRows" :per-page="perPage" align="fill"
            size="sm" class="my-0">
          </b-pagination>
        </b-col>
      </b-row>

      <!-- Main table element -->
      <b-table show-empty small stacked="md" ref="table"
        :busy.sync="isBusy" :items="callCasesApi"
        :fields="fields" :current-page="currentPage" 
        :per-page="perPage" :filter="filter" :filterIncludedFields="filterOn"
        :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :sort-direction="sortDirection" @filtered="onFiltered">
        <template v-slot:cell(actions)="row">
          <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
            Cambiar estado
          </b-button>
          <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
            Ver detalles
          </b-button>
          <!--
          <b-button size="sm" @click="row.toggleDetails">
            {{ row.detailsShowing ? 'Cerrar' : 'Ver' }} Detalle
          </b-button>
          -->
        </template>
        <!--
        <template v-slot:row-details="row">
          <b-card>
            <ul>
              <li v-for="(value, key) in row.item" :key="key">{{ formatKeyValue(value, key) }}</li>
            </ul>
          </b-card>
        </template>
        -->
      </b-table>

      <!-- Info modal -->
      <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
        <li v-for="(value, key) in infoModal.content" :key="key">{{key}} : {{value }}</li>
      </b-modal>
    </b-container>
</template>

<script>
  export default {
    data() {
      return {
        items: [],
        fields: [
          { key: 'name', label: 'Nombres', sortable: true, sortDirection: 'desc' },
          { key: 'city', label: 'Ciudad', sortable: true, sortDirection: 'desc' },
          { key: 'phone_number', label: 'Celular', sortable: false, class: 'text-center' },          
          { key: 'age', label: 'Edad', sortable: true, class: 'text-center' },                    
          { key: 'fever', label: 'Fiebre', formatter: (value) => {return value ? 'Si' : 'No'},
          sortable: true, sortByFormatted: true, filterByFormatted: true},
          { key: 'fatigue', label: 'Fatiga', formatter: (value) => {return value ? 'Si' : 'No'}},
          { key: 'status', label: 'Estado', sortable: true, class: 'text-center', formatter: (value) => { return value ? 'No atendido': 'Atendido' } },
          { key: 'actions', label: 'Acciones' }
        ],
        isBusy: false, 
        totalRows: 1,
        currentPage: 1,
        perPage: 5,
        pageOptions: [5, 10, 15],
        sortBy: '',
        sortDesc: false,
        sortDirection: 'asc',
        filter: null,
        filterOn: [],
        infoModal: {
          id: 'info-modal', title: '', content: ''
        }
      }
    },
    computed: {
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      }
    },
    mounted() {
      // Set the initial number of items
      this.totalRows = this.items.length
      this.callCasesApi()
    },
    methods: {
      info(item, index, button) {
        this.infoModal.title = `Paciente ${index}`
        // parse content 
        let modalContent = {}
        for (var key in item) {
          let val = item[key]
          if (key == 'name'){
            modalContent['Nombre'] = val 
          } else if (key == 'age'){
            modalContent['Edad'] = val 
          } else if (key == 'phone_number'){
            modalContent['Contacto'] = val  
          } else if (key == 'fever') {
            modalContent['Fiebre'] = val ? 'Si' : 'No'
          } else if (key == 'breathing'){
            modalContent['Dificultad respiración'] = val ? 'Si' : 'No'
          } else if (key == 'cough') {
            modalContent['Tos'] = val ? 'Si' : 'No'
          } else if (key == 'sore') {
            modalContent['Dolor de garganta'] = val ? 'Si' : 'No'
          } else if (key == 'diarrhea') {
            modalContent['Diarrea'] = val ? 'Si' : 'No'
          } else if (key == 'travel') {
            modalContent['Viaje reciente'] = val ? 'Si' : 'No'
          } else if (key == 'health_worker') {
            modalContent['Contacto trabajador de la salud'] = val ? 'Si' : 'No'
          } else if (key == 'personal_contact') {
            modalContent['Contacto persona contagiada'] = val ? 'Si' : 'No'
          } else if (key == 'pain') {
            modalContent['Dolor'] = val ? 'Si' : 'No'
          } else if (key == 'gender') {
            modalContent['Genero'] = val == 'male' ? 'Masculino': 'Femenino' 
          } else if (key == 'city'){
            modalContent['Ciudad'] = val 
          } else if (key == 'neighborhood'){
            modalContent['Barrio'] = val
          }
        }
        this.infoModal.content = modalContent 
        this.$root.$emit('bv::show::modal', this.infoModal.id, button)
      },
      resetInfoModal() {
        this.infoModal.title = ''
        this.infoModal.content = ''
      },
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        // this.currentPage = 1
      },
      formatKeyValue(value, key){
        if('name' == key){
          return 'Nombre: ' + value
        } else {
          return '' 
        } 
      }, 
      callCasesApi(page = 0){
        this.isBusy = true
        let perPage = this.perPage
        let url = '/cases'
        let params = []
        if (page.currentPage){
          page = page.currentPage - 1
        } else {
          page = 0
        }
        if(perPage != 0){ params.push(`per_page=${perPage}`) }
        if(page != 0){ params.push(`page=${page}`) }
        if(params.length > 0){
          params = params.join('&')
          url = url + '?' + params 
        }
        return this.$https.get(url).then((response) => {
          let items = []
          if (response.status == 200){
            // total rows 
            this.totalRows = response.data.data.items
            response.data.data.payload.forEach((item) => {
              // "id": "41", "fever": false, "cough": true,
              // "sore": true, "breathing": true,
              // "fatigue": false, "diarrhea": true,
              // "status": true, "travel": false,
              // "health_worker": true, "personal_contact": true,
              // "pain": false, "terms_and_conditions": false,
              // "gender": "female", "name": "string",
              // "phone_number": "", "city": "",
              // "neighborhood": "hey you honey", "age": 1,
              // "created_at": "2020-03-27T18:33:20.000Z", "place_id": ""
              if (item.status == 'true'){
                item['_cellVariants'] = {status: 'success'}
              } else{
                item['_cellVariants'] = {status: 'danger'}
              }
              this.isBusy = false
              items.push(item)
            })
          } else { 
            this.isBusy = false
            this.$noty.warning("No hemos podido obtener los datos")
          } 
          return(items)
        }).catch((e) => {
          this.isBusy = false
          this.$noty.warning("No hemos podido obtener los datos")
          console.log(e)
          return []
        })
      }
    }
  }
</script>

<style scoped>
  .main{
    margin-top: 5rem;
  }
</style>
