import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import Experiment001 from '@/components/Experiment001.vue'

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/experiment001',
    name: 'Experiment001',
    component: Experiment001,
  },
  // Add more routes here
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
