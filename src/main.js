import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { ObserveVisibility } from 'vue-observe-visibility'

Vue.directive('observe', ObserveVisibility)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
