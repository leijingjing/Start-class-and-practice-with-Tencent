<template>
  <div id="app">
      <!-- 全局icon
      <Icon iconClass="qq" class="myIcon"></Icon>
      <Icon iconClass="wx" class="myIcon"></Icon>  -->

      路由
     <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    
    
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
 .myIcon {
   color: red;
 }

</style>
