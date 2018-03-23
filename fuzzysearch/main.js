// start: 2018-03-22 22:58 stop : 2018-03-22 23:58

var completeList = ['admin', 'root', 'bootstrap']

document.getElementById('text').addEventListener('input', function() {
  var dropdown = document.getElementById('dropdown')
  if (this.value) {
    var value = this.value
    dropdown.innerHTML = ''

    completeList.forEach(function(e) {
      if (e.search(value) !== -1) {
        var li = document.createElement('li'),
          a = document.createElement('a')
        a.innerText = e
        li.appendChild(a)
        dropdown.insertBefore(li, dropdown.firstChild)
      }
    })

    dropdown.style.display = dropdown.firstChild ? 'block' : 'none'
  } else {
    dropdown.style.display = 'none'
  }
})
