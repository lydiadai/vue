import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import detail from '@/components/detail'
import blog from '@/components/blog'
import blogShow from '@/components/blogShow'
import form from '@/components/form'
import editor from '@/components/base/editor'

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
    },
    {
      path: '/blog/:name',
      name: 'blogShow',
      component: blogShow
    },
    {
      path: '/form',
      name: 'form',
      component: form
    },
    {
      path: '/editor',
      name: 'editor',
      component: editor
    }
  ]
})
