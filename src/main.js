import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';

Vue.prototype.$bus = new Vue({});

Vue.prototype.$api = axios.create({
  baseURL: 'https://allweb.fun/coop/api',
  params: {},
  headers: {
    Authorization: '5db757ba6089dfad6c8d9baf386df498f0b8acc6'
  }
});

Vue.prototype.$api.interceptors.request.use(function (config) {
  if(store.state.token){
    config.params.token = store.state.token;
  }
  return config;
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
