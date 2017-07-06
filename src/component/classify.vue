<template>
	<div class="main">
		<v-header></v-header>
		<div class="search_box">
			<div class="class_search clear">
				<input type="text" class="l text"/>
				<button class="r btn">搜索</button>
			</div>
		</div>
		
		<div class="menu clear">
			<ul class="menu_left l">
				<li v-for="(item,$index) in arr">{{item}}</li>
			</ul>
			<ul class="menu_right l">
				<li>
					<div class="class_name">
						<h3>花盆材质</h3>
						<div class="class_img">
							<p>
								<img src="../img/pen01.png"/>
								<span>陶瓷</span>
							</p>
							<p>
								<img src="../img/pen02.png"/>
								<span>玻璃</span>
							</p>
							<p>
								<img src="../img/pen03.png"/>
								<span>塑料</span>
							</p>
							<p>
								<img src="../img/pen04.png"/>
								<span>其他</span>
							</p>
						</div>
					</div>
					<div class="class_name">
						<h3>尺寸分类</h3>
						<div class="class_img">
							<p>
								<img src="../img/pen05.png"/>
								<span>小型</span>
							</p>
							<p>
								<img src="../img/pen06.png"/>
								<span>中型</span>
							</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import ClassifyHeader from "../header/classify_header.vue";
	export default{
		data(){
			return{
				arr:["桌面小盆栽","中大型绿植","鲜花套餐","精品花束","多肉植物","资材周边"],
			}
		},
		components:{
			"v-header":ClassifyHeader
		}
	}
</script>

<style scoped>
	.main{
		overflow:hidden;
	}
	.search_box{
		background:#fff;
		padding:.2rem .15rem;
		height:.54rem;
		border-bottom:1px solid #ddd;
	}
	.class_search{
		border:1px solid #ddd;
		height:100%;
	}
	.class_search .text{
		width:4.9rem;
		height:100%;
		border-right:0;
		outline:none;
		text-indent:1em;
		font:.2rem/.54rem "微软雅黑";
	}
	.class_search .btn{
		width:1.15rem;
		height:100%;
		background:#ddd;
		outline:none;
		font:.3rem/.54rem "微软雅黑";
	}
	.menu_left{
		width:1.8rem;
		background:#efeff4;
	}
	.menu_left li{
		text-align:center;
		font:.3rem/1rem "微软雅黑";
		border-right:1px solid #ddd;
		border-bottom:1px solid #ddd;
	}
	.menu_left li.first{
		background: #fff;
		border-right:0;
	}
	.menu_right{
		background:#fff;
		width:4.6rem;
		height:8.4rem;
		padding-top: .2rem;
	}
	.menu_right .class_name{
		padding:0 .2rem;
	}
	.menu_right .class_name h3{
		font:700 .3rem/1rem "微软雅黑";
	}
	.menu_right .class_name .class_img{
		display:flex;
		flex-wrap:wrap;
	}
	.menu_right .class_name .class_img p{
		display:flex;
		width:1.4rem;
		height:2rem;
		flex-direction:column;
	}
	.menu_right .class_name .class_img p img{
		width:1rem;
		height:1.28rem;
		padding:0 .125rem;
	}
	.menu_right .class_name .class_img p span{
		width:1.25rem;	
		font:.24rem/.32rem "微软雅黑";
		text-align:center;
	}
</style>