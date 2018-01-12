<template>
	<div class="Meeting">
		<div class="huiyi">
  			<div class="huodong">
  				<p>会议与活动</p>
			   	<router-link to="/AboutUs1" class="iconfont icon-gengduo">
								更多分类
				</router-link>
  			</div>
  		</div>
		<router-link to="/" class="HY">
				<span class="lis">
					<img src="../../static/img/1395029314.jpg"/>
				</span>
				<span class="kf">
					<a>[热]</a>设施<br>
					<p title="我们拥有一系列多功能会务场所，包括两间宴会厅、五间功能厅和一处临河户外活动场地">
						   我们拥有一系列多功能会务场所，包括两间宴..
					</p>
				</span>
				<span class="iconfont icon-you"></span>
		</router-link>
		
		<router-link to="/" class="HY">
				<span class="lis">
					<img src="../../static/img/1395029314.jpg"/>
				</span>
				<span class="kf">
					商务会议<br>
					<p title="我们的设计时尚，地理位置优越，技术一流，可为您的商业活动提供绝佳场所">
						   我们的设计时尚，地理位置优越，技术一流，..
					</p>
				</span>
				<span class="iconfont icon-you"></span>
		</router-link>
		
		<router-link to="/" class="HY listOut">
				<span class="lis">
					<img src="../../static/img/1395029314.jpg"/>
				</span>
				<span class="kf">
					婚宴与活动<br>
					<p title="无论是举办温馨婚礼，还是豪华庆典，我们都会将您的活动打造为一场特别的庆典">
						   无论是举办温馨婚礼，还是豪华庆典，我们都..
					</p>
				</span>
				<span class="iconfont icon-you"></span>
		</router-link>
		<div class="footerText">服务热线：(86-20) 1234 9999</div>
	</div>
</template>

<script>
</script>

<style>
	.Meeting{
		background:#fff;
	}
	.huodong{
		width:94%;
		line-height:40px;
	}
	.huiyi{
		height:40px;
		background:#ededed;
	}
	.huodong p{
		margin-bottom:10px;
		line-height:26px;
		display:inline-block;
		font-size:16px;
		margin-left:4%;
	}
	.huodong a{
		float:right;
		font-size:14px;
	}
	.HY{
	display:inline-block;
	width:96%;
	margin-left:4%;
	border-bottom:1px solid #ccc;
}
.HY>span{
	float:left;
	font-size:14px;
}
.HY>.lis{
	display:inline-block;
}
.HY>.lis,.HY>.lis img{
	max-width:80px;
	max-height:80px;
}
.HY>{
	margin-top:14.12px;
}
.HY>span:nth-child(2) a{
	color:red;
}
.HY>.kf{
	margin-left:10px;
}
.HY>span p{
	display:inline-block;
	font-size:14px;
	width:180px;
	height:19px;
	margin-top:12px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow:hidden;
	color:#808080;
}
.HY>span{
	font-size:16px;
}
.HY>span:nth-child(3){
	line-height:80px;
	float:right;
	margin-right:3%;
}
.footerText{
	background: #EDEDED;
	color: #666;
	text-align: center;
	height: 58px;
	line-height: 58px;
}
.listOut{
	border-bottom: none;
}
</style>