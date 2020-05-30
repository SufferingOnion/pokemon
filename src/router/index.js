import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
  
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/SomeContent',
    name: 'SomeContent',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/SomeContent.vue')
  },
  {
    path: '/Pocedex',
    name: 'Pocedex',
    
    component: () => import('../views/Pocedex.vue'),
  },
  {
    path: '/Pokemon/:name',
    name: 'Pokemon',
    
    component: () => import('../components/Pokemon.vue'),props: true,
  },

]


const router = new VueRouter({
  routes,
})

export default router
