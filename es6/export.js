// export function fn () {
  // console.log(1)
// }

// export let b = 2

// let a = 2

// export default function c () {
  // console.log('default')
// }

let b = window.global
function fn () {
  console.log(fn)
}
export {b, fn}

// 不会改变
// setTimeout(() => {
  // b = 1
// }, 1000)
//输出a
// export {b as a, fn}
