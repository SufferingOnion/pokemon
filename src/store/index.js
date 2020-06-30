import Vue from 'vue'
import Vuex from 'vuex'
import pokedexStore from './pokedexStore'
import Search from './Search'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  modules: {
    pokedexStore,
    search: Search,
  }
})
