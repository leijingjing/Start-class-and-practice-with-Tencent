<template>
  <div>
    <p>children -- {{dong}}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  // 子孙组件接收值
  inject: ["dong", "fn"],
  // 父向子传值--props传值
  props: {
    msg: String
  },
  data() {
    return {
      foo: "foo"
    };
  },
  mounted() {
    // 子孙向父组件传值
    this.fn("子孙向父组件传值");
  }
};
</script>