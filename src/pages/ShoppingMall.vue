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
      <van-swipe :autoplay="3000" indicator-color="white" class="swipeWrapper">
        <van-swipe-item v-for="(item, idx) in swipePicsArr" :key="idx">
          <img :src="item.picUrl" v-lazy="item.picUrl" width="100%">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="testMock">
      <div class="fz-12 t-l">时间：{{testMockData.mtime}}</div>
      <div class="fz-12 t-l">姓名：{{testMockData.nickname}}</div>
      <div class="fz-12 t-l">排名：{{testMockData.rank}}</div>
      <div class="fz-12 t-l">分数：{{testMockData.score}}</div>
      <div class="fz-12 t-l">指数：{{testMockData.stars}}颗星</div>
      <div class="fz-12 t-l">头像：<img class="personImg" alt="" :src="testMockData.img"></div>
    </div>
    <div class="recommend">
      <div class="recommend-title fz-12 t-l">推荐商品</div>
      <div class="recommend-body">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(recommendItem, index) in recommendArr" :key="index">
            <div class="recommendItem">
              <img :src="recommendItem.image" width="80%"/>
              <div class="recommend-price">￥{{recommendItem.price}}</div>
              <div class="recommend-goodsName">{{recommendItem.goodsName}}</div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>

  import {getAxios} from '../public/getAxios'
  import '../mock/mock'

  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper';

  export default {
    name: 'ShoppingMall',
    components:{
      swiper,
      swiperSlide
    },
    data () {
      return {
        swipePicsArr: [],
        testMockData: {},
        recommendArr:["a", "b"],
        swiperOption:{
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    },
    created () {
      this.getBanner();
      this.getRecommend();
    },
    mounted () {
      this.getData()
    },
    methods: {
      async getData () {
        const url = '/api/msdk/proxy/query_common_credit'
        let res = await getAxios('get', url, {})
        console.log(res)
        let resData = res.data
        if (resData) {
          this.$set(this.testMockData, 'mtime', res.data.mtime)
          this.$set(this.testMockData, 'nickname', res.data.nickname)
          this.$set(this.testMockData, 'rank', res.data.rank)
          this.$set(this.testMockData, 'score', res.data.score)
          this.$set(this.testMockData, 'stars', res.data.stars)
          this.$set(this.testMockData, 'img', res.data.img)
        }
      },
      async getBanner () {
        let resPicArr = await getAxios('get', '/get_banner', {})
        console.log(resPicArr)
        this.swipePicsArr = resPicArr
      },
      async getRecommend (){
        let resCommend = await getAxios('get', '/get_recommend', {});
        console.log(resCommend)
        //清空数组
        // this.recommendArr.splice(0, this.recommendArr.length);
        this.recommendArr = [];
        //拼接数组
        // this.recommendArr = this.recommendArr.concat(resCommend);
        // this.recommendArr.push.apply(this.recommendArr, resCommend);
        this.recommendArr.push(...resCommend)
        console.log(this.recommendArr);
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

    .searchBtn {
      width: 5rem;
      height: 1.6rem;
    }
  }

  .swipeWrapper {
    height: 200px;
  }

  .personImg {
    width: 100px;
    height: 50px;
  }
  .recommendItem{
    height: 200px;
  }
</style>
