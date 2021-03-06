import Vue from 'vue'
import Router from 'vue-router'
import read from '@/views/read'
import write from '@/views/write'
import detail from '@/views/detail'
import test from '@/views/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'name',
      redirect: '/read'
    }, {
      path: '/read',
      name: 'read',
      component: read
    }, {
      path: '/write',
      name: 'write',
      component: write
    }, {
      path: '/detail',
      name: 'detail',
      component: detail
    }, {
      path: '/test',
      name: 'test',
      component: test
    }, {
      path: '*',
      redirect: '/'
    }
  ]
})
