<template>
  <div class="app">
   	<div class="mainlunbo">
			<div class="ui-slider">
				<swiper :list="list" auto style="width:100%;margin:0 auto;" height="650px"  :loop="true"></swiper>
			</div>
		</div>
		<div class="index">
			<section>
				<ul class="navSlider">
					<li>
						<router-link to='/AboutUs'>
							<span class="iconfont icon-fangzi"></span>
							<p>酒店概况</p>
						</router-link>
					</li>
					<li>
						<router-link to='/AboutUs'>
							<span class="iconfont icon-tupian"></span>
							<p>酒店故事</p>
						</router-link>
					</li>
				</ul>
			</section>
			<section>
				<ul class="navSlider miantwo">
					<li>
						<router-link to='/ContactUs'>
							<span class="iconfont icon-biji"></span>
							<p>订购热线：1234 9999</p>
						</router-link>
					</li>
				</ul>
			</section>
			<section>
				<ul class="navSlider">
					<li>
						<router-link to='/GuestRoomShow'>
							<span class="iconfont icon-fangzi"></span>
							<p>客房</p>
						</router-link>
					</li>
					<li>
						<router-link to='/GuestRoomShow'>
							<span class="iconfont icon-erweima"></span>
							<p>公寓</p>
						</router-link>
					</li>
				</ul>
			</section>
			<section>
				<ul class="navSlider">
					<li>
						<router-link to='/BusinessPhilosophy'>
							<span class="iconfont icon-bijinotes23"></span>
							<p>经营理念</p>
						</router-link>
					</li>
					<li>
						<router-link to='/News'>
							<span class="iconfont icon-globe_blue"></span>
							<p>新闻动态</p>
						</router-link>
					</li>
				</ul>
			</section>
			<section>
				<ul class="navSlider suite">
					<li>
						<router-link to='/GuestRoomShow'>
							<span class="iconfont icon-mulu"></span>
							<p>套房</p>
						</router-link>
					</li>
					<li>
						<router-link to='/meetings'>
							<span class="iconfont icon-wenjianjia"></span>
							<p>会议与活动</p>
						</router-link>
					</li>
				</ul>
			</section>
		</div>
		<div class="footer-text">服务热线：(86-20) 1234 9999</div>
  </div>
</template>

<script>
import { Swiper } from 'vux'
export default {
	components:{
  	Swiper
  },
  data () {
    return {
      list:[{
			  img: 'http://www.91djandljq.cn/dist/static/img/she.jpg',
			}, 
			{
			  img: 'http://www.91djandljq.cn/dist/static/img/dalunbo.jpg',
			}, 
			{
			  img: 'http://www.91djandljq.cn/dist/static/img/dalunbo2.jpg',
			},
			{
			  fallbackImg: 'http://www.91djandljq.cn/dist/static/img/dalunbo1.jpg'
			}]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app{
		position: relative;
	}
	
.footer-text{
	position: absolute;
	bottom: 0;
	width: 100%;
	padding: 20px 0;
	color: #fff;
	text-align: center;
	font-size: 12px;
	z-index: 20;
}
</style>
