<template>
    <div>
        <!-- 自定义组件要实现v-model -->
        <label>
             <!-- $attr存储的是props之外的东西 -->
             <input :value="value" @input="onInput" v-bind="$attrs">
        </label>
    </div>
</template>
<script>
export default {
    inheritAttrs:false, // 避免顶层的容器继承里面的属性
    props: {
        value: {
            type:String,
            default:''
        }
    },
    methods: {
        onInput(e){
            // 通知父组件的变化
            this.$emit('input',e.target.value)
            // 通知FormItem进行效验
            this.$parent.$emit('validate')
        }
    }
}
</script>
