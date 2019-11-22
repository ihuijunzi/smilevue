import Mock from 'mockjs'
Mock.mock(/\/api\/msdk\/proxy\/query_common_credit/, {
  ret:0,
  data:{
    'mtime':'@datetime',
    'score|1-750':750,
    'rank|1-100':100,
    'stars|1-5':5,
    'nickname':'@cname'
  }
});
