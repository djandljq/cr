<template>
	<div class="news">
		<section>
		<div class="Usbox">
  			<div class="about">
		  		<p>公司咨询</p>
			   	<a class="iconfont icon-gengduo" @click='so1'>
						更多分类
				</a>
	  		</div>
	  	</div>
		<div class="sb_box">
			<ul>
				<li>
					<router-link to="/Article">
						<div class="font-txt">
							<p class="txt">
								读者心中的最爱
							</p>
							<p class="time">2014-03-17</p>
						</div>
						<span class="iconfont icon-youkuohao youkuhao"></span>
					</router-link>
				</li>
				<li>
					<a href="#">
						<div class="font-txt">
							<p class="txt">
								电子时尚——科吧悄然开张
							</p>
							<p class="time">2014-03-17</p>
						</div>
						<span class="iconfont icon-youkuohao youkuhao"></span>
					</a>
				</li>
				<li>
					<a href="#">
						<div class="font-txt">
							<p class="txt">
								无土蔬菜园 绿色新体验
							</p>
							<p class="time">2014-03-17</p>
						</div>
						<span class="iconfont icon-youkuohao youkuhao"></span>
					</a>
				</li>
				<li>
					<a href="#">
						<div class="font-txt">
							<p class="txt">
								一起行动 为“地球一小时”熄灯
							</p>
							<p class="time">2014-03-17</p>
						</div>
						<span class="iconfont icon-youkuohao youkuhao"></span>
					</a>
				</li>
			</ul>
			<div class="viewMore">查看更多</div>
		</div>
		</section>
		<transition name="slide-fade">
			<div class="hiddenBox" v-if='flagf1'>
				<p @click="lm1"><router-link to="/ConsultingCompany">新闻动态</router-link><span class="iconfont icon-you"></span></p>
				<p @click="ly1"><router-link to="/ConsultingCompany">公司咨询</router-link><span class="iconfont icon-you"></span></p>
				<p @click="lu1"><router-link to="/TheCompanyDynamic">公司动态</router-link><span class="iconfont icon-you"></span></p>
			</div>
		</transition>
		<div class="footerText">服务热线：(86-20) 1234 9999</div>
		
	</div>
</template>

<script>
export default {
  data(){
  	return {
  		flagf1:false,
  		
  	}
  	
  },
  methods:{
  	so1(){
  		this.flagf1=true
  	},
  	lm1(){
  		this.flagf1=false
  	},
  	ly1(){
  		this.flagf1=false
  	},
  	lu1(){
  		this.flagf1=false
  	}
  }
}
</script>

<style scoped>


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






.Usbox{
	background: #ededed;
	height: 40px;
}
.about{
	width: 96%;
	line-height: 40px;
}
.about p{
	color:#808080;
	margin-bottom:10px;
	line-height:26px;
	display:inline-block;
	font-size:16px;
	margin-left:3%;
	font-family:"\5B8B\4F53";
}
.about a{
	float:right;
	color:#808080;
	font-size:14px;
}



.sb_box{
	width: 100%;
}
.sb_box ul{
	width:100%;
	background:#fff;
}
.sb_box ul li{
	width: 94%;
	height: 54px;
	margin-left:3%;
	border-bottom: 1px solid #ccc;
	box-sizing: border-box;
	background: #fff;
	
}
.sb_box ul li a{
	display: block;
	display: flex;
}
.font-txt{
	width:95%;
}
.font-txt .txt{
	padding-top: 12px;
	font-size: 16px;
}
.font-txt .txt .hot{
	color: red;
}
.font-txt .time{
	color: #999;
	height: 18px;
	line-height: 18px;
	font-size: 12px;
}
.youkuhao{
	width: 5%;
	display: block;
	line-height: 54px;
	font-size: 20px;
}
.viewMore{
	height: 50px;
	line-height: 50px;
	text-align: center;
	font-size: 16px;
	background: #fff;
}
.footerText{
	background: #EDEDED;
	color: #666;
	text-align: center;
	height: 58px;
	line-height: 58px;
}

</style>