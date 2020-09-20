import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'


import { 
  Icon,
  Button,
  Swipe,
  SwipeItem,
  Lazyload,
  
} from 'vant';


Vue.use(Button);
Vue.use(Icon);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);

Vue.config.productionTip = false


// 全局过滤器
Vue.filter('formate',(v,str) => {
  let years = v.getFullYear();
      let month = v.getMonth() +1;
      let day = v.getDate();
  
      return `${years}${str}${month}${str}${day}`;
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
