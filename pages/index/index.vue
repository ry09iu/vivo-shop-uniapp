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
				}]
			}
		},
		async onLoad() {
			this.banners = await this.$api('banners')
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
	}
</style>
