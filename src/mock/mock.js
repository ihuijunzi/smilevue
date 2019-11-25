import Mock from 'mockjs'
import data from "./data.json";
import URL from '@/public/serviceApi.config'


Mock.mock(URL.mockTest, {
  ret:0,
  data:{
    'mtime':'@datetime',
    'score|1-750':750,
    'rank|1-100':100,
    'stars|1-5':5,
    'nickname':'@cname',
    'img':'@image'
  }
});

Mock.mock(URL.getBanner,[
  {picUrl: '@image'},
  {picUrl: '@image'},
  {picUrl: '@image'}
]);

Mock.mock(URL.getRecommend, data.data.recommend);

Mock.mock(URL.getFloor1, data.data.floor1);

