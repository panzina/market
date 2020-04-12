<template>
	<view class="content">
		<swiper 
			indicator-dots
			circular
			autoplay
			interval="3000"
			class="swiper">
			<swiper-item v-for="(item,index) in images" :key="index" class="bg-one">
				<image :src="item.url"></image>
			</swiper-item>
		</swiper>
		
		<view class="nav">
			<view v-for="(item,index) in navList" :key="index" class="nav-item">
				<view class="iconfont" :class="item.icon"></view>
				<text>{{item.name}}</text>
			</view>
		</view>
		
		<view class="hot-goods">
			<view class="title">推荐商品</view>
			<view class="goods-list">
				<view class="goods-item" v-for="(item,index) in goodsList" :key="index">
					<image :src="item.img"></image>
					<view class="price">
						<text>¥{{item.price}}</text>
						<text>{{item.origin}}</text>
					</view>
					<view class="desc">{{item.desc}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				images:[
					{url:'../../static/images/bg_1.jpg'},
					{url:'../../static/images/bg_2.jpg'},
				],
				navList:[
					{name:"新鲜超市",icon:'icon-sousuo'},
					{name:"每日优鲜",icon:'icon-icon_attestation'},
					{name:"好吃好玩",icon:'icon-icon_camera'},
					{name:"休闲娱乐",icon:'icon-icon_certificate_fil'},
				],
				goodsList:[
					{img:'../../static/goods/good_1.jpg',desc:'好看的鲜花啦啦啦啦啦啦浏览啦啦啦啦',price:'234',origin:'432'},
					{img:'../../static/goods/good_2.jpg',desc:'阿拉斯加的鳕鱼正跃水而出啦啦啦啦啦浏览',price:'121',origin:'333'},
					{img:'../../static/goods/good_3.jpg',desc:'太平洋的海鸥振翅掠过城市上空',price:'76',origin:'432'},
					{img:'../../static/goods/good_4.jpg',desc:'今天也是个晴天哟~~~',price:'53',origin:'123'},
					{img:'../../static/goods/good_5.jpg',desc:'极圈上的夜空散漫了五彩斑斓啦啦啦啦极圈上的夜空散漫了五彩斑斓啦啦啦啦',price:'211',origin:'432'},
				]
			}
		},
		onLoad() {
			this.getListData()
		},
		methods: {
			getList(){	
				uni.request({
					url:'http://134.175.31.248:8080/diandianphp/public/admin/school/querySchoolList',
					data:{},
					method:'GET',
					header: {
					 'Content-Type': 'application/json'
					},
					success:(res) => {
						console.log(res)
					}
				})
			},
			async getListData(){
				const res = await this.$http({
					url:'/diandianphp/public/admin/school/querySchoolList'
				})
				//console.log(res)
			}
		}
	}
</script>

<style lang="scss">
	.swiper{
		width: 100%;
		height: 380upx;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.nav{
		display: flex;
		align-items: center;
		flex-direction: row;
		padding: 20upx 0;
		.nav-item{
			width: 25%;
			font-size: 30upx;
			display: flex;
			flex-direction: column;
			align-items: center;
			.iconfont{
				background-color: $theme-color;
				width: 120upx;
				height: 120upx;
				border-radius: 50%;
				text-align: center;
				line-height: 120upx;
				font-size: 60upx;
				color: #FFFFFF;
			}
			text{
				font-size: 30upx;
				margin-top: 20upx;
			}
		}
	}
	.hot-goods{
		background-color: #eee;
		overflow: hidden;
		.title{
			font-size: 40upx;
			color: $theme-color;
			letter-spacing: 30upx;
			text-align: center;
			background-color: #FFFFFF;
			padding: 20upx 0;
			margin: 7upx 0;
		}
	}
	.goods-list{
		padding: 0 15upx;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		margin-top: 16upx;
		.goods-item{
			width: 355upx;
			background-color: #FFFFFF;
			margin-bottom: 20upx;
			image{
				width: 355upx;
				height: 400upx;
			}
			.price{
				font-size: 34upx;
				color: $theme-color;
				font-weight: bold;
				padding:0 10upx;
				text:nth-child(2){
					font-size: 26upx;
					color: #afafaf;
					margin-left: 16upx;
					text-decoration: line-through;
				}
			}
			.desc{
				width: 100%; 
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				overflow: hidden;
				height: 110upx;
				padding: 10upx;
				box-sizing: border-box;
			}
		}
	}
	
</style>
