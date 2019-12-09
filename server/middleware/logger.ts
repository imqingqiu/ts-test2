// export default function(req: any, res: any, next: any) {
//     // req 是 Node.js http request 对象
//     // console.log(req.path);

//     // res 是 Node.js http response 对象

//     // next是一个调用下一个中间件的函数
//     // 如果您的中间件不是最终执行，请不要忘记在最后调用next！

//     // console.log('server log');
//     next()
// }

import { ServerMiddleware } from '@nuxt/types'

const loggerServerMiddleware: ServerMiddleware = function(req, res, next) {
    // Use req, res, next
    // req 是 Node.js http request 对象
    // console.log(req.path);

    // res 是 Node.js http response 对象

    // next是一个调用下一个中间件的函数
    // 如果您的中间件不是最终执行，请不要忘记在最后调用next！

    console.log('server log')
    next()
}

module.exports = loggerServerMiddleware
