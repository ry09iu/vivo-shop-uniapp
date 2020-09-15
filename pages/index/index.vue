<template>
	<view class="home">
		<view class="banner">
			<u-swiper :list="banners" :border-radius="0" height="500" name="imageUrl" indicator-pos="bottomRight"></u-swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				banners: [],
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
	.u-swiper-indicator {
		bottom: 52rpx !important;
	}
</style>
