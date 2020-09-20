<template>
  <div class="name">

    <div class="nav">
      <list :listdata="list"></list>
    </div>



  </div>
</template>
<script>
import List from "./list";
import { listObj } from "../server";
export default {
  name: "name",
  components: { List },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    // 获取导航数据
    getNavData() {
      listObj.getNav().then((res) => {
        // console.log(res)
        this.list = res;
      });
    },
  },
  mounted() {
    this.getNavData();
  },
};
</script>

<style lang="less">
.name {
  width: 100%;
  height: 100%;
  background: gold;
  border: 1px solid red;
}
</style>




