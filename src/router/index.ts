import { createWebHashHistory, createRouter } from 'vue-router'
import routes from './routes'
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    //判断当前是否登录
    const online=localStorage.getItem('online')
    //当前没有登陆，并且不是去登录页面的，让它去登录
    if(online !=='1' && to.path!=='/login'){
        next('/login')
        return
    }
    //判断是否有页面权限 无权限返回404
    next()
})
export default router
