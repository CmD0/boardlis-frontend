import { createRouter, createWebHistory } from 'vue-router'
import HomeRoutes from './HomeRoutes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/ErrorView.vue')
    },
    HomeRoutes
  ]
})

export default router
