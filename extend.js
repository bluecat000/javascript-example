'use strict'

function SuperType(name) {
  this.name = name
}

SuperType.prototype.getName = function() {
  console.log(this.name)
}

function SubType(name, age) {
  SuperType.call(this, name)
  this.age = age
}

SubType.prototype = new SuperType()
SubType.prototype.constructor = SubType

SubType.prototype.getAge = function() {
  console.log(this.age)
}

var o = new SubType('bc', 23)

o.getName()
o.getAge()
console.log(o.constructor)
console.log(SubType.prototype)
console.log(o.__proto__)

console.log(SubType.prototype.isPrototypeOf(o))
console.log(SuperType.prototype.isPrototypeOf(o))
console.log(o instanceof SubType)
console.log(o instanceof SuperType)
