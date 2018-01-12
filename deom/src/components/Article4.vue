<template>
	<view-box class="product">
	<x-header></x-header>
	<div class="sidaber">
		<h1 class="title">
		"惠享出众" 轻松定议
		<p class="hits">2014-03-17 12:58:25 &nbsp&nbsp 点击次数：</p>
		</h1>
		<div class="edater">
			<p>&nbsp  喜来登酒店超值会务套价，仅438元/人/天，即可享受以下优惠：</p>
				<span>&nbsp&nbsp-  全天使用会议室（上午8时至下午6时）</span></br>
				<span>&nbsp   - 一个签到台配鲜花装饰</span></br>
				<span>&nbsp   - 与会人员名卡</span></br>
				<span>&nbsp   - 音响及无线麦克风</span></br>
				<span>&nbsp   - 会议百宝箱</span></br>
				<span>&nbsp   - 会议期间免费提供茶水</span></br>
				<span>&nbsp   - 享受两次咖啡/茶歇</span></br>
				<span>&nbsp   - 可享受团队自助午餐</span></br>
				<span>&nbsp   - 瓶装纯净水及薄荷糖</span></br>
			</p>
			<p>&nbsp  增值服务选择：</br>
				&nbsp- 会议期间预定客房每满15间即可免费获赠高级房1间/晚于会议期间入住</br>
				&nbsp（同一团队最高可获赠3间/晚）</br>
				 &nbsp- 凡预订会务套餐25人或以上即可享受一位免费</br>
				 &nbsp- 凡预订会务套餐50人或以上即可享受两位免费</br>
			</p>
			<p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  条款：</br>
				&nbsp- 会议套餐仅适用于限20人或以上会议</br>
				&nbsp- 所有预订必须视场地情况提前预订</br>
				&nbsp- 以上价格加收15％服务费</br>
				&nbsp- 亦可根据客户需要提供半天会议套价，价格RMB368+15％</br>
				&nbsp- 此套价不适用于广交会期间</br>
			</p>
			<p >&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp此会务套价有效期至2014年12月31日</p>
			
		</div>
		
		
		<div class="footerText">服务热线：(86-20) 1234 9999</div>
	</div>	
	</view-box>
	
</template>

<script>
	import { ViewBox } from 'vux'
	import { XHeader } from 'vux'
	export default {
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
}
.edater>p>span{
	font-size: 14px;
	font-weight: normal;
	line-height:22px;
	color: #808080;
	display:block;
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