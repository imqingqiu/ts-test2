import dayjs from 'dayjs'
import config from './static/config/index'

// module.exports = {
export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: '数据科学云',
        titleTemplate: (titleChunk) => {
            // If undefined or blank then we don't need the hyphen
            return titleChunk ? `${titleChunk} - 数据科学云` : '数据科学云'
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: '数据科学云'
            },
            {
                name: 'version',
                content: config.verison,
                time: dayjs().format('YYYY-MM-DD HH:mm:ss SSS [Z] A') // 展示
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    server: {
        port: config.PORT, // default: 3000
        host: config.HOST, // default: localhost,
        timing: false
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#5ecc5e' },
    /*
     ** Global CSS
     */
    css: [
        'element-ui/lib/theme-chalk/index.css',
        '~/assets/common/common.less',
        '~/assets/common/mixin.less',
        '~/assets/common/normalize.less',
        '~/assets/common/transition.less'
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '~/plugins/tpUtils.ts',
        '~/plugins/element-ui.ts',
        '~/plugins/log.ts',
        '~/plugins/axios.ts',
        {
            src: '~/plugins/echarts.ts',
            mode: 'client'
        }
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
        '@nuxt/typescript-build'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        // 'nuxt-typescript',
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        '@nuxtjs/style-resources'
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    // 路由和中间件
    router: {
        middleware: ['auth'] // 验证登录中间件 开发中请注释
    },
    /**
     * Middleware
     */
    serverMiddleware: ['~/server/middleware/logger.ts'],
    loaders: {
        less: './assets/common/*.less'
    },
    render: {
        bundleRenderer: {
            // 将 服务器日志打印到浏览器，仅在开发环境中有效
            ssrLog: true
        }
    },
    /*
     ** Build configuration
     */
    build: {
        // css 提取
        extractCSS: true,
        transpile: [/^element-ui/],
        /**
         * 解决公共less文件需要每次在style中引入的问题
         */
        styleResources: {
            less: './assets/common/*.less'
        },
        /*
         ** You can extend webpack config here
         */
        extend(config: any, ctx: any) {
            // if (ctx.isDev && ctx.isClient) {
            if (process.env.NODE_ENV !== 'production') {
                config.module.rules.push(
                    {
                        enforce: 'pre',
                        test: /\.(js|vue)$/,
                        loader: 'eslint-loader',
                        exclude: /(node_modules)/,
                        options: {
                            fix: true
                        }
                    },
                    {
                        test: /\.ts$/,
                        exclude: [/node_modules/, /vendor/, /\.nuxt/],
                        loader: 'ts-loader',
                        options: {
                            appendTsSuffixTo: [/\.vue$/],
                            transpileOnly: true
                        }
                    }
                )
            }
        }
    }
}
