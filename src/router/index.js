import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'

import City from '@/pages/city/City'

import Detail from '@/pages/detail/detail'



Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        }, {
            path: '/city',
            name: 'City',
            component: City

        }, {
            path: '/detail/:id', //动态路由 后面带一个参数；就能访问detail下的组件
            name: 'detail',
            component: Detail
        }
    ],
        scrollBehavior (to, from, savedPosition) {
            return { x: 0, y: 0 }
          }
})