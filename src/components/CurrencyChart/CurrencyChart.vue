<template>
  <section>
    <highcharts
        :options="chartOptions"
        ref="chart"

    />
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Highcharts from "highcharts"

  export default {
    name: "CurrencyChart",

    data () {
      return {
        chart: null,
        chartOptions: {
          chart: {
            zoomType: 'x'
          },
          title: {
            text: ''
          },
          subtitle: {
            text: document.ontouchstart === undefined ?
            'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
          },
          xAxis: {
            type: 'datetime',
            ordinal: true
          },
          yAxis: {
            title: {
              text: 'Exchange rate'
            }
          },
          legend: {
            enabled: false
          },
          plotOptions: {
            area: {
              fillColor: {
                linearGradient: {
                  x1: 0,
                  y1: 0,
                  x2: 0,
                  y2: 1
                },
                stops: [
                  [0, Highcharts.getOptions().colors[0]],
                  [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                ]
              },
              marker: {
                radius: 2
              },
              lineWidth: 1,
              states: {
                hover: {
                  lineWidth: 1
                }
              },
              threshold: null
            }
          },

          series: [{
            type: 'area',
            name: 'Bitcoin to USD',
            data: []
          }]
        }
      }
    },


    computed: {
      ...mapGetters({
        seriesData: 'chartStore/getSeriesData',
        Xtitle: 'chartStore/getChartTitle',
        loading: 'chartStore/getLoading',
        seriesTitle: 'chartStore/getSeriesTitle'
      })
    },

    watch: {
      seriesData () {
        this.redrawChart()
      }
    },

    mounted () {
    },

    methods: {
      redrawChart () {
        this.chartOptions.series[0].name = this.seriesTitle
        this.chartOptions.title.text = this.Xtitle
        this.chartOptions.series[0].data = this.seriesData
      }
    }
  }
</script>

<style lang="scss">
  .highcharts-credits {
    display: none !important;
  }

  .highcharts-title {
    color: #E0E0E3 !important;
    font-size: 20px !important;
    text-transform: uppercase !important;
    fill: #E0E0E3 !important;
  }

</style>
