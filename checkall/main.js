// start: 2018-03-22 22:14 end 2018-03-22 22:40
// checkall handle
// 不是用那种方法就一定要用哪种方法 看项目需要，可能需要多种方法组合 这里是querySelectAll
// 该方法实现仍然不是最好的方法，在这里还不知道选择的项数是哪几项

document.getElementById('checkbox').addEventListener('change', function(e) {
  var target = e.target,
    subList = document.querySelectorAll('.subcheck')
  if (target.id.toLowerCase() === 'checkall') {
    subList.forEach(function(e) {
      e.checked = target.checked
    })
  } else {
    var count = 0
    subList.forEach(function(e) {
      e.checked ? count++ : null
    })
    document.getElementById('checkall').checked = count === subList.length ? true : false
  }
})
