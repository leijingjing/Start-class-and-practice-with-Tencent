<template>
  <svg :class="svgClass" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: "svgIcon",
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: String
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    },
    svgClass() {
        if (this.className) {
            return `svg-icon ${this.className}`;
        } else {
            return 'svg-icon'
        }
    }
  }
};
</script>

<style scoped>
    .svg-icon {
        width:20px;
        height: 20px;
        vertical-align: center;
        /* 图标颜色 */
        fill:currentColor; 
        overflow: hidden;
    }
</style>