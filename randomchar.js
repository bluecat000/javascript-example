// start:2018-03-22 02:11
// end: 2018-03-22 02:41
// process.argv[1] 开始是参数
// todo 获取随机数方法（两个数之间包含和不包含，是否整数）
'use strict'

let length = process.argv[2]
if (!length) {
  console.log('need length option')
  return
}
let type = process.argv[3]

// n = number s = symbol l = letter u = upper letter
const n  = '1234567890',
  s    = '~!@#$%^&*()_+-=[]\\;\'/.,{}|:"<>?',
  l    = 'qwertyuiopasdfghjklzxcvbnm',
  u    = 'QWERTYUIOPASDFGHJKLZXCVBNM'
let char = ''

if (type) {
  if (type.search('n')) {
    char += n 
  }
  if (type.search('s')) {
    char += s 
  }
  if (type.search('l')) {
    char += l 
  }
  if (type.search('u')) {
    char += u 
  }
} else {
  char += n + s + l + u
}


let result = ''


for (var i = 0, len = length; i < len; i++) {
  result += char[getRandomInt(0, char.length - 1)]
}

// 包括max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min
}

console.log(result)
