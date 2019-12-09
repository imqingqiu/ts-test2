import axios from 'axios'

axios.defaults.timeout = 1000 * 60 * 2 // 2min

axios.interceptors.request.use(
    (config) => {
        console.log('【axios 请求 来啦！！！】 本次请求地址 ====', config.url)
        return config
    },
    (err) => {
        console.log(
            '【axios 接口异常报错 响应 来啦！！！】 本次请求地址 ====',
            err
        )
        console.log(
            '【axios 接口异常报错 响应 来啦！！！】 本次请求 结果是 ====',
            err.response && err.response.status
        )
        return Promise.reject(err)
    }
)

axios.interceptors.response.use(
    (res) => {
        console.log(
            '【axios 响应 来啦！！！】 本次请求地址 ====',
            res.config.url
        )
        console.log(
            '【axios 响应 来啦！！！】 本次请求 param 参数 ====',
            res.config.params
        )
        console.log(
            '【axios 响应 来啦！！！】 本次请求 data 参数 ====',
            res.config.data
        )
        return res
    },
    (err) => {
        console.log(
            '【axios 接口异常报错 响应 来啦！！！】 本次请求地址 ====',
            err
        )
        console.log(
            '【axios 接口异常报错 响应 来啦！！！】 本次请求 结果是 ====',
            err.response && err.response.status
        )
        return Promise.reject(err)
    }
)

export default axios
