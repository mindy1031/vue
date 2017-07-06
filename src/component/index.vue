<template>
	<div class="main">
		<v-header></v-header>
		<v-swipes></v-swipes>
		<nav>
			<div class="search clear">
				<img src="../img/search.png" class="l"/>
				<input type="text" placeholder="请输入商品关键字进行搜索" class="l"/>
			</div>
			<ul class="ind_nav">
				<li>
					<img src="../img/flower01.png"/>
					<span>桌面小盆栽</span>
				</li>
				<li>
					<img src="../img/flower02.png"/>
					<span>中大型绿植</span>
				</li>
				<li>
					<img src="../img/flower03.png"/>
					<span>鲜花套餐</span>
				</li>
				<li>
					<img src="../img/flower04.png"/>
					<span>精品花束</span>
				</li>
				<li>
					<img src="../img/flower05.png"/>
					<span>多肉植物</span>
				</li>
				<li>
					<img src="../img/flower06.png"/>
					<span>资材周边</span>
				</li>
				<li>
					<img src="../img/flower07.png"/>
					<span>特价专区</span>
				</li>
				<li>
					<img src="../img/flower08.png"/>
					<span>租摆服务</span>
				</li>
			</ul>
		</nav>
		<div class="list">
			<ul class="clear">
				<li>
					<div class="img">
						<img src="../img/img01.png"/>
					</div>
					<div class="font">
						<b class="title">红粉之恋</b>
						<span class="content">红玫瑰21朵</span>
						<span class="price">￥148.00</span>
					</div>
				</li>
				<li>
					<div class="img">
						<img src="../img/img02.png"/>
					</div>
					<div class="font">
						<b class="title">红粉之恋</b>
						<span class="content">红玫瑰21朵</span>
						<span class="price">￥148.00</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import HomeHeader from "../header/index_header.vue";
	import Swipes from "./swipes.vue";
	export default {
	  	data () {
		    return {
		      	
		    }
	  	},
	  	components:{
		  	"v-header":HomeHeader,
		  	"v-swipes":Swipes,
	  	}
	}
</script>

<style scoped>
	nav .search{
		margin:.4rem .3rem;
		background:#d9d9d9;
		height:.68rem;
		border-radius:.1rem;
	}
	nav .search img{
		width:.38rem;
		height:.38rem;
		margin:.15rem;
		
	}
	nav .search input{
		width:88%;
		height:100%;
		outline: none;
		background:none;
		font:.26rem/.68rem "微软雅黑";
	}
	.ind_nav{
		display:flex;
		flex-wrap:wrap;
		justify-content:space-around;
		border-bottom: 1px solid #ddd;
	}
	.ind_nav li{
		width:1.4rem;
		height:1.7rem;
		display:flex;
		flex-direction:column;
		align-items:center;
	}
	.ind_nav li img{
		width:.9rem;
		height:.9rem;
		margin-bottom:.18rem;
	}
	.ind_nav li span{
		font:.22rem "微软雅黑";
	}
	.list{
		padding: .25rem 0;
		background:#f5f5f5;
	}
	.list ul{
		padding-left:.25rem;
	}
	.list ul li{
		float:left;
		width:2.8rem;
		height: 4rem;
		margin:0 .2rem .2rem 0;
		border:1px solid #ddd;
		background:#fff;
	}
	.list ul li .img{
		width:2.8rem;
		height: 3rem;
	}
	.list ul li .img img{
		width:80%;
		height:80%;
		margin:10% 10%;
	}
	.list ul li .font{
		padding-left:.1rem;
	}
	.list ul li .font .title{
		font:700 .24rem/.28rem "微软雅黑";
		display:block;
		color:#000;
	}
	.list ul li .font .content{
		font:.22rem/.38rem "微软雅黑";
		display:block;
		color:#000;
	}
	.list ul li .font .price{
		font:.22rem/.28rem "微软雅黑";
		display:block;
		color:#f00;
	}
</style>