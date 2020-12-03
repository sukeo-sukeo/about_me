import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Product from '../views/Product.vue'
import Skill from '../views/Skill.vue'
import Learned from '../views/Learned.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/skill',
    name: 'Skill',
    component: Skill
  },
  {
    path: '/learned',
    name: 'Learned',
    component: Learned
  }
]

// console.log(routes);

// const pathName = routes

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
