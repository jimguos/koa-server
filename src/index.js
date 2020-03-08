const Koa = require('koa')
const cors = require('koa2-cors') //跨域处理
const routers = require('./lib/routers')
const config = require('./lib/res-config')
const koaRouter = require('koa-router') //路由模块
const router = koaRouter()

const app = new Koa()
app.use(cors(config))

Object.values(routers).forEach(route => {
  router[route.type](route.path, route.method)
})

app.use(router.routes()) /*启动路由*/
app.use(router.allowedMethods())

app.listen(3000)
console.log('app started at port 3000...')
