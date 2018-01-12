<template>
	<div class="Usnav">
		<div class="kefang">
  			<div class="zhanshi">
  				<p>客房展示</p>
			   	<a class="iconfont icon-gengduo" @click="kefang">
								更多分类
				</a>
  			</div>
  		</div>
		
		<router-link to="/" class="list">
				<span class="lis">
					<img src="../../static/img/1395029314.jpg"/>
				</span>
				<span class="kf"><a>[热]</a>东方套房-双卧室</span>
				<span class="iconfont icon-you"></span>
		</router-link>
		
		<router-link to="/" class="list">
				<span class="lis">
					<img src="../../static/img/1395029314.jpg"/>
				</span>
				<span class="kf">
					明珠套房<br>
					<p title="      透过套房两侧的落地窗，宾客可欣赏上海地标建筑东方明珠塔无与伦比的景色。 室内采用典雅的布艺和豪华温馨的色调，配有长毛绒地毯和宽敞的起居室、卫浴室与主卧室，给人以极具奢华之感。 卧室设有一张特大号床、典雅的茶几和充满氛围的灯光，起居室则配有一张沙发、扶手椅和餐桌，为宾客提供了清幽宁神的避世胜地。 卫浴室配备了靠窗的浸入式浴缸、双人梳妆盥洗台和步入式雨林花洒淋浴系统，品味高端。">
						        透过套房两侧的落地窗，宾客可可欣赏上海地标建筑东方明珠塔无与伦比的景色。
					</p>
				</span>
				<span class="iconfont icon-you"></span>
		</router-link>
		
		<router-link to="/" class="list">
				<span class="lis">
					<img src="../../static/img/1395029314.jpg"/>
				</span>
				<span class="kf">总统套房-双卧室</span>
				<span class="iconfont icon-you"></span>
		</router-link>
		
		<transition name="slide-fade">
			<div class="hiddenBox" v-if='kfzs'>
				<p @click="zhanshi1"><router-link to="/GuestRoomShow3">客房展示</router-link><span class="iconfont icon-you"></span></p>
				<p @click="zhanshi2"><router-link to="/GuestRoomShow1">客房</router-link><span class="iconfont icon-you"></span></p>
				<p @click="zhanshi3"><router-link to="/GuestRoomShow2">公寓</router-link><span class="iconfont icon-you"></span></p>
				<p @click="zhanshi4"><router-link to="/GuestRoomShow3">套房</router-link><span class="iconfont icon-you"></span></p>
				<p @click="zhanshi5"><router-link to="/meetings">会议与活动</router-link><span class="iconfont icon-you"></span></p>
			</div>
		</transition>
		<div class="footerText">服务热线：(86-20) 1234 9999</div>
	</div>
</template>

<script>
	
export default {
  data(){
  	return {
  		kfzs:false,
  		
  	}
  	
  },
  methods:{
  	kefang(){
  		this.kfzs=true
  	},
  	zhanshi1(){
  		this.kfzs=false
  	},
  	zhanshi2(){
  		this.kfzs=false
  	},
  	zhanshi3(){
  		this.kfzs=false
  	},
  	zhanshi4(){
  		this.kfzs=false
  	},
  	zhanshi5(){
  		this.kfzs=false
  	}
  }
}
	
	
</script>

<style>
	
*{
	font-family: "微软雅黑";
}
.Usnav{
	width:100%;
	background:#fff;
}




/*隐藏盒子*/
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1, 1, 1, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(95%);
  opacity: 0;
}



.hiddenBox{
	width:100%;
	height:100%;
	background:rgba(224,126,47,.9);
	position:fixed;
	top:0;
	left:0;
}
.hiddenBox p{
	width:100%;
	height:41px;
	color:#fff;
	line-height:42px;
	color:#fff;
	font-size:20px;
	position:relative;
	border-bottom:1px solid rgb(183,83,0);
}
.hiddenBox p:nth-child(1){
	height:44px;
}
.hiddenBox p a{
	color:#fff;
	padding-left:3%;
	display:inline-block;
	width:100%;
	height:100%;
}
.hiddenBox p:nth-child(1) a{
	padding-left:0;
	text-align:center;
	background:rgba(224,126,47,.9);
}
.hiddenBox p span{
	position: absolute;
	top:0;
	right:3%;
}




.router-link-exact-active{
	color: #fff;
	/*background:rgba(224,126,47,0);*/
}






.zhanshi{
		width:94%;
		line-height:40px;
	}
	.kefang{
		height:40px;
		background:#ededed;
	}
	.zhanshi p{
		color:#808080;
		margin-bottom:10px;
		line-height:26px;
		display:inline-block;
		font-size:16px;
		margin-left:3%;
		font-family:"\5B8B\4F53";
	}
	.zhanshi a{
		float:right;
		color:#808080;
		font-size:14px;
	}
	
	
.footerText{
	background: #EDEDED;
	color: #666;
	text-align: center;
	height: 58px;
	line-height: 58px;
}
	
	
	
.list{
	display:inline-block;
	width:96%;
	margin-left:4%;
	border-bottom:1px solid #ccc;
}
.list span{
	float:left;
	font-size:14px;
}
.lis{
	display:inline-block;
}
.lis,.lis img{
	max-width:80px;
	max-height:80px;
}
.list{
	margin-top:14.12px;
}
.list span:nth-child(2) a{
	color:red;
}
.kf{
	margin-left:10px;
}
.list span p{
	display:inline-block;
	font-size:14px;
	width:180px;
	height:19px;
	margin-top:12px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow:hidden;
}
.list span{
	font-size:16px;
}
.list span:nth-child(3){
	line-height:80px;
	float:right;
	margin-right:3%;
}
</style>