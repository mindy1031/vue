<template>
  <div id="app">
  	<!-- 自定义视图引入方式  -->
  	<router-view></router-view>
  	<v-footer></v-footer>
  </div>
</template>

<script>
	import Footer from "./component/footer.vue"
	
export default {
  name: 'app',
  data(){
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
  	"v-footer":Footer
  }
}
</script>

<style>
#app{
	overflow:hidden;
}
</style>
