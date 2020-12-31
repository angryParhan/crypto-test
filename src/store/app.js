import CryptoModel from  '@/models/CurrensyRate/CryptoModel'

export default {
  namespaced: true,
  state: {
    blockChainList: {},
    error: false,
    blockChainLimit: 30,
    cryptoTableData: {},
    loading: false,
    offset: 0,
    loadingTableData: false
  },
  mutations: {
    SET_BLOCKCHAIN_LIST (state, value) {
      state.blockChainList = {...value}
    },
    SET_ERROR (state, value) {
      state.error = value
    },
    SET_INITIAL (state) {
      state.blockChainList = {}
      state.cryptoTableData = {}
      state.error = false
      state.blockChainLimit = 30
    },
    SET_BLOCKCHAINL_LIMIT (state, value) {
      state.blockChainLimit = value
    },
    SET_CRYPTOTABLE_DATA (state, value) {
      state.cryptoTableData = {...state.cryptoTableData, ...value}
    },
    SET_LOADING (state, value) {
      state.loading = value
    }
  },
  actions: {
    async innitBlockChainList ({ commit }) {
      try {
        const { Data } = (await CryptoModel.getBlockChainList()).data
        commit('SET_BLOCKCHAIN_LIST', Data)
      } catch (error) {
        console.error(error)
        commit('SET_ERROR', true)
      }
    },

    async getCryptoInfo ({ state, commit }, payload) {
      try {
        state.loadingTableData = true
        if (payload.initial) {
          state.cryptoTableData = {}
          state.offset = 0
        } else {
          console.log(Object.keys(state.blockChainList).length, Object.keys(state.cryptoTableData).length, state.offset)
          if (Object.keys(state.blockChainList).length <= Object.keys(state.cryptoTableData).length) {
            console.log('end')
            return
          }
        }
        let cryptoList
        if (payload.value) {
          cryptoList = payload.value
        } else {
          cryptoList = Object.keys(state.blockChainList).slice(state.offset, Object.keys(state.cryptoTableData).length + state.blockChainLimit).join()
        }

        console.log('params', cryptoList)
        const { Data } = (await CryptoModel.getCurrensyRate(cryptoList)).data
        await commit('SET_CRYPTOTABLE_DATA', Data)
        state.offset = Object.keys(state.cryptoTableData).length
        state.loadingTableData = false
      } catch (error) {
        console.error(error)
        commit('SET_ERROR', true)
      }
    }
  },
  getters: {
    getBlockCahinList (state) {
      return state.blockChainList
    },
    getLoading (state) {
      return state.loading
    },
    getCryptoTableData (state) {
      return state.cryptoTableData
    },
    getLoadingTableData (state) {
      return state.loadingTableData
    }
  }
}
