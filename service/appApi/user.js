
const Router = require('koa-router')
let router = new Router()

router.get('/', async (ctx) => {
  ctx.body = '这是用户操作首页'
})
router.post('/register', async (ctx) => {
  // ctx.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/')
  // ctx.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE")
  // ctx.setHeader("Access-Control-Allow-Credentials", "true")
  // ctx.body = ctx.request.body
  ctx.body = "这是返回值"

})
module.exports = router
