<template>
	<header class="header_three">
		<div class="phone">
			<img src="../img/phone.png"/>
			<span>4000606544</span>
		</div>
		<router-link to="/index">
			<img src="../img/close.png"/>
		</router-link>
	</header>
</template>

<script>
</script>

<style scoped>
	.phone{
		width:50%;
		display:flex;
		justify-content:flex-start;
	}
	.phone span{
		font-size:.32rem;
		font-family: "微软雅黑";
		margin-left: -0.15rem;
		
	}
</style>