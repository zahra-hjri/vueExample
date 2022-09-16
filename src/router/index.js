import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Map from '../views/Map.vue'
import Address from '../views/Address.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
    
  },
  {
    path: '/map',
    name: 'Map',
    component: Map
    
  },
  {
    path: '/address',
    name: 'Address',
    component: Address,
    meta: { loginrequired: true }
    
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.loginrequired)) {
    if (store.state.isAuthentacated) {
      next()
    } else {
      next("/login")
    }
  } else {
    next() 
  }
})


export default router
