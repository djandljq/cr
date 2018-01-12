<template>
	<div class="BP">
		<div class="jyll">
		<div class="AUnavs">
  			<div class="neirongs">
  				<p>经营理念</p>
			   	<router-link to="/AboutUs1" class="iconfont icon-gengduo">
								更多分类
				</router-link>
  			</div>
  		</div>
		<h2>
			【<span>用心承诺 改变世界</span>】
		</h2>
		<p>我们矢志成为富有教养和责任感的社会公民。我们具备高度的环保意识，在日常生活中履行社会责任，并激励他人共同努力。</p>
		<p>我们的经营方式精简节约，兼顾社会公益和环境保护，且有效平衡各相关方的利益。</p>
		<p>我们致力于在企业公民和可持续发展方面居于领先地位，对同事与客人关怀备至，改善所在社区的生活品质，并以身作则，为社会和环境作出积极卓越的贡献。</p>
		<img src="../../static/img/20140313_171016.jpg"/>
		</div>
		<div class="footerText">服务热线：(86-20) 1234 9999</div>
	</div>
</template>

<script>
</script>

<style>
	.BP{
		width:100%;
		background:#fff;
	}
	.jyll{
		padding-bottom: 30px;
	}
	.jyll h2{
		text-align:center;
		margin-top:20px;
		color:#808080;
	}
	.jyll>p{
		width:94%;
		margin-left:3%;
		margin-bottom:15px;
		color:#808080;
	}
	h2 span{
		display:inline-block;
		font-family:"\5B8B\4F53";
		font-weight:100;
	}
	.neirongs{
		width:94%;
		line-height:40px;
	}
	.AUnavs{
		height:40px;
		background:#ededed;
	}
	.neirongs>p{
		margin-bottom:10px;
		line-height:26px;
		display:inline-block;
		font-size:16px;
		margin-left:4%;
	}
	.neirongs a{
		float:right;
		font-size:14px;
	}
	.jyll img{
		width:94%;
		margin-left:3%;
	}
	.footerText{
	background: #EDEDED;
	color: #666;
	text-align: center;
	height: 58px;
	line-height: 58px;
}
</style>