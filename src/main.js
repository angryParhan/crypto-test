import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store.js'
import HighChartsCreator from './utils/HightChartCreator'
import socketStore from './store/socketStore'
import 'reset-css'

HighChartsCreator.innitHightCharts()
HighChartsCreator.addTheme()
HighChartsCreator.applyTheme()



Vue.config.productionTip = false
socketInit()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

async function socketInit() {
  if (!store.state.storage) {
    await store.registerModule('sockets', socketStore);
  }
  await store.dispatch('sockets/socketsConnect')
}
