import Vue from 'vue'
import Router from 'vue-router'
// import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: 'nav',
      name: 'home',
      component: resolve => require(['@/components/Home'], resolve),
      meta: { requiresAuth: false, keepAlive: false },
      children: [
        {
          path: 'about',
          component: resolve => require(['@/components/About'], resolve)
        },
        {
          path: 'nav',
          component: resolve => require(['@/components/Nav'], resolve)
        }
      ]
    },

    // NotFound必须置于最后
    {
      path: '*',
      name: 'NotFound',
      component: resolve => require(['@/components/NotFound'], resolve),
      meta: { requiresAuth: false, keepAlive: false }
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.length === 0) {
//     next({ path: '/' })
//   } else
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (!store.state.login.loggedIn) {
//       next({ path: '/login' })
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })

export default router
