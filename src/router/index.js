import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Lessons from '../views/lessons.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/lessons',
    name: 'lessons',
    component: Lessons
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
}
})

export default router
