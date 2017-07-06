<template>
	<div class="main">
		<v-header></v-header>
		<div class="msg">
			
		</div>
		<div class="status">
			<p>
				<span class="num">0</span>
				<span>待付款</span>
			</p>
			<p>
				<span class="num">0</span>
				<span>待发货</span>
			</p>
			<p>
				<span class="num">0</span>
				<span>待收货</span>
			</p>
			<p>
				<span class="num">0</span>
				<span>待评价</span>
			</p>
		</div>
		<ul class="list">
			<li class="clear">
				<i class="img_msg l"></i>
				<span>会员资料</span>
				<b class="next r"></b>
			</li>
			<li class="clear">
				<i class="img_msg l"></i>
				<span>头像修改</span>
				<b class="next r"></b>
			</li>
			<li class="clear">
				<i class="img_msg l"></i>
				<span>密码修改</span>
				<b class="next r"></b>
			</li>
		</ul>
		<ul class="list">
			<li class="clear">
				<i class="img_msg l"></i>
				<span>我的订单</span>
				<b class="next r"></b>
			</li>
			<li class="clear">
				<i class="img_msg l"></i>
				<span>收货地址</span>
				<b class="next r"></b>
			</li>
			<li class="clear">
				<i class="img_msg l"></i>
				<span>我的优惠劵</span>
				<b class="next r"></b>
			</li>
		</ul>
		<ul class="list">
			<li class="clear">
				<i class="img_msg l"></i>
				<span>养护知识</span>
				<b class="next r"></b>
			</li>
		</ul>
		<ul class="list">
			<li class="clear">
				<i class="img_msg l"></i>
				<span>关于</span>
				<b class="next r"></b>
			</li>
		</ul>
		<ul class="list">
			<li class="clear">
				<i class="img_msg l"></i>
				<span>退出</span>
				<b class="next r"></b>
			</li>
		</ul>
	</div>
</template>

<script>
	import VipHeader from "../header/vip_header.vue";
	export default{
		data(){
			return{
				
			}
		},
		components:{
			"v-header":VipHeader
		}
	}
</script>

<style>
	.msg{
		height:3.2rem;
		background:url(../img/f3.jpg)no-repeat;
	}
	.status{
		background: #fff;
		display: flex;
		justify-content: space-around;
		font:.28rem/.36rem "微软雅黑";
		height:1rem;
		align-items: center;
		border-bottom: 1px solid #ddd;
	}
	.status p{
		display:flex;
		flex-direction:column ;
		text-align:center;
	}
	.list{
		margin-top:.2rem;
		border-top: 1px solid #ddd;
		border-bottom: 1px solid #ddd;
		padding-left:.2rem;
		background:#fff;
	}
	.list li{
		height:.8rem;
		font:.3rem/.8rem "微软雅黑";
		border-bottom: 1px solid #ddd;
	}
	.list li:last-child{
		border-bottom:0;
	}
	.list li .img_msg{
		display:block;
		width:.3rem;
		height:100%;
		background: url(../img/msg.png) no-repeat center;
		background-size:.3rem .4rem;
		margin-right:.15rem;
	}
	.list li .next{
		display:block;
		width:.3rem;
		height:100%;
		background: url(../img/n.png) no-repeat center;
		background-size:.3rem .3rem;
		margin-right:.3rem;
	}
	.list:last-child{
		margin-bottom: .3rem;
	}
</style>