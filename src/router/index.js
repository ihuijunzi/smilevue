import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMall from '@/pages/ShoppingMall'
import Login from '@/pages/Login'

Vue.use(Router)

export default new Router({
  mode:'hash',  // 'history'
  routes: [
    {
      path: '/',
      name: 'ShoppingMall',
      component: ShoppingMall
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    }

  ]
})
