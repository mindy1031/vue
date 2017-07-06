<template>
    <a class="m-tabbar-item" :class="{'is-active':isActive}" @click="goToRouter">
        <span class="m-tabbar-item-icon" v-show="!isActive"><slot name="icon-normal"></slot></span>
        <span class="m-tabbar-item-icon" v-show="isActive"><slot name="icon-active"></slot></span>
        <span class="m-tabbar-item-text"><slot></slot></span>
    </a>
</template>
<script>
    export default{
        props:{
        	id:{
        		type:String
        	},
        	isRouter:{
        		type:Boolean,
        		default:false
        	}
        },
        computed:{
           isActive(){
               if(this.$parent.value===this.id){
                   return true;
               }
           }
        },
        methods:{
        	goToRouter(){
        		this.$parent.$emit('input',this.id)
        		if(this.isRouter){
        			this.$router.push(this.id);//和<router-link to=""></router-link>一个意思
        		}
        	}
        }
    }
</script>
<style>
.m-tabbar{
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    overflow: hidden;
    height:1rem;
    background: #fff;
    border-top: 1px solid #e4e4e4;
    justify-content:space-around;
}   
.m-tabbar-item{
    flex: 1;
    text-align: center;
}
.m-tabbar-item .m-tabbar-item-icon{
    display: block;
    margin:.09rem 0;
}
.m-tabbar-item .m-tabbar-item-icon img{
    width:.48rem;
    height:.48rem;
}
.m-tabbar-item .m-tabbar-item-text{
    display: block;
    font-size:.2rem;
    color:#333;
}
.is-active .m-tabbar-item-text{
	color:#f00;
}
</style>