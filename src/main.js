import Vue from 'vue';
import App from './App.vue';

import VueResource from "vue-resource";
import VueRouter from "vue-router";
import VueX from "vuex";
import MintUI from "mint-ui";
import 'mint-ui/lib/style.css';


//使用Vue.use（）方法注册
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(MintUI);
Vue.use(VueX);


//1.定义模板
import Index from "./component/index.vue";
import Cart from "./component/cart.vue";
import Classify from "./component/classify.vue";
import Service from "./component/service.vue";
import Vip from "./component/vip.vue";
import Login from "./component/login.vue";
import Register from "./component/register.vue";
import Pwd from "./component/pwd.vue";

import { Header } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//2.配置路由
let routes=[
	{path:"/index",component:Index},
	{path:"/cart",component:Cart},
	{path:"/classify",component:Classify},
	{path:"/service",component:Service},
	{path:"/vip",component:Vip},
	{path:"/vip/login",component:Login},
	{path:"/vip/login/register",component:Register},
	{path:"/vip/login/pwd",component:Pwd},
	{path:"*",redirect:"/index"}
]

//3.获取路由实例
let router=new VueRouter({
	routes
})

//4.挂载路由并执行

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
