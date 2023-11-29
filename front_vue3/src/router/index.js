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
        component: () => import('@/components/home/AppIndex'),
      },
      {
        name: 'notes',
        path: '/notes',
        component: () => import('@/components/notes/NotesIndex'),
      },
      {
        name: 'notesShow',
        path: '/notesShow',
        component: () => import('@/components/notes/NotesShow'),
      },
      {
        name: 'resources',
        path: '/resources',
        component: () => import('@/components/resources/ResourcesIndex'),
      },
      {
        name: 'resourcesShow',
        path: '/resourcesShow',
        component: () => import('@/components/resources/ResourcesShow'),
      },
      {
        name: 'forum',
        path: '/forum',
        component: () => import('@/components/forum/ForumIndex'),
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
      {
        name: 'safety',
        path: '/safety',
        component: () => import('@/components/personal/SafetyPage'),
      },
      {
        name: 'function',
        path: '/function',
        component: () => import('@/components/function/FunctionIndex'),
      },
      {
        name: 'functionHead',
        path: '/functionHead',
        component: () => import('@/components/function/FunctionHead'),
      },
    ]
  },
  {
    name: 'manageBody',
    path: '/manageBody',
    component: () => import('@/components/manage/ManageBody'),
    redirect: '/manageIndex',
    children:
    [
      {
        name: 'manageIndex',
        path: '/manageIndex',
        component: () => import('@/components/manage/ManageIndex'),
      },
      {
        name: 'manageHome',
        path: '/manageHome',
        component: () => import('@/components/manage/ManageHome'),
      },
      {
        name: 'manageTime',
        path: '/manageTime',
        component: () => import('@/components/manage/ManageTime'),
      },
      {
        name: 'manageNotesCategory',
        path: '/manageNotesCategory',
        component: () => import('@/components/manage/ManageNotesCategory'),
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
