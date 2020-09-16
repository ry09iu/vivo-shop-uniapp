<template>
	<view class="menu">
		<view class="left">
			<image class="img" :src="info.img" mode="aspectFit"></image>
			<text class="title">{{info.title}}</text>
		</view>
		<view class="right">
			<u-icon name="arrow-right" color="#cfcfcf" size="26"></u-icon>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'MenuItem',
		props: {
			info: {
				type: Object,
				default: () => {}
			},
		},
	}
</script>

<style lang="scss" scoped>
	.menu {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 42rpx 0;
		border-bottom: 1px solid #f8f8f8;

		.left,
		.right {
			display: flex;
			align-items: center;
		}

		.img {
			width: 36rpx;
			height: 36rpx;
		}

		.title {
			margin-left: 20rpx;
		}

	}
</style>
