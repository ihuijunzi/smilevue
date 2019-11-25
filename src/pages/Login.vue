<template>
  <div>
    <van-nav-bar
      title="登录"
      left-text="返回"
      left-arrow
      @click-left="goBack"
    />
    <div>

        <van-field
          v-model="username"
          required
          clearable
          label="用户名"
          placeholder="请输入用户名"
        />

        <van-field
          v-model="password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
        />

    </div>
    <div>
      <van-col span="8"></van-col>
      <van-col span="8">
        <van-button type="primary" size="large" @click="useRegister">注册</van-button>
      </van-col>
      <van-col span="8"></van-col>
    </div>
  </div>
</template>

<script>
  import {getAxios} from '../public/getAxios'
  import URL from "../public/serviceApi.config"
  import {Toast} from 'vant'

  export default {
    name: 'Login',
    data(){
      return{
        username:'',
        password:''
      }
    },
    methods:{
      goBack(){
        this.$router.go(-1);
      },
      async useRegister(){
        let {username, password} = this;
        let resData = await getAxios('post', URL.register, {username, password});
        if(resData.code=== 200){
          Toast.success("注册成功");
        }else{
          Toast.fail("注册失败")
        }
      }
    }
  }
</script>

<style scoped>

</style>
