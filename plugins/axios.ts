import { Plugin } from '@nuxt/types'
import baseConfig from '~/static/config/index'

declare module '@nuxt/types' {
    interface Context {
        $axios
    }
}

const myPlugin: Plugin = ({ app, $axios }) => {
    $axios.defaults.timeout = 1000 * 60 * 2 // 2min

    $axios.onRequest((config) => {
        app.$log('【axios 请求 来啦！！！】 本次请求地址 ====', config.url)
    })

    $axios.onResponse((res) => {
        app.$log('【axios 响应 来啦！！！】 本次请求地址 ====', res.config.url)
        app.$log(
            '【axios 响应 来啦！！！】 本次请求 param 参数 ====',
            res.config.params
        )
        app.$log(
            '【axios 响应 来啦！！！】 本次请求 data 参数 ====',
            res.config.data
        )
    })

    $axios.onError((err) => {
        app.$log(
            '【axios 接口异常报错 响应 来啦！！！】 本次请求地址 ====',
            err
        )
        app.$log(
            '【axios 接口异常报错 响应 来啦！！！】 本次请求 结果是 ====',
            err.response && err.response.status
        )
    })
}

export default myPlugin
