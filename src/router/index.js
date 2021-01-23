import Vue from 'vue'
import VueRouter from 'vue-router'
import On from '../views/On.vue'
import Off from '../views/Off.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'On',
    component: On
  },
  {
    path: '/on',
    name: 'On',
    component: On
  },
  {
    path: '/off',
    name: 'Off',
    component: Off
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
