<template>
    <div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    provide(){
        return {
            form:this // 传递form实例给子孙
        }
    },
    props: {
        model: {
            type:Object,
            required:true
        },
        rules:Object,

    },
    methods: {
        validate(cb){
            // 所有任务必须全部通过才算效验通过
           const tasks = this.$children
            .filter(item => item.prop)
            .map(item => item.validate());
           Promise.all(tasks)
            .then(() => cb(true))
            .catch(() => cb(false))
        }
    }
}
</script>
