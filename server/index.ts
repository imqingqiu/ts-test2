// const Koa = require('Koa')
// const consola = require('consola')
// const session = require('koa-session')
// const bodyParser = require('koa-bodyparser')
// const cors = require('@koa/cors')
// const { Nuxt, Builder } = require('nuxt')

// const nuxtConfig = require('../nuxt.config.ts')
// const routes = require('./routes')
// const frontendUserRoutes = require('./routes/frontend/user.ts')
// const backstageUserRoutes = require('./routes/backstage/user.ts')

import Koa from 'Koa'
import consola from 'consola'
import session from 'koa-session'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'

import { Nuxt, Builder } from 'nuxt'
import nuxtConfig from '../nuxt.config'
import baseConfig from '../static/config/index'
import routes from './routes/index'
import frontendUserRoutes from './routes/frontend/user'
import backstageUserRoutes from './routes/backstage/user'
// const { Nuxt, Builder } = require('nuxt')

const app = new Koa()

// Import and Set Nuxt.js options
/**
 * 设置当前启动服务的环境
 */
// nuxtConfig.dev = app.env !== 'production'
const isDev = app.env !== 'production'

/**
 * 预置 ip+端口 localhost:3000
 */
// const {
//     host = process.env.HOST || '127.0.0.1',
//     port = process.env.PORT || 3100
// } = nuxt.options.server
const host = baseConfig.HOST || '127.0.0.1'
const port = baseConfig.PORT || 3200

/**
 * 设置session需要的配置项
 */

app.keys = ['publicCloud'] // cookie
const sessionConfig = {
    key: 'publicCloud-sess',
    maxAge: 7 * 60 * 60 * 24 * 1000, // 7 day
    overwrite: true,
    httpOnly: true,
    signed: true,
    renew: false,
    rolling: false
}

async function start() {
    // Instantiate nuxt.js
    const nuxt = new Nuxt(nuxtConfig)

    console.log('nuxt server.ts nuxt.options.server ===', nuxt.options.server)

    // Build in development
    // if (nuxtConfig.dev) {
    if (isDev) {
        const builder = new Builder(nuxt)
        await builder.build()
        // } else {
        //     await nuxt.ready()
    }

    /**
     * 设置服务端
     * 1、session
     * 2、请求体结构：post请求
     * 3、加载服务端接口
     */
    app.use(session(sessionConfig, app))
    app.use(bodyParser())
    app.use(cors())
    // app.use(routes.routes(), routes.allowedMethods())
    app.use(frontendUserRoutes.routes()).use(
        frontendUserRoutes.allowedMethods()
    )
    app.use(backstageUserRoutes.routes()).use(
        backstageUserRoutes.allowedMethods()
    )

    app.use((ctx: any) => {
        ctx.status = 200
        ctx.req.session = ctx.session
        ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash

        return new Promise((resolve, reject) => {
            nuxt.render(ctx.req, ctx.res, (promise: any) => {
                // nuxt.render passes a rejected promise into callback on error.
                promise && promise.then(resolve).catch(reject)
            })
        })
    })

    // app.listen(port, host)
    app.listen(port)
    consola.ready({
        message: `Server listening on http://${host}:${port}`,
        badge: true
    })
}

start()
