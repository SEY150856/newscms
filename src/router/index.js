import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import home from '@/views/home'


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: '首页',
    component: index,
    redirect:'/home',
    children: [{
      path: '/home',
      name: '首页',
      component: home,
      meta: {
        requireAuth: true
      }
    }]
  }]
})
