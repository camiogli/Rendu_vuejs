import { createRouter, createWebHashHistory } from 'vue-router'
import JournalView from '../views/JournalView.vue'
import ContactView from '../views/ContactView.vue'
import ClavierView from '../views/ClavierView.vue'

const routes = [
  {
    path: '/',
    name: 'journal',
    component: JournalView
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ContactView
  },
  {
    path: '/clavier',
    name: 'clavier',
    component: ClavierView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
