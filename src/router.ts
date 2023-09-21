import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    // {
    //   path: '/about',
    //   component: () => import('@/views/About.vue'),
    // },
    // {
    //   path: '/contact',
    //   component: () => import('@/views/Contact.vue'),
    // },
  ],
})
