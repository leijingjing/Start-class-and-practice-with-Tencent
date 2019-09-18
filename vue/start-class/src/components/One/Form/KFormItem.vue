<template>
    <div>
        <label v-if="label">{{label}}</label>
         <slot></slot>
        <!-- 校验信息 -->
        <p v-if="errorMassage">{{errorMassage}}</p>
    </div>
</template>
<script>
import Schema  from 'async-validator';
export default {
    inject:['form'],
    props: {
        label: {
            type:String,
            default:''
        },
        prop:String
    },
    data(){
        return {
            errorMassage:''
        }
    },
    mounted(){
        // 监听校验事件，并执行监听
        this.$on('validate',() => {
            this.validate();
        })
    },
    methods: {
        // 执行组件校验
        validate(){
            // 获取验证规则
            const rules = this.form.rules[this.prop];

            //  获取数据
            const value =  this.form.model[this.prop];
            
            // 执行校验
            const desc = {
                // 创建一个校验规则
                [this.prop]:rules
            }
            // 传入校验规则
            const schema = new Schema(desc);

            // 参数一：值， 参数二：效验错误
            return schema.validate({
                [this.prop]:value
            },error => {
                // 错误信息
                if (error) {
                    this.errorMassage = error[0].message
                } else {
                    this.errorMassage = '';
                }
            })
        }
    }
}
</script>