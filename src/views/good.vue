<template>
  <div class="good">

      <!-- 懒加载轮播图 -->
    <div class="loop"> 
     <van-swipe :autoplay="3000">
  <van-swipe-item v-for="(image, index) in images" :key="index">

    <img v-lazy="image.img" />
  </van-swipe-item>
</van-swipe>
    
    
    
</div>


  </div>


</template>
<script>
 import { listObj } from '../server';
  export default {
      name:'good',
      data(){
          return{
             images: [
        
      ],
          }
      },

       methods:{
     //获取轮播图接口
      getNewsLoop(){
        listObj.getLoopNews().then(res=>{
         // 打印接口的数据 console.log(res)
          this.images = res.message;
        })
      }
   },
  
  mounted(){
      this.getNewsLoop();
  } 

  }

</script>
<style lang="less">
   .good{
       width: 100%;
       height: 100vh;
       background: #ccc;
       .loop{
           width: 100%;
           height: 200px;
       }
   }
</style>