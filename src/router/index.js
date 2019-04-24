import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/Layout'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '',
            component: Layout,
            children:[
                {
                    path: 'hello',
                    name: 'hello',
                    component: () => import('@/components/HelloWorld') 
                }
            ]
        }
    ]
})

export default router

