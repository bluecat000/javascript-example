import b from './export.js'

// todo: import运行模块
const a = () => import ('./export.js')
a().then(() => {
  console.log('load')
}).catch((err) => {
  console.log(err)
})
