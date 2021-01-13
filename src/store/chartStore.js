import CryptoModel from  '@/models/CurrensyRate/CryptoModel'

export default {
  namespaced: true,
  state: {
    Xtitle: '',
    seriesTitle: '',
    seriesData: [],
    loading: false,
    currentCoin: ''
  },
  mutations: {
    SET_SERIAS_DATA (state, value) {
      state.seriesData = [...value]
    },
    SET_INITIAL (state) {
      state.Xtitle = ''
      state.seriesTitle = ''
      state.seriesData = []
      state.loading = false
      state.currentCoin = ''
    },
    SET_CHART_LOADING (state, value) {
      state.loading = value
    }
  },
  actions: {
    async getChartData ({ commit, state }, payload) {
      state.currentCoin = payload.value
      commit('SET_CHART_LOADING', true)
      window.scroll({top: 0, behavior: 'smooth'})
      state.Xtitle = `${payload.displayValue} to USD exchange rate`
      state.seriesTitle = `${payload.displayValue} to USD`
      const { Data } = (await CryptoModel.getChartData(payload.value)).data.Data
      const formatedData = Data.map(item => [new Date(item.time) * 1000, item.close])
      commit('SET_SERIAS_DATA', formatedData)
      commit('SET_CHART_LOADING', false)
    }
  },
  getters: {
    getSeriesData (state) {
      return state.seriesData
    },
    getChartTitle (state) {
      return state.Xtitle
    },
    getSeriesTitle (state) {
      return state.seriesTitle
    },
    getLoading (state) {
      return state.loading
    },
    getCurrentCoin (state) {
      return state.currentCoin
    }
  }
}
