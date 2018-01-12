	new Vue({
	el:"#app",
	data:{
		totalMoney:0,
		productList:[],
		checkAllFlag:false,
		delFlag:false,
		curproduct:''
	},
	filters:{
		formatMoney: function (value){
			return "¥" + value.toFixed(2);//取小数点后两位小数
		}
	},
	mounted: function(){
		this.$nextTick(function (){
			this.cartView();
		});
		
	},
	methods:{
		cartView: function(){
		let _this = this;
			this.$http.get("cartData.json").then(res=>{
				this.productList = res.body.result.list;
			});
		},
		changeMoney: function (product,way){
			if(way>0){
				product.productQuentity++;
			}else{
				product.productQuentity--;
				if(product.productQuentity<1){
					product.productQuentity=1;
				}
			}
			this.calcTotalPrice();
		},
		selectedProduct: function (item){
			if(typeof item.checked == 'undefined'){
				//Vue.set(item,"checked",true);//全局注册，因为json里没有check方法需自己注册
				this.$set(item,"checked",true);//局部注册
			}else{
				item.checked = !item.checked;
			}
			this.calcTotalPrice();
		},
		checkAll: function (flag){
			this.checkAllFlag = flag;
			var _this = this;
			this.productList.forEach(function(item,index){
				if(typeof item.checked == 'undefined'){
					_this.$set(item,"checked",_this.checkAllFlag);
				}else{
					item.checked = _this.checkAllFlag;
				}
			});
			this.calcTotalPrice();
		},
		calcTotalPrice: function (){
			var _this = this;
			this.totalMoney = 0;
			this.productList.forEach(function(item,index){
				if(item.checked){
					_this.totalMoney += item.productPrice*item.productQuentity;
				}
			})
			
		},
		delConfirm:function(item){
			this.delFlag = true;
			this.curproduct = item;
		},
		delProduct:function(){
			var index = this.productList.indexOf(this.curproduct);
			this.productList.splice(index,1);
			this.delFlag = false;
		}
	}
});
Vue.filter('money',function(value,type) {
	return "¥"+value.toFixed(2)+type;
})