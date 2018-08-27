import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import structured from '@/components/views/structured'
import notStructured from  '@/components/views/notStructured'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children:[
        {
          path: '/',
          name: 'structured',
          component: structured
        },
        {
          path: '/notStructured',
          name: 'notStructured',
          component: notStructured
        }
      ]
    }
  ]
})
