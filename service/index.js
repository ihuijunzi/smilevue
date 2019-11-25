const Koa = require('koa')
const app = new Koa();
const KoaRouter = require('koa-router');
const bodyParser = require('koa-bodyparser');//中间件
const Koa2Cors = require('koa2-cors');


app.use(bodyParser());
app.use(Koa2Cors());

let user = require('./appApi/user');

//加载子路由
let router = new KoaRouter();
router.use('/user', user.routes());


//加载路由中间件
app.use(router.routes());
app.use(router.allowedMethods());





const mongoose = require('mongoose')
const {connect , initSchemas} = require('./database/init.js')

//立即执行函数
;(async () =>{
  await connect()
  initSchemas()
  const User = mongoose.model('User')
  let oneUser = new User({userName:'jspang',password:'123456'})
  oneUser.save().then(()=>{
    console.log('插入成功')
  });

  let  users = await  User.findOne({}).exec()
  console.log('------------------')
  console.log(users)
  console.log('------------------')

})()



app.use(async(ctx) => {
  ctx.body = '<h1>Hello Koa2</h1>'
})

app.listen(3000, ()=>{
  console.log("[server] starting at port 3000");
});





