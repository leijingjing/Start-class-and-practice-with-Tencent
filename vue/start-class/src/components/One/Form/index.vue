<template>
  <div>
    <KForm :model="model" :rules="rules" ref="loginForm">
      <KFormItem label="用户名" prop="usernme">
        <KInput v-model="model.usernme"></KInput>
      </KFormItem>
      <KFormItem label="用户密码" prop="password">
        <KInput v-model="model.password" type="password"></KInput>
      </KFormItem>
      <KFormItem>
        <button @click="login">登录</button>
      </KFormItem>
      {{model}}
    </KForm>
  </div>
</template>
<script>
import KInput from "./KInput";
import KFormItem from "./KFormItem";
import KForm from "./KForm";
import Notice from "../../Notice";
import Create from "../../../utils/create";
export default {
  components: {
    KInput,
    KFormItem,
    KForm
    // Notice,
    // Create
  },
  data() {
    return {
      model: {
        usernme: "",
        password: ""
      },
      rules: {
        usernme: [
          {
            required: true,
            // pattern:/^1(3|4|5|6|7|8|9)\d{9}$/, // 正则效验
            message: "手机号码输入有误"
          }
        ],
        password: [
          {
            required: true,
            message: "用户密码必填"
          }
        ]
      }
    };
  },
  methods: {
    login() {
      this.$refs.loginForm.validate(isvalid => {
        if (isvalid) {
          Create(Notice, {
            title: "标题",
            message: "内容",
            duration: 10000
          }).show();
        } else {
          alert("用户输入有误");
        }
      });
    }
  }
};
</script>
