<template functional>
  <div class="aa">


   <div>{{props.a}}</div>
   <div>{{props.b}}</div>
   <div>{{props.c}}</div>

   <!-- <div v-for="(item,index) in props.arr" :key="index">{{ item }}</div> -->
    <div v-for="(item,index) in props.arr" :key="index">{{ item }}</div>
    <!-- <div v-for="(item,index) in arr" :key="index"></div> -->
  </div>
</template>


<script>
export default {
  name: "aa",
};
</script>

<style lang="less">
.aa {
  width: 100%;
  height: 100%;
}
</style>