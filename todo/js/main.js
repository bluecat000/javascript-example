// 用时1h ()
// 这次调试事件减少了 很快定位到问题 不过存在记忆编程 下次测试无记忆编程
//
document.getElementById('add').addEventListener('click', function(e) {
  e.preventDefault()
  var text = document.getElementById('text').value
  if (text) {
    // 不存在顺序问题 使用的方法和添加的事件会加入已经显示的dom
    var li = document.createElement('li')
    var span = document.createElement('span')
    var del = document.createElement('button')
    var complete = document.createElement('button')
    var ul = document.getElementById('todo')
    
    li.appendChild(span)
    li.appendChild(complete)
    li.appendChild(del)
    ul.insertBefore(li, ul.firstChild)

    li.classList.add('alert', 'alert-success')

    span.innerText = text // 纯文本的时候用
    complete.innerHTML = '<span class="glyphicon glyphicon-ok"></span>' //使用同一个dom接口 不同的css 可较少js代码
    del.innerHTML = '<span class="glyphicon glyphicon-trash"></span>'

    // 添加事件  (存在性能问题，应使用事件冒泡，可只添加一个事件)
    complete.addEventListener('click', function() {
      var parent = this.parentNode
      var parparent = parent.parentNode
      var target = parparent.id.toLowerCase() === 'todo' 
        ? document.getElementById('complete') 
        : document.getElementById('todo')
      parparent.removeChild(parent)
      target.insertBefore(parent, target.firstChild)
    })
    del.addEventListener('click', function() {
      var parent = this.parentNode
      parent.parentNode.removeChild(parent)
    })
  }
})

function delFn() {
}
