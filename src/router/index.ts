// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/HomeView.vue'),
    name: 'HomeView',
  },
  {
    path: '/about',
    component: () => import('@/views/AboutView.vue'),
    name: 'AboutView',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
