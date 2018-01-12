<template>
  	<div class="Usnav3">
  		<div class="AUv3">
  			<div class="ning3">
  				<p>经营理念</p>
			   	<a class="iconfont icon-gengduo" @click='lo3'>
								更多分类
				</a>
  			</div>
  		</div>
  		
  		<div class="AUna2">
  			<h1>
				【用心承诺 改变世界】
			</h1>
			<p>我们矢志成为富有教养和责任感的社会公民。我们具备高度的环保意识，在日常生活中履行社会责任，并激励他人共同努力。</p>
			<p>我们的经营方式精简节约，兼顾社会公益和环境保护，且有效平衡各相关方的利益。</p>
			<p>我们致力于在企业公民和可持续发展方面居于领先地位，对同事与客人关怀备至，改善所在社区的生活品质，并以身作则，为社会和环境作出积极卓越的贡献。</p>
			<img src="../../static/img/20140313_171016.jpg"/>
		</div>
  		<transition name="slide-fade">
		<div class="hiddenBox3" v-if='flag3'>
			<p @click="pl3"><router-link class="navli" to="/AboutUs3">关于我们</router-link><span class="iconfont icon-you"></span></p>
			<p @click="GK3"><router-link class="navli1" to="/AboutUs1">酒店概况</router-link><span class="iconfont icon-you"></span></p>
			<p @click="GS3"><router-link class="navli2" to="/AboutUs2">酒店故事</router-link><span class="iconfont icon-you"></span></p>
			<p @click="LN3"><router-link class="navli3" to="/AboutUs3">经营理念</router-link><span class="iconfont icon-you"></span></p>
			<p @click="WM3"><router-link class="navli4" to="/ContactUs">联系我们</router-link><span class="iconfont icon-you"></span></p>
		</div>
		</transition>
  	</div>
</template>

<script>
export default {
  data(){
  	return {
  		flag3:false,
  		
  	}
  	
  },
  methods:{
  	lo3(){
  		this.flag3=true
  	},
  	pl3(){
  		this.flag3=false
  	},
  	GK3(){
  		this.flag3=false
  	},
  	GS3(){
  		this.flag3=false
  	},
  	LN3(){
  		this.flag3=false
  	},
  	WM3(){
  		this.flag3=false
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
.hiddenBox3{
	width:100%;
	height:100%;
	background:rgba(224,126,47,.9);
	position:fixed;
	top:0;
	left:0;
}
.hiddenBox3 p{
	width:100%;
	height:41px;
	color:#fff;
	line-height:42px;
	color:#fff;
	font-size:20px;
	position:relative;
	border-bottom:1px solid rgb(183,83,0);
}
.hiddenBox3 p:nth-child(1){
	/*background:rgba(183,83,0,.9);*/
	height:44px;
}
.router-link-exact-active{
	color: #fff;
	background:rgba(224,126,47,0);
}
.hiddenBox3 p a{
	color:#fff;
	padding-left:3%;
	display:inline-block;
	width:100%;
	height:100%;
}
.hiddenBox3 p:nth-child(1) a{
	padding-left:0;
	text-align:center;
	background:rgba(224,126,47,.9);
}
.hiddenBox3 p span{
	position: absolute;
	top:0;
	right:3%;
}
.Usnav3{
	width:100%;
	background:#fff;
}


.ning3{
		width:94%;
		line-height:40px;
	}
	.AUv3{
		height:40px;
		background:#ededed;
	}
	.ning3 p{
		color:#808080;
		margin-bottom:10px;
		line-height:26px;
		display:inline-block;
		font-size:16px;
		margin-left:3%;
		font-family:"\5B8B\4F53";
	}
	.ning3 a{
		float:right;
		color:#808080;
		font-size:14px;
	}
	
	
.AUna3{
	margin-top:20px;
	margin-left:4%;
	font-size:14px;
	width:92%;
	text-indent:1em;
	line-height:26px;
}
.Usheader3{
	margin-top:20px;
}
.Usbox_img3{
	width:100%;
}
</style>
