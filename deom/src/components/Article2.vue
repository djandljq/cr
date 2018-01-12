<template>
	<view-box class="product">
	<x-header></x-header>
	<div class="sidaber">
		<h1 class="title">
		无土蔬菜园 绿色新体验
		<p class="hits">2014-03-17 12:58:25 &nbsp&nbsp 点击次数：</p>
		</h1>
		<div class="edater">
			<p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 2011年3月，中国酒店业首家无土栽培的有机花园在喜来登酒店实施。</p>
			<p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp酒店引进农业技术中先进的无土栽培技术最新的气雾栽培法，将空置的建筑楼顶改造为无土蔬菜园，不仅能收获无污染无农药的绿色食品，美化酒店顶层环境，并由于酒店顶层植物的覆盖，大大减少顶层下方的餐厅的空调消耗。经过营养检测的无土栽培蔬菜维C含量比普通蔬菜提高3倍，致使蔬菜具有很强的抗氧化性，在烹饪时不易发黄，能保持蔬菜原有的色泽，且硝酸盐含量极少，粗纤维低，完全可以生食。</p>
			<p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 畅想一下，坐拥于舒适优雅的环境中，品尝洁净、绿色无公害、色泽鲜亮、口感清甜的可口菜肴，或在星级酒店中见证它的茁壮成长，或亲手体验采摘乐趣，享受田园般的休闲生活，惬意无限。</p>
			<p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp作为深圳区域的新型绿色环保酒店，酒店在建造之初即以生态环保为宗旨，利用其自身的建筑特色建立太阳能系统，应用于酒店的路灯照明，通透的酒店大堂自然采光；引进二次水循环系统应用，洗衣房废水治理与楼面雨水收集，并将井水用于酒店洗衣；同时引进中央空调系统节能、热水节能、LED灯节能、太阳能、玻璃幕墙循环水降温等项目。酒店还将咖啡茶渣等用作外围香料种植的肥料。除此之外，酒店的各个区域包括办公区域都设置环保回收箱，充分回收各类可循环使用的资源，环保的标志随处可见，由内到外打造生态环保及可持续发展的绿色酒店。</p>
			<p >
				<img src="../../static/img/201.jpg" />
			</p>
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