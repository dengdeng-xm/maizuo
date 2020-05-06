<template>
    <div class="films-page">
     <div class="film-header">
        <div class="goBack">
            <img src="../../assets/icon/right.png" alt="">
            </div>
        <div class="title">迪丽丽的奇幻巴黎</div>
        </div>
        <!--  -->
        <div class="film-poster">
            <img src="../../assets/icon/bgi.jpg" alt="">
        </div>
        <!--  -->
        <div class="film-deta">
         <div class="col"><div class="film-name"><span class="name">迪丽丽的奇幻巴黎</span><span class="item">2D</span></div> <div class="film-grade"><span class="grade">7.1</span> <span class="grade-text">分</span></div></div>
          <div class="film-category grey-text">动画 | 奇幻 | 冒险</div>
           <div class="film-premiere-time grey-text">
        2019-12-21上映 </div>
        <div class="film-nation-runtime grey-text">
        法国 | 94分钟
    </div>
    <div class="film-pro">
    <div class="film-text">
       十九世纪末正是巴黎的‘美好年代’，新艺术百花齐放，新技术层出不穷，在这黄金盛世的背后却传出一连串女童被拐骗的声音，见义勇为的混血小公主迪丽丽和好友快递员踏上幻险旅程，穿梭于巴黎的各处名筑和大街小巷，拯救被困女童，途中邂逅居里夫人，毕加索，马蹄斯，罗特利特，莫奈，普鲁斯特，莎拉·波恩沙特，等众多时代天才名人，并得以慷慨相助。被誉为‘色彩魔术师’的法国动画大师米歇尔·欧斯洛即《叽里咕和女巫》，《夜的神话》《王子与公主》等动画片大获成功之后，又一部经典之作问世。《迪丽丽的奇幻巴黎》勾勒了一幅绝美的巴黎风情画和群英谱。本片首次呈现真景与动漫结合的创作风格，实现了一场先锋动画革命。
    </div>
    <div class="film-toggle">
        <img src="../../assets/icon/cityjiantou.png" alt="">
    </div>
    </div>
        </div>
        <!--  -->
        <div class="film-actor">
         <div class="actors-title-bar"><span class="actors-title-text">演职人员</span></div>
          <div class="actor-list">
            <ul>
                <li>
                    <div>
                        <img src="../../assets/icon/act.jpg" alt="">
                        <span class="item1">古力娜扎</span>
                        <span class="item2">袁春辉</span>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="../../assets/icon/act.jpg" alt="">
                        <span class="item1">古力娜扎</span>
                        <span class="item2">袁春辉</span>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="../../assets/icon/act.jpg" alt="">
                        <span class="item1">古力娜扎</span>
                        <span class="item2">袁春辉</span>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="../../assets/icon/act.jpg" alt="">
                        <span class="item1">古力娜扎</span>
                        <span class="item2">袁春辉</span>
                    </div>
                </li>
            </ul>

          </div>
        </div>
        <!--  -->
        <div class="photos">
          <div class="photos-title-bar"><span class="photos-title-text">剧照</span> <span class="photos-to-all">全部(5)<i class="iconfont icon-quanju_liebiaojiantou" style="font-size: 14px;"></i></span></div>
          <div class="photos-list">
              <ul>
                  <li>
                      <img src="../../assets/icon/films-img.jpg" alt="">
                  </li>
                   <li>
                        <img src="../../assets/icon/films-img.jpg" alt="">
                   </li>
                      <li>
                        <img src="../../assets/icon/films-img.jpg" alt="">
                   </li>
              </ul>
          </div>

        </div>
        <div class="goSchedule">
        选座购票
      </div>
    </div>
</template>
<script>
export default {
  name: 'FilmsPage'
}
</script>
<style lang='scss' scpoed>
.films-page {
  height: 100%;
  width: 100%;
  background: rgba(204, 204, 204, 0.5);
  margin: 0 auto;
  .film-header {
    position: fixed;
    background-color: hsla(0, 0%, 100%, 0);
    color: transparent;
    transition: all 0.3s ease;
    width: 375px;
    height: 44px;
    z-index: 1;
    .goBack {
      height: 30px;
      position: absolute;
      top: 5px;
      left: 5px;
      img {
        width: 30px;
        height: 30px;
      }
    }
    .title {
      font-size: 17px;
      line-height: 44px;
      text-align: center;
    }
  }
  .film-poster {
    width: 375px;
    height: 230px;
    img {
      width: 375px;
      height: 230px;
    }
  }
  .film-deta {
    padding: 15px;
    padding-top: 12px;
    background-color: #fff;
    .col {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .film-name {
        width: 256px;
        .name {
          color: #191a1b;
          font-size: 18px;
          height: 24px;
          line-height: 24px;
          margin-right: 7px;
        }
        .item {
          font-size: 9px;
          color: #fff;
          background-color: #d2d6dc;
          height: 14px;
          line-height: 14px;
          padding: 0 2px;
          border-radius: 2px;
          display: inline-block;
        }
      }
      .film-grade {
        width: calc(100% - 250px);
        text-align: right;
        color: #ffb232;
        .grade {
          font-size: 18px;
          font-style: italic;
        }
        .grade-text {
          font-size: 10px;
        }
      }
    }
    .grey-text {
      font-size: 13px;
      color: #797d82;
      margin-top: 4px;
    }
    .film-pro {
      width: 345px;
      height: 100%;
      .film-text {
        width: 345px;
        font-size: 14px;
        color: #797d82;
        margin-top: 12px;
      }
      .film-toggle {
        width: 20px;
        height: 16px;
        margin: 0 auto;
        img {
          width: 8px;
          height: 4px;
        }
      }
    }
  }
  .film-actor {
    height: 220px;
    margin-top: 10px;
    background-color: #fff;
    .actors-title-bar {
      width: 375px;
      padding: 16px;
      .actors-title-text {
        font-size: 16px;
        text-align: left;
        color: #191a1b;
        overflow-x: hidden;
      }
    }
    .actor-list {
      height: 140px;
      background: rgb(255, 255, 255);
      margin-left: 15px;
      ul {
        display: flex;
        align-items: center;
        position: relative;
        width: 100%;
        li {
          width: 100%;
          height: 131px;
          img {
            width: 85px;
            height: 118px;
          }
          .item1 {
            display: block;
            text-align: center;
            font-size: 12px;
            color: #191a1b;
            margin-top: 10px;
          }
          .item2 {
            display: block;
            text-align: center;
            font-size: 12px;
            color: #191a1b;
            margin-top: 5px;
          }
        }
      }
    }
  }
  .photos {
    margin-top: 10px;
    margin-bottom: 60px;
    background-color: #fff;
    margin-left: 15px;
    .photos-title-bar {
      height: 62px;
      margin: 0 auto;
      .photos-title-text {
        font-size: 16px;
        text-align: left;
        line-height: 60px;
        color: #191a1b;
      }
      .photos-to-all {
        font-size: 14px;
        color: #797d82;
        float: right;
        line-height: 60px;
      }
    }
    .photos-list {
      width: 100%;
      height: 100px;
      ul {
        width: 100%;
        height: 100px;
        display: flex;
        li {
          width: 150px;
          height: 80px;
          margin-right: 10px;
          overflow-x: hidden !important;
          img {
            width: 150px;
            height: 80px;
          }
        }
      }
    }
  }
   .goSchedule {
    height: 49px;
    width: 375px;
    text-align: center;
    background-color: #ff5f16;
    color: #fff;
    font-size: 16px;
    line-height: 49px;
}
}
</style>
