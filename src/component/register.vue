<template>
	<div class="main">
		<v-header></v-header>
		<div class="reg_cont">
			<ul class="list">
				<li class="clear">
					<span class="l">手机号码:</span>
					<input  class="r" placeholder="请输入您的手机号码" v-model="username"/>
				</li>
				<li class="clear">
					<span class="l">登录密码:</span>
					<input type="password" class="r" placeholder="请输入您的登录密码" v-model="password"/>
				</li>
				<li class="clear">
					<span class="l">确认密码:</span>
					<input type="password" class="r" placeholder="请您再次输入密码" v-model="password2"/>
				</li>
			</ul>
			<button @click="regCheck">注册</button>
		</div>
	</div>
</template>

<script>
	import RegisterHeader from "../header/register_header.vue";
	import { Toast } from 'mint-ui';
	export default {
		data(){
			return{
				username:"",
				password:"",
				password2:""
			}
		},
		components:{
			"v-header":RegisterHeader
		},
		methods:{
			regCheck(){
				var that=this;
				if(this.password==this.password2){
					console.log(2222222)
				}
				else{
					Toast("密码不一致");
				}
//				$.ajax({
//					url:"",
//					async:true
//				});
			}
		}
	}
</script>

<style>
	.reg_cont{
		width:100%;
	}
	.list{
		margin:.3rem 0;
		border-top: 1px solid #ddd;
		border-bottom: 1px solid #ddd;
		padding-left:.2rem;
		background:#fff;
	}
	.list li{
		height:.8rem;
		font:.28rem/.8rem "微软雅黑";
		border-bottom: 1px solid #ddd;
	}
	.list li input{
		display:block;
		width:4.7rem;
		height:.8rem;
		outline:none;
		font:.28rem/.8rem "微软雅黑";
	}
	.list li:last-child{
		border-bottom:0;
	}
	.reg_cont button{
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