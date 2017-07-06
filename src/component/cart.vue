<template>
	<div class="main">
		<v-header></v-header>
		<div class="cart_address">
			配送地区：<span>安徽省淮北市仁和小区</span>
		</div>
		<div class="cart_commodity">
			<ul class="flowers">
				<li>
					<i class="select l"></i>
					<img src="../img/img01.png" class="l"/>
					<div class="title l">
						<b>爱的誓言</b>
						<span>玫瑰18朵</span>
						<div class="count clear">
							<button class="min l">-</button>
							<input class="text l" value="1"/>
							<button class="add r">+</button>
						</div>
					</div>
					<p class="r">
						<span class="price">￥188.00</span>
						<span class="delete">删除</span>
					</p>
				</li>
			</ul>
			<!--<div class="cart_empty">
				<h3>购物车还是空的</h3>
				<button>去购物吧</button>
			</div>-->
		</div>
		<div class="clearing clear">
			<i class="all_select l"></i>
			<span>全选</span>
			<span>合计：</span>
			<span class="money">￥188.00</span>
			<button class="r">去结算&nbsp; </button>
		</div>
	</div>
</template>

<script>
	import CarHeader from "../header/cart_header.vue";
	export default{
		data(){
			return{
				
			}
		},
		components:{
			"v-header":CarHeader
		}
	}
</script>

<style scoped>
	.cart_address{
		width:100%;
		height:.7rem;
		background: #fff;
		font:.3rem/.7rem "微软雅黑";
		color:#000;
		padding:0 .15rem;
		border-bottom: 1px solid #ddd;
	}
	.flowers{
		margin-top:.25rem;
	}
	.flowers li{
		border-top:1px solid #ddd;
		height:2.5rem;
		background: #fff;
		padding:0 .3rem;
	}
	.flowers .select{
		height:100%;
		display:inline-block;
		width:.5rem;
		vertical-align:middle;
		background: url(../img/select.png) no-repeat center;
		background-size:.36rem .36rem;
	}
	.flowers img{
		margin:.3rem .4rem 0 .5rem;
		width:1.2rem;
		height:1.8rem;
	}
	.flowers .title{
		width:1.9rem;
	}
	.flowers .title b{
		display:block;
		font:600 .3rem/.6rem "微软雅黑";
		margin-top:.1rem;
	}
	.flowers .title span{
		display:block;
		font:.3rem "微软雅黑";
		margin-bottom:.15rem;
	}
	.flowers .title .count{
		border:1px solid #aaa;
	}
	.flowers .title .count button{
		width: .56rem;
		height: .56rem;
		font:.4rem /.56rem "微软雅黑";
		text-align:center;
		background:#eee;
	}
	.flowers .title .count button.min{
		border-right:1px solid #aaa;
	}
	.flowers .title .count button.add{
		border-left:1px solid #aaa;
	}
	.flowers .title .count .text{
		width:.74rem;
		height:.56rem;
		font:.3rem /.4rem "微软雅黑";
		text-align:center;
	}
	.flowers p span{
		display:block;
		text-align:right;
		font:.3rem /.8rem "微软雅黑";
		color:#f00;
	}
	.clearing{
		width: 100%;
		height:.86rem;
		border-top:1px solid #ddd;
		background: #fff;
		position:fixed;
		bottom:1rem;
		left: 0;
		padding-left:.2rem;
		font:.32rem/.86rem "微软雅黑";
	}
	.all_select{
		height:100%;
		display:inline-block;
		width:.5rem;
		vertical-align:middle;
		background: url(../img/select.png) no-repeat center;
		background-size:.36rem .36rem;
		font:.36rem/.86rem "微软雅黑";
	}
	.clearing span{
		color:#000;
		margin:0 .2rem 0 .12rem;
	}
	.clearing .money{
		color:#f00;
		margin-left:-0.3rem ;
	}
	.clearing button{
		display:block;
		width:1.9rem;
		height: 100%;
		text-align:center;
		background: #f00;
		color:#fff;
		margin:0;
		padding:0;
		font:.3rem/.86rem "微软雅黑";
	}
	.cart_empty{
		background: url(../img/cart02.png) no-repeat 2.3rem 2.2rem;
		background-size:1.5rem 1.6rem;
		width:100%;
		height:5rem;
		text-align:center;
		padding:3.9rem 0 0 0;
	}
	.cart_empty h3{
		font:.32rem /.6rem"微软雅黑";
	}
	.cart_empty button{
		margin-top:.2rem;
		border:1px solid #ccc;
		font:.28rem/.5rem "微软雅黑";
		padding:0 .2rem;
		border-radius:.1rem;
	}
</style>