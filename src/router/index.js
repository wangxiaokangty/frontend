import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/Blogs',
    name: 'Blogs',
    component: () => import('../views/Blogs.vue')
  },
  {
    path: '/BlogEdit',
    name: 'BlogEdit',
    component: () => import('../views/BlogEdit.vue')
  },
  {
    path: '/BlogDetail',
    name: 'BlogDetail',
    component: () => import('../views/BlogDetail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
