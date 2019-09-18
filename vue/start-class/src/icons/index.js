// 图片自动导入
// 利用webpack的require.context自动导入

import Vue from 'vue';
import Icon from '@/components/icon.vue';

// 返回的req是只去加载svg目录中的模块的函数，不要继续往下递归，匹配规则
const req = require.context('./svg',false,/\.svg$/)

//遍历后执行N此req
req.keys().map(req);

// Icon组件全局注册
Vue.component('Icon',Icon);

