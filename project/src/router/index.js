import Vue from 'vue'
import VueRouter from 'vue-router'

/*views*/
import Auth from "../views/Auth";
import Account from "../views/Account";
import Employee from "../views/Employee";
import EducationalLiterature from "../views/EducationalLiterature";
import Schedule from "../views/Schedule";
import ScientificWork from "../views/ScientificWork";

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },

  {
    path: '/',
    name: 'Account',
    component: Account
  },

  {
    path: '/employee',
    name: 'Employee',
    component: Employee
  },

  {
    path: '/educational-literature',
    name: 'EducationalLiterature',
    component: EducationalLiterature
  },

  {
    path: '/schedule',
    name: 'Schedule',
    component: Schedule
  },

  {
    path: '/scientific-work',
    name: 'ScientificWork',
    component: ScientificWork
  },

//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
