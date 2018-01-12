<template>
  	<div class="Usnav1">
  		<div class="AUv1">
  			<div class="ning1">
  				<p>酒店概况</p>
			   	<a class="iconfont icon-gengduo" @click='lo1'>
								更多分类
				</a>
  			</div>
  		</div>
  		
  		<div class="AUna1">
  			<div class="Usheader1">
				喜来登酒店于2009年开业，建于深圳最繁华的商业和娱乐中心--罗湖区，地铁大剧院站近在咫尺，与万象城、地王大厦、深圳证券交易所、罗湖商业城、东门步行街等多所地标建设咫尺而卧，距罗湖口岸仅距5分钟路程，往来福田区、深圳宝安国际机场及香港国际机场均方便快捷。Teavel酒店属于华润中心的一部份，与华润大厦、幸福里及万象城，合组成一个高级时尚的都市综合体——华润中心。
			</div>
			<img src="../../static/img/20140313_172205.jpg" class="Usbox_img1"/>
			<div class="Usheader1">
				喜来登酒酒店共客房99间，全部由国际著名设计公司倾力打造，喜来登酒酒店设有宽敞豪华的客房，包括53间设计独特的套房及酒店式公寓。酒店设有超过2769平方米，配备完善的会议区域。8间全新概念多元化的餐厅和酒吧和水鄉优质水疗中心将为宾客带来无以伦比的至高享受。优越的地理环境和国际服务，同年被评为深圳5星级酒店。
			</div>
  		</div>
  		<transition name="slide-fade">
		<div class="hiddenBox1" v-if='flag1'>
			<p @click="pl1"><router-link class="navli" to="/AboutUs1">关于我们</router-link><span class="iconfont icon-you"></span></p>
			<p @click="GK1"><router-link class="navli1" to="/AboutUs1">酒店概况</router-link><span class="iconfont icon-you"></span></p>
			<p @click="GS1"><router-link class="navli2" to="/AboutUs2">酒店故事</router-link><span class="iconfont icon-you"></span></p>
			<p @click="LN1"><router-link class="navli3" to="/AboutUs3">经营理念</router-link><span class="iconfont icon-you"></span></p>
			<p @click="WM1"><router-link class="navli4" to="/ContactUs">联系我们</router-link><span class="iconfont icon-you"></span></p>
		</div>
		</transition>
  	</div>
</template>

<script>
export default {
  data(){
  	return {
  		flag1:false,
  		
  	}
  	
  },
  methods:{
  	lo1(){
  		this.flag1=true
  	},
  	pl1(){
  		this.flag1=false
  	},
  	GK1(){
  		this.flag1=false
  	},
  	GS1(){
  		this.flag1=false
  	},
  	LN1(){
  		this.flag1=false
  	},
  	WM1(){
  		this.flag1=false
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
	font-family: "微软雅黑";
}
html,body{
	width:100%;
	height:100%;
}


.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 1.0, 1.0, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(90%);
  opacity: 0;
}



#app{
	position:relative;
}
.hiddenBox1{
	width:100%;
	height:100%;
	background:rgba(224,126,47,.9);
	position:fixed;
	top:0;
	left:0;
}
.hiddenBox1 p{
	width:100%;
	height:41px;
	color:#fff;
	line-height:42px;
	color:#fff;
	font-size:20px;
	position:relative;
	border-bottom:1px solid rgb(183,83,0);
}
.hiddenBox1 p:nth-child(1){
	/*background:rgba(183,83,0,.9);*/
	height:44px;
}
.router-link-exact-active{
	color: #fff;
	background:rgba(224,126,47,0);
}
.hiddenBox1 p a{
	color:#fff;
	padding-left:3%;
	display:inline-block;
	width:100%;
	height:100%;
}
.hiddenBox1 p:nth-child(1) a{
	padding-left:0;
	text-align:center;
	background:rgba(224,126,47,.9);
}
.hiddenBox1 p span{
	position: absolute;
	top:0;
	right:3%;
}
.Usnav1{
	width:100%;
	background:#fff;
}


.ning1{
		width:94%;
		line-height:40px;
	}
	.AUv1{
		height:40px;
		background:#ededed;
	}
	.ning1 p{
		color:#808080;
		margin-bottom:10px;
		line-height:26px;
		display:inline-block;
		font-size:16px;
		margin-left:3%;
		font-family:"\5B8B\4F53";
	}
	.ning1 a{
		float:right;
		color:#808080;
		font-size:14px;
	}
	
	
.AUna1{
	margin-top:20px;
	margin-left:4%;
	font-size:14px;
	width:92%;
	text-indent:1em;
	line-height:26px;
}
.Usheader1{
	margin-top:20px;
}
.Usbox_img1{
	width:100%;
}
</style>
