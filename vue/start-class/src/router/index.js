import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import List from '@/views/List.vue'
import Detail from '@/views/Detail.vue'

//@/components/icon.vue

Vue.use(Router)
 const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
      name:'home',
      // redirect:'/list',
      children:[
        {
          path:'/list',name:'list',component:List
        },
        {
          path:'/detail/:id',component:Detail
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      meta:{
        auth:true // 需要认证
      },
      // beforeEnter(to,from,next){}, 路由独享守卫
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    }
  ]
});

//全局守卫
//to：到哪里去, from:从哪里来， next：下一个
router.beforeEach((to,from,next) => {
  if (to.meta.auth && !window.isLogin) {
    if (window.confirm('请登录')) {
      window.isLogin = true
      next(); // 登录成功
    } else {
      next('/') // 放弃回首页
    }
  } else {
    next(); // 不需要登录，继续
  }
}) 

// 路由独享守卫 beforeEnter(to,from,next){}
// 组件守卫 beforeRouteEnter (to, from, next) {}

export default router;
/** 动态获取路由，权限管理
 
//异步获取路由
api.getRoutes().then(routes => {
  const routeConfig = routes.map(route => mapComponent(route));
  router.addRoutes(routeConfig)
})

// 映射关系
const compMap = {
  'Home':() => import('./views/Home.vue')
}

// 递归替换
function mapComponent(route){
  route.component = compMap[route.component];
  if (route.children) {
    route.children = route.children.map(child => mapComponent(child))
  }
  return route
}

**/