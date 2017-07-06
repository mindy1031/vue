<template>
	<div class="main">
		<v-header></v-header>
		<div class="login_cont">
			<ul class="list">
				<li class="clear">
					<span class="l">手机号码:</span>
					<input  class="r" placeholder="请输入您的手机号码" v-model="username"/>
				</li>
				<li class="clear">
					<span class="l">登录密码:</span>
					<input type="password" class="r" placeholder="请输入您的登录密码" v-model="password"/>
				</li>
			</ul>
			<button @click="loginCheck">立即登录</button>
			<p class="clear">
				<transition name="fade">
					<router-link to="/vip/login/register" class="l font">
						免费注册
					</router-link>
				</transition>
				<router-link to="/vip/login/pwd" class="r font">
					找回密码
				</router-link>
			</p>
			
			<div class="inline">
				<span class="other">其他方式登录</span>
			</div>
			<button class="wx">微信登录</button>
		</div>
	</div>
</template>

<script>
	import LoginHeader from "../header/login_header.vue";
	export default{
		data(){
			return{
				username:"",
				password:""
			}
		},
		components:{
			"v-header":LoginHeader
		},
		methods:{
			loginCheck(){
				var that=this;
				console.log(that.username,that.password)
				$.ajax({
					url:"http://datainfo.duapp.com/shopdata/userinfo.php",
					data:{
						status:"register",
						userID:that.username,
						password:that.password
					},
					success:function(res){
						console.log(res,this)
					}
				})
			}
		}
	}
</script>

<style scoped>
	.login_cont{
		width:100%;
	}
	.login_cont button{
		height:.8rem;
		text-align:center;
		color:#fff;
		margin:0 .2rem;
		width:6rem;
		background:#f00;
		outline:none;
		border-radius: .1rem;
		font:.28rem/.8rem "微软雅黑";
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
		font:.3rem/.8rem "微软雅黑";
	}
	.list li:last-child{
		border-bottom:0;
	}
	.login_cont p{
		margin:.5rem .3rem;
	}
	.login_cont p .font{
		font:.3rem/.5rem "微软雅黑";
	}
	.login_cont .inline{
		margin:.8rem .15rem;
		height:1px;	
		background:#bbb;	
		color:#999;
		position:relative;
	}
	.login_cont .inline .other{
		position:absolute;
		left:2rem;
		top:-.3rem;
		background: #efeff4;
		font: .3rem/.5rem "微软雅黑";
		padding:0 .15rem;
	}
	.login_cont .wx{
		background:#21ff21;
	}
	.fade-enter-active{
		animation: fadeIn .5s;
	}
	.fade-leave-active{
		animation: fadeOut .5s;
	}
	@keyframes fadeIn{
		0%{
			transform: translateX(100%);
		}
		100%{
			transform: translateX(0);
		}
	}
	@keyframes fadeOut{
		0%{
			transform: translateX(0);
		}
		100%{
			transform: translateX(100%);
		}
	}
</style>