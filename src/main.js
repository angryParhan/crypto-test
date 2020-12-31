import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store.js'
import HighChartsCreator from './utils/HightChartCreator'
import 'reset-css'

HighChartsCreator.innitHightCharts()
HighChartsCreator.addTheme()
HighChartsCreator.applyTheme()



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
