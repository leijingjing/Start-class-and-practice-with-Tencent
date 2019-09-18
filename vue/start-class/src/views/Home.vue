<template>
  <div class="home">
    <h1>home</h1>
    <!-- <p> <router-link to="/list">home/list</router-link> </p>
    <router-view></router-view> -->
    <!-- <comp></comp> -->
    <VuexText></VuexText>
  </div>
</template>

<script>
import VuexText from '../components/VuexTest'

export default {
  name: 'home',
  components:{
    VuexText
  }
}
</script>

