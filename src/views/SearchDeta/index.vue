<template>
   <div class="page-search-deta">
    <div class="deta-head">
      <img src="../../assets/icon/right.png" alt="">
    </div>
    <!--  -->
    <div class="deta-title">
      广州海珠万达广场店
    </div>
    <!--  -->
    <div class="deta-adress">
      <img src="../../assets/icon/dingwei.png" alt="" class="item-1">
      <p>广东省广州市海珠区广州大道南978号</p>
      <img src="../../assets/icon/phone.png" alt="" class="item-2">
    </div>
    <!--  -->
    <div class="deta-img">
      <img src="../../assets/icon/films.jpg" alt="">
    </div>
    <!--  -->
      <div  class="film-info"><div class="film-head"><span  class="film-name">唐人街探案3</span> <span class="film-score">7.8</span> <span class="film-score-unit">分</span></div> <div  class="film-desc">喜剧|动作|悬疑 | 130分钟 | 陈思诚 | 陈思诚 刘昊然 王宝强 张子枫</div> <img src="../../assets/icon/jiantou.png" width="4px" height="8px" alt="" class="film-more"></div>
      <!--  -->
      <div class="date-list"><div class="tabs-bar-wrapper dateWrap"><div class="tabs-bar"><ul class="tabs-nav"><li class="active" style="padding: 0px 15px;"><span>周二1月28日</span></li> <div class="tab-ink-bar-wrapper" style="transform: translate3d(0%, 0px, 0px); padding: 0px 15px;"><span class="tab-ink-bar" style="width: 81px;"></span></div></ul></div></div></div>

    <div class="deta-scene">
      <div class="schedule-list-empty"><div class="img-wrap"><img  width="100%" height="100%" src="../../assets/icon/ss.png"></div> <div class="empty-tip">暂无场次</div></div>
    </div>
 </div>
</template>
<script>
export default {
  name: 'SearchDeta'
}
</script>
<style lang='scss' scoped>
.page-search-deta{
  height: 100%;
  .deta-head{
   width: 375px;
   height: 46px;
   img{
     width: 26px;
     height: 44px;
     margin-left: 15px;
   }
  }
  .deta-title{
    width: 375px;
    height: 44px;
    color: #191a1b;
    font-size:18px;
    text-align: center;
    line-height: 44px;
  }
  .deta-adress{
    width: 375px;
    height: 50px;
    margin-left: 15px;
    display: flex;
    line-height: 50px;
    text-align: center;
    p{
      font-size:14px;
      color: #2c3e50;
      margin: 0 12px;
    }
    .item-1{
      width: 14px;
      height: 21px;
      margin-top: 15px;
    }
    .item-2{
      width: 17px;
      height: 18px;
      margin-left: 25px;
      margin-top: 15px;
    }
  }
  .deta-img{
    width: 375px;
    height: 160px;
    text-align: center;
    img{
      width: 90px;
      height: 130px;
    }
  }
  .film-info{
    width: 100%;
    background: #fff;
    height: 80px;
    padding: 15px 0;
    position: relative;
  .film-head {
    margin-bottom: 10px;
    text-align: center;
    line-height: 18px;
    .film-name {
    font-size: 15px;
    color: #191a1b;
    padding-right: 5px;
}
.film-score {
    font-size: 16px;
    font-style: italic;
    color: #ffb232;
}
.film-score-unit {
    font-size: 10px;
    color: #ffb232;
}
}
.film-desc{
    text-align: center;
    height: 18px;
    color: #797d82;
    font-size: 13px;
    padding: 0 12%;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.film-more{
    position: absolute;
    right: 15px;
    top: 0;
    margin-top: 36px;
}
}
.date-list{
    width: 100%;
    .tabs-bar-wrapper {
    height: 49px;
    position: relative;
    z-index: 100;
    width: 100%;
    overflow-x: hidden;
    background: #fff;
   .tabs-bar {
    height: 49px;
    display: flex;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
    position: relative;
    .tabs-nav{
      display: flex;
      align-items: center;
    position: relative;
    width: 100%;
    justify-content: flex-start;
    li{
      text-align: center;
    height: 16px;
    line-height: 16px;
    font-size: 14px;
    cursor: pointer;
    }
    li.active {
    color: #ff5f16;
}
 .tab-ink-bar-wrapper {
    position: absolute;
    margin: auto;
    top: 30px;
    left: 0;
    transition: transform .2s;
    .tab-ink-bar {
    border-bottom: 2px solid #ff5f16;
    border-radius: 20px;
    display: block;
    margin: auto;
}
}
    }
    }
}
}
.schedule-list-empty{
    height: 180px;
    padding: 40px 0 44px;
     .img-wrap{
    height: 70px;
    width: 70px;
    margin: 0 auto 10px;
    img {
    width: 100%;
    height: 100%;
}
}
 .empty-tip {
    text-align: center;
    color: #bdc0c5;
    font-size: 14px;
}
}
}
</style>
