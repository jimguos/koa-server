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
    type: 'post',
    method: async ctx => {
      ctx.body = '上传日志成功'
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
