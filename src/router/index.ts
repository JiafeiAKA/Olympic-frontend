import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import OylmpicMainPage from '@/components/OylmpicMainPage.vue';
import ProfileView from '@/views/ProfileView.vue';
import LoginComponent from '@/components/LoginComponent.vue';
import SignUpComponent from '@/components/SignUpComponent.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: OylmpicMainPage,
  },
  {
    path: '/signup',
    component: SignUpComponent,
  },

  {
    path: '/login',
    component: LoginComponent,
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
