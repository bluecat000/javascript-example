/*
 * find index in array
 * start 2018-04-28 17:22
 * end 2018-04-28 17:55
 */

'use strict'

var arr = [2,4,6,8,10,12,14,16,18]

function findIndex(num) {
  for (var i = 0, len = arr.length; i < len; i++) {
    if (num === arr[i]) {
      return i
    }
  }
  return null
}

// console.log(findIndex(10))


function findIndex2(num) {
  var half = arr.length/2,
    start = 0,
    end = len

  while(num === arr[half]) {
    if (num === arr[half]) {
      return half
    } else {
      if(num > arr[half]) {
        start = half
      } else if(num < arr[half]) {
        end = half
      }
      half = half/2
      if (half === 0) {
        return null
      }
    }
  }
}

console.log((findIndex(10)))
