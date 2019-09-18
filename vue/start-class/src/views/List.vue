<template>
  <div class="list">
    list
    <ul>
        <li><router-link to="/detail/1">detail</router-link></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'list',
  data(){
    return {
      // crumbData:[]
    }
  },
   mounted(){
     // 面包屑
     // 
    // this.crumbData = this.$route.matched.map(m => m.name)
  }
}
</script>
