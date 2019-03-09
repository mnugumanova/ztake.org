import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/staking',
      name: 'staking',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "staking" */ './views/Staking.vue')
    },
    {
      path: '/cosmos_glossary',
      name: 'cosmos_glossary',
      component: () => import(/* webpackChunkName: "cosmos_glossary" */ './views/CosmosGlossary.vue')
    },
    {
      path: '/partnership',
      name: 'partnership',
      component: () => import(/* webpackChunkName: "partnership" */ './views/Partnership.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
