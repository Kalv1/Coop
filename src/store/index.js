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
    ready: false,
    members : {},
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
    },
    setReady(state , ready){
      state.ready = ready
    },
    setMembers(state, members){
      state.members = members
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
