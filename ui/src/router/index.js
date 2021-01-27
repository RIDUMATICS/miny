import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import URLDetails from '../views/URLDetails.vue'
import ErrorPage from '../views/ErrorPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ui/stats',
    name: 'URLDetails',
    component: URLDetails
  },
  {
    path: '/:catchAll(.*)',
    name: 'ErrorPage',
    component: ErrorPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
