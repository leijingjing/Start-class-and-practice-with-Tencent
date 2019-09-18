<template>
  <div class="hello">
    <p>{{msg}}</p>
    <p>{{foo}}</p>
    <!-- 子向父传值 -->
    <p @click="$emit('fnCallback',1)">$emit</p>
    <!-- 兄弟之间的传值 -->
    <p @click="$parent.$emit('fnParent',('parent'))">$parent</p>
    <Children></Children>
    <!-- 匿名插槽 -->
    <slot></slot>
    <!-- 具名插槽 -->
    <slot name="content"></slot>
      <!-- 作用域插槽 -->
    <slot name="contents" dongs="作用域插槽"></slot>
  </div>
</template>

<script>
import Children from "./Children";
export default {
  name: "HelloWorld",
  components: {
    Children
  },
  props: {
    // 父向子传值--props传值
    msg: String
  },
  data() {
    return {
      foo: "foo"
    };
  }
};
</script>