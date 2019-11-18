<template>
    <div>
      <div class="searchBar">
        <van-row>
          <van-col span="3">icon</van-col>
          <van-col span="15"><input class="searchInput" type="text"></van-col>
          <van-col span="6"><van-button size="mini" class="searchBtn">搜索</van-button></van-col>
        </van-row>
      </div>
      <div class="swipeWrapper">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(item, idx) in swipePicsArr" :key="idx">
            <img :src="item.picUrl" width="100%">
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
</template>

<script>

  export default {
    name: 'ShoppingMall',
    data(){
      return {
        swipePicsArr:[
          {picUrl:"../assets/img/banner1.jpg"},
          {picUrl:"../assets/img/banner2.jpg"},
          {picUrl:"../assets/img/banner3.jpg"}
        ]
      }
    }
  }

</script>

<style lang="less" scoped>
  @searchBarH: 1.3rem;
  .searchBar{
    color: red;
    padding-top: 1rem;
    .searchInput{
      color: yellow;
      height: @searchBarH;
      width: calc(100% - 4px);
    }
  }
</style>
