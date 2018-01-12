<template>
  <div id="app">
  	<header>
  		<div class="header-top">
			<div class="fonts">
				<img src="../static/img/logo.png"/>
			</div>
			<div class="search" @click="ok">
				<span class="iconfont icon-sousuo1"></span>
			</div>
		</div>
		<div class="header-heid" v-show="showFlag">
			<input type="text" placeholder="请输入关键词" class="text"/>
			<input type="submit"  value="搜索" class="submit" @click="go"/>
		</div>
		<nav>
			<ul>
				<li>
					<router-link class="navli" to="/">网站首页</router-link>
				</li>
				<li>
					<router-link class="navli" to="/AboutUs">关于我们</router-link>
				</li>
				<li>
					<router-link class="navli" to="/News">新闻动态</router-link>
				</li>
				<li>
					<router-link class="navli" to="/GuestRoomShow">客房展示</router-link>
				</li>
				</ul>
				<ul>
				<li><router-link class="navli" to="/BusinessPhilosophy">经营理念</router-link></li>
				<li><router-link class="navli" to="/meetings">会议与活动</router-link></li>
				<li><router-link class="navli" to="/ContactUs">联系我们</router-link></li>
			</ul>
		</nav>
  	</header>
  	
		<div class="jiahao" >
			<div class="oimg" >
				<img src="../static/img/plus.png" />
			</div>
			<div class="dianhua"></div>
			<div class="dinwei"></div>
			<div class="biji"></div>
			<div class="fangzi"></div>
		</div>
    <router-view/>
  </div>
</template>

<script>
		
export default {

  name: 'app',
  data(){
  	return({
  		showFlag:false,
  		datas:null
  	})
  },
  methods:{
  	ok(){
  		this.showFlag = !this.showFlag;
  		//console.log(this);
  	},
  	go(){
  		this.$router.push({path:'/search'})
  	}
  }
  
  
}
</script>

<style>
* { margin: 0; padding: 0; }

ul { list-style: none; }

a { text-decoration: none; -webkit-tap-highlight-color: transparent; color: #000; }
body{
	background: #999;
}
html, header, .maxlunbo { width: 100%; height: 100%; }
html body, header body, .maxlunbo body { height: 100%; margin: 0; }

header { height: 128px; position: relative;}
header .header-top { height: 46px; line-height: 46px; background: #11293b; display: flex; }
header .header-top .fonts { width: 80%;}
.fonts img{height: 36px; margin: 5px 0 0 10px;}
header .header-top .search { width: 20%; }
header .header-top .search .icon-sousuo1 { display: block; color: #C4CDE0; float: right; font-size: 30px; margin-right: 10px; }
header nav { height: 82px; background: #f9f9f9; }
header nav ul { height: 50%; text-align: center; line-height: 40px; }
header nav ul:nth-child(2) { border-bottom: none; }
header nav ul li { width: 25%; float: left; }
header nav ul li .navli{ color: #707070; font-size: 14px; display: block; border-right: 1px solid #707070; border-bottom: 1px solid #707070; }
#app{
	position: relative;
}
.header-heid{
	position: absolute;
	top: 52px;
	right: 7px;
	width: 96%;
	height: 63px;
	line-height: 50px;
	border-radius: 5px;
	text-align: center;
	background: rgba(13,31,44,.8);
	z-index: 50;
}
.header-heid:before{
	content: "";
	border-width: 10px;
	border-style: solid;
	border-color:transparent transparent rgba(13,31,44,.8) transparent;
	position: absolute;
	top: -20px;
	right: 13px;
}
.header-heid .text{
	width: 80%;
	height: 25px;
	margin: 14px 0 14px 10px;
	padding: 5px 5px 3px 5px;
	box-shadow: 1px 1px 3px #b7b7b7 inset!important;
	border-top: 1px solid #858585;
	border-left: 1px solid #fafafa;
	border-right: 1px solid #fafafa;
	border-bottom: 1px solid #c9c9c9;
	float: left;
}
.header-heid .submit{
	float: left;
	width:10%;
	height: 36px;
	line-height: 36px;
	display: inline-block;
	margin: 14px 0;
	color: #fff;
	background: #11293B;
	appearance: none;
	border-radius:0px;
	border: none;
}
.mainlunbo { height: 650px; }
.ui-slider { width:100%;
	 overflow: hidden; 
	 position: relative;
	 }

.index{
	width: 160px;
	height: 345px;
	position: absolute;
	bottom:11%;
	left: 30%;
}
.navSlider{
	display: flex;
}
.navSlider li{
	width: 50%;
	text-align: center;
	padding: 2px;
}
.miantwo li{
	width: 100%;
}

.navSlider li a{
	background:rgba(255,255,255,.7);
	display: block;
	color: #666;
	line-height: 35px;
	overflow: hidden;
}
.navSlider li a span{
	display: block;
	font-size: 20px;
	height: 30px;
}
.navSlider li a p{
	height: 35px;
	line-height: 35px;
	font-size: 14px;
}
.suite li:nth-child(1){
	width: 35%;
}
.suite li:nth-child(2){
	width: 65%;
}
.jiahao{
	width: 35px;
	height: 35px;
	border-radius: 50%;
	border: 3px solid #fff;
	background: #11293B;
	position: fixed;
	bottom: 13px;
	left: 17px;
	z-index: 99;
}
.oimg{
	position: absolute;
	top: 7px;
	left:7px;
}
.oimg a{
	width: 15px;
	height: 15px;
	position: absolute;
}

.router-link-exact-active{
	color: #fff!important;
	background: #0d1f2c;
}
#vux_view_box_body{
	padding-bottom: 0px!important;
}
.vux-indicator{
	display: none;
}
.editor{
	padding: 15px 10px;
}
</style>
