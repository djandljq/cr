new Vue({
	el:'.container',
	data:{
		limitNum:3,
		addressList:[],
		currentIndex:0,
		shoppingMounted:1,
		delFlag:false,
		editFlag:false,
		curaddress:''
	},
	mounted:function(){
		this.$nextTick(function(){
			this.getAddressList();
		})
	},
	computed:{
		filetrAddress:function(){
			return this.addressList.slice(0,this.limitNum);
		}
	},
	methods:{
		getAddressList:function(){
			var _this = this;
			this.$http.get("address.json").then(response=>{
				var res = response.data;
				if(res.status =='0'){
					_this.addressList = res.result;
				}
			})
		},
		loadMore:function(){
			this.limitNum = this.addressList.length;
		},
		setDefault:function(addressId){
			this.addressList.forEach(function(address,index){
				if(address.addressId == addressId){
					address.isDefault = true;
				}else{
					address.isDefault = false;
				}
			})
		},
		delConfirm:function(item){
			this.delFlag = true;
			this.curaddress = item;
		},
		delAddress:function(){
			var index = this.addressList.indexOf(this.curaddress);
			this.addressList.splice(index,1);
			this.delFlag = false;
		}
	}
})