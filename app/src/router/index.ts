import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('@/views/CreateView.vue')
  },
  {
    path: '/tour/:id',
    name: 'tour',
    component: () => import('@/views/TourView.vue')
  },
  {
    path: '/tour/create',
    name: 'createTour',
    component: () => import('@/views/CreateTourView.vue')
  },
  {
    path: '/tour/update',
    name: 'updateTour',
    component: () => import('@/views/UpdateTourView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/Profile/ProfileView.vue'),
    children: [
      {
        path: 'info',
        component: () => import('@/views/Profile/ProfileInfo.vue')
      },
      {
        path: 'tours',
        component: () => import('@/views/Profile/ProfileTours.vue')
      },
      {
        path: 'preferences',
        component: () => import('@/views/Profile/ProfilePreferences.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
