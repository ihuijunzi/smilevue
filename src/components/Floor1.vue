<template>
  <div class="floor">

    <div class="floor-anomaly">
      <div class="floor-one">
        <img :src="floor1[0].image" width="100%"/>
      </div>
      <div>
        <div class="floor-two">
          <img :src="floor1[2].image" width="100%"/>
        </div>
        <div>
          <img :src="floor1[3].image" width="100%"/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {getAxios} from '../public/getAxios'

  export default {
    name: 'Floor1',
    data(){
      return{
        floor1:[{},{},{},{}],
      }
    },
    created(){
      this.getFloor1();
    },
    methods:{
      async getFloor1 (){
        let resFloor1 = await getAxios("get", "/get_floor1");
        console.log(resFloor1);
        this.floor1 = [];
        this.floor1.push(...resFloor1);
      }
    }
  }
</script>

<style scoped>
  .floor-anomaly{
    display: flex;
    flex-direction:row;
    background-color: #fff;
    border-bottom:1px solid #ddd;
  }
  .floor-anomaly div{
    width:10rem;

    box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
  .floor-one{
    border-right:1px solid #ddd;

  }
  .floor-two{
    border-bottom:1px solid #ddd;
  }
</style>
