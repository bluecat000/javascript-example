window.global = 1
import def, {b as a} from './export.js'
// import * as aaaaa from './export.js' //提升，所有代码执行前执行
// import {fn as func} from './export.js'
// import {fn, b} from './export.js'
// console.log(aaaaa)
// console.log(func)
// console.log(fn)
// setTimeout(() => {
  // console.log(b)
// }, 2000)
// console.log(b)
// todo: import运行模块
// const a = () => import ('./export.js')
// a().then(() => {
  // console.log('load')
// }).catch((err) => {
  // console.log(err)
// })

console.log(def)
console.log(a)


// TODO: 模块依赖 多重依赖 模块的执行机制
