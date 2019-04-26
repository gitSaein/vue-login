import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/Layout'
import Login from '../view/Login'
import store from '../store/index'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '',
            redirect: '/login'
        },
        {
            path: '/page',
            component: Layout,
            children:[
                {
                    path: 'table',
                    name: 'table',
                    component: () => import('@/components/Table') 
                }
            ]
        },
        {
          path: '/login',
          name: 'login',
          component: Login
        }
    ]
})

router.beforeEach((to, from, next) => {
    // Set loading state
    document.body.classList.add('app-loading')
  
    if (to.path !== '/login') {
      if (store.state.login.isLogin !== true) {
        alert('로그인이 필요합니다.')
        next('/login')
      }
    } else if ( to.path === '/login' && store.state.login.isLogin === true ) {
        alert('이미 로그인 되었습니다.')
        next('/page/table')
    }
  // Add tiny timeout to finish page transition
  setTimeout(() => next(), 10)
})    

export default router

