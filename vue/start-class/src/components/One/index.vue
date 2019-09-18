<template>
    <div>
        {{msg}}
        <HelloWorld
            msg="Welcome to Your vue.js"
            ref="HelloWorld"
            @fnCallback="fnCallback($event)"
        >
            匿名卡槽
            <template v-slot:default>
                <p>匿名插槽</p>
            </template>
            <template v-slot:content>
                <p>具名插槽</p>
            </template>
            <template v-slot:contents='{dongs}'>{{dongs}}</template>
        </HelloWorld>
        <HelloWorld2></HelloWorld2>
        <From></From>
    </div>
</template>
<script>
import HelloWorld from './HelloWorld'
import HelloWorld2 from './HelloWorld2'
import From from './Form'

export default {
    components: {
        HelloWorld,
        HelloWorld2,
        From
    },
    data() {
        return {
            msg:'hello'
        }
    },
    // 父向所有子孙组件传值
     provide() {
        return {
            dong:this.msg,
            fn:(data) =>{
                return this.msg = data
            }
        }
    },
    mounted(){
        // 引用访问
        this.$refs.HelloWorld.foo = '引用访问';
        // $children访问 
        // 注意： 不保证顺序，也不是响应式，不建议使用这个方法
        this.$children[0].foo = '$children'
    },
    methods: {
        fnCallback(data){
            alert(data)
        }
    }
}
</script>

v-model: 控制在子级，根据value和input进行控制
:sync： 控制在父级，例如：<Input :value="userman" @updata:value="username=$event" /> 根据value和updata进行控制