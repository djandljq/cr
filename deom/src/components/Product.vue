<template>
	<view-box class="producd">
	<x-header>产品详情</x-header>
	<swiper :list="list" auto style="width:100%;margin:0 auto;" height="276px"  dots-position="center" :loop="true"></swiper>
	<div class="myharp">
	<h1 class="title">行政江景房</h1>
	<div class="paralist">
		<ul>
			<li>
				<p class="pn">床：</p>
				<p class="pv">特大床或两张单人床</p>
			</li>
			<li>
				<p class="pn">入住人数：</p>
				<p class="pv">2 人</p>
			</li>
			<li>
				<p class="pn">面积：</p>
				<p class="pv">50 平方米 / 538 平方英尺</p>
			</li>
			<li>
				<p class="pn">查看：</p>
				<p class="pv">都市景观</p>
			</li>
			<li>
				<p class="pn">起价：</p>
				<p class="pv">3000</p>
			</li>
		</ul>
	</div>
	<div class="desc">
		   雅致的客房是寻求宽敞住宿体验的宾客的绝佳选择，宾客还可使用尊享行政酒廊的所有设施‌。 客房设有两张单人床或一张特大床，铺有长毛绒地毯，配有落地窗，可供欣赏黄浦江畔令人惊叹的美景。 卫浴间内设步入式雨林花洒淋浴系统、大型梳妆盥洗台和完美的超大浴缸，可让您尽情放松，给您以静谧之感。 入住的宾客可 24 小时享用酒店行政酒廊。
	</div>
	<div class="taplist">
		详细描述
	</div>
	<div class="editor">
	<p>【行政江景房】</p>
	<p>
	    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  雅致的客房是寻求宽敞住宿体验的宾客的绝佳选择，宾客还可使用尊享行政酒廊的所有设施‌。 客房设有两张单人床或一张特大床，铺有长毛绒地毯，配有落地窗，可供欣赏黄浦江畔令人惊叹的美景。 卫浴间内设步入式雨林花洒淋浴系统、大型梳妆盥洗台和完美的超大浴缸，可让您尽情放松，给您以静谧之感。 入住的宾客可 24 小时享用酒店行政酒廊。</p>
	    <p>&nbsp</p>
	    <p>&nbsp&nbsp设施</p>
	    <p>房间特色</p>
	    <p>高端品质的 Frette 床单</p>
	    <p>鹅绒枕头和个性枕头系列可供选择</p>
	    <p>每天两次的客房清洁服务，包括开床服务时提供的免费矿泉水</p>
		 <p>Illy 咖啡机</p>
		 <p>大书桌</p>
		 <p>卫浴间</p>
		 <p>独立浴室和步入式淋浴室</p>
		 <p>双人梳妆盥洗台</p>
		 <p>Ormonde Jayne 品牌豪华浴室用品</p>
		 <p>Frette 绒质毛巾浴衣</p>
		 <p>24小时全天体验</p>
		 <p>自抵店入住时起，您可全天24小时享受我们的客房和套房。</p>
		 <p>须视具体房间预订情况而定。</p>
		 <p>高端信息科技</p>
		 <p>有线和无线上网都享受高品质高速宽带。 多达 4 台设备注册上网</p>
		 <p>可选择观看多个频道的顶级高清 46 寸 LED 电视</p>
		 <p>按需提供先进高清内容，包括最新电影</p>
		 <p>高品质的影音系统</p>
		 <p>室内互动娱乐系统，可综合使用 iPod 或 MP3</p>
		 <p>卫浴间配有电视</p>
		<p>Ipod 播放音箱</p>
	</div>
	
	</div>
	<div class="footerText">服务热线：(86-20) 1234 9999</div>
	</view-box>
	
</template>

<script>
	import { ViewBox } from 'vux'
	import { XHeader } from 'vux'
	import { Swiper } from 'vux'
	export default {
	  components:{
	  	ViewBox,XHeader,Swiper
	  },
	  data () {
	   return {
        list:[{
			  img: 'http://www.91djandljq.cn/dist/static/img/139.jpg',
			  title: '行政江景房'
			}, {
			  fallbackImg: 'http://www.91djandljq.cn/dist/static/img/13.jpg'
			}]
	    }
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
.myharp{
	background: #fff;
}
.producd{
	height: 100%;
	width:100%;
	position:fixed;
	top:0;
	left:0;
	z-index:50;
	
}

.title{
	padding: 10px 10px 0;
	box-sizing: border-box;
	font-size: 18px;
	font-weight: normal;
	background: #fff;
}
.paralist{
	background: #fff;
	padding: 0 10px;
}
.paralist li{
	border-bottom: 1px solid #eee;
	padding: 8px 0;
}
.pn{
	float: left;
	color: #999;
	font-size: 14px;
}
.pv{
	font-size: 14px;
}
.desc{
	margin: 10px;
	padding: 8px;
	background: #efefef;
}
.taplist{
	height: 39px;
	line-height: 39px;
	background: #eee;
	border: 1px solid #ccc;
	text-align: center;
}
.editor{
	padding: 15px 10px;
}
.editor p{
	font-size: 14px;
	font-weight: normal;
	line-height:22px;
}
.footerText{
	background: #EDEDED;
	color: #666;
	text-align: center;
	height: 58px;
	line-height: 58px;
}
.vux-indicator{
	display: block!important;
}
</style>