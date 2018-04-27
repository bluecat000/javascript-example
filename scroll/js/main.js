'use strict'

var body = document.body || document.documentElement

function scrollFn (handle) {
  console.log(handle)
}

document.getElementById('top').addEventListener('click', function() {
  body.scrollTop = 0
})

document.getElementById('bottom').addEventListener('click', function() {
  body.scrollTop = body.scrollHeight
  console.log(body.scrollHeight)
})
