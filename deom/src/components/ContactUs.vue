<template>
	<div class="Telephone">
		<div class="lianxi">
	  		<div class="women">
	  			<p>联系我们</p>
			   	<router-link to="/AboutUs1" class="iconfont icon-gengduo">
								更多分类
				</router-link>
	  		</div>
	  	</div>
	  	<nav class="xilaideng">
	  		<div>
		  		<img src="../../static/img/20140317_090002.png"/>
		  		<h3>喜来登酒店</h3>
		  		<ul>
		  			<li>地址：<span>中国 广东,深圳 盐葵路 9 号,盐田大梅沙</span></li>
   					<li>邮编：<span>518083</span></li>
   					<li>电话: <span>(86)(755) 8888 6688</span></li>
   					<li>传真: <span>(86)(755) 8888 1233</span></li>
   					<li>中国区免费订房电话(86)(755) 2217 3666</li>
		  		</ul>
	  		</div>
	  	</nav>
	  	<div class="footerText">服务热线：(86-20) 1234 9999</div>
	</div>
</template>

<script>
</script>

<style>
	.Telephone{
		background:#fff;
	}
.women{
		width:94%;
		line-height:40px;
	}
	.lianxi{
		height:40px;
		background:#ededed;
	}
	.women p{
		margin-bottom:10px;
		line-height:26px;
		display:inline-block;
		font-size:16px;
		margin-left:4%;
	}
	.women a{
		float:right;
		font-size:14px;
	}
.xilaideng  img{
	width:47%;
}
.xilaideng h3{
	display:inline-block;
	margin-left:22%;
	color:#808080;
}
.xilaideng>div{
	width:94%;
	margin-left:3%;
}
.xilaideng>div ul li{
	margin-bottom:10px;
	margin-top:10px;
}
.footerText{
	background: #EDEDED;
	color: #666;
	text-align: center;
	height: 58px;
	line-height: 58px;
}
</style>