import Vue from 'vue'
import {RouteRecordRaw} from 'vue-router'
interface route {
 path:string,
 component?:Vue.Component,
 redirect?:string
 name?:string   
}
const routes=[
    {
        name:'登录',
        path:'/login',
        key:'login',
        component:()=>import("@/pages/login/login.vue")
    },
    {
        name:'layout',
        path:'/',
        key:'layout',
        component:()=>import("@/pages/layout/index.vue"),
        children:[
            {
                name:'首页',
                path:'/home',
                key:'home',
                component:()=>import("@/pages/home/home.vue")
            },
            {
                name:'用户',
                path:'/user',
                key:'user',
                component:()=>import("@/pages/user/index.vue"),
                children:[
                    {
                        name:'注册',
                        path:'/user/register',
                        key:'register',
                        component:()=>import("@/pages/user/register/index.vue")
                    },
                    {
                        path:'/user',
                        redirect:'/user/register'
                    },
                ]
            },
            {
                path:'/',
                redirect:'/home'
            },
        ]
    }
]
export default routes