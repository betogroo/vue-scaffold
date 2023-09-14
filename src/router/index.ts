// Composables
import {
  createRouter,
  createWebHistory,
  CustomRouteRecordRaw,
} from 'vue-router'

const routes: CustomRouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/HomeView.vue'),
    name: 'HomeView',
    meta: {
      title: 'Home',
      requiresAuth: false,
    },
  },
  {
    path: '/about',
    component: () => import('@/views/AboutView.vue'),
    name: 'AboutView',
    meta: {
      title: 'Sobre',
      requiresAuth: false,
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
