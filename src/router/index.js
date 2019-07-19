import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import detail from '@/components/detail'
import blog from '@/components/blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    }
  ]
})
