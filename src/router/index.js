import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/Index/Index'
import About from '@/About/About'
import Works from '@/Works/Works'
import Contact from '@/Contact/Contact'
import Sns from '@/Sns/Sns'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/works',
      name: 'Works',
      component: Works
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/sns',
      name: 'Sns',
      component: Sns
    }
  ]
})
