import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Skill from '../views/Skill.vue'
import LearnedBooks from '../views/LearnedBooks.vue'
import LearnedMovies from '../views/LearnedMovies.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/learnedbooks',
    name: 'LearnedBooks',
    component: LearnedBooks
  },
  {
    path: '/learnedmovies',
    name: 'LearnedMovies',
    component: LearnedMovies
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
