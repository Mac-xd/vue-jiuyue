<template>
  <div class="home">
     <van-button type="primary">主要按钮</van-button>
        <van-button type="info">信息按钮</van-button>
        
       <comA :arr="arr" a="10" b="20" c="30"></comA>
  
     
  
  </div>
</template>

<script>

import comA from './aa';
export default {
  name: 'home',
  components:{comA},
     data() {
       return {
         arr:[1,2,3],
       }
     }
}
</script>
<style lang="less">
  .home{
    width: 100%;
    height: 100vh;
    background: #ccc;
    border: 1px solid red;
  }
</style>