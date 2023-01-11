import { createRouter, createWebHistory } from 'vue-router';
import MainPage from "@/pages/MainPage"; 
import LoginPage from "@/pages/LoginPage";
import ProfilePage from "@/pages/ProfilePage.vue";

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/user',
    component: ProfilePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
