<template>
	<div class="main">
		<v-header></v-header>
		<div class="chat">
			
		</div>
		<div class="chat_tool">
		
		</div>
	</div>
</template>

<script>
	import ServiceHeader from "../header/service_header.vue";
	export default{
		data(){
			return{
				
			}
		},
		components:{
			"v-header":ServiceHeader
		}
	}
	
</script>

<style>
	.chat{
		
	}
</style>