import Vue from 'vue'
import Vuex from 'vuex'
import _uuid from 'uuid/v4'

function uuid () {
  return _uuid().replace(/-/g, '')
}

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tickets: [
      {
        id: uuid(),
        name: 'サンプルチケット',
        due: '2018/03/01',
        description: 'チケットの説明チケットの説明チケットの説明チケットの説明'
      }
    ]
  },
  getters: {
    tickets: (state) => state.tickets
  },
  mutations: {
    createTicket (state, { ticket }) {
      state.tickets.push(ticket)
    }
  },
  actions: {
    createTicket ({ commit }, { payload }) {
      commit('createTicket', { ticket: payload })
    }
  }
})
