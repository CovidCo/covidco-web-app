
<script>
import { Bar } from 'vue-chartjs'


export default {
  components: {

  },
  props:{
    data:{      
      default: '[]'
    },
    
  }, 
  extends: Bar,
  data(){
    return{
      colors: [
        'rgb(50, 31, 219,0.9)',//purple
        'rgb(206, 210, 216,0.9)',//gray
        'rgb(46, 184, 92)', //green
        'rgb(229, 83, 83)', //red
        'rgb(249, 177, 21)',//yellow
        'rgb(51, 153, 255)',//blueLight
      ], 
      datas: [
          {
              country: 'Colombia',
              departments: ['Antioquia', 'Cauca', 'Valle', 'Santander', 'Nariño'],
              values: [29,2,4,6,1],                                              
          },
          {
              country: 'Perú',
              departments: ['Lima', 'Arequipa', 'Callao'],
              values: [30,40,10,0]                                                                     
          }
      ], 
      chartData: null
    }
  },
  async beforeCreate(){
    try{
      let response = await this.$https.get('/homeReports/statistics/place_id')
      if (response.status == 200){
        console.log(response)
        this.chartData = response.data.data
        this.buildChart()
      } else { 
        this.$noty.warning("No hemos podido obtener los datos")
      } 
    } catch(e){
      console.log('could not fetch data: ' + e)
    }
  },
  mounted () {     
  }, 
  methods: {
    buildChart: function(){
      let citiesObject = this.chartData.home_reports
      let cities = Object.keys(citiesObject)    
      let values = []
      let colors = []
      cities.forEach(element => {
        let val = citiesObject[element]
        values.push(val)
        colors.push('#'+(Math.random()*0xFFFFFF<<0).toString(16))
      });
      values.push(0)
      this.colors = colors 
      this.renderChart(   
         {
          labels: cities,
          datasets: [
            {
              label: 'Personas',
              backgroundColor: this.colors,
              data: values
            }
          ]
        },  
        //  {
        //   labels: this.data.departments,
        //   datasets: [
        //     {
        //       label: this.data.country,
        //       backgroundColor: this.colors,
        //       data: this.data.values
        //     }
        //   ]
        // },  
        {
          responsive: true,
          maintainAspectRatio: true,
          tooltips: {
            enabled: true,
            // custom: CustomTooltips,
            intersect: true,
            mode: 'index',
            position: 'nearest',
            callbacks: {
              labelColor: function (tooltipItem, chart) {
                return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].backgroundColor }
              }
            }
          }
        }
      )
    }
  }
}
</script>
