// const frontendUserRoutesObjs = require('koa-router')()

// // const router = new RoutesObj({
// //     prefix: '/api/frontend'
// // })
// frontendUserRoutesObjs.get('/a', async (ctx, next) => {
//     await setTimeout(() => {
//         console.log('setTimeout')
//     }, 1000)
//     ctx.response.body = {
//         title: 'hello world'
//     }
// })

// // const routes = (app) => {
// //     app.use(router.routes())
// // }

// module.exports = frontendUserRoutesObjs
// export default router

import Router from 'koa-router'
import { DefaultContext } from 'koa'
import axios from '../../utils/axios'

const routes = new Router({
    prefix: '/api/frontend'
})

routes.post('/getUser', async function(ctx: DefaultContext) {
    await setTimeout(() => {
        console.log('/frontend/getUser setTimeout')
    }, 1000)
    ctx.body = {
        title: 'hello world'
    }
})

// module.exports = routes
export default routes
