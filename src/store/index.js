import Vue from 'vue'
import Vuex from 'vuex'
import pokedexStore from './pokedexStore'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  modules: {
    pokedexStore,
  }
})
