/*
 * @Author: Hongzhifeng
 * @Date: 2022-06-06 16:49:10
 * @LastEditors: Hongzhifeng
 * @LastEditTime: 2022-06-06 18:20:57
 * @Description: 
 */
class MyPromise2 {
  constructor(executor) {
    // 规定状态
    this.state = "pending"
    // 保存 `resolve(res)` 的res值
    this.value = undefined
    // 保存 `reject(err)` 的err值
    this.reason = undefined
    // 成功存放的数组
    this.successCB = []
    // 失败存放的数组
    this.failCB = []


    let resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled"
        this.value = value
        this.successCB.forEach(f => f())
      }
    }
    let reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected"
        this.value = value
        this.failCB.forEach(f => f())
      }
    }

    try {
      // 执行
      executor(resolve, reject)
    } catch (error) {
      // 若出错，直接调用reject
      reject(error)
    }
  }
  then(onFulfilled, onRejected) {
    if (this.state === "fulfilled") {
      onFulfilled(this.value)
    }
    if (this.state === "rejected") {
      onRejected(this.value)
    }
    if (this.state === "pending") {
      this.successCB.push(() => { onFulfilled(this.value) })
      this.failCB.push(() => { onRejected(this.reason) })
    }
  }
}


Promise.all = function (promises) {
  let list = []
  let count = 0
  function handle(i, data) {
    list[i] = data
    count++
    if (count == promises.length) {
      resolve(list)
    }
  }
  return Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(res => {
        handle(i, res)
      }, err => reject(err))
    }
  })
}

 Promise.race = function (promises) {
      return Promise((resolve, reject) => {
          for (let i = 0; i < promises.length; i++) {
              promises[i].then(res => {
                  resolve(res)
              }, err => {
                  reject(err)
              })
          }

      })
  }

