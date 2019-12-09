import { Middleware } from '@nuxt/types'

const authMiddleware: Middleware = ({ route, redirect, store }) => {
    // Use context
    const { name, fullPath } = route
    const nologin: Array<string> = ['login', 'register', 'repassword']
    // console.log('auth.js 中间键');
    console.log('【auth.ts】 --- 当前路由： fullPath ===', fullPath)
}

export default authMiddleware
