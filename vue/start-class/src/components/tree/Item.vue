<template>
  <li >
        {{model.title}}
        <span @click="toggle" v-if="isFolder">{{open ? '-' : '+'}}</span>
        <ul v-show="open" v-if="isFolder">
            <Item class="Item"  v-for="model in model.children" :model="model" :key="model.title"></Item>
        </ul>
  </li>
</template>
<script>
export default {
    name:'Item',
    props:{
        model:Object
    },
    data(){
        return {
            open:false
        }
    },
    computed:{ // 计算属性
        isFolder(){
            return this.model.children && this.model.children.length
        }
    },
    // 渲染
    mounted(){},
    // 事件
    methods:{
        toggle(){
            if(this.isFolder) {
                this.open = !this.open;
            }
        }
    }
}
</script>