<template>
	<div class="banner">
		<mt-swipe :auto="4000" class="banner" v-for="item in arr">
			  <mt-swipe-item><img v-lazy="item"/></mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				arr:[]
			}
		},
		beforeCreate(){
			var that=this;
			$.ajax({
				url:"http://datainfo.duapp.com/shopdata/getBanner.php",
				dataType:"jsonp",
				success:function(res){
					that.arr.push(JSON.parse(res[0].goodsBenUrl));
					console.log(that.arr);
				}
			});
		}
	}
</script>

<style>
	.banner{
		width:100%;
		height:3.4rem;
	}
	.banner img{
		height:3.4rem;
		width:100%;
	}
</style>