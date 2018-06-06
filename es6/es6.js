let {a,b,c: admin,d,f} = {
  a() {
    console.log(1)
  },
  b() {
    console.log(2)
  },
  c() {
    console.log(3)
  },
  d: 1,
}

var obj = {
  a,b,admin,d,f
}

console.log(obj)

