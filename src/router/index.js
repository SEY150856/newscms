import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import home from '@/views/home'
import newslist from '@/views/newslist'


Vue.use(Router)

const VueRouterPush = Router.prototype.push
Router.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default new Router({
  routes: [{
    path: '/',
    name: '首页',
    component: index,
    redirect: '/home',
    children: [{
      path: '/home',
      name: '首页',
      component: home,
      meta: {
        requireAuth: true
      }
    }, {
      path: '/newslist/:id',
      name: 'newslist',
      component: newslist,
      meta: {
        requireAuth: true
      }
    }]
  }]
})
