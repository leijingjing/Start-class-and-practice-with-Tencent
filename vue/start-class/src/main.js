import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'
// import router from './krouter' // 路由源码
import './icons';

Vue.config.productionTip = false

// <div id="box" class="foo"><span>aaa</span></div>

// 全局组件
Vue.component('comp',{
  render(h) {
    // webpack配置了balbel loader
    return <div id="box" class="foo"><span>aaa</span></div>
  }
})

// 插件：只要有install方法就可以通过Vue.use注册


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

// Vuex数据管理:
// Vuex是一个专门为vue.js应用开发的状态管理模式，集中式储存管理应用所有组件的状态
// Vuex遵循“单向数据流”理念，易于问题追踪以及提高代码可维护性
// Vuex多个视图依赖于同一个状态时，视图间传参喝状态同步比较困难，Vuex能够很好的解决该问题

