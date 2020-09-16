<template>
	<view class="grid-menu">
		<image class="img" :src="info.img" mode="aspectFit"></image>
		<text class="title">{{info.title}}</text>
	</view>
</template>

<script>
	export default {
		name: 'GridMenuItem',
		props: {
			info: {
				type: Object,
				default: () => {}
			},
		},
	}
</script>

<style lang="scss" scoped>
	.grid-menu {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		// padding: 12rpx 36rpx;

		.img {
			width: 68rpx;
			height: 68rpx;
		}
		
		.title {
			margin-top: 20rpx;
		}

	}
</style>
