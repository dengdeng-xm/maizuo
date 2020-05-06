<template>
   <div class="page-login">
     <div class="login-log">
       <img src="@/assets/icon/logo1.png" alt="">
     </div>
     <div class="login-log-from">
       <div><input type="text" name="" id="" placeholder="手机号">
        <div  class="log-ver">获取验证码</div>
        <div class="phonenumber">请输入手机号</div>
        </div>
        <div><input type="text" name="" id="" placeholder="验证码"></div>
        <div class="login-sub">登录</div>
     </div>
 </div>
</template>
<script>
export default {
  name: 'Login'
}
</script>
<style lang='scss' scoped>
.login-log {
  width: 375px;
  height: 60px;
  text-align: center;
  margin-top: 79px;
  img {
    width: 60px;
    height: 60px;
  }
}
.login-log-from {
  width: 375px;
  height: 225px;
  div {
    line-height: 55px;
    margin: 0 25px;
    position: relative;
    text-align: center;
    input {
      width: 325px;
      height: 55px;
      line-height: 15px;
      font-size: 15px;
      margin-top: 20px;
      border: 0;
    }
    .log-ver {
      position: absolute;
      right: 0px;
      top: 18px;
      font-size: 14px;
      color: #bdc0c5;
    }
    .phonenumber {
      width: 375px;
      height: 11px;
      text-align: left;
      color: #ff5f16;
      width: 100%;
      line-height: 11px;
      margin-left: 0px;
      font-size: 11px;
      margin-top: 7px;
      display: none;
    }
  }
  .login-sub {
    margin-top: 70px;
    line-height: 45px;
    font-size: 16px;
    margin: 70px 25px 0;
    border-radius: 3px;
    text-align: center;
    background-color: #ff5f16;
    height: 44px;
    color: #fff;
  }
}
</style>
