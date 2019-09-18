import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // 储存数据
    count:0
  },
  mutations: { // 唯一可以更改state数据的地方
    // 接受state值，num接收事件传参
    add(state,num = 1){
      state.count += num;
    },
    mapstate(state,num = 1){
      console.log(state)
      state.count += num;
    },
  },
  getters:{ // 计算属性
    score(state) {
      return state.count
    }
  },
  actions: { 
    // 复杂逻辑
    // ajax请求等
    asyncAdd({commit},num){
      // 方法一：
      // setTimeout(() => {
      //   commit('add',num)
      // },1000)

      // 通知外围请求成功
      return new Promise(resolve => {
        setTimeout(() => {
          commit('add',num)
          resolve({ok:1})
        },1000)
      })
     
    }
   
  }
})
