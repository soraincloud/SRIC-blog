import { createRouter, createWebHistory } from 'vue-router'

const routes = 
[
  {
    name: "AppBody",
    path: '/AppBody',
    component: () => import('@/components/AppBody'),
    redirect: '/index',
    children:
    [
      {
        name: "AppIndex",
        path: '/index',
        component: () => import('@/components/Home/AppIndex'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
