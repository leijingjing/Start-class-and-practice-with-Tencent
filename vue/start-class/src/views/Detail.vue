<template>
  <div class="detail">
    detail
    <p>id:{{$route.params.id}}</p>
    
  </div>
</template>

<script>
export default {
  name:'Detail',
  data(){
    return {
      crumbData:[]
    }
  },
  watch:{
    // 面包屑：利用$route.matched得到路由匹配数组，按顺序解析得到路由的层级关系
    $router:{
      handler(router) {
        this.crumbData = this.$route.matched.map(m => m.name || m.redirect)
      },
      immediate:true // 一开始就执行
    }
  }

}
</script>
