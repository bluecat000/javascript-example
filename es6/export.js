// export function fn () {
  // console.log(1)
// }

// export let b = 2

// let a = 2

// export default function c () {
  // console.log('default')
// }

let b = 1
// let b = window.global 不会改变
function fn () {
  console.log('fn')
}
export {b, fn}
export default 10

// 会改变
setTimeout(() => {
  window.global = 0
}, 1000)
//输出a
// export {b as a, fn}
