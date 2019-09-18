<template>
  <div class="hello">
    <p>HelloWorld2</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld2",

  props: { // props传值
    msg: String
  },
  data() {
    return {
      foo:'foo'
    }
  },
  created(){
    this.$parent.$on('fnParent',(data) => {
      alert(data)
    })
    
  }
};
</script>