<template>
    <div>
        <p>state:{{$store.state.count}}</p>
        <p>score:{{$store.getters.score}}</p>
        <p>mapState:{{count}}</p>
        <button @click="add(2)">add</button>
        <button @click="asyncAdd(2)">asyncAdd</button>
        <button @click="mapstate()">mapstate</button>
    </div>
</template>
<script>
// map映射
import { mapState, mapMutations} from 'vuex'
export default {
    computed:{
        ...mapState(['count']),
        ...mapMutations(['mapstate'])
    },
    methods:{
        add(num){
            this.$store.commit('add',num)
        },
         // 方法一：
        // asyncAdd(num){
        //     this.$store.dispatch('asyncAdd',num)
        // },
        async asyncAdd(num){
            // dispatch:异步
            const resulte =  await this.$store.dispatch('asyncAdd',num)
            if (resulte.ok === 1) {
                alert('操作成功,路由跳转')
            }
        }
    }
}
</script>