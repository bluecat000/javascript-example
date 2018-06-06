let {a,b,m: admin} = {
  a() {
    console.log(1)
  },
  b() {
    console.log(2)
  },
  c() {
    console.log(3)
  }
}

var obj = {
  a,b,admin
}

console.log(obj)

