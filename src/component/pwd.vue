<template>
	<div class="main">
		<v-header></v-header>
		<div class="find_cont">
			<p class="clear">
				<span class="l">手机号码:</span>
				<input  class="r" placeholder="请输入您的手机号码"/>
			</p>
			<button>下一步</button>
		</div>
	</div>
</template>

<script>
	import PwdHeader from "../header/pwd_header.vue";
	export default {
		data(){
			return{
				
			}
		},
		components:{
			"v-header":PwdHeader
		}
	}
</script>

<style>
	.find_cont{
		width:100%;
	}
	.find_cont p{
		height:.8rem;
		padding-left: .2rem;
		margin:.3rem 0;
		background:#fff;
		border-bottom:1px solid #ddd;
		border-top:1px solid #ddd;
		font:.3rem/.8rem "微软雅黑";
		
	}
	.find_cont p input{
		display:block;
		width:4.7rem;
		height:.8rem;
		outline:none;
		font:.3rem/.8rem "微软雅黑";
	}
	.find_cont button{
		height:.8rem;
		text-align:center;
		color:#fff;
		margin:0 .2rem;
		width:6rem;
		background:#f00;
		outline:none;
		border-radius: .1rem;
		font:.3rem/.8rem "微软雅黑";
	}
</style>