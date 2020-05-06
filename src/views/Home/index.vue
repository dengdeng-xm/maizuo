<template>
   <div class="page-home">
    <div class="top">
     <router-view></router-view>
    </div>
    <div class="bottom">
      <ul>
        <li> <router-link to="/home/films/now-paling">
        <img src="../../assets/icon/mv.png" alt="">
        <span>电影</span>
        </router-link>  </li>
        <li><router-link to="/home/cinemas">
        <img src="../../assets/icon/cinemas.png" alt="">
        <span>影院</span>
       </router-link></li>
        <li><router-link to="/home/information">
        <img src="../../assets/icon/information.png" alt="">
        <span>资讯</span>
        </router-link></li>
        <li><router-link to="/home/my">
        <img src="../../assets/icon/my.png" alt="">
        <span>我的</span>
        </router-link></li>
      </ul>

    </div>
 </div>
</template>
<script>
export default {
  name: 'Home'
}
</script>
<style lang='scss' scoped>
.page-home {
  display: flex;
  flex-direction: column;
  .top {
    flex: 1;
    background: rgba(204, 204, 204, 0.178);
  }
  .bottom {
    height: 50px;
    position: relative;
    &::before{
      content: '';
      position: absolute;
      left: 0;
      top:0;
      width: 100%;
      height: 1px;
      background: #e9e9e9;
      transform: scaleY(0.5)
    }
    ul {
      display: flex;
      height: 100%;
      text-align: center;
      line-height: 50px;
      li {
        display: flex;
        flex-direction: column;
        width: 94px;
        height: 50px;
        .router-link-active{
          color: #ff5f16;
        }
        a {
          display: flex;
          height: 49px;
          font-size: 12px;
          align-items: center;
          justify-content: center;
          position: relative;
          img {
            display: block;
            width: 20px;
            height: 22px;
          }
          span {
            font-size:  12px;
            position: absolute;
            bottom: -18px;
            right: 35px;
          }
        }
      }
    }
  }
}
</style>
