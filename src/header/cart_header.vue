<template>
	  <header class="header_three">
          <router-link to="/index" >
							<img class="m-icon-img" src="../img/back.png"/>
         </router-link>
          <h2>购物车</h2>
          <a href="javascript:;" class="header_more">
          	<img class="m-header-img" src="../img/more.png" />
          </a>
      </header>
</template>

<script>
	export default{
	   	props:{
	   		title:{
	   			type:String,
	   			default:''
	   		},
	   		bg:{
	   			type:Boolean,
	   			default:false
	   		},
	   		fixed:{
	   			type:Boolean,
	   			default:false
	   		}
	   	}
   	}
</script>

<style >
	
</style>