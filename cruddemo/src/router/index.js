import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import Crud from '../views/Crud.vue'

Vue.use(VueRouter)

const routes = [
//  {
//    path: '/',
//    name: 'home',
//    component: HomeView
//  },
  {
    path: '/',
    name: 'crud',  //和页面中export中的name对应
    component: Crud  //component和上面import的Home对应
  },
//  {
//    path: '/about',
//    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
//    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//  }
]

const router = new VueRouter({
  routes
})

export default router
