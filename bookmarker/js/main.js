// 书签管理器  用时1h+   (我的天!!)
// 注意构思 先想好思路 切忌直接上代码 
// 写代码的时候也要思考 不要写了后面不知道前面 变量要记住
// 注意大小写 
// 不要急于保存和看效果 一个功能一个功能来 根据思路一步步走
// 看效果前想好代码能不能做好你想要的 同时注意语法错误
// 出错了先想原因 都是小错误 这里浪费太多时间了!!
document.getElementById('submit').addEventListener('click', function(e) {
  e.preventDefault()
  var bookName = document.getElementById('bookname').value
  var bookUrl = document.getElementById('bookurl').value

  if (!validForm(bookName, bookUrl)) {
    return 
  }

  var bookmark = {
    name: bookName,
    url: bookUrl.search('http://') !== -1 ? bookUrl : 'http://' + bookUrl ,
  }

  if (!getBookmarks()) {
    var bookmarks = [bookmark]
    saveBookmarks(bookmarks)
  } else {
    var bookmarks = getBookmarks()
    bookmarks.push(bookmark)
    saveBookmarks(bookmarks)
  }
  renderBookmarks()
})

function saveBookmarks(bookmarks) {
  window.localStorage.bookmarks = JSON.stringify(bookmarks) // 注意大小写!!!!!!
}

function getBookmarks() {
  return JSON.parse(window.localStorage.getItem('bookmarks'))
}

function validForm(bookName, bookUrl) {
  if (!bookName || !bookUrl) {
    return false
  }
  return true
}

function deleteBookmark(url) {
  var bookmarks = getBookmarks()
  for (var i = 0, len = bookmarks.length; i < len; i++) {
    if (bookmarks[i].url == url) {
    console.log(bookmarks[i].url, url)
      bookmarks.splice(i, 1)
      saveBookmarks(bookmarks)
      renderBookmarks()
    }
  }
}

function renderBookmarks() {
  var bookmarks = getBookmarks()
  if (bookmarks) {
    var str = ''
    for(var i = 0 ; i < bookmarks.length ; i++) {
      str += '<div class="well well-lg">' +
        '<h3>' + bookmarks[i].name + '</h3>' + 
        '<a target="_blank" href="' + bookmarks[i].url + '">' + bookmarks[i].url + '</a>' + 
        '<a class="btn btn-danger" onclick="deleteBookmark(\'' + 
        (bookmarks[i].url +
          '\'') + ')">delete</a>' + // 这里直接传进去的参数会解析成字符串 所以要加多引号
        '</div>'
    }
    document.getElementById('bookmarklist').innerHTML = str
  }
}
