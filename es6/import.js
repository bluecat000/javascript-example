// window.global = 0
import def, {b as a} from './export.js'
// import * as aaaaa from './export.js' //提升，所有代码执行前执行
// import {fn as func} from './export.js'
// import {fn, b} from './export.js'
// console.log(aaaaa)
// console.log(func)
// console.log(fn)
setTimeout(() => {
  console.log(a)
}, 2000)
console.log(a)

// 动态加载，返回promise 回调函数参数是整个mudule, fn.default
// if (true) {

  // import('./export.js')
    // .then((fn) => {
      // fn.fn()
    // })

// }


// TODO: 模块依赖 多重依赖 
