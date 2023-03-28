import Vue from 'vue'
import {RouteRecordRaw} from 'vue-router'
interface route {
 path:string,
 component?:Vue.Component,
 redirect?:string
 name?:string   
}
const routes:RouteRecordRaw[]=[
    {
        name:'login',
        path:'/login',
        component:()=>import("@/pages/login/login.vue")
    },
    {
        name:'layout',
        path:'/',
        component:()=>import("@/pages/layout/index.vue"),
        children:[
            {
                name:'home',
                path:'/home',
                component:()=>import("@/pages/home/home.vue")
            },
            {
                path:'/',
                redirect:'/home'
            },
        ]
    }
]
export default routes