import Mock from 'mockjs'
import data from "./data.json"


Mock.mock(/\/api\/msdk\/proxy\/query_common_credit/, {
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

Mock.mock('/get_banner',[
  {picUrl: '@image'},
  {picUrl: '@image'},
  {picUrl: '@image'}
]);

Mock.mock('/get_recommend', data.data.recommend);

Mock.mock('/get_floor1', data.data.floor1);

