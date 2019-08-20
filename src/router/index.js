import Vue from 'vue'
import App from '../App'
import Router from 'vue-router'
import Home from '@/components/page/home/home'
import City from '@/components/page/city/city'
import Login from '@/components/page/login/login'
import Msite from '@/components/page/msite/msite'
import Search from '@/components/page/search/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path:'/city/:cityid',
      name:'City',
      component:City
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/msite',
      name:'Msite',
      component:Msite,
      meta: { keepAlive: true }
    },
    {
      path:'/search',
      name:'Search',
      component:Search,

    }
  ]
//   routes: [
//     { path: '/',
//       component: App,
//       children:[
//       {
//         path: '',
//         name: 'Home',
//         component: Home
//       },
//       {
//         path: '/home',
//         name: 'Home',
//         component: Home
//       },
//       {
//         path:'/city/:cityid',
//         name:'City',
//         component:City
//       },
//       {
//         path:'/login',
//         name:'Login',
//         component:Login
//       },
//       {
//         path:'/msite',
//         name:'Msite',
//         component:Msite,
//         meta: { keepAlive: true }
//       },
//       {
//         path:'/search',
//         name:'Search',
//         component:Search,
//
//       }
//
//     ]
//
//   }
// ]
})
