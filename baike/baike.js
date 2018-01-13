'use strict'
const axios = require('axios')
const fs = require('fs')
const ora = require('ora')

var spinner = ora()
spinner.start()

let log = function (text) {
  spinner.text = '[baike]:' + text
}

let clog = function() {
  console.log.call(null, '\n[baike]:', ...arguments)
}

if (!process.argv[2]) {
  log('请输入参数')
  spinner.fail()
  return
}

let api = `https://baike.baidu.com/item/`
let key = process.argv[2]
let url = api + encodeURI(key)

log('loading')

axios.get(url)
  .then((data) => {
    clog('get: ' + url)
    let reg = /name=\"description\" content=\".*\">/
    clog(reg.exec(data.data)[0].slice(28, -2))
    log('done')
    spinner.succeed()
  })
  .catch((error) => {
    log(error)
    spinner.fail()
  })
