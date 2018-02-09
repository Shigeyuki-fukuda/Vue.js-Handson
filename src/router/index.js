import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/index'
import View from '@/pages/_view'
import TicketsIndex from '@/pages/tickets/index'
import TicketsCreate from '@/pages/tickets/create'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/tickets',
      component: View,
      children: [
        {
          path: 'create',
          name: 'チケット新規作成',
          component: TicketsCreate
        },
        {
          path: '',
          name: 'チケット一覧',
          component: TicketsIndex
        }
      ]
    },
    {
      path: '',
      component: View,
      children: [
        {
          path: '/home',
          name: 'ホーム',
          component: Home
        },
        {
          path: '',
          redirect: '/home'
        }
      ]
    }
  ]
})
