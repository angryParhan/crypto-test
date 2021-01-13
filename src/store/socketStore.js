const apiKey = 'bdd0b06034120d270306394eaba4e8322f2ca68de04eb0b077c6d7b19c8e236f'

export default {
  namespaced: true,
  state: {
    sockets: null,
    connected: false,
    tasks: []
  },
  mutations: {
  },
  actions: {
    socketsConnect ({state}) {
      state.sockets = new WebSocket(`wss://streamer.cryptocompare.com/v2?api_key=${apiKey}&format=streamer`)
      state.sockets.onopen = () => {
        state.connected = true
      }

      state.sockets.onclose = () => {
        state.connected = false
      }
    },

    pushTask ({state}, payload) {
      const subRequest = {
        action: 'SubAdd',
        subs: [`5~CCCAGG~${payload.coin}~USD`]
      }
      state.sockets.send(JSON.stringify(subRequest))
      console.log('push')
      const task = {
        coin: payload.coin,
      }
      state.sockets.onmessage = (message) => {
        const formattedData = message.data.split('~')
        if (formattedData[0] === '500') {
          payload.errorCollback('500')
        }
        payload.updateCallback(formattedData)
      }
      state.tasks.push(task)
    },

    addTask({state, dispatch}, payload) {
      const waitUntilConnect = () => setTimeout(() => {
        if (state.sockets.readyState === 1) {
          console.log('connection succedsee')
          dispatch('pushTask', payload)
        } else {
          console.log("wait for connection...")
          waitUntilConnect()
        }
      }, 200)

      console.log('status', state.sockets.readyState, payload)
      switch (state.sockets.readyState) {
        case 0:
          waitUntilConnect()
          break
        case 1:
          dispatch('pushTask', payload)
      }
    },

    leaveTask ({state}, payload) {
      const taskLeave = {
        action: 'SubRemove',
        subs: [`5~CCCAGG~${payload.coin}~USD`]
      }
      state.sockets.send(JSON.stringify(taskLeave))
      const indx = state.tasks.findIndex(item => item.coin === payload.coin)
      if (indx !== -1) {
        state.tasks.splice(indx, 1)
      }
    }
  },
  getters: {
    getSocketInstance (state) {
      return state.sockets
    },
    getSocketStatus (state) {
      return state.connected
    },
    getTask (state) {
      return state.tasks
    }

  }
}