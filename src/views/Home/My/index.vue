<template>
   <div class="page-my">
   <div class="my-top">
     <router-link to="/login"><img src="../../../assets/icon/my.png" alt="">
      </router-link>
     <div> <router-link to="/login">立即登录</router-link> </div>
   </div>
     <ul>
       <li>
         <img src="../../../assets/icon/dianyingdingd.png" alt="">
         <span>电影订单</span>
       </li>
       <li>
          <img src="../../../assets/icon/dianyingdingd.png" alt="">
         <span>电影订单</span>
       </li>
     </ul>
     <div class="my-card">
       <img src="../../../assets/icon/quan.png" alt="">
       <span>卖座券</span>
       <img src="../../../assets/icon/jiantou.png" alt="" class="arrow">
     </div>
     <div class="my-card">
        <img src="../../../assets/icon/quan.png" alt="">
       <span>组合红包</span>
       <img src="../../../assets/icon/jiantou.png" alt="" class="arrow">
     </div>
     <div class="my-card">
        <img src="../../../assets/icon/quan.png" alt="">
       <span>余额</span>
       <span class="value"><i>￥</i>0</span>
       <img src="../../../assets/icon/jiantou.png" alt="" class="arrow">
     </div>
     <div class="my-card">
        <img src="../../../assets/icon/quan.png" alt="">
       <span>设置</span>
       <img src="../../../assets/icon/jiantou.png" alt="" class="arrow">
     </div>
 </div>
</template>
<script>
export default {
  name: 'My'
}
</script>
<style lang='scss' scoped>
.my-top {
  width: 375px;
  height: 200px;
  color: #fff;
  background-image: url("../../../assets/icon/bg.png");
  display: flex;
  img {
    width: 63px;
    height: 63px;
    border-radius: 35px;
    margin-right: 20px;
    border: 2px solid #fff;
    background: #ccc;
    margin: 80px 22px 20px;
  }
  div {
    width: 64px;
    height: 24px;
    font-size: 16px;
    margin-top: 100px;
    text-align: center;
    a {
      color: #fff;
    }
  }
}
ul {
  width: 375px;
  height: 79px;
  display: flex;
  text-align: center;
  margin-bottom: 10px;
  background: #fff;
  li {
    width: 188px;
    height: 49px;
    position: relative;
    margin-top: 15px;
    img {
      width: 26px;
      height: 26px;
    }
    span {
      font-size: 14px;
      position: absolute;
      top: 26px;
      left: 65px;
      color: #797d82;
      margin-top: 5px;
    }
  }
}
.my-card {
  background: #fff;
  padding: 0 15px;
  height: 49px;
  display: flex;
  align-items: center;
  img {
    width: 20px;
    height: 20px;
  }
  span {
    margin-left: 15px;
    color: #191a1b;
    flex: 1;
  }
  .arrow {
    text-align: right;
    width: 6px;
    height: 10px;
  }
  .value{
    text-align: right;
    color: #797d82;
    padding-right: 14px;
  }
  i{
    font-size: 12px;
    font-style: normal;
  }
}
</style>
