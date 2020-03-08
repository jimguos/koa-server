const mongoose = require('./connect')
const Schema = mongoose.Schema

const logSchema = new Schema({
  name: String,
  time: Number,
  type: String
})

const logModel = mongoose.model('log', logSchema)

class PerformanceLog {
  constructor() {}

  // 查询
  query() {
    return new Promise((resolve, reject) => {
      logModel.find({}, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  }

  // 保存
  save(obj) {
    const m = new logModel(obj)
    return new Promise((resolve, reject) => {
      m.save((err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
        console.log(res)
      })
    })
  }
}
module.exports = new PerformanceLog()
