import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/Layout'
import Login from '../view/Login'

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

export default router

