<template>
	<div class="Usnav">
  		<div class="kefang">
  			<div class="zhanshi">
  				<p>客房展示</p>
			   	<a class="iconfont icon-gengduo" >
								更多分类
				</a>
  			</div>
  		</div>
  		<ul>
  			<li v-for="(deom,index) in filterRoom"> 
  		<router-link to="deom.newsClass" class="list">
				<span class="lis">
					<img v-bind:src="deom.roomImgSrc"/>
				</span>
				<span class="kf"><a>{{deom.roomUserName}}</a>{{deom.roomTitle}}<br>
				<p>{{deom.paragraph}}</p>
				</span>
				<span class="iconfont icon-youkuohao youkuhao"></span>
		</router-link></li>
		
		</ul>
		<div class="viewMore" @click="loaderMore">查看更多</div>
		<div class="footerText">服务热线：(86-20) 1234 9999</div>
  	</div>
</template>

<script>
	export default{
		
		data(){
			return {
				guestRoomList:[],
				roomNum:5
			}
		},
		mounted:function(){
			this.$nextTick(function(){
				this.getGuesRoomList();
			})
		},
		computed:{
			filterRoom(){
				return this.guestRoomList.slice(0,this.roomNum);
			}
		},
		methods:{
			getGuesRoomList(){
				this.$http.get("./static/datas.json").then(data=>{
					this.guestRoomList = data.body.datas.slice(13,22)
				})
			},
			loaderMore(){
				this.roomNum = this.guestRoomList.length;
			}
		}
	}
</script>

<style>
	*{
	font-family: "微软雅黑";
}
.Usnav{
	width:100%;
	background:#fff;
}
.zhanshi{
		width:94%;
		line-height:40px;
	}
	.kefang{
		height:40px;
		background:#ededed;
	}
	.zhanshi p{
		margin-bottom:10px;
		line-height:26px;
		display:inline-block;
		font-size:16px;
		margin-left:4%;
	}
	.zhanshi a{
		float:right;
		font-size:14px;
	}
.list{
	display:inline-block;
	width:96%;
	margin-left:4%;
	border-bottom:1px solid #ccc;
}
.list span{
	float:left;
	font-size:14px;
}
.lis{
	display:inline-block;
}
.lis,.lis img{
	max-width:80px;
	max-height:80px;
}
.list{
	margin-top:14.12px;
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
.list span:nth-child(2) a{
	color:red;
}
.kf{
	margin-left:10px;
}
.list .kf p{
	display:inline-block;
	font-size:14px;
	width:180px;
	height:19px;
	margin-top:12px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow:hidden;
	color: #4d4d4d;
}
.list span{
	font-size:16px;
}
.list span:nth-child(3){
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
/*.router-link-exact-active{
	color: #fff;
	background:rgba(224,126,47,0);
}*/
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

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1, 1, 1, 1);
}
.slide-fade-enter, .slide-fade-leave-to
 {
  transform: translateX(95%);
  opacity: 0;
}
</style>