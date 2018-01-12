<template>
	<view-box class="product">
	<x-header></x-header>
	<div class="sidaber">
		<h1 class="title">
		     {{title}}
		<p class="hits" @click="upClick()">{{time}} &nbsp&nbsp 点击次数：{{count}}</p>
		</h1>
		<div class="edater">
			<p v-for="item in content"> {{ item }}</p>
			
			<p >
				<img :src="img" alt="">
			</p>
		</div>
		<div class="footerText">服务热线：(86-20) 1234 9999</div>
	</div>	
	</view-box>
	
</template>

<script>
	import { ViewBox,XHeader } from 'vux'
	export default {
	  created(){
	  	this.$http.get("./static/datas.json").then(function(data){
	  		//data.body = JSON.parse(data.body)
	  		this.title=data.body.datas[1].title;
	  		this.time = data.body.datas[1].post_time;
	  		this.count = data.body.datas[1].click_count;
	  		this.content = data.body.datas[1].content;
	  		this.img = data.body.datas[1].imgSrc;
	  	})
	  },
	  data(){
	  	return{
	  		title:[],
	  		time:[],
	  		count:[],
	  		content:[],
	  		img:[]
	  	}
	  },
	  methods:{
	  	upClick(){
	  		/*this.$http().post("url",{up},(data) =>{
	  			//  this.count++;
	  		})*/
	  		this.count++;
	  	}
	  },
	  components:{
	  	ViewBox,XHeader
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
	text-indent: 2em;
}
.edater img{
	display: block;
	width: 100%;
}
.footerText{
	background: #EDEDED;
	color: #666;
	text-align: center;
	height: 58px;
	line-height: 58px;
}
</style>