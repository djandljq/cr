<template>
  	<div class="Usnav2">
  		<div class="AUv2">
  			<div class="ning2">
  				<p>酒店故事</p>
			   	<a class="iconfont icon-gengduo" @click='lo2'>
								更多分类
				</a>
  			</div>
  		</div>
  		
  		<div class="AUna2">
  			<h1>
				【用心承诺 改变世界】
			</h1>
			<p>我们一直以来的经营理念是“Travel热情好客，亲如家人”。</p>
			<p>Travel秉承独特的亚洲式热情好客之道。</p>
			<img src="../../static/img/20140313_171822.jpg"/>
			<p>我们致力于为客人提供独具特色的亚洲待客之道和热情服务，这是我们有别于其他酒店业同行的关键所在，同时也是Travel赢得世界级酒店集团荣誉的基础。</p>
  			<p>“自豪而不骄矜”极其重要，我们希望员工能够由衷地为我们所获得的成就而自豪，但在对待客人时仍表现出温良谦恭的品质。总之，真正的成功是不需要大肆宣扬的。</p>
  			<p>在力求每时每刻令客人喜出望外的过程中，我们始终希望能够超越客人的期望，始终如一地为客人提供物有所值的优质产品和服务。这也正是我们要寻求那些勇于创新、追求卓越的潮流引领者和专业人士的原因。</p>
  		</div>
  		<transition name="slide-fade">
			<div class="hiddenBox2" v-if='flag2'>
				<p @click="pl2"><router-link class="navli" to="/AboutUs2">关于我们</router-link><span class="iconfont icon-you"></span></p>
				<p @click="GK2"><router-link class="navli1" to="/AboutUs1">酒店概况</router-link><span class="iconfont icon-you"></span></p>
				<p @click="GS2"><router-link class="navli2" to="/AboutUs2">酒店故事</router-link><span class="iconfont icon-you"></span></p>
				<p @click="LN2"><router-link class="navli3" to="/AboutUs3">经营理念</router-link><span class="iconfont icon-you"></span></p>
				<p @click="WM2"><router-link class="navli4" to="/ContactUs">联系我们</router-link><span class="iconfont icon-you"></span></p>
			</div>
		</transition>
  	</div>
</template>

<script>
export default {
  data(){
  	return {
  		flag2:false,
  		
  	}
  	
  },
  methods:{
  	lo2(){
  		this.flag2=true
  	},
  	pl2(){
  		this.flag2=false
  	},
  	GK2(){
  		this.flag2=false
  	},
  	GS2(){
  		this.flag2=false
  	},
  	LN2(){
  		this.flag2=false
  	},
  	WM2(){
  		this.flag2=false
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




	.AUna2 h1{
		color:#808080;
		margin:20px 0px;
		display:inline-block;
		font-family:"\5B8B\4F53";
		font-weight:normal;
	}
	.AUna2>p{
		width:96%;
		margin-left:2%;
		margin-bottom:10px;
		font-size:12px;
		color:#808080;
	}
	.AUna2>p:nth-child(1),.AUna2>p:nth-child(1){
		font-size:13px;
	}
.AUna2{
	margin-left:4%;
	font-size:14px;
	width:92%;
	line-height:26px;
}
.AUna2 img{
	margin:20px 0px 40px;
	width:100%;
}


#app{
	position:relative;
}
.hiddenBox2{
	width:100%;
	height:100%;
	background:rgba(224,126,47,.9);
	position:fixed;
	top:0;
	left:0;
}
.hiddenBox2 p{
	width:100%;
	height:41px;
	color:#fff;
	line-height:42px;
	color:#fff;
	font-size:20px;
	position:relative;
	border-bottom:1px solid rgb(183,83,0);
}
.hiddenBox2 p:nth-child(1){
	/*background:rgba(183,83,0,.9);*/
	height:44px;
}
.router-link-exact-active{
	color: #fff;
	background:rgba(224,126,47,0);
}
.hiddenBox2 p a{
	color:#fff;
	padding-left:3%;
	display:inline-block;
	width:100%;
	height:100%;
}
.hiddenBox2 p:nth-child(1) a{
	padding-left:0;
	text-align:center;
	background:rgba(224,126,47,.9);
}
.hiddenBox2 p span{
	position: absolute;
	top:0;
	right:3%;
}
.Usnav2{
	width:100%;
	background:#fff;
}


.ning2{
	width:94%;
	line-height:40px;
}
.AUv2{
	height:40px;
	background:#ededed;
}
.ning2 p{
	color:#808080;
	margin-bottom:10px;
	line-height:26px;
	display:inline-block;
	font-size:16px;
	margin-left:3%;
	font-family:"\5B8B\4F53";
}
.ning2 a{
	float:right;
	color:#808080;
	font-size:14px;
}
	
.Usheader2{
	margin-top:20px;
}
.Usbox_img2{
	width:100%;
}
</style>
