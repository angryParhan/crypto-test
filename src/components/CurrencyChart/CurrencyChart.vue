<template>
  <section>


    <chartPreloader
        v-if="loading || (liveUnavailable && chartType !== 'historyChart')"
        :disable-animation="liveUnavailable && chartType !== 'historyChart'"
    />

    <template v-else-if="chartOptions.series[0].data.length && chartType === 'historyChart'">
      <highcharts
          class="chart-data"
          :options="chartOptions"
          ref="chart"
      />
    </template>
    <template v-else>
      <highcharts
          class="chart-data"
          :options="liveChartOptions"
          ref="liveChart"
      />
    </template>

  </section>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Highcharts from "highcharts"
  import chartPreloader from './ChartLoader'

  export default {
    name: "CurrencyChart",

    components: { chartPreloader },

    props: {
      chartType: {
        type: String,
        default: 'historyChart'
      }
    },

    data () {
      return {
        chart: null,
        liveUnavailable: false,
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
        },

        liveChartOptions: {
          chart: {
            zoomType: 'x'
          },
          time: {
            useUTC: false
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
        seriesTitle: 'chartStore/getSeriesTitle',
        currentCoin: 'chartStore/getCurrentCoin',
        task: 'sockets/getTask'
      })
    },

    watch: {
      seriesData () {
        this.redrawChart()
      },
      currentCoin (nv, ov) {
        this.liveUnavailable = false
        this.$emit('changeTab', 'historyChart')
        if (nv && ov) {
          console.log(nv, ov)
          this.removeTask({coin: ov})
          this.liveChartOptions.series[0].data = []
        }
      },
      chartType (nv) {
        this.liveUnavailable = false
        if (nv !== 'historyChart') {
          if (this.currentCoin) {
            const task = {
              coin: this.currentCoin,
              updateCallback: (res) => {
                if (res[0] === '5' && Number(res[5]) && (this.currentCoin === 'BTC' ? res[4] !== '4': true)) {
                  this.liveChartOptions.series[0].data = [...this.liveChartOptions.series[0].data, [(new Date()).getTime(), Number(res[5])]]
                  console.log(Number(res[5]))
                }
                console.log(res);

              },
              errorCollback: (error) => {
                if (error === '500') {
                  this.liveUnavailable = true
                }
              }
            }
            this.addTask(task)
          }
        } else {
          if (this.task.length) {
            this.removeTask({coin: this.task[0].coin})
          }
        }
        console.log('new tab', nv)
      }
    },

    mounted () {
    },

    methods: {
      ...mapActions({
        addTask: 'sockets/addTask',
        removeTask: 'sockets/leaveTask'
      }),
      redrawChart () {
        this.chartOptions.series[0].name = this.seriesTitle
        this.chartOptions.title.text = this.Xtitle
        this.chartOptions.series[0].data = this.seriesData
      }
    }
  }
</script>

<style lang="scss">

  .chart-data {
    width: 100%;
  }
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
