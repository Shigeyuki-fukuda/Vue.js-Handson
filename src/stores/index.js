import Vue from 'vue'
import Vuex from 'vuex'
import _uuid from 'uuid/v4'

function uuid () {
  return _uuid().replace(/-/g, '')
}

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
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
    isLoggedIn: (state) => state.isLoggedIn,
    tickets: (state) => state.tickets
  },
  mutations: {
    doLogin (state) {
      state.isLoggedIn = true
    },
    createTicket (state, { ticket }) {
      state.tickets.push(ticket)
    }
  },
  actions: {
    doLogin ({ commit }) {
      commit('doLogin')
    },
    createTicket ({ commit }, { payload }) {
      commit('createTicket', { ticket: payload })
    }
  }
})
