// npm run eject 弹出webpack详细配置
// npm run serve 启服务
// https://cli.vuejs.org/zh/guide/webpack.html vue-cli相关webpack配置
// vue inspect 查看webpack配置中所有代码
// vue inspect --rule 查看rule
// vue inspect --rule vue 查看rule中的vue
const port = 7070;
const title = "vue项目实践"
const path = require('path');

// 将传入的相对路径转换为绝对路径
function resolve(dir) {
    //join是跨平台的
    //__dirname当前文件所在路径，dir传递进来的相对路径拼接成绝对路径
    return path.join(__dirname,dir)
}

module.exports = {
    publicPath:'/best-preactice', // 增加项目上下文
    devServer: { // 服务
        port
    },
    configureWebpack:{
        name:title
    },
    chainWebpack(config) {
        config.module.rule('svg') // 找到rule中的svg
            .exclude.add(resolve('src/icons')); // exclude排除，排除指定的目录
            // svg-sprite-loader svg的loader

        config.module.rule('icons') // 查找或者添加icons规则
            .test(/\.svg$/) // 设置test 
            .include.add(resolve('src/icons')) //include包含，加入icons目录
                .end() // add完上下文进入数组，使用end回退
            .use('svg-sprite-loader') // 添加loader
                .loader('svg-sprite-loader') // 切换上下文到loader
                .options({symbolId:'icon-[name]'}) // 指定项目名称
                .end()
    }
}