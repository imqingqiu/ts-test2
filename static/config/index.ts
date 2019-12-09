const verison = '0.0.0'
const ENV = 'devlopment' // devlopment | test | production
const HOST = 'localhost' // 决定了前端服务的启动的 host，也决定了 client 默认请求node服务时的地址
const PORT = '4000' // 决定了前端服务的启动的 port，也决定了 client 默认请求node服务时的地址
const IS_OPEN_LOG = true // 是否打开 axios 的日志提示

export default {
    verison,
    ENV,
    HOST,
    PORT,
    IS_OPEN_LOG
}
