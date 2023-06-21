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
        name: 'AppIndex',
        path: '/index',
        component: () => import('@/components/Home/AppIndex'),
      },
      {
        name: 'NotesIndex',
        path: '/notes',
        component: () => import('@/components/notes/NotesIndex'),
      },
      {
        name: 'Resources',
        path: '/resources',
        component: () => import('@/components/resources/ResourcesIndex'),
      },
      {
        name: 'Personal',
        path: '/Personal',
        component: () => import('@/components/personal/PersonalIndex'),
      },
      {
        name: 'Login',
        path: '/Login',
        component: () => import('@/components/personal/LoginPage'),
      },
      {
        name: 'Setting',
        path: '/Setting',
        component: () => import('@/components/personal/SettingPage'),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
