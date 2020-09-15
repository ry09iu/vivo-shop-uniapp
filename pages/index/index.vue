<template>
	<view class="home" v-if="!isLoading">
		<view class="banner">
			<u-swiper :list="banners" :border-radius="0" height="500" name="imageUrl" indicator-pos="bottomRight"></u-swiper>
			<view class="footer">
				<view v-for="(item,index) in footers" :key="index">
					<banner-footer :title="item.title" :img="item.img" />
				</view>
			</view>
		</view>

		<view class="new-product">
			<text class="cate-title">— {{floorList[0].name}} —</text>
			<view class="wrap">
				<image class="img" mode="aspectFit" :src="floorList[0].positionList[0].imageUrl"></image>
			</view>
		</view>

		<view class="shopping-pool">
			<text class="cate-title">— {{floorList[1].name}} —</text>
			<view class="pool-swiper">
				<scroll-view class="scroll" scroll-x="true" scroll-with-animation>
					<view class="item-wrap" v-for="(item,index) in floorList[1].positionList" :key="item.spuId">
						<pool-item :info="item" />
					</view>
				</scroll-view>
			</view>
			<u-line class="u-line" color="#efefef"></u-line>
			<view class="pool-footer">
				<text class="more">查看更多 ></text>
			</view>
		</view>

		<view style="padding-bottom: 16rpx;">
			<card-list :info="floorList[2]"></card-list>

			<card-list :info="floorList[3]"></card-list>
		</view>
	</view>
	<view class="home-bg" v-else>
		<image class="loading-bg" src="../../static/images/home/vivo.png" mode="aspectFit"></image>
	</view>
</template>

<script>
	import BannerFooter from './components/footer.vue'
	import PoolItem from './components/pool.vue'
	import CardList from './components/card.vue'
	export default {
		components: {
			BannerFooter,
			PoolItem,
			CardList
		},
		data() {
			return {
				title: 'Hello',
				isLoading: false,
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
			this.isLoading = true;
			this.banners = await this.$api('banners')
			console.log('this.banners', this.banners);
			this.floorList = await this.$api('floorList')
			console.log('this.floorList', this.floorList);
			this.isLoading = false;
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
		background: #fff;
		text-align: center;

		.wrap {
			padding: 0 42rpx;

			.img {
				margin-top: -26rpx;
				width: 100%;
				height: 500rpx;
			}
		}
	}

	.cate-title {
		width: 100%;
		line-height: 84rpx;
		font-size: 30rpx;
	}

	.shopping-pool {
		margin-top: 16rpx;
		background: #fff;
		text-align: center;

		.pool-swiper {
			display: flex;
			margin-bottom: 20rpx;
			padding: 12rpx 42rpx 12rpx 32rpx;
		}

		.scroll {
			white-space: nowrap;
			overflow: hidden;
			width: 100%;
		}

		.item-wrap {
			margin-right: 10rpx;
			display: inline-block;
			width: 38vw;

			&:last-child {
				margin-right: 0;
			}
		}

		.pool-footer {
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;

			.more {
				color: $uni-text-color-assist;
				font-size: 24rpx;
			}
		}
	}

</style>
