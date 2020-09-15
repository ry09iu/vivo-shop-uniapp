<template>
	<view class="home">
		<view class="banner">
			<u-swiper :list="banners" :border-radius="0" height="500" name="imageUrl" indicator-pos="bottomRight"></u-swiper>
			<view class="footer">
				<view v-for="(item,index) in footers" :key="index">
					<BannerFooter :title="item.title" :img="item.img" />
				</view>
			</view>
		</view>

		<view class="new-product">
			<text class="title">— 新品专区 —</text>
			<u-card :border="false" :foot-border-top="false" :padding="0" :show-head="false" :show-foot="false"
			 :head-border-bottom="false">
				<view class="" slot="body">
					<image class="img" :src="floorList[0] && floorList[0].positionList[0].imageUrl"></image>
				</view>
			</u-card>
		</view>

	</view>
</template>

<script>
	import BannerFooter from './components/footer.vue'
	export default {
		components: {
			BannerFooter
		},
		data() {
			return {
				title: 'Hello',
				banners: [],
				footers: [{
					img: '/static/images/home/banner/official.png',
					title: '官方正品',
				}, {
					img: '/static/images/home/banner/sf.png',
					title: '顺丰极速达',
				}, {
					img: '/static/images/home/banner/love.png',
					title: '全国联保',
				}, {
					img: '/static/images/home/banner/flash.png',
					title: '镭雕定制',
				}],
				floorList: []
			}
		},
		async onLoad() {
			this.banners = await this.$api('banners')
			console.log('this.banners',this.banners);
			this.floorList = await this.$api('floorList')
			console.log('this.floorList',this.floorList);
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.footer {
		display: flex;
		justify-content: space-around;
		padding: 0 48rpx;
		height: 68rpx;
		background: #fff;
	}

	.new-product {
		margin-top: 16rpx;
		padding-bottom: 20rpx;
		// height: 600rpx;
		background: #fff;
		text-align: center;

		.title {
			width: 100%;
			line-height: 84rpx;
			font-size: 30rpx;
		}

		.img {
			width: 100%;
			height: 500rpx;
		}
	}
</style>
