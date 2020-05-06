<template>
   <div class="page-cinemas">
   <div class="cinemas-head">
     <div class="head-left"><p>成都</p><span><img src="../../../assets/icon/cityjiantou.png" alt=""></span></div>
     <div class="head-center"><p>影院</p></div>
     <div class="head-right"><img src="../../../assets/icon/search.png" alt=""></div>
   </div>
   <div class="cinemas-tag">
     <div>
        <div class="head-left"><p>全城</p><span><img src="../../../assets/icon/cityjiantou.png" alt=""></span></div>
     </div>
     <div>
        <div class="head-center"><p>APP订票</p><span><img src="../../../assets/icon/cityjiantou.png" alt=""></span></div>
     </div>
     <div>
        <div class="head-right"><p>最近去过</p><span><img src="../../../assets/icon/cityjiantou.png" alt=""></span></div>
     </div>
   </div>
   <div class="cinemas-main">
     <ul>
       <li><router-link to="/search-deta">
       <div class="main-1"><span class="item-2">卢米埃IMAX影城（北城天街店）</span><span class="item-3">成都市金牛区蓉北商贸大道一段21号龙湖天街购物广场5层</span> </div>
       <div class="main-2"><span class="item-4"><i>￥</i><span>50</span> <i>起</i> </span><span class="item-5">距离未知</span> </div>
       </router-link></li>
       <li><router-link to="/search-deta">
       <div class="main-1"><span class="item-2">卢米埃IMAX影城（北城天街店）</span><span class="item-3">成都市金牛区蓉北商贸大道一段21号龙湖天街购物广场5层</span> </div>
       <div class="main-2"><div class="item-4"><i>￥</i><span>50</span> <i>起</i> </div><span class="item-5">距离未知</span> </div>
       </router-link></li>
     </ul>
   </div>
 </div>
</template>
<script>
export default {
  name: 'Cinemas'
}
</script>
<style lang='scss' scoped>
.cinemas-head {
  width: 375px;
  height: 42px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  .head-left {
    width: 56px;
    height: 44px;
    align-items: center;
    margin-left: 15px;
    display: flex;
    p {
      font-size: 14px;
      line-height: 16px;
      overflow: hidden;
    }
    img {
      width: 6px;
      height: 4px;
      margin-left: 3px;
    }
  }
  .head-center {
    width: 232px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    p {
      font-size: 18px;
    }
  }
  .head-right {
    width: 56px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    img {
      width: 18px;
      height: 18px;
    }
  }
}
.cinemas-tag {
  width: 375px;
  height: 46px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  .head-left {
    width: 124px;
    height: 49px;
    align-items: center;
    display: flex;
    line-height: 49px;
    padding-left: 30px;
    p {
      font-size: 14px;
      line-height: 16px;
      overflow: hidden;
    }
    img {
      width: 6px;
      height: 4px;
      margin-left: 3px;
    }
  }
  .head-center {
    width: 124px;
    height: 49px;
    align-items: center;
    display: flex;
    p {
      font-size: 14px;
      line-height: 16px;
      overflow: hidden;
    }
    img {
      width: 6px;
      height: 4px;
      margin-left: 3px;
    }
  }
  .head-right {
    width: 124px;
    height: 49px;
    align-items: center;
    display: flex;
    p {
      font-size: 14px;
      line-height: 16px;
      overflow: hidden;
    }
    img {
      width: 6px;
      height: 4px;
      margin-left: 3px;
    }
  }
}
.cinemas-main {
  width: 375px;
  ul {
    width: 375px;
    li {
      width: 375px;
      height: 75px;
      a {
        display: block;
        width: 375px;
        height: 75px;
        display: flex;
        border-bottom: 1px solid #ccc;
        .main-1 {
          width: 280px;
          height: 45px;
          display: flex;
          flex-direction: column;
          margin-right: 15px;
          margin-left: 15px;
          margin-top: 10px;
          .item-2 {
            color: #191a1b;
            font-size: 15px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .item-3 {
            color: #797d82;
            font-size: 12px;
            margin-top: 10px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
        .main-2 {
          width: 70px;
          height: 45px;
          display: flex;
          flex-direction: column;
          margin-top: 10px;
          .item-4 {
            width: 70px;
            height: 22px;
            i {
              font-size: 11px;
              font-style: normal;
              color: #ff5f16;
            }
            span {
              font-size: 15px;
              color: #ff5f16;
            }
          }
          .item-5 {
            margin-top: 5px;
            font-size: 12px;
            color: #797d82
          }
        }
      }
    }
  }
}
</style>
