import Vue from 'vue'
import Vuex from 'vuex'
import pokedex from './pokedex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  modules: {
    pokedex,
  }
})
