let Vue;

class VueRouter{
    constructor(options){
        this.$options = options;
        this.routeMap = {};
        this.app = new Vue({
            data:{
                current:'/'
            }
        })
    }
    init() {
        // 绑定浏览器时间
        this.bindEvents();
        this.createRouteMap(this.$options);
        // 创建router-link和router-view
        this.initComponent();
    }
    bindEvents(){
        window.addEventListener('hashchange',this.onHashchange.bind(this));
        window.addEventListener('load',this.onHashchange.bind(this))
    }
    onHashchange(e){
        // 当前路径
        this.app.current = window.location.hash.slice(1) || '/'
    }
    createRouteMap(options){
        options.routes.forEach(item => {
            this.routeMap[item.path] = item;
        })
    }

    initComponent(){
        // 声明两个全局组件
        Vue.component('router-link',{
            props:{
                to:String
            },
            render(h){
                return h('a', {attrs:{href:'#' + this.to}}, this.$slots.default)
            }
        });
        Vue.component('router-view', {
            render: (h) => {
                const Comp = this.routeMap[this.app.current].component
                return h(Comp);
            }
        })

    }
    
}
// 把VueRouter变为插件
// 使用install时候就为插件
VueRouter.install = function(_Vue) {
    Vue = _Vue

   // 混入任务：混入就是扩展
   Vue.mixin({
       beforeCreate() {
           // 这里的代码将来会在外面初始化的时候被调用
           // 实现扩展
           if(this.$options.router) { // 根组件执行
              Vue.prototype.$router = this.$options.router;
              this.$options.router.init();
           }
       }
   })
}

export default VueRouter;
