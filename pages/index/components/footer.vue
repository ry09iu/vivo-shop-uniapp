<template>
	<view class="footer-item">
		<image class="icon" :src="img"></image>
		<text class="title">{{title}}</text>
	</view>
</template>

<script>
	export default {
		name: 'BannerFooter',
		props: {
			title: {
				type: String,
				default: ''
			},
			img: {
				type: String,
				default: ''
			}
		},
		data() {
			return {}
		}
	}
</script>

<style lang="scss" scoped>
	.footer-item {
		display: flex;
		align-items: center;
		height: 68rpx;

		.icon {
			width: 30rpx;
			height: 30rpx;
		}

		.title {
			margin-left: 12rpx;
			color: $uni-text-color-assist;
			font-size: 20rpx;
		}
	}
</style>
