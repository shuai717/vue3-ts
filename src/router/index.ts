import { createWebHashHistory, createRouter } from 'vue-router'
import routes from './routes'
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    //判断是否有页面权限 无权限返回404
    next()
})
export default router
