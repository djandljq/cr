<template>
	<view-box class="product">
	<x-header></x-header>
	<div class="sidaber">
		<h1 class="title">
		一起行动 为“地球一小时”熄灯
		<p class="hits">2014-03-17 12:58:25 &nbsp&nbsp 点击次数：</p>
		</h1>
		<div class="edater">
			<p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  喜来登酒店于2月24日签名加入了“地球一小时”活动，并将在2011年3月26日晚8:30点熄灯1小时，为保护环境和减少温室气体排放做些力所能及的事情。</p>
			<p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp3月26日晚8:30点, 喜来登酒店将熄灭大堂、餐厅、走廊、阳台、景观等照明灯，只保留安全必要的灯光。大堂、餐厅等公共区域将点起蜡烛，邀请入住和用餐的客人一起来感受这一刻的自然和宁静。</p>
			<p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  酒店将在大堂、客房、餐厅等显要位置的电子显示屏中宣传此次活动，号召来店的客人以自愿方式参加活动。客人也可以各种方式享受这一小时: 在餐厅与家人或朋友共享难得的烛光晚餐，或在酒店花园散步、聊天，或在泳池边的躺椅上细数夜空中的点点繁星。这一切，既能让人回归到最自然的状态，又能轻松地为环境保护尽一份力。</p>
			<p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp“地球一小时”行动，最初由世界自然基金会在单一城市发起。2007年3月31日星期六，澳洲悉尼首次举行活动，得到当地220万人响应熄灯一小时，展示对抗气候变化的决心。2011年“地球一小时”将于3月26日(星期六)晚上8时半举行，呼吁支持者熄灯一小时。今年，世界自然基金会呼吁公众延续地球一小时的精神，除着手应对气候变化，在熄灯一小时以外，更为可持续发展的未来作实际行动。2010年，来自七大洲及4,600个城市过亿的市民于当晚熄灯一小时，用行动展示大家对环保的决心。</p>
			<p >&nbsp</p>
			<p>背景资料:</p>
			<p>  世界自然基金会是全球性环保组织，分会及办事处遍布全球逾100个国家。总会于 1961 年成立，总部设于瑞士。与政府、非牟利组织、跨国机构建立合作关系，鼓励市民大众以行动作出改变。</p>
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