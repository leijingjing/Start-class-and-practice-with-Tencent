

import Vue from 'vue'
import VueRouter from './kvue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
// import List from './views/List.vue'
// import Detail from './views/Detail.vue'


// 插件注册
Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path: '/',
            component: Home,
            // children:[
            //   {
            //     path:'/list',name:'list',component:List
            //   },
            //   {
            //     path:'/detail/:id',component:Detail
            //   }
            // ]
        },
        {
            path:'/about',
            name:'about',
            component:About
        }
    ]
})



