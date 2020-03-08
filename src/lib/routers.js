const { log } = require('./db')
const { queryToObj } = require('../utils/util')

module.exports = {
  main: {
    path: '/',
    type: 'get',
    method: async ctx => {
      ctx.body = '请求成功了'
    }
  },
  uploadLog: {
    path: '/uploadLog',
    type: 'get',
    method: async ctx => {
      const { querystring } = ctx
      const preams = queryToObj(querystring)
      ctx.body = '操作成功'
      log.save(preams)
    }
  },
  getLog: {
    path: '/getLog',
    type: 'get',
    method: async ctx => {
      ctx.body = '获取日志成功'
    }
  }
}
