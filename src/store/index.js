import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    membre: {},

  },
  mutations: {
    storeToken(state , token) {
      state.token = token
    },
    storeMembre(state , membre){
      state.membre = membre
    },
    clearData(state){
      state.token = ''
      state.membre = {}
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
