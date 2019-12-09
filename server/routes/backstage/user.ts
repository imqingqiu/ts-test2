import Router from 'koa-router'
import { DefaultContext } from 'koa'
import axios from '../../utils/axios'

const routes = new Router({
    prefix: '/api/backstage'
})

routes.post('/getUser', async function(ctx: DefaultContext) {
    await setTimeout(() => {
        ctx.app.$log('setTimeout')
        console.log('setTimeout')
    }, 1000)
    ctx.response.body = {
        title: 'hello world'
    }
})

// module.exports = routes
export default routes
