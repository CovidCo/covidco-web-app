
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
    this.renderChart(
   
       {
        labels: this.data.departments,
        datasets: [
          {
            label: this.data.country,
            backgroundColor: this.colors,
            data: this.data.values
          }
        ]
      },  
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
