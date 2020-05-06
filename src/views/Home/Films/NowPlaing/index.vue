<template>
   <div class="page-now-plaing">
      <div class="nav-bar">
        <ul>
          <li><router-link to="/home/films/now-paling">正在热映</router-link>  </li>
          <li><router-link to="/home/films/coming-soon">即将上映</router-link></li>
        </ul>
      </div>
      <ul classs='now-plaing-main'>
        <li><router-link to="/films-page">
        <div class="fimls-img"><img src="../../../../assets/icon/films.jpg" alt=""></div>
        <div class="flims-name">
          <div class="item-1">
             <p>误杀</p>
          <span>2D</span>
          </div>
            <div class="item-2">
             <p>观众评分</p>
          <span>7.9</span>
          </div>
          <p>主演：柯汶利 肖央 谭卓 陈冲 姜皓文</p>
          <p>中国大陆 | 112分钟</p>
        </div>
        <div class="flims-tic">
          <p>购票</p>
        </div>
        </router-link></li>
      </ul>
      <div class="films-bottom">- 无更多电影 -</div>
 </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'NowPlaing',
  mounted () {
    this.getFilm()
  },
  methods: {
    getFilm () {
      axios.get('~@/static/films.json').then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.page-now-plaing {
  width: 375px;
  height: 100%;
      .nav-bar{
      position: relative;
      width: 375px;
      height: 49px;
      display: flex;
      background: #fff;
      &::after{
        content:'';
        position: absolute;
        width: 100%;
        height:1px;
        background: #e9e9e9;
        left:0;
        bottom: 0;
        transform:scaley(0.5)
      }
      ul {
      width: 375px;
      height: 49px;
      display: flex;
        li{
      width: 50%;
      height: 49px;
      text-align: center;
      line-height: 49px;
       a{
        display: block;
        width: 375px;
        height: 49px;
      }
      .router-link-active{
        color: #ff5f16;
      }
    }
    }
    }
  ul {
    width: 360px;
    height: 124px;
    li {
      width: 360px;
      height: 124px;
      display: flex;
      a {
        display: flex;
        width: 345px;
        height: 94px;
        .fimls-img {
          width: 66px;
          height: 90px;
          img {
            width: 66px;
            height: 90px;
            padding: 15px 0 15px 15px;
          }
        }
        .flims-name {
          width: 229px;
          height: 81px;
          margin-left: 20px;
          margin-top: 20px;
          .item-1 {
            width: 209px;
            height: 22px;
            display: flex;
            p {
              color: #191a1b;
              font-size: 16px;
              margin-right: 5px;
              overflow: hidden;
            }
            span {
              font-size: 9px;
              color: #fff;
              background-color: #d2d6dc;
              height: 14px;
              line-height: 14px;
              padding: 0 2px;
              border-radius: 2px;
            }
          }
          .item-2 {
            width: 209px;
            height: 21px;
            display: flex;
            p {
              font-size: 14px;
              margin-top: 4px;
              color: #797d82;

            }
            span {
              color: #ffb232;
              font-size: 14px;
            }
          }
          p {
            font-size: 13px;
            margin-top: 4px;
            color: #797d82;
            white-space: nowrap;
          }
        }
        .flims-tic {
          width: 50px;
          height: 25px;
          border: 1px solid #ff5f16;
          border-radius: 4px;
          margin-top: 40px;
          margin-left: 10px;
          p {
            font-size: 12px;
            color: #ff5f16;
            line-height: 25px;
            text-align: center;
          }
        }
      }
    }
  }
  .films-bottom {
    width: 375px;
    height: 59px;
    background: #ededed;
    line-height: 59px;
    text-align: center;
    font-size: 14px;
    color: #bdc0c5;
  }
}
</style>
