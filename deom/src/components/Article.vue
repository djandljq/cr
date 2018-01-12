<template>
	<view-box class="product">
	<x-header></x-header>
	<div class="sidaber">
		<h1 class="title">
		{{title}}
		<p class="hits">{{time}} &nbsp&nbsp 点击次数：{{count}}</p>
		</h1>
		<div class="edater">
			<p  style="text-align: center;">{{content[0]}}</p>
			<p class="intext">{{content[1]}}</p>
			<p class="intext"> {{content[2]}}</p>
			<p class="intext">{{content[3]}}</p>
			<p class="intext">{{content[4]}}</p>
			<p class="intext">{{content[5]}}</p>
			<p style="text-align: center;">
				<img v-bind:src="img" />
			</p>
		</div>
		<div class="footerText">服务热线：(86-20) 1234 9999</div>
	</div>	
	</view-box>
	
</template>

<script>
	import { ViewBox } from 'vux'
	import { XHeader } from 'vux'
	export default {
	  components:{
	  	ViewBox,XHeader
	  },
	  data(){
	    return {
	    	title:[],
	    	time:[],
	    	count:[],
	    	content:[],
	    	img:[]
	    }
	  },
	  created(){
	     this.$http.get("./static/datas.json").then(function(data){
	     	 //data.body=JSON.parse(data.body);
	     	this.title = data.body.datas[0].title;
	     	this.time = data.body.datas[0].post_time;
	     	this.count = data.body.datas[0].click_count;
	     	this.content = data.body.datas[0].content;
	     	this.img = data.body.datas[0].imgSrc;
	     })
	  }
	}
	
</script>

<style scoped lang="less">
@import '~vux/src/styles/reset.less';
html,body{
	width: 100%;
	height: 100%;
	margin: 0;
}

.product{
	height: 100%;
	width:100%;
	position:fixed;
	top:0;
	left:0;
	z-index:50;
}
.sidaber{
	background: #fff;
}
.title{
	font-size: 18px;
	padding: 10px 20px;
	text-align: center;
	border-bottom: 1px solid #ccc;
}
.title p{
	font-size: 12px;
	color: #999;
	font-weight: normal;
}
.edater{
	padding: 15px 10px;
}
.edater p{
	font-size: 14px;
	font-weight: normal;
	line-height:22px;
	color: #808080;
}
.intext{
 	text-indent: 2em;
}
.footerText{
	background: #EDEDED;
	color: #666;
	text-align: center;
	height: 58px;
	line-height: 58px;
}
</style>