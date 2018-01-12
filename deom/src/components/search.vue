<template>
<view-box1 class="search">
	<x-header1>搜索</x-header1>
	<div class="footerText">服务热线：(86-20) 1234 9999</div>
</view-box1>

</template>

<script>
	import { ViewBox } from 'vux'
	import { XHeader } from 'vux'
	components:{
	  	ViewBox,XHeader
	  }
</script>

<style scoped>
html,body{
	width: 100%;
	height: 100%;
	margin: 0;
}

.search{
	height: 100%;
	width:100%;
	position:absolute;
	top:0;
	left:0;
	z-index: 50;
}

.footerText{
background: #EDEDED;
color: #666;
text-align: center;
height: 58px;
line-height: 58px;
}
</style>