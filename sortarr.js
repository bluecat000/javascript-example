/* 
 * sort array
 * start 2018-04-28 17:10
 * end 2018-04-28 17:21
 */
'use strict';

var arr = [1,2,3,5,9,5,3,9,5,4,6]

function sort(arr) {
  for (var i = 0, len = arr.length; i < len - 1; i++) {
    for (var j = 0, len = arr.length; j < len - 1; j++) {
      if (arr[j] < arr[j+1]) {
        var t = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = t
      }
    }
  }
  return arr
}

console.log(sort(arr))
