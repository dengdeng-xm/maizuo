<template>
   <div class="page-search">
     <!-- top -->
   <div class="search-top">
     <div class="search-top-left">
       <div class="search-img">
         <img src="../../assets/icon/search.png" alt="">
       </div>
       <input type='text' placeholder="请输入影城名称">
     </div>
     <div class="search-top-right">
       取消
     </div>
   </div>
   <!-- top -->
   <!-- main -->
   <div class="search-main">
   <div class="title">离你最近</div>
   <ul>
     <li><router-link to="/search-deta"> 广州海珠万达广场</router-link></li>
     <li><router-link to="/search-deta"> 广州海珠万达广场</router-link></li>
     <li><router-link to="/search-deta"> 广州海珠万达广场</router-link></li>
     <li><router-link to="/search-deta"> 广州海珠万达广场</router-link></li>
     <li><router-link to="/search-deta"> 广州海珠万达广场</router-link></li>
   </ul>
   </div>
   <!-- main -->
 </div>
</template>
<script>
export default {
  name: 'Search'
}
</script>
<style lang='scss' scoped>
.page-search {
  height: 100%;
  .search-top {
    margin-top: 10px;
    width: 375px;
    height: 49px;
    display: flex;
    .search-top-left {
      width: 302px;
      height: 30px;
      display: flex;
      background: #f4f4f4;
      font-size:12px;
      margin-left: 15px;
      .search-img {
        width: 20px;
        height: 30px;
        img {
          width: 18px;
          height: 18px;
          margin-top: 5px;
        }
      }
      input{
        border:0;
        background: #f4f4f4;
      }
    }
    .search-top-right{
      width: 43px;
      height: 30px;
      font-size: 14px;
      color: #191a1b;
      line-height:30px;
      text-align: right;
    }
  }
  .search-main{
    width: 345px;
    margin-left: 15px;
    .title{
    width: 345px;
    height: 13px;
    color: #bdc0c5;
    font-size: 14px;
    margin: 18px 0;
}
ul{
  display: flex;
  flex-wrap: wrap;
  li{
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    box-sizing: border-box;
    float: left;
    a{
      display: block;
      width: 150px;
      height: 30px;
      font-size: 14px;
      color: #191a1b;
      background: rgba(245,245,245,0.6);
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
}
  }

}
</style>
