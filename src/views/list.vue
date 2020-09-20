<template>
  <div class="list">
    <div class="list-item" v-for="(item, index) in listdata" :key="index">
      <div class="item-name">
        <van-icon :name="item.icon" />
        <span>{{item.name}}</span>
      </div>
     

     <!-- 递归判断 -->
      <div v-if="item.children" class="children-item">
    
        <list :listdata="item.children"></list>
      </div>
    </div>
    
   
  </div>
</template>
<script>
export default {
  name: "list",
  props: ["listdata"],
};
</script>

<style lang="less">
.list {
  width: 100%;
  height: auto;
  background: gold;
  border: 1px solid red;
  .list-item {
    width: 100%;
    padding-left: 20px;

    .item-name {
      height: 40px;
     
    }
  }
}
</style>




