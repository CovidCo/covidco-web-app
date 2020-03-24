<template>
  <b-container fluid>
    <!-- User Interface controls -->
    <b-row>
      <b-col lg="6" class="my-1">
        <b-form-group
          label="Ordenar por"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          label-for="sortBySelect"
          class="mb-0"
        >
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
          label="Filtrar"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          label-for="filterInput"
          class="mb-0"
        >
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
          label="Filtrar por"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          description="Deja vacio para filtrar por todos los campos"
          class="mb-0">
          <b-form-checkbox-group v-model="filterOn" class="mt-1">
            <b-form-checkbox value="name">Nombre</b-form-checkbox>
            <!-- <b-form-checkbox value="age">Edad</b-form-checkbox> -->
            <b-form-checkbox value="fever">Fiebre</b-form-checkbox>
            <b-form-checkbox value="city">Ciudad</b-form-checkbox>
            <b-form-checkbox value="state">Estado</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
      </b-col>

      <b-col sm="5" md="6" class="my-1">
        <b-form-group
          label="Filas por página"
          label-cols-sm="6"
          label-cols-md="4"
          label-cols-lg="3"
          label-align-sm="right"
          label-size="sm"
          label-for="perPageSelect"
          class="mb-0"
        >
          <b-form-select
            v-model="perPage"
            id="perPageSelect"
            size="sm"
            :options="pageOptions"
          ></b-form-select>
        </b-form-group>
      </b-col>

      <b-col sm="7" md="6" class="my-1">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0"
        ></b-pagination>
      </b-col>
    </b-row>

    <!-- Main table element -->
    <b-table
      show-empty
      small
      stacked="md"
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filterIncludedFields="filterOn"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      @filtered="onFiltered"
    >
      <!-- <template v-slot:cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template> -->

      <template v-slot:cell(actions)="row">
        <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
          Cambiar estado
        </b-button>
        <b-button size="sm" @click="row.toggleDetails">
          {{ row.detailsShowing ? 'Cerrar' : 'Ver' }} Detalle
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

    <!-- Info modal -->
    <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
      <pre>{{ infoModal.content }}</pre>
    </b-modal>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { city:'Popayán', state: 'pendiente', phone_number: '3209876541', fever: false, age: 40, name: 'Laura Garcia', _cellVariants: { state: 'danger' } },
          { city:'Popayán', state: 'ejecutando', phone_number: '3109876543', fever: false, age: 21, name: 'Guillermo Gonzales', _cellVariants: { state: 'warning' } },
          {
            city:'Envigado',
            state: 'realizado',
            phone_number: '3149876549',
            fever: true,
            age: 9,
            name: 'Apolinar Mosquera',
            _cellVariants: { state: 'success' }
          },
          { city:'Popayán', state: 'pendiente', phone_number: '3023874512', fever: false, age: 89, name: 'Jose Cerón', _cellVariants: { state: 'danger' } },
          { city:'Bucaramanga', state: 'pendiente', phone_number: '3219876544', fever: true, age: 38, name: 'Pedro Torres', _cellVariants: { state: 'danger' }},
          { city:'Popayán', state: 'pendiente', phone_number: '3159876543', fever: false, age: 27, name: 'Laura Villamizar',_cellVariants: { state: 'danger' } },
          { city:'Popayán', state: 'pendiente', phone_number: '3019876543', fever: true, age: 40, name: 'Juana de Arco',_cellVariants: { state: 'danger' } },
          {
            city:'Popayán',
            state: 'pendiente', 
            phone_number: '3219876548',
            fever: true,
            age: 87,
            name: 'Iván Zuñiga',
            // _cellVariants: { age: 'warning', fever: 'danger' }
            _cellVariants: { state: 'danger' }
          },
          { city:'Medellín', state: 'ejecutando', phone_number: '3039876543', fever: false, age: 26, name: 'Santiago Ospina',  _cellVariants: { state: 'warning' } },
          { city:'Medellín', state: 'ejecutando', phone_number: '3029876543', fever: false, age: 22, name: 'David Rodriguez',  _cellVariants: { state: 'warning' }  },
          { city:'Cali', state: 'ejecutando', phone_number: '3019876546', fever: true, age: 38, name: 'Oscar Quintero',  _cellVariants: { state: 'warning' }  },
          { city:'Cali', state: 'ejecutando', phone_number: '3119876543', fever: false, age: 29, name: 'Sofia Zapata',  _cellVariants: { state: 'warning' }  }
        ],
        fields: [
          { key: 'name', label: 'Nombres', sortable: true, sortDirection: 'desc' },
          { key: 'city', label: 'Ciudad', sortable: true, sortDirection: 'desc' },
          { key: 'phone_number', label: 'Celular', sortable: false, class: 'text-center' },          
          { key: 'age', label: 'Edad', sortable: true, class: 'text-center' },                    
          {
            key: 'fever',
            label: 'Fiebre',
            formatter: (value) => {                
              return value ? 'Si' : 'No'
            },
            sortable: true,
            sortByFormatted: true,
            filterByFormatted: true
          },
          { key: 'state', label: 'Contacto', sortable: true, class: 'text-center' },
          { key: 'actions', label: 'Acciones' }
        ],
        totalRows: 1,
        currentPage: 1,
        perPage: 5,
        pageOptions: [5, 10, 15, 50, 100],
        sortBy: '',
        sortDesc: false,
        sortDirection: 'asc',
        filter: null,
        filterOn: [],
        infoModal: {
          id: 'info-modal',
          title: '',
          content: ''
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
    },
    methods: {
      info(item, index, button) {
        this.infoModal.title = `Row index: ${index}`
        this.infoModal.content = JSON.stringify(item, null, 2)
        this.$root.$emit('bv::show::modal', this.infoModal.id, button)
      },
      resetInfoModal() {
        this.infoModal.title = ''
        this.infoModal.content = ''
      },
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      }
    }
  }
</script>