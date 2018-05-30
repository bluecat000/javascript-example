// create 2018-05-30 21:22
// 记录一些有用但是不常见/不常用的一些js方法

/*
 * js发生错误的时候可以在window触发，
 * img图片加载错误在<img>触发
*/

window.addEventListener('error', function () {
  console.log('javascript cause a error and exit')
}, false)

document.getElementByTagName('img').addEventListener('error', function () {
  console.log('image could not load')
})
