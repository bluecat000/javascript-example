// 2018-03-22 02:05
// 用时:1h? 忘记统计时间了
// 下把要记录创建时间才可以 snip的date,time代码块
// try可以拦截无法捕获和消除定时器的错误
// todo 数组记录定时器（代价存取定时器的效率）
var count = 0,
  tipsList = document.getElementById('tiplist')

document.getElementById('add').addEventListener('click', function() {
  var text = document.getElementById('text').value
  if (text) {
    if (count >= 3) {
      removeTips(tipsList.firstChild)
      count = 3
    } else {
      count++
    }

    var tips = document.createElement('div'),
      button = document.createElement('button')

    tips.classList.add('alert', 'alert-warning', 'alert-dismissible')
    button.classList.add('close')
    button.innerHTML = '<span aria-hidden="true">&times;</span>'
    tips.innerText = text
    tips.appendChild(button)
    tipsList.appendChild(tips)

    var t = setTimeout(function () {
      removeTips(tips)
    }, 4000)

    function removeByClick(t) {
      clearTimeout(t)
      removeTips(tips)
    }

    button.addEventListener('click', removeByClick)
    console.log(count)
  }
})

function removeTips(tips) {
  try {
    tipsList.removeChild(tips)
    count--
  } catch (e) {
    console.log('count of tips already break the max')
  }
  console.log(count)
}
