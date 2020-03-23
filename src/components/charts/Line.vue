
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
      ]
    }
  },
  mounted () {     
    let citiesObject = this.data.home_reports
    let cities = Object.keys(citiesObject)    
    let values = []
    cities.forEach(element => {
      let val = citiesObject[element]
      values.push(val)
    });
    values.push(0)
    this.renderChart(   
       {
        labels: cities,
        datasets: [
          {
            label: 'Ciudades' ,
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
</script>
