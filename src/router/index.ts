// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { routes as main } from '@/modules/main/router'

const routes = [...main]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
