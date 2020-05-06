import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Cinemas from '../views/Home/Cinemas'
import Films from '../views//Home/Films'
import NowPlaing from '../views/Home/Films/NowPlaing'
import ComingSoon from '../views/Home/Films/ComingSoon'
import My from '../views/Home/My'
import Information from '../views/Home/Information'
import City from '../views/City'
import Login from '../views/Login'
import Search from '../views/Search'
import SearchDeta from '../views/SearchDeta'
import FilmsPage from '../views/FilmsPage'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'films',
          component: Films,
          children: [
            {
              path: 'now-paling',
              component: NowPlaing
            },
            {
              path: 'coming-soon',
              component: ComingSoon
            }
          ]
        },

        {
          path: 'cinemas',
          component: Cinemas
        },
        {
          path: 'my',
          component: My
        },
        {
          path: 'information',
          component: Information

        },
        {
          path: '',
          redirect: '/home/films/now-paling'
        }
      ]
    },
    {
      path: '/city',
      component: City
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/search-deta',
      component: SearchDeta
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/films-page',
      component: FilmsPage
    }
  ]
})
export default router
