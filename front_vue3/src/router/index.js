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
        name: 'index',
        path: '/index',
        component: () => import('@/components/Home/AppIndex'),
      },
      {
        name: 'notes',
        path: '/notes',
        component: () => import('@/components/notes/NotesIndex'),
      },
      {
        name: 'resources',
        path: '/resources',
        component: () => import('@/components/resources/ResourcesIndex'),
      },
      {
        name: 'personal',
        path: '/personal',
        component: () => import('@/components/personal/PersonalIndex'),
      },
      {
        name: 'login',
        path: '/login',
        component: () => import('@/components/personal/LoginPage'),
      },
      {
        name: 'setting',
        path: '/setting',
        component: () => import('@/components/personal/SettingPage'),
      },
      {
        name: 'signup',
        path: '/signup',
        component: () => import('@/components/personal/SignupPage'),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
