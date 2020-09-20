<template>
  <div class="about">
    <!-- <div v-sp-dqx="color" v-zimo-ui="kg"  class="blog"></div> -->
    <div class="ww"></div>
    <div>{{ num | zimogod | mine }}</div>
    <div>{{ now | formate('/') }}</div>s
    <div v-green>{{ arr | ab }}</div>
    <div v-zsfNb="'blue'">{{ arr }}</div>
    <div v-zsfNb="'red'">{{ now | formateDate('-') }}</div>
    <div v-change="num">{{ num }}</div>

    <div v-red="color">今天天气怎么样</div>
    <div v-red="aa">晴天</div>

    <div v-size="bb" class="bb">转多云</div>

    
    <div v-chan="cc" class="cc">33</div>
    
  </div>
</template>

<script>
//import small from './bb.js';
export default {
  name: "about",
  // components:{'defineds':small},

  filters: {
    // 格式化时间 戳
    formateDate(v, a) {
      let years = v.getFullYear();
      let month = v.getMonth() + 1;
      let day = v.getDate();
      return `${years}${a}${month}${a}${day}`;
    },
    zimogod(value) {
      // toFixed：取小数
      let val = value.toFixed(2);
      return `￥${val}`;
    },
    mine(v) {
      return v + "：都是我的";
    },

    // name(n){
    //   return n +  2222 ;
    // },

    ab(value) {
      let ac = value.join(".");
      return ac;
    },
  },

  directives: {
    zsfNb(el, binding) {
      el.style.backgroundColor = binding.value;
    },
    change(el, binding) {
      el.style.width = binding.value + "px";
      el.style.height = binding.value + "px";
      el.style.backgroundColor = "green";
    },

    chan(el){
      el.style.width = "300px";
      el.style.height = "150px";
     
    },

    size(el, binding) {
      el.style.fontSize = binding.value + "px";
    },



    green(el) {
      el.style.backgroundColor = "#afc";
    },
    red(el, binding) {
      el.style.backgroundColor = binding.value;
    },
    reds(el, binding) {
      el.style.backgroundColor = binding.value;
    },
  },

  data() {
    return {
      now: new Date(),
      num: 50,
      script: "张三丰",
      arr: [1, 2, 3, 4],
      arr1: [89, 1],
      color: "pink",
      aa: "green",
      bb: 20,
      cc:50
    };
  },
  mounted() {
    // console.log(this)
    this.$destroy();
  },
};
</script>
<style lang="less">
.about {
  width: 100%;
  height: 100vh;
  background: #ccc;
  .ww {
    width: 100px;
    height: 100px;
    background: red;
  }
  .bb {
    width: 150px;
    height: 150px;
    background: gold;
  }
  .cc {
    width: 200px;
    height: 200px;
 background: red;
  }
}
</style>
