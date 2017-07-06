<template>
  <div>
	    <m-tabbar v-model="selected">
	      <m-tabbar-item id='service' isRouter>
	        <img src="../img/service.png" alt="" slot="icon-normal"> 
	        <img src="../img/sel_service.png" alt="" slot="icon-active"> 
	       	在线服务
	      </m-tabbar-item>
	      <m-tabbar-item id='classify' isRouter>
	        <img src="../img/classify.png" alt="" slot="icon-normal"> 
	        <img src="../img/sel_classify.png" alt="" slot="icon-active"> 
	       	商品分类
	      </m-tabbar-item>
	      <m-tabbar-item id='index' isRouter>
	        <img src="../img/home.png" alt="" slot="icon-normal"> 
	        <img src="../img/sel_home.png" alt="" slot="icon-active"> 
			商城首页
	      </m-tabbar-item>
	      <m-tabbar-item id='cart' isRouter>
	        <img src="../img/cart.png" alt="" slot="icon-normal"> 
	        <img src="../img/sel_cart.png" alt="" slot="icon-active"> 
			&nbsp;购物车
	      </m-tabbar-item>
	       <m-tabbar-item id='vip' isRouter>
	        <img src="../img/vip.png" alt="" slot="icon-normal"> 
	        <img src="../img/sel_vip.png" alt="" slot="icon-active"> 
			会员中心
	      </m-tabbar-item>
	    </m-tabbar>
  </div>
</template>

<script>
	import mTabbar from './tabbar.vue'
	import mTabbarItem from './tabbar-item.vue'
	export default {
		components: {
		  	mTabbar,
		 	mTabbarItem
		},
		data() {
		  return{
		    selected:"index"
		    }
		}
	}
</script>

<style>
    
 
</style>
