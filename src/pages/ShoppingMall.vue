<template>
  <div>
    <div class="searchBar">
      <van-row>
        <van-col span="3">icon</van-col>
        <van-col span="15"><input class="searchInput" type="text"></van-col>
        <van-col span="6">
          <van-button size="mini" class="searchBtn">搜索</van-button>
        </van-col>
      </van-row>
    </div>
    <div class="swipeWrapper">
<!--      <van-swipe :autoplay="3000" indicator-color="white">-->
<!--        <van-swipe-item v-for="(item, idx) in swipePicsArr" :key="idx">-->
<!--          <img :src="item.picUrl" v-lazy="item.picUrl" width="100%">-->
<!--        </van-swipe-item>-->
<!--      </van-swipe>-->
    </div>
    <div class="fz-12 t-l">时间：{{testMockData.mtime}}</div>
    <div class="fz-12 t-l">姓名：{{testMockData.nickname}}</div>
    <div class="fz-12 t-l">排名：{{testMockData.rank}}</div>
    <div class="fz-12 t-l">分数：{{testMockData.score}}</div>
    <div class="fz-12 t-l">指数：{{testMockData.stars}}颗星</div>
  </div>
</template>

<script>
  const pic1 = require("../assets/img/banner1.jpg");
  const pic2 = require("../assets/img/banner2.jpg");
  const pic3 = require("../assets/img/banner3.jpg");

  import {getAxios} from '../public/getAxios';
  import "../assets/js/mock";

  export default {
    name: 'ShoppingMall',
    data () {
      return {
        swipePicsArr: [
          {picUrl: pic1},
          {picUrl: pic2},
          {picUrl: pic3}
        ],
        testMockData: {}
      }
    },
    mounted () {
      this.getData();
    },
    methods:{
      async getData (){
        const url = "/api/msdk/proxy/query_common_credit"
        let res = await getAxios("get", url, {});
        console.log(res);
        let resData = res.data;
        if(resData){
          this.$set(this.testMockData, "mtime", res.data.mtime);
          this.$set(this.testMockData, "nickname", res.data.nickname);
          this.$set(this.testMockData, "rank", res.data.rank);
          this.$set(this.testMockData, "score", res.data.score);
          this.$set(this.testMockData, "stars", res.data.stars);
        }
      }
    }
  }

</script>

<style lang="less" scoped>
  @searchBarH: 1.3rem;
  .searchBar {
    color: red;
    padding-top: 1rem;

    .searchInput {
      color: yellow;
      height: @searchBarH;
      width: (calc(100% - 4px));
    }
    .searchBtn{
      width: 5rem;
      height: 1.6rem;
    }
  }
</style>
