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
  },
  postLog: {
    path: '/postLog',
    type: 'post',
    method: async ctx => {
      const req = ctx.request
      const url = req.url // 请求的url
      const method = req.method // 请求的方法
      let post_data = ''
      ctx.req.addListener('data', postDataChunk => {
        console.log('收到post数据 ---->', postDataChunk)
        post_data += postDataChunk
      })
      ctx.req.addListener('end', () => {
        console.log('接收post数据完毕 ---->', post_data)
        let postData = JSON.parse(post_data)
        postData.time = new Date().getTime(postData.time)
        log.save(postData)
      })
    }
  }
}
